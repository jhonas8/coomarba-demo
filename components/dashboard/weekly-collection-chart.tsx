"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const weeklyData = [
  { day: "S", value: 850, value2: 450 },
  { day: "S", value: 920, value2: 380 },
  { day: "M", value: 1100, value2: 520 },
  { day: "T", value: 1350, value2: 680 },
  { day: "J", value: 980, value2: 420 },
  { day: "Q", value: 1450, value2: 750 },
  { day: "T", value: 1680, value2: 620 },
  { day: "U", value: 1520, value2: 540 },
  { day: "S", value: 1200, value2: 480 },
  { day: "S", value: 890, value2: 320 },
]

// Compute colors in JS
const primaryColor = "#3d7a3d"
const secondaryColor = "#5a9a5a"

export function WeeklyCollectionChart() {
  return (
    <Card className="border border-border">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold">Coleta Semanal (kg)</CardTitle>
          <button className="text-sm text-primary hover:underline">Ver Todos</button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex gap-6">
          {/* Chart */}
          <div className="flex-1 h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData} barGap={2}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false}
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false}
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                  tickFormatter={(value) => `${value}`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                />
                <Bar dataKey="value" fill={primaryColor} radius={[4, 4, 0, 0]} />
                <Bar dataKey="value2" fill={secondaryColor} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          {/* Route info */}
          <div className="w-48 space-y-4 border-l border-border pl-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-foreground">Rota 21</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm text-muted-foreground">João</span>
                <Badge className="bg-primary text-primary-foreground text-xs">
                  Em Andamento
                </Badge>
              </div>
              <span className="text-xs text-muted-foreground">3/6 paradas concluídas</span>
            </div>
            <button className="text-sm text-primary hover:underline">Ver Todos</button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
