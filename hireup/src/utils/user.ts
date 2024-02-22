import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function findOrCreateUser(email: string) {
  // Attempt to find a user by their email
  let user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  // If the user doesn't exist, create a new user
  if (!user) {
    user = await prisma.user.create({
      data: {
        email: email,
      },
    });
    console.log('User created:', user);
  } else {
    console.log('User already exists:', user);
  }

  return user;
}

// Example usage
const email = 'test@example.com';
const name = 'Test User';

findOrCreateUser(email)
  .then(user => console.log('User check/creation result:', user))
  .catch(error => console.error('Error in findOrCreateUser:', error));
