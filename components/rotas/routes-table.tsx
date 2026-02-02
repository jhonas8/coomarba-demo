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
import { ChevronRight, CheckCircle2, Circle, XCircle } from "lucide-react"
import type { Route } from "@/app/rotas/page"

interface RoutesTableProps {
  routes: Route[]
  selectedRoute: Route | null
  onSelectRoute: (route: Route) => void
  onGenerateLink: () => void
}

export function RoutesTable({ 
  routes, 
  selectedRoute, 
  onSelectRoute, 
  onGenerateLink 
}: RoutesTableProps) {
  const getStatusBadge = (status: Route["status"]) => {
    switch (status) {
      case "Em Andamento":
        return (
          <Badge className="bg-primary text-primary-foreground">
            Em Andamento
          </Badge>
        )
      case "Finalizada":
        return (
          <Badge className="bg-chart-2 text-primary-foreground">
            Finalizada
          </Badge>
        )
      case "Pendente":
        return (
          <Badge variant="outline" className="text-muted-foreground border-muted-foreground">
            Pendente
          </Badge>
        )
    }
  }

  const getProgressIcon = (status: Route["status"]) => {
    switch (status) {
      case "Em Andamento":
        return <Circle className="h-4 w-4 text-primary fill-primary" />
      case "Finalizada":
        return <CheckCircle2 className="h-4 w-4 text-chart-2" />
      case "Pendente":
        return <XCircle className="h-4 w-4 text-muted-foreground" />
    }
  }

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="font-semibold">ID</TableHead>
            <TableHead className="font-semibold">Motorista</TableHead>
            <TableHead className="font-semibold">Veículo</TableHead>
            <TableHead className="font-semibold">Status</TableHead>
            <TableHead className="font-semibold">Progresso</TableHead>
            <TableHead className="font-semibold">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {routes.map((route) => (
            <TableRow 
              key={route.id}
              className={`cursor-pointer transition-colors ${
                selectedRoute?.id === route.id ? "bg-muted/30" : "hover:bg-muted/20"
              }`}
              onClick={() => onSelectRoute(route)}
            >
              <TableCell className="font-medium">{route.id}</TableCell>
              <TableCell>{route.driver}</TableCell>
              <TableCell>{route.vehicle}</TableCell>
              <TableCell>{getStatusBadge(route.status)}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {route.progress}
                  </Badge>
                  {getProgressIcon(route.status)}
                </div>
              </TableCell>
              <TableCell>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-primary hover:text-primary/80"
                  onClick={(e) => {
                    e.stopPropagation()
                    onSelectRoute(route)
                  }}
                >
                  Ver Rota
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
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
        {[1, 2, 3].map((page) => (
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
