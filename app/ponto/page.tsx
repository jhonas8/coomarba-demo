"use client"

import { useState } from "react"
import { AppShell } from "@/components/app-shell"
import { PontoTable } from "@/components/ponto/ponto-table"
import { PontoFilters } from "@/components/ponto/ponto-filters"
import { PontoSummary } from "@/components/ponto/ponto-summary"
import { PontoValidationDialog } from "@/components/ponto/ponto-validation-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search } from "lucide-react"

export interface PontoRecord {
  id: number
  cooperado: string
  cooperadoImage?: string
  tipo: "Entrada" | "Saída"
  horario: string
  status: "Pendente" | "Confirmado" | "Recusado"
  dataHora: string
  gps?: boolean
  foto?: string
  registradoEm?: string
  validadoPor?: string
}

const pontoData: PontoRecord[] = [
  {
    id: 26,
    cooperado: "José",
    tipo: "Entrada",
    horario: "07:55",
    status: "Pendente",
    dataHora: "24/04/2024 09:55",
    gps: true,
    foto: "/placeholder-worker.jpg",
    registradoEm: "07:58",
  },
  {
    id: 25,
    cooperado: "Maria",
    tipo: "Entrada",
    horario: "13:40",
    status: "Pendente",
    dataHora: "24/04/2024 09:53",
  },
  {
    id: 26,
    cooperado: "João",
    tipo: "Entrada",
    horario: "07:23",
    status: "Confirmado",
    dataHora: "23/04/2024 19:03",
    validadoPor: "Admin Maria – 08:05",
  },
  {
    id: 26,
    cooperado: "Pedro",
    tipo: "Saída",
    horario: "17:22",
    status: "Confirmado",
    dataHora: "23/04/2024 17:02",
  },
  {
    id: 26,
    cooperado: "Ana",
    tipo: "Entrada",
    horario: "08:01",
    status: "Recusado",
    dataHora: "25/04/2024 09:51",
  },
  {
    id: 25,
    cooperado: "Carlos",
    tipo: "Entrada",
    horario: "17:33",
    status: "Confirmado",
    dataHora: "23/04/2024 09:54",
  },
  {
    id: 25,
    cooperado: "Sandra",
    tipo: "Saída",
    horario: "17:33",
    status: "Confirmado",
    dataHora: "23/04/2024 19:33",
  },
]

export default function PontoPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPonto, setSelectedPonto] = useState<PontoRecord | null>(null)
  const [validationOpen, setValidationOpen] = useState(false)

  const handleValidate = (ponto: PontoRecord) => {
    setSelectedPonto(ponto)
    setValidationOpen(true)
  }

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-2xl font-bold text-foreground">Ponto</h1>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            Nova Rota
          </Button>
        </div>

        {/* Status tabs */}
        <div className="flex gap-4 border-b border-border">
          <button className="px-4 py-2 text-sm font-medium text-foreground border-b-2 border-primary">
            Status
          </button>
          <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
            Todos
          </button>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Table section */}
          <div className="xl:col-span-3 space-y-4">
            {/* Search */}
            <div className="relative max-w-xs ml-auto">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar..."
                className="pl-9 bg-card"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <PontoTable 
              records={pontoData} 
              onValidate={handleValidate}
            />
          </div>

          {/* Filters and Summary */}
          <div className="space-y-6">
            <PontoFilters />
            <PontoSummary />
          </div>
        </div>

        {/* Status tabs at bottom */}
        <div className="flex items-center justify-center gap-8 py-4 bg-card rounded-lg border border-border">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <span className="text-sm font-medium">Pendentes</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-sm font-medium">Confirmados</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive" />
            <span className="text-sm font-medium">Recusados</span>
          </div>
        </div>
      </div>

      {selectedPonto && (
        <PontoValidationDialog
          open={validationOpen}
          onOpenChange={setValidationOpen}
          record={selectedPonto}
        />
      )}
    </AppShell>
  )
}
