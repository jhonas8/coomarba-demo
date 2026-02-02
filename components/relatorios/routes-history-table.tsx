"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { FileText, Download } from "lucide-react"

const routesHistoryData = [
  { id: 48, motorista: "Pedro", inicio: "24/03/2024 08:00", coletas: 5, peso: "270 kg", wiss: "270 kg" },
  { id: 47, motorista: "João", inicio: "24/03/2024 08:53", coletas: 5, peso: "4223 kg", wiss: "393 kg" },
  { id: 46, motorista: "Maria", inicio: "24/03/2024 10:33", coletas: 5, peso: "240 kg", wiss: "333 kg" },
  { id: 45, motorista: "José", inicio: "24/03/2024 09:33", coletas: 5, peso: "200 kg", wiss: "333 kg" },
]

export function RoutesHistoryTable() {
  return (
    <Card className="border border-border">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold">
            Histórico de Rotas
          </CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <FileText className="h-4 w-4 mr-2" />
              Exportar PDF
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Exportar Ex
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="font-semibold">ID</TableHead>
              <TableHead className="font-semibold">Motorista</TableHead>
              <TableHead className="font-semibold">Início</TableHead>
              <TableHead className="font-semibold">Coletas</TableHead>
              <TableHead className="font-semibold">Peso</TableHead>
              <TableHead className="font-semibold">Wiss</TableHead>
              <TableHead className="font-semibold"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {routesHistoryData.map((route, index) => (
              <TableRow key={`${route.id}-${index}`}>
                <TableCell className="font-medium">{route.id}</TableCell>
                <TableCell>{route.motorista}</TableCell>
                <TableCell className="text-muted-foreground">{route.inicio}</TableCell>
                <TableCell>{route.coletas}</TableCell>
                <TableCell>{route.peso}</TableCell>
                <TableCell>{route.wiss}</TableCell>
                <TableCell>
                  <Button 
                    variant="default" 
                    size="sm"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Ver Detalhes
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
