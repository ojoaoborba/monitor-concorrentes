'use client'

import { useState } from 'react'
import { Bell, Tag, Package, TrendingUp, Handshake, Filter } from 'lucide-react'
import Link from 'next/link'
import { ThemeToggle } from '@/components/ThemeToggle'

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
    avatar: 'GO',
    concorrente: '@growth_oficial',
    tipo: 'Promoção',
    descricao: 'Whey Protein com 40% OFF — promoção relâmpago válida só por hoje. Mais de 15 sabores disponíveis no site.',
    horario: 'há 8 min',
    lido: false,
  },
  {
    id: 2,
    avatar: 'IM',
    concorrente: '@integralmedica',
    tipo: 'Novo Produto',
    descricao: 'Lançamento do novo pré-treino sabor tropical com blend exclusivo de cafeína, beta-alanina e citrulina. Disponível a partir de sexta.',
    horario: 'há 22 min',
    lido: false,
  },
  {
    id: 3,
    avatar: 'PB',
    concorrente: '@probiotica_br',
    tipo: 'Promoção',
    descricao: 'Feirão de Creatina: embalagem de 300g por R$ 59,90 com frete grátis para todo o Brasil. Estoque limitado.',
    horario: 'há 45 min',
    lido: false,
  },
  {
    id: 4,
    avatar: 'DS',
    concorrente: '@darkness_suplementos',
    tipo: 'Parceria',
    descricao: 'Parceria oficial com atleta profissional de fisiculturismo para embaixador da nova linha hardcore. Post com 42K impressões.',
    horario: 'há 1h',
    lido: true,
  },
  {
    id: 5,
    avatar: 'GO',
    concorrente: '@growth_oficial',
    tipo: 'Engajamento Alto',
    descricao: 'Post viral de antes e depois com produto da marca alcançou 28K curtidas e 4,1K comentários em menos de 3 horas.',
    horario: 'há 2h',
    lido: true,
  },
  {
    id: 6,
    avatar: 'MT',
    concorrente: '@max_titanium',
    tipo: 'Novo Produto',
    descricao: 'Lançamento da nova linha de albumina sabor chocolate belga com 0g de açúcar. Campanha ativa com influencers fitness.',
    horario: 'há 3h',
    lido: true,
  },
  {
    id: 7,
    avatar: 'IM',
    concorrente: '@integralmedica',
    tipo: 'Engajamento Alto',
    descricao: 'Reels de receita com Whey Protein viralizou: 89K visualizações e 6,3K compartilhamentos nos stories em menos de 1 dia.',
    horario: 'há 4h',
    lido: true,
  },
  {
    id: 8,
    avatar: 'PB',
    concorrente: '@probiotica_br',
    tipo: 'Parceria',
    descricao: 'Parceria com rede nacional de academias: desconto exclusivo de 20% para alunos matriculados via cupom especial.',
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
  GO: '#1DB954',
  IM: '#3B82F6',
  PB: '#F59E0B',
  DS: '#A855F7',
  MT: '#EC4899',
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
      <header className="sticky top-0 z-10 bg-[var(--s-bg)]/80 backdrop-blur-md border-b border-[var(--s-border)] px-8 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-[var(--s-fg)] text-xl font-bold leading-tight">Central de Alertas</h1>
          <p className="text-[var(--s-fg-4)] text-xs mt-0.5">
            {naoLidos > 0 ? `${naoLidos} alertas não lidos` : 'Todos os alertas lidos'}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/dashboard/alertas"
            className="relative p-2 rounded-xl bg-[var(--s-surface)] border border-[var(--s-border)] text-[#1DB954] hover:border-[var(--s-border-2)] transition-all"
          >
            <Bell className="w-4 h-4" />
            {naoLidos > 0 && (
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#1DB954] rounded-full ring-2 ring-[var(--s-surface)]" />
            )}
          </Link>
        </div>
      </header>

      <div className="p-8 space-y-6">
        {/* Filtros */}
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-[var(--s-fg-4)] shrink-0" />
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
                      ? { backgroundColor: 'var(--s-active-bg)', color: 'var(--s-fg)', borderColor: 'var(--s-border-2)' }
                      : { backgroundColor: 'transparent', color: 'var(--s-fg-3)', borderColor: 'var(--s-border)' }
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
            <div className="bg-[var(--s-surface)] border border-[var(--s-border)] rounded-2xl p-12 flex flex-col items-center gap-3">
              <Bell className="w-8 h-8 text-[var(--s-fg-5)]" />
              <p className="text-[var(--s-fg-4)] text-sm">Nenhum alerta neste filtro.</p>
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
                className={`bg-[var(--s-surface)] border rounded-2xl p-5 flex gap-4 cursor-pointer transition-all hover:border-[var(--s-border-2)] group ${
                  naolido ? 'border-[var(--s-border)]' : 'border-[var(--s-border)]/50 opacity-70'
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
                      <span className="text-[var(--s-fg-2)] text-xs font-medium">{alerta.concorrente}</span>
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
                    <span className="text-[var(--s-fg-5)] text-xs whitespace-nowrap shrink-0">
                      {alerta.horario}
                    </span>
                  </div>
                  <p className="text-[var(--s-fg)] text-sm mt-2 leading-relaxed group-hover:text-[var(--s-fg)] transition-colors">
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
