'use client'

import { useState } from 'react'
import { Bell, Tag, Package, TrendingUp, Handshake, Filter } from 'lucide-react'
import Link from 'next/link'

type Tipo = 'Promoção' | 'Novo Produto' | 'Engajamento Alto' | 'Parceria'
type Filtro = 'Todos' | Tipo

interface Alerta {
  id: number
  avatar: string
  concorrente: string
  tipo: Tipo
  descricao: string
  horario: string
  lido: boolean
}

const alertas: Alerta[] = [
  {
    id: 1,
    avatar: 'AH',
    concorrente: '@autohaus_sp',
    tipo: 'Promoção',
    descricao: 'IPVA 2025 pago pela concessionária + 0 de entrada no Corolla XEi. Oferta válida até este sábado.',
    horario: 'há 8 min',
    lido: false,
  },
  {
    id: 2,
    avatar: 'MB',
    concorrente: '@motors_brasil',
    tipo: 'Novo Produto',
    descricao: 'Chegou o novo Tracker Premier 2026 com tecnologia híbrida flex. Agende seu test drive gratuito.',
    horario: 'há 22 min',
    lido: false,
  },
  {
    id: 3,
    avatar: 'CP',
    concorrente: '@concessionaria_premium',
    tipo: 'Engajamento Alto',
    descricao: 'Vídeo de test drive do Jeep Compass atingiu 21K curtidas e 3K comentários em apenas 3 horas.',
    horario: 'há 45 min',
    lido: false,
  },
  {
    id: 4,
    avatar: 'TC',
    concorrente: '@topcar_dealer',
    tipo: 'Parceria',
    descricao: 'Financiamento 0% de entrada em parceria com Banco Itaú em todos os modelos até dezembro/2025.',
    horario: 'há 1h',
    lido: true,
  },
  {
    id: 5,
    avatar: 'AH',
    concorrente: '@autohaus_sp',
    tipo: 'Promoção',
    descricao: 'Feirão de Seminovos: 180 veículos revisados com garantia de 1 ano. Parcela a partir de R$ 799/mês.',
    horario: 'há 2h',
    lido: true,
  },
  {
    id: 6,
    avatar: 'VC',
    concorrente: '@velocar_oficial',
    tipo: 'Novo Produto',
    descricao: 'Lançamento exclusivo do SUV Peugeot E-3008 elétrico com autonomia de 520km e carregamento rápido.',
    horario: 'há 3h',
    lido: true,
  },
  {
    id: 7,
    avatar: 'MB',
    concorrente: '@motors_brasil',
    tipo: 'Engajamento Alto',
    descricao: 'Post de entrega de Honda Civic 2025 para cliente local viralizou com 18K compartilhamentos nas redes.',
    horario: 'há 4h',
    lido: true,
  },
  {
    id: 8,
    avatar: 'CP',
    concorrente: '@concessionaria_premium',
    tipo: 'Parceria',
    descricao: 'Parceria com empresa de blindagem premium: pacote com desconto de R$ 8.000 disponível para clientes.',
    horario: 'há 6h',
    lido: true,
  },
]

const tipoConfig: Record<Tipo, { color: string; bg: string; icon: React.ElementType; label: string }> = {
  'Promoção':         { color: '#1DB954', bg: 'rgba(29,185,84,0.12)',   icon: Tag,        label: 'Promoção' },
  'Novo Produto':     { color: '#3B82F6', bg: 'rgba(59,130,246,0.12)',  icon: Package,    label: 'Novo Produto' },
  'Engajamento Alto': { color: '#F59E0B', bg: 'rgba(245,158,11,0.12)',  icon: TrendingUp, label: 'Engajamento Alto' },
  'Parceria':         { color: '#A855F7', bg: 'rgba(168,85,247,0.12)',  icon: Handshake,  label: 'Parceria' },
}

const avatarColors: Record<string, string> = {
  CP: '#1DB954',
  AH: '#3B82F6',
  MB: '#F59E0B',
  VC: '#A855F7',
  TC: '#EC4899',
}

const filtros: { label: string; value: Filtro }[] = [
  { label: 'Todos', value: 'Todos' },
  { label: 'Promoções', value: 'Promoção' },
  { label: 'Novos Produtos', value: 'Novo Produto' },
  { label: 'Engajamento Alto', value: 'Engajamento Alto' },
  { label: 'Parcerias', value: 'Parceria' },
]

export default function AlertasPage() {
  const [filtroAtivo, setFiltroAtivo] = useState<Filtro>('Todos')
  const [lidos, setLidos] = useState<Set<number>>(
    new Set(alertas.filter((a) => a.lido).map((a) => a.id))
  )

  const visiveis = filtroAtivo === 'Todos'
    ? alertas
    : alertas.filter((a) => a.tipo === filtroAtivo)

  const naoLidos = alertas.filter((a) => !lidos.has(a.id)).length

  function marcarLido(id: number) {
    setLidos((prev) => new Set([...prev, id]))
  }

  return (
    <>
      <header className="sticky top-0 z-10 bg-[#09090B]/80 backdrop-blur-md border-b border-[#27272A] px-8 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-[#FAFAFA] text-xl font-bold leading-tight">Central de Alertas</h1>
          <p className="text-[#52525B] text-xs mt-0.5">
            {naoLidos > 0 ? `${naoLidos} alertas não lidos` : 'Todos os alertas lidos'}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/alertas"
            className="relative p-2 rounded-xl bg-[#18181B] border border-[#27272A] text-[#1DB954] hover:border-[#3F3F46] transition-all"
          >
            <Bell className="w-4 h-4" />
            {naoLidos > 0 && (
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#1DB954] rounded-full ring-2 ring-[#09090B]" />
            )}
          </Link>
        </div>
      </header>

      <div className="p-8 space-y-6">
        {/* Filtros */}
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-[#52525B] shrink-0" />
          <div className="flex items-center gap-2 flex-wrap">
            {filtros.map((f) => {
              const ativo = filtroAtivo === f.value
              const cfg = f.value !== 'Todos' ? tipoConfig[f.value as Tipo] : null
              return (
                <button
                  key={f.value}
                  onClick={() => setFiltroAtivo(f.value)}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all border"
                  style={
                    ativo && cfg
                      ? { backgroundColor: cfg.bg, color: cfg.color, borderColor: `${cfg.color}30` }
                      : ativo
                      ? { backgroundColor: 'rgba(250,250,250,0.08)', color: '#FAFAFA', borderColor: '#3F3F46' }
                      : { backgroundColor: 'transparent', color: '#71717A', borderColor: '#27272A' }
                  }
                >
                  {f.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Cards */}
        <div className="space-y-3">
          {visiveis.length === 0 && (
            <div className="bg-[#18181B] border border-[#27272A] rounded-2xl p-12 flex flex-col items-center gap-3">
              <Bell className="w-8 h-8 text-[#3F3F46]" />
              <p className="text-[#52525B] text-sm">Nenhum alerta neste filtro.</p>
            </div>
          )}
          {visiveis.map((alerta) => {
            const cfg = tipoConfig[alerta.tipo]
            const Icon = cfg.icon
            const cor = avatarColors[alerta.avatar] ?? '#71717A'
            const naolido = !lidos.has(alerta.id)
            return (
              <div
                key={alerta.id}
                onClick={() => marcarLido(alerta.id)}
                className={`bg-[#18181B] border rounded-2xl p-5 flex gap-4 cursor-pointer transition-all hover:border-[#3F3F46] group ${
                  naolido ? 'border-[#27272A]' : 'border-[#27272A]/50 opacity-70'
                }`}
              >
                {/* Ícone do tipo de alerta */}
                <div
                  className="w-16 h-16 rounded-xl shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: `${cfg.color}10`, border: `1px solid ${cfg.color}20` }}
                >
                  <Icon className="w-7 h-7" style={{ color: cfg.color }} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-[#09090B] text-[9px] font-bold shrink-0"
                        style={{ backgroundColor: cor }}
                      >
                        {alerta.avatar}
                      </div>
                      <span className="text-[#A1A1AA] text-xs font-medium">{alerta.concorrente}</span>
                      <span
                        className="inline-flex items-center text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap"
                        style={{ backgroundColor: cfg.bg, color: cfg.color }}
                      >
                        {alerta.tipo}
                      </span>
                      {naolido && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1DB954] shrink-0" />
                      )}
                    </div>
                    <span className="text-[#3F3F46] text-xs whitespace-nowrap shrink-0">
                      {alerta.horario}
                    </span>
                  </div>
                  <p className="text-[#FAFAFA] text-sm mt-2 leading-relaxed group-hover:text-white transition-colors">
                    {alerta.descricao}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
