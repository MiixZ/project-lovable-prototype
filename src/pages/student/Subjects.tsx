import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { BookOpen, FileCode, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const subjects = [
  {
    id: "1",
    name: "Estructuras de Datos",
    code: "ED101",
    professor: "Dr. Juan Martínez",
    group: "A1",
    progress: 75,
    completedExercises: 15,
    totalExercises: 20,
    nextDeadline: "15 Ene 2026",
  },
  {
    id: "2",
    name: "Algoritmos",
    code: "ALG201",
    professor: "Dra. Elena López",
    group: "B2",
    progress: 40,
    completedExercises: 6,
    totalExercises: 15,
    nextDeadline: "20 Ene 2026",
  },
  {
    id: "3",
    name: "Programación Orientada a Objetos",
    code: "POO101",
    professor: "Dr. Miguel Sánchez",
    group: "A1",
    progress: 90,
    completedExercises: 9,
    totalExercises: 10,
    nextDeadline: "10 Ene 2026",
  },
];

const StudentSubjects = () => {
  return (
    <DashboardLayout userRole="student" userName="María García">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Mis Asignaturas</h1>
        <p className="text-muted-foreground">
          Asignaturas en las que estás matriculada este curso.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <Card key={subject.id} className="group hover:shadow-lg transition-all duration-300 hover:border-primary/30">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">
                  <BookOpen className="h-6 w-6" />
                </div>
                <Badge variant="outline">{subject.group}</Badge>
              </div>
              <CardTitle className="text-lg">{subject.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{subject.code}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>{subject.professor}</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progreso</span>
                  <span className="font-medium">{subject.progress}%</span>
                </div>
                <Progress value={subject.progress} className="h-2" />
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>
                    <FileCode className="h-3 w-3 inline mr-1" />
                    {subject.completedExercises}/{subject.totalExercises} ejercicios
                  </span>
                  <span>Entrega: {subject.nextDeadline}</span>
                </div>
              </div>

              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" asChild>
                <Link to={`/dashboard/subjects/${subject.id}`}>
                  Ver asignatura
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default StudentSubjects;
