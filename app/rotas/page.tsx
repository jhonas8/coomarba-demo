"use client"

import { useState } from "react"
import { AppShell } from "@/components/app-shell"
import { RoutesTable } from "@/components/rotas/routes-table"
import { RouteMapPanel } from "@/components/rotas/route-map-panel"
import { TemporaryLinkDialog } from "@/components/rotas/temporary-link-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export interface Route {
  id: number
  driver: string
  vehicle: string
  status: "Em Andamento" | "Finalizada" | "Pendente"
  progress: string
  progressNum: [number, number]
  stops: Stop[]
}

export interface Stop {
  id: number
  name: string
  status: "completed" | "current" | "pending"
  time?: string
}

const routesData: Route[] = [
  {
    id: 48,
    driver: "João",
    vehicle: "Caminhão 01",
    status: "Em Andamento",
    progress: "3/6",
    progressNum: [3, 6],
    stops: [
      { id: 1, name: "Bairro Centro", status: "completed", time: "Concluída 08:25" },
      { id: 2, name: "Bairro A", status: "completed", time: "Concluída 08:51" },
      { id: 3, name: "Próxima", status: "current", time: "Próxima" },
      { id: 4, name: "Bairro C", status: "pending" },
      { id: 5, name: "Bairro D", status: "pending" },
      { id: 6, name: "Deposito", status: "pending" },
    ],
  },
  {
    id: 47,
    driver: "Maria",
    vehicle: "Caminhão 02",
    status: "Em Andamento",
    progress: "4/6",
    progressNum: [4, 6],
    stops: [
      { id: 1, name: "Centro", status: "completed", time: "Concluída 07:30" },
      { id: 2, name: "Setor B", status: "completed", time: "Concluída 08:00" },
      { id: 3, name: "Setor C", status: "completed", time: "Concluída 08:45" },
      { id: 4, name: "Setor D", status: "completed", time: "Concluída 09:15" },
      { id: 5, name: "Setor E", status: "current", time: "Próxima" },
      { id: 6, name: "Deposito", status: "pending" },
    ],
  },
  {
    id: 46,
    driver: "Marcos",
    vehicle: "Caminhão 02",
    status: "Finalizada",
    progress: "6/6",
    progressNum: [6, 6],
    stops: [],
  },
  {
    id: 45,
    driver: "José",
    vehicle: "Caminhão 02",
    status: "Pendente",
    progress: "0/6",
    progressNum: [0, 6],
    stops: [],
  },
  {
    id: 44,
    driver: "Pedro",
    vehicle: "Caminhão 02",
    status: "Finalizada",
    progress: "6/6",
    progressNum: [6, 6],
    stops: [],
  },
]

export default function RotasPage() {
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(routesData[0])
  const [linkDialogOpen, setLinkDialogOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-2xl font-bold text-foreground">Rotas</h1>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            Nova Rota
          </Button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          <Select defaultValue="todos">
            <SelectTrigger className="w-[150px] bg-card">
              <SelectValue placeholder="Motorista" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Motorista</SelectItem>
              <SelectItem value="joao">João</SelectItem>
              <SelectItem value="maria">Maria</SelectItem>
              <SelectItem value="marcos">Marcos</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="todos">
            <SelectTrigger className="w-[150px] bg-card">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Status</SelectItem>
              <SelectItem value="andamento">Em Andamento</SelectItem>
              <SelectItem value="finalizada">Finalizada</SelectItem>
              <SelectItem value="pendente">Pendente</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Routes table */}
          <div className="xl:col-span-2 space-y-4">
            {/* Search */}
            <div className="relative max-w-xs">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar..."
                className="pl-9 bg-card"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <RoutesTable 
              routes={routesData} 
              selectedRoute={selectedRoute}
              onSelectRoute={setSelectedRoute}
              onGenerateLink={() => setLinkDialogOpen(true)}
            />
          </div>

          {/* Map panel */}
          <div>
            {selectedRoute && (
              <RouteMapPanel 
                route={selectedRoute} 
                onGenerateLink={() => setLinkDialogOpen(true)}
              />
            )}
          </div>
        </div>
      </div>

      <TemporaryLinkDialog 
        open={linkDialogOpen} 
        onOpenChange={setLinkDialogOpen}
      />
    </AppShell>
  )
}
