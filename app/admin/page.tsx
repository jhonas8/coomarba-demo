"use client"

import { useState } from "react"
import { AppShell } from "@/components/app-shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Plus, Search, UserPlus, Settings, Truck } from "lucide-react"
import { NovoUsuarioDialog } from "@/components/admin/novo-usuario-dialog"

const usersData = [
  { id: 1, name: "João Silva", role: "Motorista", status: "Ativo", email: "joao@coomarba.com" },
  { id: 2, name: "Maria Santos", role: "Motorista", status: "Ativo", email: "maria@coomarba.com" },
  { id: 3, name: "Pedro Costa", role: "Cooperado", status: "Ativo", email: "pedro@coomarba.com" },
  { id: 4, name: "Ana Oliveira", role: "Cooperado", status: "Inativo", email: "ana@coomarba.com" },
  { id: 5, name: "Carlos Lima", role: "Admin", status: "Ativo", email: "carlos@coomarba.com" },
]

const vehiclesData = [
  { id: 1, name: "Caminhão 01", plate: "ABC-1234", status: "Em Uso", driver: "João" },
  { id: 2, name: "Caminhão 02", plate: "DEF-5678", status: "Disponível", driver: "-" },
  { id: 3, name: "Caminhão 03", plate: "GHI-9012", status: "Manutenção", driver: "-" },
]

export default function AdminPage() {
  const [novoUsuarioOpen, setNovoUsuarioOpen] = useState(false)

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-2xl font-bold text-foreground">Administração</h1>
          <div className="flex gap-2">
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Configurações
            </Button>
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => setNovoUsuarioOpen(true)}
            >
              <UserPlus className="h-4 w-4 mr-2" />
              Novo Usuário
            </Button>
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="border border-border">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Usuários</p>
                  <p className="text-3xl font-bold text-foreground">12</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <UserPlus className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border border-border">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Motoristas Ativos</p>
                  <p className="text-3xl font-bold text-foreground">4</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border border-border">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Veículos</p>
                  <p className="text-3xl font-bold text-foreground">3</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Users table */}
          <Card className="border border-border">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-semibold">Usuários</CardTitle>
                <div className="relative w-48">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Buscar..."
                    className="pl-9 h-8 text-sm"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">Nome</TableHead>
                    <TableHead className="font-semibold">Função</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {usersData.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-primary/10 text-primary text-xs">
                              {user.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-sm">{user.name}</p>
                            <p className="text-xs text-muted-foreground">{user.email}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-xs">
                          {user.role}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          className={`text-xs ${
                            user.status === "Ativo" 
                              ? "bg-primary text-primary-foreground" 
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {user.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Vehicles table */}
          <Card className="border border-border">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-semibold">Veículos</CardTitle>
                <Button size="sm" variant="outline">
                  <Plus className="h-4 w-4 mr-1" />
                  Adicionar
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">Veículo</TableHead>
                    <TableHead className="font-semibold">Placa</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                    <TableHead className="font-semibold">Motorista</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {vehiclesData.map((vehicle) => (
                    <TableRow key={vehicle.id}>
                      <TableCell className="font-medium">{vehicle.name}</TableCell>
                      <TableCell className="text-muted-foreground">{vehicle.plate}</TableCell>
                      <TableCell>
                        <Badge 
                          className={`text-xs ${
                            vehicle.status === "Em Uso" 
                              ? "bg-primary text-primary-foreground" 
                              : vehicle.status === "Disponível"
                                ? "bg-chart-2 text-primary-foreground"
                                : "bg-accent text-accent-foreground"
                          }`}
                        >
                          {vehicle.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{vehicle.driver}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Novo Usuário Dialog */}
        <NovoUsuarioDialog 
          open={novoUsuarioOpen} 
          onOpenChange={setNovoUsuarioOpen} 
        />
      </div>
    </AppShell>
  )
}
