"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Camera, Scale, Clock } from "lucide-react"
import type { Residuo } from "@/app/residuos/page"

interface ResiduoDetailDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  residuo: Residuo
}

export function ResiduoDetailDialog({ open, onOpenChange, residuo }: ResiduoDetailDialogProps) {
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            Detalhe do Registro de Resíduo
            {getStatusBadge(residuo.status)}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Info section */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <div>
                <label className="text-sm text-muted-foreground">Tipo de Resíduo</label>
                <p className="font-medium text-foreground">{residuo.tipo}</p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Peso</label>
                <p className="font-medium text-foreground">{residuo.peso}</p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Origem</label>
                <p className="font-medium text-foreground">{residuo.origem}</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-muted-foreground">Cooperado</label>
                <p className="font-medium text-foreground">{residuo.cooperado}</p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Data/Hora</label>
                <p className="font-medium text-foreground">{residuo.dataHora}</p>
              </div>
              {residuo.gps && (
                <div className="flex items-center gap-2 text-primary">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Localização GPS disponível</span>
                </div>
              )}
            </div>
          </div>

          {/* Evidence photos */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Evidências Fotográficas</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Camera className="h-4 w-4" />
                  <span>Foto do Resíduo</span>
                </div>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-border">
                  <div className="text-center text-muted-foreground">
                    <Camera className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm">Imagem do resíduo</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Scale className="h-4 w-4" />
                  <span>Foto da Pesagem</span>
                </div>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-border">
                  <div className="text-center text-muted-foreground">
                    <Scale className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm">Imagem da balança</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mini map if GPS available */}
          {residuo.gps && (
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Localização</h4>
              <div className="h-32 bg-gradient-to-br from-green-100 to-green-50 rounded-lg border border-border flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-6 w-6 mx-auto mb-1 text-primary" />
                  <p className="text-sm">Mapa com localização</p>
                </div>
              </div>
            </div>
          )}

          {/* Audit log */}
          <div className="space-y-3 p-3 bg-muted/50 rounded-lg">
            <h4 className="font-semibold text-foreground flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Auditoria
            </h4>
            <div className="space-y-1 text-sm text-muted-foreground">
              {residuo.registradoPor && (
                <p>Registrado por {residuo.registradoPor}</p>
              )}
              {residuo.aprovadoPor && (
                <p>Aprovado por {residuo.aprovadoPor}</p>
              )}
            </div>
          </div>

          {/* Comment field */}
          {residuo.status === "Pendente" && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Comentário (opcional)
              </label>
              <Textarea 
                placeholder="Adicione um comentário..."
                className="resize-none"
              />
            </div>
          )}

          {/* Actions */}
          {residuo.status === "Pendente" && (
            <div className="flex gap-3 pt-2">
              <Button
                variant="outline"
                className="flex-1 border-destructive text-destructive hover:bg-destructive/10 bg-transparent"
              >
                Recusar
              </Button>
              <Button
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Aprovar
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
