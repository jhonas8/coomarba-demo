"use client"

import { useState } from "react"
import { AppShell } from "@/components/app-shell"
import { ResiduosTable } from "@/components/residuos/residuos-table"
import { ResiduosFilters } from "@/components/residuos/residuos-filters"
import { ResiduosSummary } from "@/components/residuos/residuos-summary"
import { ResiduoDetailDialog } from "@/components/residuos/residuo-detail-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search } from "lucide-react"

export interface Residuo {
  id: number
  cooperado: string
  tipo: string
  peso: string
  origem: string
  dataHora: string
  status: "Pendente" | "Aprovado" | "Recusado"
  fotos?: {
    residuo?: string
    pesagem?: string
  }
  gps?: boolean
  registradoPor?: string
  aprovadoPor?: string
}

const residuosData: Residuo[] = [
  {
    id: 48,
    cooperado: "João",
    tipo: "Papelão",
    peso: "32 kg",
    origem: "Merradão X",
    dataHora: "24/04/2024 09:14",
    status: "Pendente",
    fotos: { residuo: "/placeholder-waste.jpg", pesagem: "/placeholder-scale.jpg" },
    gps: true,
    registradoPor: "Cooperado João – 09:14",
  },
  {
    id: 48,
    cooperado: "João",
    tipo: "Plástico",
    peso: "18 kg",
    origem: "Escola V",
    dataHora: "23/04/2024 10:33",
    status: "Aprovado",
    registradoPor: "Cooperado João – 10:33",
    aprovadoPor: "Admin Maria – 10:45",
  },
  {
    id: 46,
    cooperado: "Maro",
    tipo: "Plástico",
    peso: "52 kg",
    origem: "Restaurante Z",
    dataHora: "23/04/2024 10:33",
    status: "Pendente",
    gps: true,
  },
  {
    id: 49,
    cooperado: "Ana",
    tipo: "Vidro",
    peso: "26 kg",
    origem: "Farmácia A",
    dataHora: "23/04/2024 10:33",
    status: "Aprovado",
  },
  {
    id: 49,
    cooperado: "Pedro",
    tipo: "Plástico",
    peso: "48 kg",
    origem: "Merradão A",
    dataHora: "23/04/2024 09:33",
    status: "Pendente",
  },
  {
    id: 48,
    cooperado: "Pedro",
    tipo: "Plástico",
    peso: "59 kg",
    origem: "Merradão X",
    dataHora: "24/04/2024 09:53",
    status: "Pendente",
  },
  {
    id: 45,
    cooperado: "José",
    tipo: "Vidro",
    peso: "29 kg",
    origem: "Farmácia A",
    dataHora: "23/04/2024 09:33",
    status: "Aprovado",
  },
  {
    id: 44,
    cooperado: "José",
    tipo: "Papelão",
    peso: "32 kg",
    origem: "Shopping",
    dataHora: "23/04/2024 10:36",
    status: "Recusado",
  },
  {
    id: 43,
    cooperado: "Sandra",
    tipo: "Feira Livre",
    peso: "90 kg",
    origem: "Feira Livre",
    dataHora: "23/04/2024 10:33",
    status: "Recusado",
  },
  {
    id: 45,
    cooperado: "Ana",
    tipo: "Shopping",
    peso: "28 kg",
    origem: "Feira Livre",
    dataHora: "23/04/2024 10:33",
    status: "Aprovado",
  },
]

export default function ResiduosPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedResiduo, setSelectedResiduo] = useState<Residuo | null>(null)
  const [detailOpen, setDetailOpen] = useState(false)

  const handleViewDetail = (residuo: Residuo) => {
    setSelectedResiduo(residuo)
    setDetailOpen(true)
  }

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-2xl font-bold text-foreground">Resíduos</h1>
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

            <ResiduosTable 
              residuos={residuosData} 
              onViewDetail={handleViewDetail}
            />
          </div>

          {/* Filters and Summary */}
          <div className="space-y-6">
            <ResiduosFilters />
            <ResiduosSummary />
          </div>
        </div>
      </div>

      {selectedResiduo && (
        <ResiduoDetailDialog
          open={detailOpen}
          onOpenChange={setDetailOpen}
          residuo={selectedResiduo}
        />
      )}
    </AppShell>
  )
}
