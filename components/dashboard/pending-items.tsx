"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Recycle, Clock } from "lucide-react"

const pendingItems = [
  {
    label: "Registros de Resíduos",
    count: 3,
    icon: Recycle,
  },
  {
    label: "Pontos de Controle",
    count: 4,
    icon: Clock,
  },
]

export function PendingItems() {
  return (
    <Card className="border border-border">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold">Pendências</CardTitle>
          <button className="text-sm text-primary hover:underline">Ver Todos</button>
        </div>
      </CardHeader>
      <CardContent className="pt-0 space-y-3">
        {pendingItems.map((item) => (
          <div 
            key={item.label} 
            className="flex items-center justify-between p-3 bg-background rounded-lg border border-border"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <item.icon className="h-4 w-4 text-accent-foreground" />
              </div>
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                {item.count}
              </span>
              <button className="text-sm text-primary hover:underline">Ver Todos</button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
