'use client'

interface LoadingScreenProps {
  text?: string
}

export default function LoadingScreen({ text = 'MAMAK GAMES' }: LoadingScreenProps) {
  return (
    <div className="fixed inset-0 z-[100] bg-bg-base flex flex-col items-center justify-center">
      <div className="relative">
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-[0.2em] shimmer-text">
          {text}
        </h1>
        <div className="absolute -inset-8 bg-brand-primary/5 rounded-full blur-3xl" />
      </div>
      <div className="mt-8 w-32 h-[2px] bg-surface-alt rounded-full overflow-hidden">
        <div className="h-full bg-brand-primary rounded-full loading-progress" />
      </div>
    </div>
  )
}
