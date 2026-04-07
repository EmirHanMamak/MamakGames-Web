import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcryptjs from 'bcryptjs'
import { prisma } from '@/lib/prisma'

// Validate secret at module load time and log a clear warning
const authSecret = process.env.NEXTAUTH_SECRET
if (!authSecret && process.env.NODE_ENV === 'production') {
  console.error(
    '\n╔══════════════════════════════════════════════════════════════╗\n' +
    '║  FATAL: NEXTAUTH_SECRET is not set!                        ║\n' +
    '║  Auth endpoints will fail with 500 errors.                 ║\n' +
    '║  Set NEXTAUTH_SECRET in your environment variables.        ║\n' +
    '║  Generate one with: openssl rand -base64 32                ║\n' +
    '╚══════════════════════════════════════════════════════════════╝\n'
  )
}

export const authOptions: NextAuthOptions = {
  secret: authSecret,
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null
        try {
          const user = await prisma.adminUser.findUnique({
            where: { email: credentials.email },
          })
          if (!user) return null
          const isValid = await bcryptjs.compare(credentials.password, user.password)
          if (!isValid) return null
          return { id: user.id, email: user.email, name: user.name }
        } catch (err) {
          console.error('Auth DB error during login:', err)
          return null
        }
      },
    }),
  ],
  session: { strategy: 'jwt' },
  pages: { signIn: '/admin/login' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) { token.id = user.id }
      return token
    },
    async session({ session, token }) {
      if (session.user) { (session.user as any).id = token.id }
      return session
    },
  },
}
