'use client'

import { toggleGamePublish, toggleGameFeature, deleteGame } from '@/lib/actions'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function GameActions({ gameId, published, featured }: { gameId: string; published: boolean; featured: boolean }) {
  const router = useRouter()
  const [confirming, setConfirming] = useState(false)
  const [error, setError] = useState('')

  const handleToggle = async () => {
    await toggleGamePublish(gameId)
    router.refresh()
  }

  const handleDelete = async () => {
    setError('')
    const result = await deleteGame(gameId)
    if (result.success) {
      setConfirming(false)
      router.refresh()
    } else {
      setError(result.error || 'Failed to delete game')
      setConfirming(false)
    }
  }

  const handleFeatureToggle = async () => {
    await toggleGameFeature(gameId)
    router.refresh()
  }

  if (confirming) {
    return (
      <div className="flex items-center gap-1.5">
        <button onClick={handleDelete} className="px-2.5 py-1 rounded bg-red-600 text-[11px] text-white font-medium hover:bg-red-500">Delete</button>
        <button onClick={() => setConfirming(false)} className="px-2.5 py-1 rounded bg-white/10 text-[11px] text-white/60 hover:bg-white/20">Cancel</button>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-end gap-1">
      <div className="flex items-center gap-2">
        <button onClick={handleToggle} className="text-xs text-white/30 hover:text-white transition-colors">
          {published ? 'Unpublish' : 'Publish'}
        </button>
        <button onClick={handleFeatureToggle} className="text-xs text-yellow-400/50 hover:text-yellow-400 transition-colors">
          {featured ? 'Unfeature' : 'Feature'}
        </button>
        <button onClick={() => setConfirming(true)} className="text-xs text-red-400/50 hover:text-red-400 transition-colors">
          Delete
        </button>
      </div>
      {error && <span className="text-[10px] text-red-400">{error}</span>}
    </div>
  )
}
