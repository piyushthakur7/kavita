import bcrypt from 'bcryptjs';

// Hash password (Server node runtime only)
export async function hashPassword(password) {
  return bcrypt.hash(password, 10);
}

// Compare passwords (Server node runtime only)
export async function comparePasswords(password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword);
}
