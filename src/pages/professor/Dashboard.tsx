import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/ui/stat-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Users,
  FileCode,
  TrendingUp,
  AlertTriangle,
  Search,
  Download,
  UserPlus,
  MoreHorizontal,
  Eye,
  Mail,
  ChevronRight,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const students = [
  {
    id: "1",
    name: "María García López",
    email: "maria.garcia@universidad.edu",
    completedExercises: 28,
    totalExercises: 35,
    successRate: 92,
    lastActive: "Hace 2 horas",
    status: "active",
  },
  {
    id: "2",
    name: "Carlos Rodríguez Martín",
    email: "carlos.rodriguez@universidad.edu",
    completedExercises: 25,
    totalExercises: 35,
    successRate: 78,
    lastActive: "Hace 1 día",
    status: "active",
  },
  {
    id: "3",
    name: "Ana Fernández Pérez",
    email: "ana.fernandez@universidad.edu",
    completedExercises: 15,
    totalExercises: 35,
    successRate: 65,
    lastActive: "Hace 3 días",
    status: "warning",
  },
  {
    id: "4",
    name: "Pedro Sánchez Ruiz",
    email: "pedro.sanchez@universidad.edu",
    completedExercises: 8,
    totalExercises: 35,
    successRate: 45,
    lastActive: "Hace 1 semana",
    status: "danger",
  },
  {
    id: "5",
    name: "Laura Jiménez Torres",
    email: "laura.jimenez@universidad.edu",
    completedExercises: 30,
    totalExercises: 35,
    successRate: 95,
    lastActive: "Hace 30 min",
    status: "active",
  },
];

const recentActivity = [
  { student: "María García", exercise: "Búsqueda Binaria", verdict: "Aceptado", time: "Hace 10 min" },
  { student: "Carlos Rodríguez", exercise: "Ordenación Rápida", verdict: "Respuesta Incorrecta", time: "Hace 25 min" },
  { student: "Laura Jiménez", exercise: "Grafos - BFS", verdict: "Aceptado", time: "Hace 1 hora" },
  { student: "Ana Fernández", exercise: "Árboles AVL", verdict: "Tiempo Excedido", time: "Hace 2 horas" },
];

const plagiarismAlerts = [
  { students: ["Pedro Sánchez", "Usuario Externo"], exercise: "Ordenación por Burbuja", similarity: 94 },
  { students: ["Ana Fernández", "Carlos Rodríguez"], exercise: "Listas Enlazadas", similarity: 78 },
];

const ProfessorDashboard = () => {
  return (
    <DashboardLayout userRole="professor" userName="Dr. Juan Martínez">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-1">Panel del Profesor</h1>
          <p className="text-muted-foreground">
            Grupo A1 - Estructuras de Datos • 45 estudiantes
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Exportar datos
          </Button>
          <Button>
            <UserPlus className="h-4 w-4 mr-2" />
            Añadir estudiante
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          title="Estudiantes Activos"
          value={42}
          description="de 45 totales"
          icon={<Users className="h-5 w-5" />}
        />
        <StatCard
          title="Ejercicios Creados"
          value={35}
          description="en 5 temarios"
          icon={<FileCode className="h-5 w-5" />}
        />
        <StatCard
          title="Tasa de Éxito Media"
          value="76%"
          icon={<TrendingUp className="h-5 w-5" />}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Alertas de Plagio"
          value={2}
          description="pendientes de revisar"
          icon={<AlertTriangle className="h-5 w-5" />}
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Students Table */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="pb-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <CardTitle className="text-lg">Estudiantes del Grupo</CardTitle>
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Buscar estudiante..." className="pl-9" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Estudiante</TableHead>
                    <TableHead>Progreso</TableHead>
                    <TableHead>Tasa Éxito</TableHead>
                    <TableHead>Última actividad</TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-primary/10 text-primary text-xs">
                              {student.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")
                                .slice(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-sm">{student.name}</p>
                            <p className="text-xs text-muted-foreground">{student.email}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <span>
                              {student.completedExercises}/{student.totalExercises}
                            </span>
                            <span className="text-muted-foreground">
                              {Math.round((student.completedExercises / student.totalExercises) * 100)}%
                            </span>
                          </div>
                          <Progress
                            value={(student.completedExercises / student.totalExercises) * 100}
                            className="h-1.5"
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="secondary"
                          className={
                            student.successRate >= 80
                              ? "bg-primary/10 text-primary"
                              : student.successRate >= 60
                              ? "bg-chart-4/10 text-chart-4"
                              : "bg-destructive/10 text-destructive"
                          }
                        >
                          {student.successRate}%
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {student.lastActive}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="h-4 w-4 mr-2" />
                              Ver perfil
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <BarChart3 className="h-4 w-4 mr-2" />
                              Ver estadísticas
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Mail className="h-4 w-4 mr-2" />
                              Enviar mensaje
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Recent Activity */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Actividad Reciente</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div
                    className={`h-2 w-2 mt-2 rounded-full ${
                      activity.verdict === "Aceptado"
                        ? "bg-primary"
                        : activity.verdict === "Respuesta Incorrecta"
                        ? "bg-destructive"
                        : "bg-chart-4"
                    }`}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{activity.student}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.exercise} • {activity.verdict}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">{activity.time}</p>
                  </div>
                </div>
              ))}
              <Button variant="ghost" size="sm" className="w-full">
                Ver toda la actividad
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </CardContent>
          </Card>

          {/* Plagiarism Alerts */}
          <Card className="border-destructive/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-destructive" />
                Alertas de Plagio
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {plagiarismAlerts.map((alert, index) => (
                <div key={index} className="p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{alert.exercise}</span>
                    <Badge variant="destructive">{alert.similarity}% similar</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {alert.students.join(" ↔ ")}
                  </p>
                </div>
              ))}
              <Button variant="outline" size="sm" className="w-full">
                Revisar alertas
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProfessorDashboard;
