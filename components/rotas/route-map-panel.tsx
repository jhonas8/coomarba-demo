"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { CheckCircle2, Circle, MoreHorizontal, MapPin } from "lucide-react"
import type { Route } from "@/app/rotas/page"

interface RouteMapPanelProps {
  route: Route
  onGenerateLink: () => void
}

export function RouteMapPanel({ route, onGenerateLink }: RouteMapPanelProps) {
  return (
    <Card className="border border-border">
      {/* Map placeholder */}
      <div className="relative h-48 bg-muted rounded-t-lg overflow-hidden">
        {/* Fake map background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-50">
          {/* Simulated route line */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 200">
            {/* Route path */}
            <path
              d="M 50 150 Q 80 120 100 100 T 150 80 T 200 60 T 250 80"
              fill="none"
              stroke="#3d7a3d"
              strokeWidth="3"
              strokeDasharray="0"
            />
            {/* Stop markers */}
            <circle cx="50" cy="150" r="8" fill="#3d7a3d" />
            <circle cx="100" cy="100" r="8" fill="#3d7a3d" />
            <circle cx="150" cy="80" r="8" fill="#f59e0b" />
            <circle cx="200" cy="60" r="6" fill="#9ca3af" />
            <circle cx="250" cy="80" r="6" fill="#9ca3af" />
            {/* Numbers on markers */}
            <text x="50" y="154" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">1</text>
            <text x="100" y="104" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">2</text>
            <text x="150" y="84" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">3</text>
          </svg>
        </div>
        
        {/* Map controls placeholder */}
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          <Button size="icon" variant="secondary" className="h-6 w-6 bg-white shadow">
            <span className="text-xs">+</span>
          </Button>
          <Button size="icon" variant="secondary" className="h-6 w-6 bg-white shadow">
            <span className="text-xs">-</span>
          </Button>
        </div>
      </div>

      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-foreground">Rota {route.id}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-muted-foreground">{route.driver}</span>
              <Badge className="bg-primary text-primary-foreground text-xs">
                {route.status}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-1">{route.vehicle}</p>
          </div>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Stops list */}
        <div className="space-y-1">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-sm text-foreground">Paradas</h4>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-xs text-primary h-auto p-0"
            >
              Expandir
            </Button>
          </div>

          {route.stops.length > 0 ? (
            <div className="space-y-2">
              {route.stops.map((stop, index) => (
                <div 
                  key={stop.id} 
                  className="flex items-center gap-3 text-sm"
                >
                  {stop.status === "completed" ? (
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  ) : stop.status === "current" ? (
                    <div className="h-5 w-5 rounded-full bg-accent border-2 border-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-[10px] font-bold text-accent-foreground">
                        {index + 1}
                      </span>
                    </div>
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <span className={`${
                      stop.status === "completed" 
                        ? "text-foreground" 
                        : stop.status === "current"
                          ? "text-accent-foreground font-medium"
                          : "text-muted-foreground"
                    }`}>
                      {stop.name}
                    </span>
                  </div>
                  {stop.time && (
                    <span className={`text-xs flex-shrink-0 ${
                      stop.status === "current" ? "text-accent-foreground" : "text-muted-foreground"
                    }`}>
                      {stop.time}
                    </span>
                  )}
                  {stop.status === "completed" && (
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground text-center py-4">
              Sem paradas disponíveis
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-4 pt-4 border-t border-border">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 bg-transparent"
            onClick={onGenerateLink}
          >
            Ver Todos
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
