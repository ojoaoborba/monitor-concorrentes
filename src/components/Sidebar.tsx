'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Users, AlertTriangle, Settings, Radar, ChevronRight } from 'lucide-react'

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
  { label: 'Concorrentes', icon: Users, href: '/dashboard/concorrentes' },
  { label: 'Alertas', icon: AlertTriangle, href: '/dashboard/alertas' },
  { label: 'Configurações', icon: Settings, href: '/dashboard/configuracoes' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 shrink-0 bg-[#18181B] border-r border-[#27272A] flex flex-col fixed h-full z-20">
      <div className="flex items-center gap-3 px-5 py-5 border-b border-[#27272A]">
        <div className="w-9 h-9 bg-[#09090B] border border-[#27272A] rounded-xl flex items-center justify-center shadow-inner">
          <Radar className="w-5 h-5 text-[#1DB954]" strokeWidth={1.5} />
        </div>
        <span className="text-[#FAFAFA] font-bold text-lg tracking-tight">Sentinel</span>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-0.5">
        <p className="text-[#3F3F46] text-[10px] font-semibold uppercase tracking-widest px-3 mb-3">
          Menu
        </p>
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive =
            item.href === '/dashboard'
              ? pathname === '/dashboard'
              : pathname.startsWith(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? 'bg-[#1DB954]/10 text-[#1DB954] border border-[#1DB954]/15'
                  : 'text-[#71717A] hover:bg-[#27272A]/70 hover:text-[#FAFAFA] border border-transparent'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{item.label}</span>
              {isActive && <ChevronRight className="w-3 h-3 ml-auto opacity-60" />}
            </Link>
          )
        })}
      </nav>

      <div className="px-4 pb-5 pt-4 border-t border-[#27272A]">
        <div className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-[#27272A]/60 transition cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-[#1DB954]/15 border border-[#1DB954]/20 flex items-center justify-center text-[#1DB954] text-xs font-bold shrink-0">
            JL
          </div>
          <div className="min-w-0">
            <p className="text-[#FAFAFA] text-xs font-semibold truncate">João Luiz</p>
            <p className="text-[#52525B] text-[10px]">Plano Pro</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
