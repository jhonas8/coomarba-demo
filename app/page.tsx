"use client"

import { AppShell } from "@/components/app-shell"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { WeeklyCollectionChart } from "@/components/dashboard/weekly-collection-chart"
import { WasteTypesChart } from "@/components/dashboard/waste-types-chart"
import { PendingItems } from "@/components/dashboard/pending-items"
import { ActiveRoutes } from "@/components/dashboard/active-routes"

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-foreground">Painel de Controle</h1>
        
        {/* KPI Stats */}
        <DashboardStats />
        
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - Charts */}
          <div className="lg:col-span-2 space-y-6">
            <WeeklyCollectionChart />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PendingItems />
              <WasteTypesChart />
            </div>
          </div>
          
          {/* Right column - Pending and Routes */}
          <div className="space-y-6">
            <div className="bg-card rounded-lg border border-border p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-card-foreground">Pendências</h3>
                <button className="text-sm text-primary hover:underline">Ver Todos</button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-medium">3</span>
                    <span className="text-sm">Registros de Resíduos</span>
                  </div>
                  <button className="text-sm text-primary hover:underline">Ver Todos</button>
                </div>
                <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-medium">4</span>
                    <span className="text-sm">Pontos de Controle</span>
                  </div>
                  <button className="text-sm text-primary hover:underline">Ver Todos</button>
                </div>
              </div>
            </div>
            
            <ActiveRoutes />
          </div>
        </div>
      </div>
    </AppShell>
  )
}
