export function getWhatsAppQuoteLink(productTitle: string, price: number, options?: { size?: string; color?: string; url?: string }) {
  const phoneNumber = "919310011931";
  const baseUrl = "https://wa.me/" + phoneNumber;
  
  let message = `Hello Brand Easy Art, I'm interested in getting a quote for:\n\n`;
  message += `*Product:* ${productTitle}\n`;
  message += `*Price:* ₹${price.toLocaleString()}\n`;
  
  if (options?.size) message += `*Size:* ${options.size}\n`;
  if (options?.color) message += `*Color:* ${options.color}\n`;
  if (options?.url) message += `\n*Product Link:* ${options.url}`;
  
  const encodedMessage = encodeURIComponent(message);
  return `${baseUrl}?text=${encodedMessage}`;
}
