import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'COOMARBA - Sistema de Gestão de Cooperativa',
  description: 'Sistema de gestão para cooperativa de reciclagem - Controle de rotas, resíduos e ponto',
  icons: {
    icon: [
      {
        url: '/coomarba.png',
        media: '(prefers-color-scheme: light)',
      }
    ]  
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
