import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Plus,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Copy,
  BarChart3,
} from "lucide-react";

const exercises = [
  {
    id: "1",
    title: "Ordenación por Burbuja",
    topic: "Tema 1: Ordenación",
    difficulty: "easy",
    submissions: 45,
    successRate: 82,
    avgTime: "12 min",
    status: "active",
  },
  {
    id: "2",
    title: "Búsqueda Binaria",
    topic: "Tema 2: Búsqueda",
    difficulty: "medium",
    submissions: 38,
    successRate: 68,
    avgTime: "25 min",
    status: "active",
  },
  {
    id: "3",
    title: "Árbol Binario de Búsqueda",
    topic: "Tema 3: Árboles",
    difficulty: "hard",
    submissions: 22,
    successRate: 45,
    avgTime: "45 min",
    status: "active",
  },
  {
    id: "4",
    title: "Quicksort",
    topic: "Tema 1: Ordenación",
    difficulty: "medium",
    submissions: 30,
    successRate: 72,
    avgTime: "30 min",
    status: "active",
  },
  {
    id: "5",
    title: "Grafos - BFS",
    topic: "Tema 4: Grafos",
    difficulty: "hard",
    submissions: 15,
    successRate: 40,
    avgTime: "50 min",
    status: "draft",
  },
];

const difficultyConfig = {
  easy: { label: "Fácil", className: "bg-chart-2/20 text-chart-2 border-chart-2/30" },
  medium: { label: "Media", className: "bg-chart-4/20 text-chart-4 border-chart-4/30" },
  hard: { label: "Difícil", className: "bg-destructive/20 text-destructive border-destructive/30" },
};

const ProfessorExercises = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [createDialogOpen, setCreateDialogOpen] = useState(false);

  const filteredExercises = exercises.filter((exercise) =>
    exercise.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout userRole="professor" userName="Dr. Juan Martínez">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-1">Ejercicios</h1>
          <p className="text-muted-foreground">
            Gestiona los ejercicios de tu asignatura.
          </p>
        </div>
        <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Nuevo ejercicio
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Crear Nuevo Ejercicio</DialogTitle>
              <DialogDescription>
                Configura un nuevo ejercicio de programación.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Título</Label>
                  <Input id="title" placeholder="Ej: Búsqueda Binaria" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="difficulty">Dificultad</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="easy">Fácil</SelectItem>
                      <SelectItem value="medium">Media</SelectItem>
                      <SelectItem value="hard">Difícil</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="topic">Tema</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar tema" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="t1">Tema 1: Ordenación</SelectItem>
                    <SelectItem value="t2">Tema 2: Búsqueda</SelectItem>
                    <SelectItem value="t3">Tema 3: Árboles</SelectItem>
                    <SelectItem value="t4">Tema 4: Grafos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Enunciado</Label>
                <Textarea id="description" placeholder="Describe el ejercicio..." rows={6} />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="time">Tiempo límite (min)</Label>
                  <Input id="time" type="number" placeholder="30" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="memory">Memoria (MB)</Label>
                  <Input id="memory" type="number" placeholder="256" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="attempts">Máx. intentos</Label>
                  <Input id="attempts" type="number" placeholder="5" />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setCreateDialogOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={() => setCreateDialogOpen(false)}>Crear ejercicio</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader className="pb-4">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar ejercicio..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ejercicio</TableHead>
                <TableHead>Tema</TableHead>
                <TableHead>Dificultad</TableHead>
                <TableHead>Envíos</TableHead>
                <TableHead>Tasa Éxito</TableHead>
                <TableHead>Tiempo Medio</TableHead>
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
                      {exercise.topic}
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
                    <TableCell className="text-muted-foreground">{exercise.avgTime}</TableCell>
                    <TableCell>
                      <Badge
                        variant={exercise.status === "active" ? "default" : "secondary"}
                      >
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
                            <BarChart3 className="h-4 w-4 mr-2" />
                            Ver estadísticas
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

export default ProfessorExercises;
