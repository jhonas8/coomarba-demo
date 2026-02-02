"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ChevronDown, Calendar, RefreshCw } from "lucide-react"

export function ResiduosFilters() {
  return (
    <Card className="border border-border">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold">Filtro</CardTitle>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Cooperado filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Cooperado:
          </label>
          <Select defaultValue="todos">
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Todos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos</SelectItem>
              <SelectItem value="joao">João</SelectItem>
              <SelectItem value="maria">Maria</SelectItem>
              <SelectItem value="pedro">Pedro</SelectItem>
              <SelectItem value="ana">Ana</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Tipo de Residuo filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Tipo de Resíduo:
          </label>
          <Select defaultValue="7dias">
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Últimos 7 dias" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7dias">Últimos 7 dias</SelectItem>
              <SelectItem value="30dias">Últimos 30 dias</SelectItem>
              <SelectItem value="personalizado">Personalizado</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Date range */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>18/04/2024 até</span>
          <Calendar className="h-4 w-4" />
          <span>24/09/2024</span>
          <ChevronDown className="h-4 w-4" />
        </div>

        {/* Actions */}
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          Aplicar Filtros
        </Button>
        
        <Button variant="outline" className="w-full bg-transparent">
          <RefreshCw className="h-4 w-4 mr-2" />
          Limpar
        </Button>
      </CardContent>
    </Card>
  )
}
