"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Copy, Check, AlertTriangle } from "lucide-react"

type UserType = "administrador" | "cooperado" | "motorista" | ""

interface NovoUsuarioDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const countryCodes = [
  { code: "55", country: "Brasil", flag: "BR" },
  { code: "1", country: "Estados Unidos", flag: "US" },
  { code: "54", country: "Argentina", flag: "AR" },
  { code: "56", country: "Chile", flag: "CL" },
  { code: "57", country: "Colombia", flag: "CO" },
  { code: "51", country: "Peru", flag: "PE" },
  { code: "598", country: "Uruguay", flag: "UY" },
  { code: "595", country: "Paraguay", flag: "PY" },
  { code: "591", country: "Bolivia", flag: "BO" },
  { code: "593", country: "Ecuador", flag: "EC" },
  { code: "58", country: "Venezuela", flag: "VE" },
  { code: "34", country: "Espanha", flag: "ES" },
  { code: "351", country: "Portugal", flag: "PT" },
]

export function NovoUsuarioDialog({ open, onOpenChange }: NovoUsuarioDialogProps) {
  const [step, setStep] = useState<"form" | "link">("form")
  const [userType, setUserType] = useState<UserType>("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [countryCode, setCountryCode] = useState("55")
  const [phone, setPhone] = useState("")
  const [copied, setCopied] = useState(false)

  const generatedLink = "https://s3.coomarba.com/modules/motorista.apk"

  const handleSubmit = () => {
    if (userType === "motorista") {
      setStep("link")
    } else {
      // For other user types, just close
      handleClose()
    }
  }

  const handleClose = () => {
    setStep("form")
    setUserType("")
    setName("")
    setEmail("")
    setCountryCode("55")
    setPhone("")
    setCopied(false)
    onOpenChange(false)
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(generatedLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleWhatsApp = () => {
    // Format: https://wa.me/<number>?text=urlencodedtext
    // Number should be in international format without +, brackets, or dashes
    const fullNumber = `${countryCode}${phone.replace(/\D/g, "")}`
    const message = encodeURIComponent(
      `Olá ${name}! Aqui está o link para download do aplicativo COOMARBA Motorista: ${generatedLink}\n\nO link é válido por 2 horas.`
    )
    window.open(`https://wa.me/${fullNumber}?text=${message}`, "_blank")
  }

  if (step === "link") {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">Gerar Link Temporário</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Uma URL temporária foi gerada para o download do módulo de rotas.
            </DialogDescription>
          </DialogHeader>

          {/* Warning banner */}
          <div className="flex items-center gap-2 rounded-md bg-amber-50 border border-amber-200 px-4 py-3">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
            <p className="text-sm text-amber-700 font-medium">
              O link é válido por 2 horas.
            </p>
          </div>

          {/* Link input with copy */}
          <div className="flex items-center gap-2">
            <Input
              value={generatedLink}
              readOnly
              className="flex-1 bg-muted/50 text-sm"
            />
            <Button
              type="button"
              size="icon"
              variant="outline"
              onClick={handleCopy}
              className="shrink-0 bg-transparent"
            >
              {copied ? (
                <Check className="h-4 w-4 text-primary" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>

          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              onClick={handleClose}
              className="flex-1 bg-transparent"
            >
              Cancelar
            </Button>
            <Button
              onClick={handleWhatsApp}
              className="flex-1 bg-[#25D366] hover:bg-[#20BD5A] text-white"
            >
              <svg
                className="h-4 w-4 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Enviar via WhatsApp
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Novo Usuário</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Preencha os dados para cadastrar um novo usuário no sistema.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome completo</Label>
            <Input
              id="name"
              placeholder="Digite o nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="email@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <div className="flex gap-2">
              <Select value={countryCode} onValueChange={setCountryCode}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {countryCodes.map((c) => (
                    <SelectItem key={c.code} value={c.code}>
                      <span className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">{c.flag}</span>
                        <span>+{c.code}</span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                id="phone"
                type="tel"
                placeholder="(00) 00000-0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="userType">Tipo de usuário</Label>
            <Select value={userType} onValueChange={(value: UserType) => setUserType(value)}>
              <SelectTrigger id="userType">
                <SelectValue placeholder="Selecione o tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="administrador">Administrador</SelectItem>
                <SelectItem value="cooperado">Cooperado</SelectItem>
                <SelectItem value="motorista">Motorista</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {userType === "motorista" && (
            <div className="rounded-md bg-muted/50 border border-border px-4 py-3">
              <p className="text-sm text-muted-foreground">
                Ao cadastrar um motorista, será gerado um link temporário para download do aplicativo móvel.
              </p>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!name || !email || !phone || !userType}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {userType === "motorista" ? "Cadastrar e Gerar Link" : "Cadastrar"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
