import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Shield,
  AlertTriangle,
  Lock,
  Eye,
  Key,
  RefreshCw,
  CheckCircle2,
  XCircle,
  Clock,
} from "lucide-react";

const securityEvents = [
  {
    id: "1",
    event: "Intento de acceso fallido",
    user: "usuario.desconocido@externo.com",
    ip: "192.168.1.100",
    time: "Hace 5 min",
    severity: "warning",
  },
  {
    id: "2",
    event: "Cambio de contraseña",
    user: "maria.garcia@universidad.edu",
    ip: "10.0.0.45",
    time: "Hace 1 hora",
    severity: "info",
  },
  {
    id: "3",
    event: "Múltiples intentos fallidos",
    user: "carlos@test.com",
    ip: "203.0.113.50",
    time: "Hace 2 horas",
    severity: "error",
  },
  {
    id: "4",
    event: "Sesión iniciada",
    user: "admin@universidad.edu",
    ip: "10.0.0.1",
    time: "Hace 3 horas",
    severity: "info",
  },
  {
    id: "5",
    event: "Ejercicio con código sospechoso",
    user: "pedro.sanchez@universidad.edu",
    ip: "10.0.0.78",
    time: "Hace 5 horas",
    severity: "warning",
  },
];

const plagiarismAlerts = [
  {
    id: "1",
    students: ["Pedro Sánchez Ruiz", "Usuario Externo"],
    exercise: "Ordenación por Burbuja",
    similarity: 94,
    date: "Hoy",
    status: "pending",
  },
  {
    id: "2",
    students: ["Ana Fernández", "Carlos Rodríguez"],
    exercise: "Listas Enlazadas",
    similarity: 78,
    date: "Ayer",
    status: "pending",
  },
  {
    id: "3",
    students: ["María García", "Laura Jiménez"],
    exercise: "Búsqueda Binaria",
    similarity: 45,
    date: "Hace 3 días",
    status: "dismissed",
  },
];

const AdminSecurity = () => {
  return (
    <DashboardLayout userRole="admin" userName="Admin Sistema">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-1">Seguridad</h1>
        <p className="text-muted-foreground">
          Monitoriza la seguridad del sistema y gestiona alertas.
        </p>
      </div>

      {/* Security Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold">98%</p>
                <p className="text-xs text-muted-foreground">Seguridad</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-chart-4/10 text-chart-4">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold">3</p>
                <p className="text-xs text-muted-foreground">Alertas</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-destructive/10 text-destructive">
                <XCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-xs text-muted-foreground">Bloqueos hoy</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-chart-2/10 text-chart-2">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold">450</p>
                <p className="text-xs text-muted-foreground">Sesiones activas</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Security Events */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                Eventos de Seguridad Recientes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Evento</TableHead>
                    <TableHead>Usuario</TableHead>
                    <TableHead>IP</TableHead>
                    <TableHead>Hora</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {securityEvents.map((event) => (
                    <TableRow key={event.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div
                            className={`h-2 w-2 rounded-full ${
                              event.severity === "error"
                                ? "bg-destructive"
                                : event.severity === "warning"
                                ? "bg-chart-4"
                                : "bg-primary"
                            }`}
                          />
                          <span className="text-sm">{event.event}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {event.user}
                      </TableCell>
                      <TableCell className="text-sm font-mono text-muted-foreground">
                        {event.ip}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {event.time}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Plagiarism Alerts */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-destructive" />
                Alertas de Plagio
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {plagiarismAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-4 rounded-lg border ${
                    alert.status === "pending"
                      ? "bg-destructive/5 border-destructive/20"
                      : "bg-muted/30 border-border"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-medium text-sm">{alert.exercise}</p>
                      <p className="text-xs text-muted-foreground">
                        {alert.students.join(" ↔ ")}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={alert.status === "pending" ? "destructive" : "secondary"}
                      >
                        {alert.similarity}% similar
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{alert.date}</span>
                    {alert.status === "pending" && (
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-3 w-3 mr-1" />
                          Revisar
                        </Button>
                        <Button variant="ghost" size="sm">
                          Descartar
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Security Settings */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Lock className="h-4 w-4 text-primary" />
                Configuración de Seguridad
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Autenticación de dos factores</Label>
                  <p className="text-xs text-muted-foreground">
                    Requerir 2FA para administradores
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Bloqueo por intentos fallidos</Label>
                  <p className="text-xs text-muted-foreground">
                    Bloquear después de 5 intentos
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Detección de plagio</Label>
                  <p className="text-xs text-muted-foreground">
                    Análisis automático de código
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Sandbox de ejecución</Label>
                  <p className="text-xs text-muted-foreground">
                    Entorno aislado para código
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Logs de auditoría</Label>
                  <p className="text-xs text-muted-foreground">
                    Registrar todas las acciones
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Key className="h-4 w-4 text-primary" />
                Acciones Rápidas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <RefreshCw className="h-4 w-4 mr-2" />
                Regenerar tokens de API
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Lock className="h-4 w-4 mr-2" />
                Forzar cambio de contraseñas
              </Button>
              <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive">
                <XCircle className="h-4 w-4 mr-2" />
                Cerrar todas las sesiones
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminSecurity;
