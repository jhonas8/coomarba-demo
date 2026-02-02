"use client"

import { AppShell } from "@/components/app-shell"
import { ProductionChart } from "@/components/relatorios/production-chart"
import { WasteBreakdownChart } from "@/components/relatorios/waste-breakdown-chart"
import { RoutesHistoryTable } from "@/components/relatorios/routes-history-table"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function RelatoriosPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-2xl font-bold text-foreground">Relatórios</h1>
        </div>

        {/* Filters row */}
        <div className="flex flex-wrap items-center gap-3 p-4 bg-card rounded-lg border border-border">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-foreground">Período:</span>
            <Select defaultValue="30dias">
              <SelectTrigger className="w-[160px] bg-background">
                <SelectValue placeholder="Últimos 30 dias" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7dias">Últimos 7 dias</SelectItem>
                <SelectItem value="30dias">Últimos 30 dias</SelectItem>
                <SelectItem value="90dias">Últimos 90 dias</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-foreground">Tipo:</span>
            <Select defaultValue="producao">
              <SelectTrigger className="w-[200px] bg-background">
                <SelectValue placeholder="Produção por Cooperado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="producao">Produção por Cooperado</SelectItem>
                <SelectItem value="rotas">Histórico de Rotas</SelectItem>
                <SelectItem value="residuos">Resíduos Coletados</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-foreground">Motorista:</span>
            <Select defaultValue="todos">
              <SelectTrigger className="w-[140px] bg-background">
                <SelectValue placeholder="Todos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos</SelectItem>
                <SelectItem value="joao">João</SelectItem>
                <SelectItem value="maria">Maria</SelectItem>
                <SelectItem value="pedro">Pedro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button className="ml-auto bg-primary text-primary-foreground hover:bg-primary/90">
            Aplicar Filtros
          </Button>
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ProductionChart />
          </div>
          <div>
            <WasteBreakdownChart />
          </div>
        </div>

        {/* Routes history table */}
        <RoutesHistoryTable />
      </div>
    </AppShell>
  )
}
