"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, ChevronRight } from "lucide-react"

const summaryData = [
  { label: "Pendentes", value: 4, color: "bg-accent", textColor: "text-accent-foreground" },
  { label: "Confirmados", value: 8, color: "bg-primary", textColor: "text-primary-foreground" },
  { label: "Recusados", value: 2, color: "bg-destructive", textColor: "text-destructive-foreground" },
]

export function PontoSummary() {
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
            className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${item.color}`} />
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-foreground">{item.value}</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        ))}

        {/* Export button */}
        <Button variant="outline" className="w-full mt-4 bg-transparent">
          <Download className="h-4 w-4 mr-2" />
          Exportar
        </Button>
      </CardContent>
    </Card>
  )
}
