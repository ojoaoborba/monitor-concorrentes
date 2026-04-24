import Sidebar from '@/components/Sidebar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#09090B] flex text-[#FAFAFA]">
      <Sidebar />
      <main className="flex-1 ml-64 min-h-screen flex flex-col">
        {children}
      </main>
    </div>
  )
}
