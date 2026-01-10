import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
  Users,
  FileCode,
  Filter,
} from "lucide-react";

const subjects = [
  {
    id: "1",
    name: "Estructuras de Datos",
    code: "ED101",
    degree: "Grado en Ingeniería Informática",
    groups: 3,
    students: 120,
    exercises: 35,
    professors: ["Dr. Juan Martínez", "Dra. Elena López"],
  },
  {
    id: "2",
    name: "Algoritmos",
    code: "ALG201",
    degree: "Grado en Ingeniería Informática",
    groups: 2,
    students: 80,
    exercises: 28,
    professors: ["Dr. Miguel Sánchez"],
  },
  {
    id: "3",
    name: "Programación Orientada a Objetos",
    code: "POO101",
    degree: "Grado en Ingeniería Informática",
    groups: 3,
    students: 115,
    exercises: 42,
    professors: ["Dra. Elena López"],
  },
  {
    id: "4",
    name: "Fundamentos de Programación",
    code: "FP101",
    degree: "Grado en Ingeniería del Software",
    groups: 2,
    students: 75,
    exercises: 25,
    professors: ["Dr. Juan Martínez"],
  },
  {
    id: "5",
    name: "Programación Avanzada",
    code: "PA201",
    degree: "Grado en Ingeniería del Software",
    groups: 2,
    students: 60,
    exercises: 30,
    professors: ["Dr. Miguel Sánchez"],
  },
];

const AdminSubjects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [degreeFilter, setDegreeFilter] = useState("all");
  const [createOpen, setCreateOpen] = useState(false);

  const filteredSubjects = subjects.filter((subject) => {
    const matchesSearch =
      subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subject.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDegree = degreeFilter === "all" || subject.degree.includes(degreeFilter);
    return matchesSearch && matchesDegree;
  });

  return (
    <DashboardLayout userRole="admin" userName="Admin Sistema">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-1">Asignaturas</h1>
          <p className="text-muted-foreground">
            Gestiona las asignaturas del sistema.
          </p>
        </div>
        <Dialog open={createOpen} onOpenChange={setCreateOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Nueva asignatura
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Crear Nueva Asignatura</DialogTitle>
              <DialogDescription>
                Añade una nueva asignatura al sistema.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" placeholder="Ej: Estructuras de Datos" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="code">Código</Label>
                <Input id="code" placeholder="Ej: ED101" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="degree">Titulación</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar titulación" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gii">Grado en Ingeniería Informática</SelectItem>
                    <SelectItem value="gis">Grado en Ingeniería del Software</SelectItem>
                    <SelectItem value="gcd">Grado en Ciencia de Datos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setCreateOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={() => setCreateOpen(false)}>Crear</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader className="pb-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar asignatura..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={degreeFilter} onValueChange={setDegreeFilter}>
              <SelectTrigger className="w-64">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filtrar por titulación" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las titulaciones</SelectItem>
                <SelectItem value="Ingeniería Informática">Ingeniería Informática</SelectItem>
                <SelectItem value="Ingeniería del Software">Ingeniería del Software</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Asignatura</TableHead>
                <TableHead>Titulación</TableHead>
                <TableHead>Grupos</TableHead>
                <TableHead>Estudiantes</TableHead>
                <TableHead>Ejercicios</TableHead>
                <TableHead>Profesores</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSubjects.map((subject) => (
                <TableRow key={subject.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{subject.name}</p>
                      <p className="text-xs text-muted-foreground">{subject.code}</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {subject.degree}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{subject.groups}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm">
                      <Users className="h-3 w-3 text-muted-foreground" />
                      {subject.students}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm">
                      <FileCode className="h-3 w-3 text-muted-foreground" />
                      {subject.exercises}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {subject.professors.slice(0, 2).map((prof) => (
                        <Badge key={prof} variant="secondary" className="text-xs">
                          {prof.split(" ")[0]}
                        </Badge>
                      ))}
                      {subject.professors.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{subject.professors.length - 2}
                        </Badge>
                      )}
                    </div>
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
                          <Edit className="h-4 w-4 mr-2" />
                          Editar
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
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default AdminSubjects;
