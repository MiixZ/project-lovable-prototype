import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  Download,
  UserPlus,
  MoreHorizontal,
  Eye,
  Mail,
  BarChart3,
  Filter,
} from "lucide-react";

const students = [
  {
    id: "1",
    name: "María García López",
    email: "maria.garcia@universidad.edu",
    group: "A1",
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
    group: "A1",
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
    group: "A2",
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
    group: "A1",
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
    group: "A2",
    completedExercises: 30,
    totalExercises: 35,
    successRate: 95,
    lastActive: "Hace 30 min",
    status: "active",
  },
  {
    id: "6",
    name: "Diego Martín Gómez",
    email: "diego.martin@universidad.edu",
    group: "A2",
    completedExercises: 22,
    totalExercises: 35,
    successRate: 80,
    lastActive: "Hace 5 horas",
    status: "active",
  },
];

const ProfessorStudents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [groupFilter, setGroupFilter] = useState("all");

  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGroup = groupFilter === "all" || student.group === groupFilter;
    return matchesSearch && matchesGroup;
  });

  return (
    <DashboardLayout userRole="professor" userName="Dr. Juan Martínez">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-1">Estudiantes</h1>
          <p className="text-muted-foreground">
            Gestiona y monitoriza a tus estudiantes.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
          <Button>
            <UserPlus className="h-4 w-4 mr-2" />
            Añadir estudiante
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar estudiante..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={groupFilter} onValueChange={setGroupFilter}>
              <SelectTrigger className="w-40">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Grupo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los grupos</SelectItem>
                <SelectItem value="A1">Grupo A1</SelectItem>
                <SelectItem value="A2">Grupo A2</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Estudiante</TableHead>
                <TableHead>Grupo</TableHead>
                <TableHead>Progreso</TableHead>
                <TableHead>Tasa Éxito</TableHead>
                <TableHead>Última actividad</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student) => (
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
                    <Badge variant="outline">{student.group}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1 w-32">
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
    </DashboardLayout>
  );
};

export default ProfessorStudents;
