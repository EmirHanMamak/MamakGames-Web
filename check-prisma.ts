import { prisma } from './src/lib/prisma'

async function check() {
  console.log('Prisma keys:', Object.keys(prisma))
}

check()
