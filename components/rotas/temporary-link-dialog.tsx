"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Copy, MessageCircle, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface TemporaryLinkDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function TemporaryLinkDialog({ open, onOpenChange }: TemporaryLinkDialogProps) {
  const [copied, setCopied] = useState(false)
  const tempLink = "https://s3.coomarba.com/modules/rota.apk"

  const handleCopy = () => {
    navigator.clipboard.writeText(tempLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Baixe o módulo de rotas: ${tempLink}`)
    window.open(`https://wa.me/?text=${message}`, "_blank")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Gerar Link Temporário</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Uma URL temporária foi gerada para o download do módulo de rotas.
          </p>

          <Alert className="bg-accent/20 border-accent">
            <AlertCircle className="h-4 w-4 text-accent-foreground" />
            <AlertDescription className="text-accent-foreground">
              O link é válido por 2 horas.
            </AlertDescription>
          </Alert>

          <div className="flex items-center gap-2">
            <Input
              readOnly
              value={tempLink}
              className="flex-1 bg-muted"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={handleCopy}
              className="flex-shrink-0 bg-transparent"
            >
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copiar link</span>
            </Button>
          </div>

          {copied && (
            <p className="text-sm text-primary">Link copiado!</p>
          )}

          <div className="flex gap-3 pt-2">
            <Button
              variant="outline"
              className="flex-1 bg-transparent"
              onClick={() => onOpenChange(false)}
            >
              Cancelar
            </Button>
            <Button
              className="flex-1 bg-[#25D366] hover:bg-[#25D366]/90 text-white"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Enviar via WhatsApp
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
