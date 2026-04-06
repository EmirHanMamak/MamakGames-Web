import { SessionProvider } from './SessionProvider'
import AdminLayoutClient from './AdminLayoutClient'

export const metadata = {
  title: 'Admin — Mamak Games',
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AdminLayoutClient>{children}</AdminLayoutClient>
    </SessionProvider>
  )
}
