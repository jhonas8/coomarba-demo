"use client"

import { Truck, Scale, CalendarDays, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    label: "Motoristas em Rota",
    value: "2",
    icon: Truck,
    color: "bg-card",
    textColor: "text-foreground",
  },
  {
    label: "KG Coletados Hoje",
    value: "1.240",
    suffix: "kg",
    icon: Scale,
    color: "bg-primary",
    textColor: "text-primary-foreground",
  },
  {
    label: "KG na Semana",
    value: "8.450",
    suffix: "kg",
    icon: CalendarDays,
    color: "bg-chart-2",
    textColor: "text-primary-foreground",
  },
  {
    label: "KG no Mês",
    value: "32.100",
    suffix: "kg",
    icon: TrendingUp,
    color: "bg-chart-1",
    textColor: "text-primary-foreground",
  },
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} className={`${stat.color} border-0 shadow-sm`}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className={`text-xs font-medium ${stat.textColor} opacity-80`}>
                {stat.label}
              </span>
              <stat.icon className={`h-4 w-4 ${stat.textColor} opacity-60`} />
            </div>
            <div className={`text-2xl md:text-3xl font-bold ${stat.textColor}`}>
              {stat.value}
              {stat.suffix && (
                <span className="text-lg md:text-xl font-medium ml-1">{stat.suffix}</span>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
