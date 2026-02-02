"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const wasteData = [
  { name: "Plástico", value: 35, color: "#3d7a3d" },
  { name: "Papelão", value: 28, color: "#5a9a5a" },
  { name: "Vidro", value: 20, color: "#7ab87a" },
  { name: "Metal", value: 17, color: "#a8d4a8" },
]

export function WasteTypesChart() {
  const total = wasteData.reduce((acc, item) => acc + item.value, 0)

  return (
    <Card className="border border-border">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold">Tipos de Resíduo</CardTitle>
          <button className="text-sm text-primary hover:underline">Ver Todos</button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center gap-4">
          {/* Pie chart */}
          <div className="relative w-32 h-32">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={wasteData}
                  cx="50%"
                  cy="50%"
                  innerRadius={35}
                  outerRadius={55}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {wasteData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold text-foreground">{total}%</span>
            </div>
          </div>
          
          {/* Legend */}
          <div className="flex-1 space-y-2">
            {wasteData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-muted-foreground">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
