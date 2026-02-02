"use client"

import React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate login delay
    setTimeout(() => {
      router.push("/")
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md border border-border shadow-lg">
        <CardHeader className="space-y-4 pb-6">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-primary rounded-sm" />
              <div className="w-4 h-4 bg-primary rounded-sm" />
            </div>
            <span className="text-2xl font-bold tracking-wide text-primary">COOMARBA</span>
          </div>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="usuario" className="text-foreground">
                Usuário
              </Label>
              <Input
                id="usuario"
                type="text"
                placeholder="Digite seu usuário"
                className="bg-background"
                defaultValue="admin"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="senha" className="text-foreground">
                Senha
              </Label>
              <Input
                id="senha"
                type="password"
                placeholder="Digite sua senha"
                className="bg-background"
                defaultValue="admin123"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={isLoading}
            >
              {isLoading ? "Entrando..." : "Entrar"}
            </Button>
          </form>

          <p className="text-xs text-center text-muted-foreground mt-6">
            Sistema de Gestão COOMARBA v1.0
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
