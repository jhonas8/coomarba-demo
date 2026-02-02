"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const activeRoutes = [
  {
    id: 21,
    driver: "João",
    status: "Em Andamento",
    progress: "3/6 paradas concluídas",
  },
  {
    id: 20,
    driver: "Marcos",
    status: "Em Andamento",
    progress: "2/5 paradas concluídas",
  },
]

export function ActiveRoutes() {
  return (
    <Card className="border border-border">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold">Rotas em Andamento</CardTitle>
          <button className="text-sm text-primary hover:underline">Ver Todos</button>
        </div>
      </CardHeader>
      <CardContent className="pt-0 space-y-3">
        {activeRoutes.map((route) => (
          <div 
            key={route.id} 
            className="p-3 bg-background rounded-lg border border-border"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-semibold text-foreground">Rota {route.id}</span>
              <Badge className="bg-primary text-primary-foreground text-xs">
                {route.status}
              </Badge>
            </div>
            <div className="ml-4 space-y-1">
              <p className="text-sm text-muted-foreground">{route.driver}</p>
              <p className="text-xs text-muted-foreground">{route.progress}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
