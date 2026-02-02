"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ChevronRight } from "lucide-react"
import type { Residuo } from "@/app/residuos/page"

interface ResiduosTableProps {
  residuos: Residuo[]
  onViewDetail: (residuo: Residuo) => void
}

export function ResiduosTable({ residuos, onViewDetail }: ResiduosTableProps) {
  const getStatusBadge = (status: Residuo["status"]) => {
    switch (status) {
      case "Pendente":
        return (
          <Badge className="bg-accent text-accent-foreground">
            Pendente
          </Badge>
        )
      case "Aprovado":
        return (
          <Badge className="bg-primary text-primary-foreground">
            Aprovado
          </Badge>
        )
      case "Recusado":
        return (
          <Badge className="bg-destructive text-destructive-foreground">
            Recusado
          </Badge>
        )
    }
  }

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="font-semibold">ID</TableHead>
            <TableHead className="font-semibold">Cooperado</TableHead>
            <TableHead className="font-semibold">Tipo</TableHead>
            <TableHead className="font-semibold">Peso (kg)</TableHead>
            <TableHead className="font-semibold">Origem</TableHead>
            <TableHead className="font-semibold">Data e Hora</TableHead>
            <TableHead className="font-semibold">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {residuos.map((residuo, index) => (
            <TableRow 
              key={`${residuo.id}-${index}`}
              className="cursor-pointer hover:bg-muted/20"
              onClick={() => onViewDetail(residuo)}
            >
              <TableCell className="font-medium">{residuo.id}</TableCell>
              <TableCell>{residuo.cooperado}</TableCell>
              <TableCell>{residuo.tipo}</TableCell>
              <TableCell>{residuo.peso}</TableCell>
              <TableCell>{residuo.origem}</TableCell>
              <TableCell className="text-sm text-muted-foreground">
                {residuo.dataHora}
              </TableCell>
              <TableCell>{getStatusBadge(residuo.status)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-1 p-4 border-t border-border">
        <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-transparent">
          {"<"}
        </Button>
        {[1, 2, 3, 4, 5].map((page) => (
          <Button
            key={page}
            variant={page === 1 ? "default" : "outline"}
            size="sm"
            className={`h-8 w-8 p-0 ${page === 1 ? "bg-primary text-primary-foreground" : ""}`}
          >
            {page}
          </Button>
        ))}
        <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-transparent">
          {">"}
        </Button>
      </div>
    </div>
  )
}
