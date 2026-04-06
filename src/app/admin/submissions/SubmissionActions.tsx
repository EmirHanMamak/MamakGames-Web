'use client'

import { markSubmissionRead, deleteSubmission } from '@/lib/actions'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function SubmissionActions({ id, read }: { id: string; read: boolean }) {
  const router = useRouter()
  const [confirming, setConfirming] = useState(false)

  const handleRead = async () => {
    await markSubmissionRead(id)
    router.refresh()
  }

  const handleDelete = async () => {
    await deleteSubmission(id)
    router.refresh()
  }

  return (
    <div className="flex items-center gap-2">
      {!read && (
        <button onClick={handleRead} className="text-[11px] text-white/30 hover:text-white transition-colors">
          Mark Read
        </button>
      )}
      {confirming ? (
        <div className="flex gap-1">
          <button onClick={handleDelete} className="px-2 py-1 rounded bg-red-600 text-[10px] text-white">Delete</button>
          <button onClick={() => setConfirming(false)} className="px-2 py-1 rounded bg-white/10 text-[10px] text-white/60">Cancel</button>
        </div>
      ) : (
        <button onClick={() => setConfirming(true)} className="text-[11px] text-red-400/50 hover:text-red-400 transition-colors">Delete</button>
      )}
    </div>
  )
}
