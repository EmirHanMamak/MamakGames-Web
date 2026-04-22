import { prisma } from './src/lib/prisma'

async function check() {
  if (process.env.NODE_ENV !== 'production') {
    console.log('Prisma keys:', Object.keys(prisma))
  }
}

check()
