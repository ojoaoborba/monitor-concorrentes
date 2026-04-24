import {
  Bell,
  LayoutDashboard,
  Users,
  AlertTriangle,
  Settings,
  Radar,
  TrendingUp,
  FileText,
  Tag,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react"

const metrics = [
  {
    label: "Concorrentes Monitorados",
    value: "12",
    change: "+2 este mês",
    icon: Users,
    color: "#1DB954",
  },
  {
    label: "Posts Analisados Hoje",
    value: "347",
    change: "+58 nas últimas 2h",
    icon: FileText,
    color: "#3B82F6",
  },
  {
    label: "Alertas Detectados",
    value: "8",
    change: "3 não lidos",
    icon: AlertTriangle,
    color: "#F59E0B",
  },
  {
    label: "Promoções Identificadas",
    value: "5",
    change: "Hoje",
    icon: Tag,
    color: "#EC4899",
  },
]

const alerts = [
  {
    concorrente: "@loja_fitpro",
    avatar: "LF",
    tipo: "Promoção",
    conteudo: "50% OFF em todos os suplementos — apenas hoje!",
    detectado: "há 12 min",
    status: "Novo",
  },
  {
    concorrente: "@sportmax_br",
    avatar: "SM",
    tipo: "Novo Produto",
    conteudo: "Lançamento: Whey Protein Zero Lactose Chocolate",
    detectado: "há 38 min",
    status: "Novo",
  },
  {
    concorrente: "@nutrihouse",
    avatar: "NH",
    tipo: "Engajamento Alto",
    conteudo: "Post viral com +12k curtidas em menos de 1h",
    detectado: "há 1h",
    status: "Visto",
  },
  {
    concorrente: "@vida_saudavel_sp",
    avatar: "VS",
    tipo: "Promoção",
    conteudo: "Frete grátis para todo o Brasil no fim de semana",
    detectado: "há 2h",
    status: "Visto",
  },
  {
    concorrente: "@gym_foods",
    avatar: "GF",
    tipo: "Parceria",
    conteudo: "Anúncio de parceria com atleta profissional",
    detectado: "há 3h",
    status: "Arquivado",
  },
]

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Concorrentes", icon: Users, active: false },
  { label: "Alertas", icon: AlertTriangle, active: false },
  { label: "Configurações", icon: Settings, active: false },
]

const typeConfig: Record<string, { color: string; label: string }> = {
  "Promoção":        { color: "#1DB954", label: "Promoção" },
  "Novo Produto":    { color: "#3B82F6", label: "Novo Produto" },
  "Engajamento Alto":{ color: "#F59E0B", label: "Engajamento Alto" },
  "Parceria":        { color: "#A855F7", label: "Parceria" },
}

const statusConfig: Record<string, { bg: string; text: string }> = {
  "Novo":      { bg: "rgba(29,185,84,0.12)",  text: "#1DB954" },
  "Visto":     { bg: "rgba(161,161,170,0.10)", text: "#A1A1AA" },
  "Arquivado": { bg: "rgba(63,63,70,0.40)",   text: "#52525B" },
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#09090B] flex text-[#FAFAFA]">

      {/* ── Sidebar ── */}
      <aside className="w-64 shrink-0 bg-[#18181B] border-r border-[#27272A] flex flex-col fixed h-full z-20">

        {/* Logo */}
        <div className="flex items-center gap-3 px-5 py-5 border-b border-[#27272A]">
          <div className="w-9 h-9 bg-[#09090B] border border-[#27272A] rounded-xl flex items-center justify-center shadow-inner">
            <Radar className="w-5 h-5 text-[#1DB954]" strokeWidth={1.5} />
          </div>
          <span className="text-[#FAFAFA] font-bold text-lg tracking-tight">Sentinel</span>
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-3 py-4 space-y-0.5">
          <p className="text-[#3F3F46] text-[10px] font-semibold uppercase tracking-widest px-3 mb-3">
            Menu
          </p>
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.label}
                href="#"
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group ${
                  item.active
                    ? "bg-[#1DB954]/10 text-[#1DB954] border border-[#1DB954]/15"
                    : "text-[#71717A] hover:bg-[#27272A]/70 hover:text-[#FAFAFA]"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{item.label}</span>
                {item.active && (
                  <ChevronRight className="w-3 h-3 ml-auto opacity-60" />
                )}
              </a>
            )
          })}
        </nav>

        {/* User footer */}
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

      {/* ── Main content ── */}
      <main className="flex-1 ml-64 min-h-screen flex flex-col">

        {/* Header */}
        <header className="sticky top-0 z-10 bg-[#09090B]/80 backdrop-blur-md border-b border-[#27272A] px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-[#FAFAFA] text-xl font-bold leading-tight">
              Bom dia, João 👋
            </h1>
            <p className="text-[#52525B] text-xs mt-0.5">
              Quinta-feira, 24 de abril de 2025
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-xl bg-[#18181B] border border-[#27272A] text-[#71717A] hover:text-[#FAFAFA] hover:border-[#3F3F46] transition-all">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#1DB954] rounded-full ring-2 ring-[#09090B]" />
            </button>
          </div>
        </header>

        {/* Page body */}
        <div className="p-8 space-y-7">

          {/* Section label */}
          <div>
            <h2 className="text-[#FAFAFA] font-semibold text-base">Visão geral</h2>
            <p className="text-[#52525B] text-xs mt-0.5">Resumo de hoje em tempo real</p>
          </div>

          {/* ── Metric cards ── */}
          <div className="grid grid-cols-4 gap-4">
            {metrics.map((m) => {
              const Icon = m.icon
              return (
                <div
                  key={m.label}
                  className="bg-[#18181B] border border-[#27272A] rounded-2xl p-5 hover:border-[#3F3F46] transition-all group cursor-default"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${m.color}14` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: m.color }} />
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#3F3F46] group-hover:text-[#52525B] transition-colors" />
                  </div>
                  <p className="text-[#71717A] text-xs font-medium leading-tight mb-1.5">
                    {m.label}
                  </p>
                  <p className="text-[#FAFAFA] text-2xl font-bold tracking-tight">
                    {m.value}
                  </p>
                  <div className="flex items-center gap-1.5 mt-2">
                    <TrendingUp className="w-3 h-3" style={{ color: m.color }} />
                    <p className="text-[#52525B] text-xs">{m.change}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* ── Alerts table ── */}
          <div className="bg-[#18181B] border border-[#27272A] rounded-2xl overflow-hidden">
            {/* Table header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#27272A]">
              <div>
                <h3 className="text-[#FAFAFA] font-semibold text-sm">
                  Últimos Alertas
                </h3>
                <p className="text-[#52525B] text-xs mt-0.5">
                  Atividade recente dos seus concorrentes
                </p>
              </div>
              <a
                href="#"
                className="flex items-center gap-1 text-[#1DB954] text-xs font-semibold hover:underline"
              >
                Ver todos
                <ChevronRight className="w-3 h-3" />
              </a>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#27272A]">
                    {[
                      "Concorrente",
                      "Tipo",
                      "Conteúdo",
                      "Detectado em",
                      "Status",
                    ].map((col) => (
                      <th
                        key={col}
                        className="text-left text-[#3F3F46] text-[11px] font-semibold uppercase tracking-widest px-6 py-3"
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {alerts.map((row, i) => {
                    const tc = typeConfig[row.tipo]?.color ?? "#A1A1AA"
                    const sc = statusConfig[row.status] ?? statusConfig["Arquivado"]
                    return (
                      <tr
                        key={i}
                        className="border-b border-[#27272A]/60 last:border-0 hover:bg-[#27272A]/25 transition-colors cursor-default"
                      >
                        {/* Concorrente */}
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#27272A] border border-[#3F3F46] flex items-center justify-center text-[#A1A1AA] text-xs font-bold shrink-0">
                              {row.avatar}
                            </div>
                            <span className="text-[#FAFAFA] text-sm font-medium">
                              {row.concorrente}
                            </span>
                          </div>
                        </td>

                        {/* Tipo */}
                        <td className="px-6 py-4">
                          <span
                            className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap"
                            style={{
                              backgroundColor: `${tc}14`,
                              color: tc,
                            }}
                          >
                            {row.tipo}
                          </span>
                        </td>

                        {/* Conteúdo */}
                        <td className="px-6 py-4 max-w-xs">
                          <p className="text-[#A1A1AA] text-sm truncate">
                            {row.conteudo}
                          </p>
                        </td>

                        {/* Detectado em */}
                        <td className="px-6 py-4">
                          <span className="text-[#52525B] text-sm whitespace-nowrap">
                            {row.detectado}
                          </span>
                        </td>

                        {/* Status */}
                        <td className="px-6 py-4">
                          <span
                            className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap"
                            style={{
                              backgroundColor: sc.bg,
                              color: sc.text,
                            }}
                          >
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
