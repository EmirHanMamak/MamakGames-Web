import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcryptjs from 'bcryptjs'

async function isSetupComplete(): Promise<boolean> {
  try {
    const count = await prisma.adminUser.count()
    return count > 0
  } catch {
    return false
  }
}

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
  } catch {
    return NextResponse.json(
      { error: 'Database not initialized. Run prisma db push first.' },
      { status: 503 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const complete = await isSetupComplete()
    if (complete) {
      return NextResponse.json(
        { error: 'Setup already completed. Use the admin login instead.' },
        { status: 403 }
      )
    }

    let body: Record<string, unknown>
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
    }

    const email = typeof body.email === 'string' ? body.email : ''
    const password = typeof body.password === 'string' ? body.password : ''
    const name = typeof body.name === 'string' ? body.name : 'Admin'

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

    const hashedPassword = await bcryptjs.hash(password, 12)
    await prisma.adminUser.create({
      data: { email, password: hashedPassword, name },
    })

    const singletons = [
      { model: 'siteSettings' as const, id: 'main' },
      { model: 'seoSettings' as const, id: 'main' },
      { model: 'heroSection' as const, id: 'main' },
      { model: 'aboutSection' as const, id: 'main' },
      { model: 'contactInfo' as const, id: 'main' },
      { model: 'footerSettings' as const, id: 'main' },
    ]

    for (const s of singletons) {
      try {
        const model = (prisma as unknown as Record<string, unknown>)[s.model]
        if (model && typeof model === 'object' && model !== null) {
          const findUnique = (model as Record<string, unknown>).findUnique as (args: unknown) => Promise<unknown>
          const create = (model as Record<string, unknown>).create as (args: unknown) => Promise<unknown>
          if (findUnique && create) {
            const existing = await findUnique({ where: { id: s.id } })
            if (!existing) await create({ data: { id: s.id } })
          }
        }
      } catch {
        // Skip if model doesn't exist or creation fails
      }
    }

    return NextResponse.json({ success: true, message: 'Admin account created successfully.' })
  } catch (err) {
    const errorCode = err && typeof err === 'object' && 'code' in err ? (err as { code: string }).code : undefined
    if (errorCode === 'P2002') {
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
