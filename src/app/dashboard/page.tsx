import {
  Bell,
  Users,
  AlertTriangle,
  TrendingUp,
  FileText,
  Tag,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/ThemeToggle"

const metrics = [
  {
    label: "Lojas Monitoradas",
    value: "5",
    change: "+1 este mês",
    icon: Users,
    color: "#1DB954",
  },
  {
    label: "Posts Analisados Hoje",
    value: "314",
    change: "+47 nas últimas 2h",
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
    value: "4",
    change: "Hoje",
    icon: Tag,
    color: "#EC4899",
  },
]

const alerts = [
  {
    concorrente: "@growth_oficial",
    avatar: "GO",
    tipo: "Promoção",
    conteudo: "Whey Protein com 40% OFF — promoção relâmpago só hoje! Mais de 15 sabores disponíveis.",
    detectado: "há 9 min",
    status: "Novo",
  },
  {
    concorrente: "@integralmedica",
    avatar: "IM",
    tipo: "Novo Produto",
    conteudo: "Lançamento do novo pré-treino sabor tropical com blend exclusivo de cafeína e citrulina.",
    detectado: "há 27 min",
    status: "Novo",
  },
  {
    concorrente: "@probiotica_br",
    avatar: "PB",
    tipo: "Promoção",
    conteudo: "Feirão de creatina: 300g por R$ 59,90 com frete grátis para todo o Brasil.",
    detectado: "há 1h",
    status: "Visto",
  },
  {
    concorrente: "@darkness_suplementos",
    avatar: "DS",
    tipo: "Parceria",
    conteudo: "Parceria com atleta profissional de fisiculturismo para embaixador da nova linha hardcore.",
    detectado: "há 2h",
    status: "Visto",
  },
  {
    concorrente: "@max_titanium",
    avatar: "MT",
    tipo: "Engajamento Alto",
    conteudo: "Post viral de antes e depois com produto da marca: +28K curtidas em menos de 3h.",
    detectado: "há 3h",
    status: "Arquivado",
  },
]

const typeConfig: Record<string, { color: string }> = {
  "Promoção":         { color: "#1DB954" },
  "Novo Produto":     { color: "#3B82F6" },
  "Engajamento Alto": { color: "#F59E0B" },
  "Parceria":         { color: "#A855F7" },
}

const statusConfig: Record<string, { bg: string; text: string }> = {
  "Novo":      { bg: "rgba(29,185,84,0.12)",        text: "#1DB954" },
  "Visto":     { bg: "rgba(161,161,170,0.10)",       text: "var(--s-fg-4)" },
  "Arquivado": { bg: "var(--s-active-bg)",           text: "var(--s-fg-4)" },
}

export default function DashboardPage() {
  return (
    <>
      <header className="sticky top-0 z-10 bg-[var(--s-bg)]/80 backdrop-blur-md border-b border-[var(--s-border)] px-8 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-[var(--s-fg)] text-xl font-bold leading-tight">
            Bom dia, João 👋
          </h1>
          <p className="text-[var(--s-fg-4)] text-xs mt-0.5">
            Sexta-feira, 25 de abril de 2025
          </p>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/dashboard/alertas"
            className="relative p-2 rounded-xl bg-[var(--s-surface)] border border-[var(--s-border)] text-[var(--s-fg-3)] hover:text-[var(--s-fg)] hover:border-[var(--s-border-2)] transition-all"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#1DB954] rounded-full ring-2 ring-[var(--s-surface)]" />
          </Link>
        </div>
      </header>

      <div className="p-8 space-y-7">
        <div>
          <h2 className="text-[var(--s-fg)] font-semibold text-base">Visão geral</h2>
          <p className="text-[var(--s-fg-4)] text-xs mt-0.5">Resumo de hoje em tempo real</p>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {metrics.map((m) => {
            const Icon = m.icon
            return (
              <div
                key={m.label}
                className="bg-[var(--s-surface)] border border-[var(--s-border)] rounded-2xl p-5 hover:border-[var(--s-border-2)] transition-all group cursor-default"
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${m.color}14` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: m.color }} />
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--s-fg-5)] group-hover:text-[var(--s-fg-4)] transition-colors" />
                </div>
                <p className="text-[var(--s-fg-3)] text-xs font-medium leading-tight mb-1.5">
                  {m.label}
                </p>
                <p className="text-[var(--s-fg)] text-2xl font-bold tracking-tight">
                  {m.value}
                </p>
                <div className="flex items-center gap-1.5 mt-2">
                  <TrendingUp className="w-3 h-3" style={{ color: m.color }} />
                  <p className="text-[var(--s-fg-4)] text-xs">{m.change}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="bg-[var(--s-surface)] border border-[var(--s-border)] rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--s-border)]">
            <div>
              <h3 className="text-[var(--s-fg)] font-semibold text-sm">Últimos Alertas</h3>
              <p className="text-[var(--s-fg-4)] text-xs mt-0.5">
                Atividade recente das lojas de suplementos monitoradas
              </p>
            </div>
            <Link
              href="/dashboard/alertas"
              className="flex items-center gap-1 text-[#1DB954] text-xs font-semibold hover:underline"
            >
              Ver todos
              <ChevronRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--s-border)]">
                  {["Concorrente", "Tipo", "Conteúdo", "Detectado em", "Status"].map((col) => (
                    <th
                      key={col}
                      className="text-left text-[var(--s-fg-5)] text-[11px] font-semibold uppercase tracking-widest px-6 py-3"
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
                      className="border-b border-[var(--s-border)]/60 last:border-0 hover:bg-[var(--s-border)]/25 transition-colors cursor-default"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[var(--s-border)] border border-[var(--s-border-2)] flex items-center justify-center text-[var(--s-fg-2)] text-xs font-bold shrink-0">
                            {row.avatar}
                          </div>
                          <span className="text-[var(--s-fg)] text-sm font-medium">
                            {row.concorrente}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap"
                          style={{ backgroundColor: `${tc}14`, color: tc }}
                        >
                          {row.tipo}
                        </span>
                      </td>
                      <td className="px-6 py-4 max-w-xs">
                        <p className="text-[var(--s-fg-2)] text-sm truncate">{row.conteudo}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-[var(--s-fg-4)] text-sm whitespace-nowrap">
                          {row.detectado}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap"
                          style={{ backgroundColor: sc.bg, color: sc.text }}
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
    </>
  )
}
