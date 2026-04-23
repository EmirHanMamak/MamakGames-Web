import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import { EditGameForm } from './EditGameForm'

export const dynamic = 'force-dynamic'

export default async function EditGamePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const game = await prisma.game.findUnique({ where: { id }, include: { images: true } })
  if (!game) notFound()

  return (
    <div className="space-y-6 max-w-2xl">
      <h2 className="text-xl font-semibold text-white">Edit Game: {game.title}</h2>
      <EditGameForm game={game} />
    </div>
  )
}
