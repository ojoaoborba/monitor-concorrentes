'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon, Monitor } from 'lucide-react'
import { useEffect, useState } from 'react'

const ciclo = [
  { value: 'dark',   Icon: Moon,    proximo: 'Claro'   },
  { value: 'light',  Icon: Sun,     proximo: 'Sistema' },
  { value: 'system', Icon: Monitor, proximo: 'Escuro'  },
] as const

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return <div style={{ width: 36, height: 36 }} />

  const idx   = ciclo.findIndex((t) => t.value === theme)
  const atual = ciclo[idx >= 0 ? idx : 0]
  const prox  = ciclo[(idx + 1) % ciclo.length]
  const { Icon } = atual

  return (
    <button
      onClick={() => setTheme(prox.value)}
      title={`Mudar para tema ${prox.proximo}`}
      className="p-2 rounded-xl bg-[var(--s-surface)] border border-[var(--s-border)] text-[var(--s-fg-3)] hover:text-[var(--s-fg)] hover:border-[var(--s-border-2)] transition-all"
    >
      <Icon className="w-4 h-4" />
    </button>
  )
}
