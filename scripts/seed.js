const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const email = 'admin@clinic.com';
  const existing = await prisma.user.findUnique({
    where: { email }
  });

  if (existing) {
    console.log('Admin user already exists!');
    return;
  }

  const hashedPassword = await bcrypt.hash('admin123', 10);
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name: 'Dr. Kavita Admin'
    }
  });

  console.log('Seeded default admin user:', user.email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
