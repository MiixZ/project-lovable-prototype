import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  GraduationCap,
  Plus,
  MoreHorizontal,
  Edit,
  Trash2,
  BookOpen,
  Users,
  ChevronRight,
} from "lucide-react";

const degrees = [
  {
    id: "1",
    name: "Grado en Ingeniería Informática",
    code: "GII",
    subjects: 5,
    students: 320,
    professors: 12,
  },
  {
    id: "2",
    name: "Grado en Ingeniería del Software",
    code: "GIS",
    subjects: 4,
    students: 180,
    professors: 8,
  },
  {
    id: "3",
    name: "Grado en Ciencia de Datos",
    code: "GCD",
    subjects: 3,
    students: 95,
    professors: 5,
  },
  {
    id: "4",
    name: "Máster en Inteligencia Artificial",
    code: "MIA",
    subjects: 6,
    students: 45,
    professors: 7,
  },
];

const AdminDegrees = () => {
  const [createOpen, setCreateOpen] = useState(false);

  return (
    <DashboardLayout userRole="admin" userName="Admin Sistema">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-1">Titulaciones</h1>
          <p className="text-muted-foreground">
            Gestiona las titulaciones del sistema.
          </p>
        </div>
        <Dialog open={createOpen} onOpenChange={setCreateOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Nueva titulación
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Crear Nueva Titulación</DialogTitle>
              <DialogDescription>
                Añade una nueva titulación al sistema.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre de la titulación</Label>
                <Input id="name" placeholder="Ej: Grado en Ingeniería Informática" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="code">Código</Label>
                <Input id="code" placeholder="Ej: GII" />
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

      <div className="grid md:grid-cols-2 gap-6">
        {degrees.map((degree) => (
          <Card key={degree.id} className="group hover:shadow-lg transition-all duration-300 hover:border-primary/30">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{degree.name}</CardTitle>
                    <Badge variant="outline" className="mt-1">
                      {degree.code}
                    </Badge>
                  </div>
                </div>
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
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center p-3 rounded-lg bg-muted/30">
                  <BookOpen className="h-4 w-4 mx-auto mb-1 text-primary" />
                  <p className="text-lg font-bold">{degree.subjects}</p>
                  <p className="text-xs text-muted-foreground">Asignaturas</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-muted/30">
                  <Users className="h-4 w-4 mx-auto mb-1 text-primary" />
                  <p className="text-lg font-bold">{degree.students}</p>
                  <p className="text-xs text-muted-foreground">Estudiantes</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-muted/30">
                  <GraduationCap className="h-4 w-4 mx-auto mb-1 text-primary" />
                  <p className="text-lg font-bold">{degree.professors}</p>
                  <p className="text-xs text-muted-foreground">Profesores</p>
                </div>
              </div>
              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                Ver detalles
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default AdminDegrees;
