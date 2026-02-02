"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const wasteBreakdownData = [
  { name: "Papelão", value: 8365, percentage: "61.2%", color: "#3d7a3d" },
  { name: "Plástico", value: 4223, percentage: "30.9%", color: "#5a9a5a" },
  { name: "Vidro", value: 1082, percentage: "7.9%", color: "#7ab87a" },
]

const totalKg = 13670

export function WasteBreakdownChart() {
  return (
    <Card className="border border-border h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">
          Quantidade por Resíduo
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-col items-center">
          {/* Pie chart */}
          <div className="relative w-40 h-40">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={wasteBreakdownData}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={70}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {wasteBreakdownData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-foreground">61.5 kg</span>
            </div>
          </div>

          {/* Legend */}
          <div className="w-full mt-4 space-y-2">
            {wasteBreakdownData.map((item) => (
              <div 
                key={item.name}
                className="flex items-center justify-between text-sm"
              >
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-muted-foreground">{item.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-foreground">
                    {item.value.toLocaleString()} kg
                  </span>
                  <span className="text-muted-foreground text-xs">
                    {item.percentage}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="w-full mt-4 pt-4 border-t border-border">
            <div className="flex items-center justify-between">
              <span className="font-medium text-foreground">Total:</span>
              <span className="text-lg font-bold text-foreground">
                {totalKg.toLocaleString()} kg
              </span>
            </div>
          </div>

          {/* Legend icons */}
          <div className="flex items-center justify-center gap-4 mt-4 text-xs">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded" style={{ backgroundColor: "#3d7a3d" }} />
              <span>Papelão</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded" style={{ backgroundColor: "#5a9a5a" }} />
              <span>Plástico</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded" style={{ backgroundColor: "#7ab87a" }} />
              <span>Vidro</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
