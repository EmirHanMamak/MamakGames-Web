import { prisma } from '@/lib/prisma'
import { SubmissionActions } from './SubmissionActions'

export const dynamic = 'force-dynamic'

export default async function SubmissionsPage() {
  const submissions = await prisma.contactSubmission.findMany({ orderBy: { createdAt: 'desc' } })

  return (
    <div className="space-y-6 max-w-4xl">
      <h2 className="text-xl font-semibold text-white">Contact Submissions</h2>

      {submissions.length === 0 ? (
        <div className="text-center py-12 text-white/30 text-sm">No submissions yet.</div>
      ) : (
        <div className="space-y-3">
          {submissions.map(s => (
            <div key={s.id} className={`p-5 rounded-xl border transition-all ${s.read ? 'bg-[#111] border-white/[0.06]' : 'bg-[#111] border-[#b30000]/20'}`}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-white">{s.name}</span>
                    {!s.read && <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#b30000]/20 text-[#ff4d4d] font-medium">New</span>}
                  </div>
                  <div className="text-xs text-white/30 mt-0.5">{s.email} {s.projectType && `· ${s.projectType}`}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-white/20">{new Date(s.createdAt).toLocaleDateString()}</span>
                  <SubmissionActions id={s.id} read={s.read} />
                </div>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">{s.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
