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
import { MapPin, Camera, Clock, User } from "lucide-react"
import type { PontoRecord } from "@/app/ponto/page"

interface PontoValidationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  record: PontoRecord
}

export function PontoValidationDialog({ open, onOpenChange, record }: PontoValidationDialogProps) {
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            Validar Ponto
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Worker info */}
          <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-foreground">{record.cooperado}</h3>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="outline">{record.tipo}</Badge>
                <span className="text-sm text-muted-foreground">{record.horario}</span>
              </div>
            </div>
          </div>

          {/* Photo evidence */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground flex items-center gap-2">
              <Camera className="h-4 w-4" />
              Foto obrigatória
            </h4>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-border overflow-hidden">
              <div className="text-center text-muted-foreground">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <User className="h-16 w-16 text-primary/30" />
                </div>
              </div>
            </div>
          </div>

          {/* GPS info */}
          {record.gps && (
            <div className="flex items-center gap-2 text-sm text-primary">
              <MapPin className="h-4 w-4" />
              <span>Localização GPS disponível</span>
            </div>
          )}

          {/* Audit log */}
          <div className="space-y-2 p-3 bg-muted/50 rounded-lg">
            <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Auditoria
            </h4>
            <div className="space-y-1 text-sm text-muted-foreground">
              {record.registradoEm && (
                <p>Registro efetuado às {record.registradoEm}</p>
              )}
              {record.validadoPor && (
                <p>Validado por {record.validadoPor}</p>
              )}
            </div>
          </div>

          {/* Comment field */}
          {record.status === "Pendente" && (
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
          {record.status === "Pendente" ? (
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
                Confirmar Chegada
              </Button>
            </div>
          ) : (
            <div className="flex gap-3 pt-2">
              <Button
                variant="outline"
                className="flex-1 bg-transparent"
                onClick={() => onOpenChange(false)}
              >
                Fechar
              </Button>
              <Button
                variant="outline"
                className="flex-1 bg-transparent"
              >
                Lista de Paradas
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
