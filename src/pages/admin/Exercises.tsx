import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  Plus,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Copy,
  Filter,
  Download,
} from "lucide-react";

const exercises = [
  {
    id: "1",
    title: "Ordenación por Burbuja",
    subject: "Estructuras de Datos",
    difficulty: "easy",
    submissions: 245,
    successRate: 82,
    createdBy: "Dr. Juan Martínez",
    status: "active",
  },
  {
    id: "2",
    title: "Búsqueda Binaria",
    subject: "Estructuras de Datos",
    difficulty: "medium",
    submissions: 198,
    successRate: 68,
    createdBy: "Dr. Juan Martínez",
    status: "active",
  },
  {
    id: "3",
    title: "Árbol Binario de Búsqueda",
    subject: "Estructuras de Datos",
    difficulty: "hard",
    submissions: 122,
    successRate: 45,
    createdBy: "Dra. Elena López",
    status: "active",
  },
  {
    id: "4",
    title: "Quicksort",
    subject: "Algoritmos",
    difficulty: "medium",
    submissions: 156,
    successRate: 72,
    createdBy: "Dr. Miguel Sánchez",
    status: "active",
  },
  {
    id: "5",
    title: "Grafos - BFS",
    subject: "Algoritmos",
    difficulty: "hard",
    submissions: 89,
    successRate: 40,
    createdBy: "Dr. Miguel Sánchez",
    status: "draft",
  },
  {
    id: "6",
    title: "Clase Persona",
    subject: "POO",
    difficulty: "easy",
    submissions: 312,
    successRate: 95,
    createdBy: "Dra. Elena López",
    status: "active",
  },
];

const difficultyConfig = {
  easy: { label: "Fácil", className: "bg-chart-2/20 text-chart-2 border-chart-2/30" },
  medium: { label: "Media", className: "bg-chart-4/20 text-chart-4 border-chart-4/30" },
  hard: { label: "Difícil", className: "bg-destructive/20 text-destructive border-destructive/30" },
};

const AdminExercises = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("all");

  const filteredExercises = exercises.filter((exercise) => {
    const matchesSearch = exercise.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = subjectFilter === "all" || exercise.subject === subjectFilter;
    return matchesSearch && matchesSubject;
  });

  return (
    <DashboardLayout userRole="admin" userName="Admin Sistema">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-1">Todos los Ejercicios</h1>
          <p className="text-muted-foreground">
            Gestiona todos los ejercicios del sistema.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Nuevo ejercicio
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar ejercicio..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={subjectFilter} onValueChange={setSubjectFilter}>
              <SelectTrigger className="w-56">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filtrar por asignatura" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las asignaturas</SelectItem>
                <SelectItem value="Estructuras de Datos">Estructuras de Datos</SelectItem>
                <SelectItem value="Algoritmos">Algoritmos</SelectItem>
                <SelectItem value="POO">POO</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ejercicio</TableHead>
                <TableHead>Asignatura</TableHead>
                <TableHead>Dificultad</TableHead>
                <TableHead>Envíos</TableHead>
                <TableHead>Tasa Éxito</TableHead>
                <TableHead>Creado por</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredExercises.map((exercise) => {
                const diffConfig = difficultyConfig[exercise.difficulty as keyof typeof difficultyConfig];
                return (
                  <TableRow key={exercise.id}>
                    <TableCell className="font-medium">{exercise.title}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {exercise.subject}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={diffConfig.className}>
                        {diffConfig.label}
                      </Badge>
                    </TableCell>
                    <TableCell>{exercise.submissions}</TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={
                          exercise.successRate >= 70
                            ? "bg-primary/10 text-primary"
                            : exercise.successRate >= 50
                            ? "bg-chart-4/10 text-chart-4"
                            : "bg-destructive/10 text-destructive"
                        }
                      >
                        {exercise.successRate}%
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {exercise.createdBy}
                    </TableCell>
                    <TableCell>
                      <Badge variant={exercise.status === "active" ? "default" : "secondary"}>
                        {exercise.status === "active" ? "Activo" : "Borrador"}
                      </Badge>
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
                            Ver detalles
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Editar
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Copy className="h-4 w-4 mr-2" />
                            Duplicar
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Eliminar
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default AdminExercises;
