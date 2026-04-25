'use client'

import { useState } from 'react'
import {
  Bell,
  User,
  Mail,
  BadgeCheck,
  MessageCircle,
  Tag,
  Package,
  TrendingUp,
  Handshake,
  CheckCircle2,
  AlertCircle,
  Lock,
  Edit3,
} from 'lucide-react'
import Link from 'next/link'
import { ThemeToggle } from '@/components/ThemeToggle'

interface Toggle {
  id: string
  label: string
  descricao: string
  icon: React.ElementType
  value: boolean
}

function ToggleSwitch({ on, onChange }: { on: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className="relative rounded-full transition-all shrink-0"
      style={{
        backgroundColor: on ? '#1DB954' : 'var(--s-border-2)',
        width: '40px',
        height: '22px',
      }}
    >
      <span
        className="absolute top-0.5 rounded-full bg-white transition-all"
        style={{
          width: '18px',
          height: '18px',
          left: on ? '20px' : '2px',
          transition: 'left 0.2s',
        }}
      />
    </button>
  )
}

export default function ConfiguracoesPage() {
  const [notifWhatsapp, setNotifWhatsapp] = useState(true)
  const [notifEmail, setNotifEmail] = useState(true)

  const [tiposAlerta, setTiposAlerta] = useState<Toggle[]>([
    {
      id: 'promocao',
      label: 'Promoções',
      descricao: 'Alertas quando concorrentes lançam promoções',
      icon: Tag,
      value: true,
    },
    {
      id: 'novo_produto',
      label: 'Novos Produtos',
      descricao: 'Alertas de lançamentos e novidades',
      icon: Package,
      value: true,
    },
    {
      id: 'engajamento',
      label: 'Engajamento Alto',
      descricao: 'Posts com desempenho acima da média',
      icon: TrendingUp,
      value: false,
    },
    {
      id: 'parceria',
      label: 'Parcerias',
      descricao: 'Novas parcerias e contratos de influencer',
      icon: Handshake,
      value: true,
    },
  ])

  function toggleTipo(id: string) {
    setTiposAlerta((prev) =>
      prev.map((t) => (t.id === id ? { ...t, value: !t.value } : t))
    )
  }

  return (
    <>
      <header className="sticky top-0 z-10 bg-[var(--s-bg)]/80 backdrop-blur-md border-b border-[var(--s-border)] px-8 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-[var(--s-fg)] text-xl font-bold leading-tight">Configurações</h1>
          <p className="text-[var(--s-fg-4)] text-xs mt-0.5">Gerencie sua conta e preferências</p>
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

      <div className="p-8 space-y-6 max-w-2xl">
        {/* ── Minha Conta ── */}
        <section className="bg-[var(--s-surface)] border border-[var(--s-border)] rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-[var(--s-border)] flex items-center gap-2">
            <User className="w-4 h-4 text-[#1DB954]" />
            <h2 className="text-[var(--s-fg)] font-semibold text-sm">Minha Conta</h2>
          </div>
          <div className="px-6 py-5 space-y-5">
            {/* Avatar + nome */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#1DB954]/15 border border-[#1DB954]/20 flex items-center justify-center text-[#1DB954] text-xl font-bold shrink-0">
                JL
              </div>
              <div>
                <p className="text-[var(--s-fg)] font-semibold">João Luiz</p>
                <p className="text-[var(--s-fg-4)] text-xs mt-0.5">joao@exemplo.com</p>
              </div>
              <span className="ml-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1DB954]/12 text-[#1DB954] text-xs font-semibold border border-[#1DB954]/20">
                <BadgeCheck className="w-3.5 h-3.5" />
                Plano Pro
              </span>
            </div>

            {/* Campos */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[var(--s-fg-3)] text-xs font-medium block mb-1.5">Nome</label>
                <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-[var(--s-bg)] border border-[var(--s-border)] text-[var(--s-fg)] text-sm">
                  <User className="w-3.5 h-3.5 text-[var(--s-fg-4)] shrink-0" />
                  <span>João Luiz</span>
                </div>
              </div>
              <div>
                <label className="text-[var(--s-fg-3)] text-xs font-medium block mb-1.5">E-mail</label>
                <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-[var(--s-bg)] border border-[var(--s-border)] text-[var(--s-fg)] text-sm">
                  <Mail className="w-3.5 h-3.5 text-[var(--s-fg-4)] shrink-0" />
                  <span>joao@exemplo.com</span>
                </div>
              </div>
            </div>

            {/* Ações */}
            <div className="flex items-center gap-3 pt-1">
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--s-border)] hover:bg-[var(--s-border-2)] text-[var(--s-fg)] text-sm font-medium transition-all border border-[var(--s-border-2)]">
                <Edit3 className="w-3.5 h-3.5" />
                Editar Perfil
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--s-border)] hover:bg-[var(--s-border-2)] text-[var(--s-fg)] text-sm font-medium transition-all border border-[var(--s-border-2)]">
                <Lock className="w-3.5 h-3.5" />
                Alterar Senha
              </button>
            </div>
          </div>
        </section>

        {/* ── Notificações ── */}
        <section className="bg-[var(--s-surface)] border border-[var(--s-border)] rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-[var(--s-border)] flex items-center gap-2">
            <Bell className="w-4 h-4 text-[#1DB954]" />
            <h2 className="text-[var(--s-fg)] font-semibold text-sm">Notificações</h2>
          </div>
          <div className="px-6 py-5 space-y-5">
            {/* Canais */}
            <div>
              <p className="text-[var(--s-fg-3)] text-xs font-semibold uppercase tracking-widest mb-3">
                Canais de envio
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#1DB954]/12 border border-[#1DB954]/20 flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-[#1DB954]" />
                    </div>
                    <div>
                      <p className="text-[var(--s-fg)] text-sm font-medium">WhatsApp</p>
                      <p className="text-[var(--s-fg-4)] text-xs">+55 (11) 99999-0001</p>
                    </div>
                  </div>
                  <ToggleSwitch on={notifWhatsapp} onChange={() => setNotifWhatsapp((v) => !v)} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#3B82F6]/12 border border-[#3B82F6]/20 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-[#3B82F6]" />
                    </div>
                    <div>
                      <p className="text-[var(--s-fg)] text-sm font-medium">E-mail</p>
                      <p className="text-[var(--s-fg-4)] text-xs">joao@exemplo.com</p>
                    </div>
                  </div>
                  <ToggleSwitch on={notifEmail} onChange={() => setNotifEmail((v) => !v)} />
                </div>
              </div>
            </div>

            {/* Tipos de alerta */}
            <div>
              <p className="text-[var(--s-fg-3)] text-xs font-semibold uppercase tracking-widest mb-3">
                Tipos de alerta
              </p>
              <div className="space-y-3">
                {tiposAlerta.map((t) => {
                  const Icon = t.icon
                  return (
                    <div key={t.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-[var(--s-fg-4)]" />
                        <div>
                          <p className="text-[var(--s-fg)] text-sm font-medium">{t.label}</p>
                          <p className="text-[var(--s-fg-4)] text-xs">{t.descricao}</p>
                        </div>
                      </div>
                      <ToggleSwitch on={t.value} onChange={() => toggleTipo(t.id)} />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── Integrações ── */}
        <section className="bg-[var(--s-surface)] border border-[var(--s-border)] rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-[var(--s-border)] flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#1DB954]" />
            <h2 className="text-[var(--s-fg)] font-semibold text-sm">Integrações</h2>
          </div>
          <div className="px-6 py-5 space-y-4">
            {/* WhatsApp */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-[var(--s-bg)] border border-[var(--s-border)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1DB954]/12 border border-[#1DB954]/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-[#1DB954]" />
                </div>
                <div>
                  <p className="text-[var(--s-fg)] text-sm font-semibold">WhatsApp</p>
                  <p className="text-[var(--s-fg-4)] text-xs">+55 (11) 99999-0001</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1DB954]" />
                <span className="text-[#1DB954] text-xs font-semibold">Conectado</span>
              </div>
            </div>

            {/* Instagram API */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-[var(--s-bg)] border border-[var(--s-border)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EC4899]/12 border border-[#EC4899]/20 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="#EC4899" />
                  </svg>
                </div>
                <div>
                  <p className="text-[var(--s-fg)] text-sm font-semibold">Instagram API</p>
                  <p className="text-[var(--s-fg-4)] text-xs">@minha_conta_oficial</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1DB954]" />
                <span className="text-[#1DB954] text-xs font-semibold">Conectada</span>
              </div>
            </div>

            {/* Adicionar integração */}
            <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-dashed border-[var(--s-border-2)] text-[var(--s-fg-4)] hover:text-[var(--s-fg-3)] hover:border-[var(--s-fg-4)] text-sm font-medium transition-all">
              <AlertCircle className="w-4 h-4" />
              Adicionar integração
            </button>
          </div>
        </section>
      </div>
    </>
  )
}
