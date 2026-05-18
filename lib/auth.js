const SECRET_KEY = process.env.JWT_SECRET || 'resonance-kavita-secret-token-key-2026';

// Helper to get CryptoKey for Web Crypto HMAC
async function getCryptoKey() {
  const encoder = new TextEncoder();
  return crypto.subtle.importKey(
    'raw',
    encoder.encode(SECRET_KEY),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify']
  );
}

// Signs a JWT securely using native Web Crypto (HS256)
export async function signJWT(payload) {
  const encoder = new TextEncoder();
  const header = { alg: 'HS256', typ: 'JWT' };
  
  // Base64Url encode utility
  const base64UrlEncode = (obj) => {
    const jsonStr = JSON.stringify(obj);
    const base64 = btoa(encodeURIComponent(jsonStr).replace(/%([0-9A-F]{2})/g, (match, p1) => {
      return String.fromCharCode(parseInt(p1, 16));
    }));
    return base64.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  };

  const encodedHeader = base64UrlEncode(header);
  
  // Set expiration to 7 days
  const exp = Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60;
  const encodedPayload = base64UrlEncode({ ...payload, exp });
  
  const dataToSign = `${encodedHeader}.${encodedPayload}`;
  const key = await getCryptoKey();
  
  const signature = await crypto.subtle.sign(
    'HMAC',
    key,
    encoder.encode(dataToSign)
  );
  
  const signatureArray = Array.from(new Uint8Array(signature));
  const signatureBase64 = btoa(String.fromCharCode.apply(null, signatureArray));
  const encodedSignature = signatureBase64.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  
  return `${dataToSign}.${encodedSignature}`;
}

// Verifies a JWT securely using native Web Crypto (HS256)
export async function verifyJWT(token) {
  if (!token) return null;
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  
  const [encodedHeader, encodedPayload, encodedSignature] = parts;
  const encoder = new TextEncoder();
  const dataToSign = `${encodedHeader}.${encodedPayload}`;
  
  try {
    const key = await getCryptoKey();
    
    // Base64Url decode signature
    const signatureStr = encodedSignature.replace(/-/g, '+').replace(/_/g, '/');
    const signatureBytes = Uint8Array.from(atob(signatureStr), c => c.charCodeAt(0));
    
    const isValid = await crypto.subtle.verify(
      'HMAC',
      key,
      signatureBytes,
      encoder.encode(dataToSign)
    );
    
    if (!isValid) return null;
    
    // Base64Url decode payload
    const payloadStr = atob(encodedPayload.replace(/-/g, '+').replace(/_/g, '/'));
    const payload = JSON.parse(decodeURIComponent(payloadStr.split('').map(c => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join('')));
    
    // Check expiry
    if (payload.exp && Date.now() / 1000 > payload.exp) {
      return null;
    }
    
    return payload;
  } catch (err) {
    console.error("JWT Verification failed:", err);
    return null;
  }
}
