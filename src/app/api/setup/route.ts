import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcryptjs from 'bcryptjs'

// Check if setup has been completed (any admin user exists)
async function isSetupComplete(): Promise<boolean> {
  try {
    const count = await prisma.adminUser.count()
    return count > 0
  } catch {
    // DB tables may not exist yet
    return false
  }
}

// GET: Check setup status
export async function GET() {
  try {
    const complete = await isSetupComplete()
    const hasSecret = !!process.env.NEXTAUTH_SECRET

    return NextResponse.json({
      setupComplete: complete,
      hasSecret,
      envStatus: {
        NEXTAUTH_SECRET: hasSecret ? 'set' : 'MISSING',
        NEXTAUTH_URL: process.env.NEXTAUTH_URL ? 'set' : 'MISSING',
        DATABASE_URL: process.env.DATABASE_URL ? 'set' : 'using default',
      },
    })
  } catch (err) {
    return NextResponse.json(
      { error: 'Database not initialized. Run prisma db push first.' },
      { status: 503 }
    )
  }
}

// POST: Create first admin user
export async function POST(request: NextRequest) {
  try {
    // Block setup if already completed
    const complete = await isSetupComplete()
    if (complete) {
      return NextResponse.json(
        { error: 'Setup already completed. Use the admin login instead.' },
        { status: 403 }
      )
    }

    const body = await request.json()
    const { email, password, name } = body

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required.' },
        { status: 400 }
      )
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters.' },
        { status: 400 }
      )
    }

    // Create admin user
    const hashedPassword = await bcryptjs.hash(password, 12)
    await prisma.adminUser.create({
      data: {
        email,
        password: hashedPassword,
        name: name || 'Admin',
      },
    })

    // Bootstrap default singleton settings rows if they don't exist
    const singletons = [
      { model: 'siteSettings', id: 'main' },
      { model: 'seoSettings', id: 'main' },
      { model: 'heroSection', id: 'main' },
      { model: 'aboutSection', id: 'main' },
      { model: 'contactInfo', id: 'main' },
      { model: 'footerSettings', id: 'main' },
    ]

    for (const s of singletons) {
      try {
        const model = (prisma as any)[s.model]
        if (model) {
          const existing = await model.findUnique({ where: { id: s.id } })
          if (!existing) {
            await model.create({ data: { id: s.id } })
          }
        }
      } catch {
        // Skip if model doesn't exist or creation fails
      }
    }

    return NextResponse.json({ success: true, message: 'Admin account created successfully.' })
  } catch (err: any) {
    console.error('Setup error:', err)
    if (err?.code === 'P2002') {
      return NextResponse.json(
        { error: 'An account with this email already exists.' },
        { status: 409 }
      )
    }
    return NextResponse.json(
      { error: 'Setup failed. Check server logs.' },
      { status: 500 }
    )
  }
}
