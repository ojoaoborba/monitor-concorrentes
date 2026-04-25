'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return <div style={{ width: 56, height: 28 }} />

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      title={isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
      className="relative flex items-center rounded-full border transition-all duration-300 shrink-0"
      style={{
        width: 56,
        height: 28,
        backgroundColor: isDark ? '#18181B' : '#E4E4E7',
        borderColor: isDark ? '#3F3F46' : '#D4D4D8',
      }}
    >
      {/* trilho com ícones */}
      <div className="absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none">
        <Sun  className="w-3.5 h-3.5" style={{ color: isDark ? '#52525B' : '#F59E0B' }} />
        <Moon className="w-3.5 h-3.5" style={{ color: isDark ? '#A1A1AA' : '#D4D4D8' }} />
      </div>
      {/* bolinha deslizante */}
      <span
        className="absolute rounded-full bg-white shadow-sm transition-all duration-300"
        style={{
          width: 20,
          height: 20,
          left: isDark ? 32 : 4,
        }}
      />
    </button>
  )
}
