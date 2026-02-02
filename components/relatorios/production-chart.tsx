"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const productionData = [
  { date: "25/06", residuo: 800, plastico: 400, vidro: 200 },
  { date: "26/06", residuo: 950, plastico: 450, vidro: 180 },
  { date: "27/06", residuo: 1100, plastico: 520, vidro: 220 },
  { date: "28/06", residuo: 1300, plastico: 600, vidro: 250 },
  { date: "23/04", residuo: 1150, plastico: 550, vidro: 200 },
  { date: "24/04", residuo: 1400, plastico: 680, vidro: 280 },
  { date: "25/04", residuo: 1250, plastico: 620, vidro: 240 },
  { date: "30/04", residuo: 1600, plastico: 750, vidro: 300 },
  { date: "23/03", residuo: 1450, plastico: 700, vidro: 270 },
  { date: "30/03", residuo: 1800, plastico: 850, vidro: 350 },
]

// Compute colors in JS for Recharts
const primaryColor = "#3d7a3d"
const secondaryColor = "#5a9a5a"
const tertiaryColor = "#7ab87a"

export function ProductionChart() {
  return (
    <Card className="border border-border">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base font-semibold">
              Produção da Cooperativa
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Total de resíduos coletados por dia
            </p>
          </div>
          <button className="text-sm text-primary hover:underline">
            {"< >"}
          </button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={productionData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis 
                dataKey="date" 
                axisLine={false} 
                tickLine={false}
                tick={{ fill: '#6b7280', fontSize: 11 }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false}
                tick={{ fill: '#6b7280', fontSize: 11 }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
                labelStyle={{ fontWeight: 'bold' }}
              />
              <Area
                type="monotone"
                dataKey="residuo"
                stackId="1"
                stroke={primaryColor}
                fill={primaryColor}
                fillOpacity={0.8}
                name="Resíduo"
              />
              <Area
                type="monotone"
                dataKey="plastico"
                stackId="1"
                stroke={secondaryColor}
                fill={secondaryColor}
                fillOpacity={0.8}
                name="Plástico"
              />
              <Area
                type="monotone"
                dataKey="vidro"
                stackId="1"
                stroke={tertiaryColor}
                fill={tertiaryColor}
                fillOpacity={0.8}
                name="Vidro"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Tooltip data preview */}
        <div className="flex items-center justify-center gap-6 mt-4 p-3 bg-muted/50 rounded-lg">
          <div className="text-center">
            <p className="text-xs text-muted-foreground">22/Apr/2024</p>
            <div className="flex items-center gap-4 mt-1">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: primaryColor }} />
                <span className="text-xs">Resíduo</span>
                <span className="text-xs font-bold">370 kg</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: secondaryColor }} />
                <span className="text-xs">Plástico</span>
                <span className="text-xs font-bold">196 kg</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: tertiaryColor }} />
                <span className="text-xs">Vidro</span>
                <span className="text-xs font-bold">49 kg</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
