'use client'

import { useState } from 'react'
import { Bell, Plus, Eye, Pause, Trash2, Play, Users } from 'lucide-react'
import Link from 'next/link'

type Status = 'Ativo' | 'Pausado'

interface Concorrente {
  id: number
  avatar: string
  nome: string
  handle: string
  seguidores: string
  posts: number
  ultimoAlerta: string
  status: Status
}

const inicial: Concorrente[] = [
  {
    id: 1,
    avatar: 'GO',
    nome: 'Growth Suplementos',
    handle: '@growth_oficial',
    seguidores: '312,5K',
    posts: 289,
    ultimoAlerta: 'há 9 min',
    status: 'Ativo',
  },
  {
    id: 2,
    avatar: 'IM',
    nome: 'Integral Médica',
    handle: '@integralmedica',
    seguidores: '891,2K',
    posts: 412,
    ultimoAlerta: 'há 27 min',
    status: 'Ativo',
  },
  {
    id: 3,
    avatar: 'PB',
    nome: 'Probiótica',
    handle: '@probiotica_br',
    seguidores: '445,7K',
    posts: 356,
    ultimoAlerta: 'há 1h',
    status: 'Ativo',
  },
  {
    id: 4,
    avatar: 'DS',
    nome: 'Darkness Suplementos',
    handle: '@darkness_suplementos',
    seguidores: '178,3K',
    posts: 204,
    ultimoAlerta: 'há 4h',
    status: 'Pausado',
  },
  {
    id: 5,
    avatar: 'MT',
    nome: 'Max Titanium',
    handle: '@max_titanium',
    seguidores: '534,9K',
    posts: 321,
    ultimoAlerta: 'há 2h',
    status: 'Ativo',
  },
]

const avatarColors: Record<string, string> = {
  GO: '#1DB954',
  IM: '#3B82F6',
  PB: '#F59E0B',
  DS: '#A855F7',
  MT: '#EC4899',
}

export default function ConcorrentesPage() {
  const [lista, setLista] = useState<Concorrente[]>(inicial)

  function toggleStatus(id: number) {
    setLista((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, status: c.status === 'Ativo' ? 'Pausado' : 'Ativo' } : c
      )
    )
  }

  function excluir(id: number) {
    setLista((prev) => prev.filter((c) => c.id !== id))
  }

  return (
    <>
      <header className="sticky top-0 z-10 bg-[#09090B]/80 backdrop-blur-md border-b border-[#27272A] px-8 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-[#FAFAFA] text-xl font-bold leading-tight">Concorrentes</h1>
          <p className="text-[#52525B] text-xs mt-0.5">
            {lista.length} perfis sendo monitorados
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1DB954] hover:bg-[#1DB954]/90 text-[#09090B] text-sm font-semibold transition-all">
            <Plus className="w-4 h-4" />
            Adicionar Concorrente
          </button>
          <Link
            href="/dashboard/alertas"
            className="relative p-2 rounded-xl bg-[#18181B] border border-[#27272A] text-[#71717A] hover:text-[#FAFAFA] hover:border-[#3F3F46] transition-all"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#1DB954] rounded-full ring-2 ring-[#09090B]" />
          </Link>
        </div>
      </header>

      <div className="p-8">
        <div className="bg-[#18181B] border border-[#27272A] rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-[#27272A]">
            <h3 className="text-[#FAFAFA] font-semibold text-sm">Perfis Monitorados</h3>
            <p className="text-[#52525B] text-xs mt-0.5">
              Gerencie suas lojas de suplementos concorrentes e veja o status de cada monitoramento
            </p>
          </div>

          {lista.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#27272A] flex items-center justify-center">
                <Users className="w-7 h-7 text-[#3F3F46]" />
              </div>
              <p className="text-[#52525B] text-sm">Nenhuma loja de suplementos cadastrada.</p>
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1DB954] hover:bg-[#1DB954]/90 text-[#09090B] text-sm font-semibold transition-all">
                <Plus className="w-4 h-4" />
                Adicionar Concorrente
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#27272A]">
                    {['Perfil', 'Seguidores', 'Posts Monitorados', 'Último Alerta', 'Status', 'Ações'].map(
                      (col) => (
                        <th
                          key={col}
                          className="text-left text-[#3F3F46] text-[11px] font-semibold uppercase tracking-widest px-6 py-3"
                        >
                          {col}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {lista.map((c) => {
                    const cor = avatarColors[c.avatar] ?? '#71717A'
                    const ativo = c.status === 'Ativo'
                    return (
                      <tr
                        key={c.id}
                        className="border-b border-[#27272A]/60 last:border-0 hover:bg-[#27272A]/20 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-9 h-9 rounded-full flex items-center justify-center text-[#09090B] text-xs font-bold shrink-0"
                              style={{ backgroundColor: cor }}
                            >
                              {c.avatar}
                            </div>
                            <div>
                              <p className="text-[#FAFAFA] text-sm font-semibold">{c.nome}</p>
                              <p className="text-[#52525B] text-xs">{c.handle}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-[#A1A1AA] text-sm">{c.seguidores}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-[#A1A1AA] text-sm">{c.posts}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-[#52525B] text-sm whitespace-nowrap">
                            {c.ultimoAlerta}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap"
                            style={{
                              backgroundColor: ativo
                                ? 'rgba(29,185,84,0.12)'
                                : 'rgba(161,161,170,0.10)',
                              color: ativo ? '#1DB954' : '#71717A',
                            }}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: ativo ? '#1DB954' : '#52525B' }}
                            />
                            {c.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <button
                              title="Ver detalhes"
                              className="p-1.5 rounded-lg text-[#52525B] hover:text-[#1DB954] hover:bg-[#1DB954]/10 transition-all"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              title={ativo ? 'Pausar' : 'Reativar'}
                              onClick={() => toggleStatus(c.id)}
                              className="p-1.5 rounded-lg text-[#52525B] hover:text-[#F59E0B] hover:bg-[#F59E0B]/10 transition-all"
                            >
                              {ativo ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                            </button>
                            <button
                              title="Excluir"
                              onClick={() => excluir(c.id)}
                              className="p-1.5 rounded-lg text-[#52525B] hover:text-[#EF4444] hover:bg-[#EF4444]/10 transition-all"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
