"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download } from "lucide-react"

const summaryData = [
  { label: "Papelão", value: "184 kg", icon: "📦", color: "bg-amber-100" },
  { label: "Plástico", value: "249 kg", icon: "♻️", color: "bg-blue-100" },
  { label: "Vidro", value: "67 kg", icon: "🫙", color: "bg-green-100" },
]

export function ResiduosSummary() {
  return (
    <Card className="border border-border">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-primary" />
          <CardTitle className="text-base font-semibold">Resumo do Período</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {summaryData.map((item) => (
          <div 
            key={item.label}
            className="flex items-center justify-between p-2 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center text-lg`}>
                {item.icon}
              </div>
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </div>
            <span className="text-sm font-bold text-foreground">{item.value}</span>
          </div>
        ))}
        
        {/* Total */}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <span className="text-sm font-medium text-foreground">Total</span>
          <span className="text-lg font-bold text-foreground">500 kg</span>
        </div>

        {/* Export button */}
        <Button variant="outline" className="w-full mt-4 bg-transparent">
          <Download className="h-4 w-4 mr-2" />
          Exportar
        </Button>
      </CardContent>
    </Card>
  )
}
