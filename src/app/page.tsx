"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Radar } from "lucide-react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#09090B] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(29,185,84,0.08),transparent)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1DB954]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-md z-10">
        {/* Logo */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 bg-[#18181B] border border-[#27272A] rounded-2xl flex items-center justify-center mb-5 shadow-xl shadow-black/50">
            <Radar className="w-8 h-8 text-[#1DB954]" strokeWidth={1.5} />
          </div>
          <h1 className="text-[#FAFAFA] text-3xl font-bold tracking-tight">Sentinel</h1>
          <p className="text-[#A1A1AA] text-sm mt-2 text-center leading-relaxed">
            Monitore seus concorrentes em tempo real
          </p>
        </div>

        {/* Card */}
        <div className="bg-[#18181B] border border-[#27272A] rounded-2xl p-8 shadow-2xl shadow-black/60">
          <h2 className="text-[#FAFAFA] text-lg font-semibold mb-6">
            Acesse sua conta
          </h2>

          <div className="space-y-5">
            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-[#A1A1AA] text-sm font-medium block">
                E-mail
              </label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full bg-[#09090B] border border-[#27272A] text-[#FAFAFA] placeholder-[#52525B] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1DB954] focus:ring-2 focus:ring-[#1DB954]/10 transition-all"
              />
            </div>

            {/* Senha */}
            <div className="space-y-1.5">
              <label className="text-[#A1A1AA] text-sm font-medium block">
                Senha
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full bg-[#09090B] border border-[#27272A] text-[#FAFAFA] placeholder-[#52525B] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1DB954] focus:ring-2 focus:ring-[#1DB954]/10 transition-all pr-11"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#52525B] hover:text-[#A1A1AA] transition-colors"
                >
                  {showPassword
                    ? <EyeOff className="w-4 h-4" />
                    : <Eye className="w-4 h-4" />
                  }
                </button>
              </div>
            </div>

            <div className="flex justify-end -mt-2">
              <a href="#" className="text-[#1DB954] text-xs hover:underline font-medium">
                Esqueci minha senha
              </a>
            </div>

            <button
              type="button"
              onClick={() => router.push("/dashboard")}
              className="w-full bg-[#1DB954] hover:bg-[#18a34a] active:bg-[#158a40] text-black font-semibold py-3 rounded-xl text-sm transition-all shadow-lg shadow-[#1DB954]/20 hover:shadow-[#1DB954]/30"
            >
              Entrar na plataforma
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-[#27272A] text-center">
            <p className="text-[#52525B] text-xs">
              Não tem uma conta?{" "}
              <a href="#" className="text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors font-medium">
                Fale com o comercial
              </a>
            </p>
          </div>
        </div>

        <p className="text-center text-[#3F3F46] text-xs mt-8">
          © 2025 Sentinel · Monitoramento inteligente de concorrentes
        </p>
      </div>
    </div>
  )
}
