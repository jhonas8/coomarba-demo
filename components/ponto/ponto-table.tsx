"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { MapPin, CheckCircle2 } from "lucide-react"
import type { PontoRecord } from "@/app/ponto/page"

interface PontoTableProps {
  records: PontoRecord[]
  onValidate: (record: PontoRecord) => void
}

export function PontoTable({ records, onValidate }: PontoTableProps) {
  const getStatusBadge = (status: PontoRecord["status"]) => {
    switch (status) {
      case "Pendente":
        return (
          <Badge className="bg-accent text-accent-foreground">
            Pendente
          </Badge>
        )
      case "Confirmado":
        return (
          <Badge className="bg-primary text-primary-foreground">
            Confirmado
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
            <TableHead className="font-semibold">Horário</TableHead>
            <TableHead className="font-semibold">Status</TableHead>
            <TableHead className="font-semibold">Data e Hora</TableHead>
            <TableHead className="font-semibold">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.map((record, index) => (
            <TableRow 
              key={`${record.id}-${index}`}
              className="hover:bg-muted/20"
            >
              <TableCell className="font-medium">{record.id}</TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border border-border">
                    <AvatarImage src={record.cooperadoImage || "/placeholder.svg"} alt={record.cooperado} />
                    <AvatarFallback className="bg-primary/10 text-primary text-sm">
                      {record.cooperado.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-xs text-muted-foreground">970</span>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  {record.tipo}
                  {record.gps && (
                    <MapPin className="h-3 w-3 text-primary" />
                  )}
                </div>
              </TableCell>
              <TableCell>{record.horario}</TableCell>
              <TableCell>{getStatusBadge(record.status)}</TableCell>
              <TableCell className="text-sm text-muted-foreground">
                {record.dataHora}
              </TableCell>
              <TableCell>
                {record.status === "Pendente" ? (
                  <Button 
                    size="sm"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => onValidate(record)}
                  >
                    Validar
                  </Button>
                ) : (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-primary hover:text-primary/80"
                    onClick={() => onValidate(record)}
                  >
                    Ver Registro
                  </Button>
                )}
              </TableCell>
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
