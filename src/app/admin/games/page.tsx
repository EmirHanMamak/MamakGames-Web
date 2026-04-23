import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import Image from 'next/image'
import { Plus } from 'lucide-react'
import { GameActions } from './GameActions'

export const dynamic = 'force-dynamic'

export default async function GamesListPage() {
  const games = await prisma.game.findMany({ orderBy: { sortOrder: 'asc' } })

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Games</h2>
        <Link href="/admin/games/new" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#b30000] hover:bg-[#cc0000] text-white text-sm font-semibold transition-colors">
          <Plus size={16} /> Add Game
        </Link>
      </div>

      <div className="space-y-2">
        {games.length === 0 && (
          <div className="text-center py-12 text-white/30 text-sm">No games yet. Add your first game above.</div>
        )}
        {games.map((game) => (
          <div key={game.id} className="flex items-center gap-4 px-4 py-3 rounded-xl bg-[#111] border border-white/[0.06] hover:border-white/[0.1] transition-all">
            {/* Cover */}
            <div className="relative w-16 h-12 rounded-lg overflow-hidden bg-white/[0.03] flex-shrink-0">
              {game.coverImage ? (
                <Image src={game.coverImage} alt={game.title} fill className="object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white/20 text-xs">N/A</div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-white truncate">{game.title}</span>
                {game.genre && <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.06] text-white/40">{game.genre}</span>}
              </div>
              <div className="text-xs text-white/30 truncate">{game.shortDescription}</div>
            </div>

            {/* Status + Actions */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <span className={`text-[11px] px-2.5 py-1 rounded-full font-medium ${game.published ? 'bg-green-500/10 text-green-400' : 'bg-white/5 text-white/30'}`}>
                {game.published ? 'Published' : 'Draft'}
              </span>
              {game.featured && <span className="text-[11px] px-2.5 py-1 rounded-full bg-yellow-500/10 text-yellow-400 font-medium">Featured</span>}
              <GameActions gameId={game.id} published={game.published} featured={game.featured} />
              <Link href={`/admin/games/${game.id}`} className="text-xs text-white/40 hover:text-white transition-colors">Edit</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
