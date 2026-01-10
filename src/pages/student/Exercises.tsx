import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { ExerciseCard } from "@/components/ui/exercise-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, SlidersHorizontal } from "lucide-react";

const allExercises = [
  {
    id: "1",
    title: "Ordenación por Burbuja",
    description: "Implementa el algoritmo de ordenación por burbuja para ordenar un array de enteros.",
    difficulty: "easy" as const,
    status: "completed" as const,
    timeLimit: 30,
    attempts: 2,
    maxAttempts: 5,
    subject: "Estructuras de Datos",
  },
  {
    id: "2",
    title: "Búsqueda Binaria",
    description: "Implementa el algoritmo de búsqueda binaria para encontrar un elemento en un array ordenado.",
    difficulty: "medium" as const,
    status: "pending" as const,
    timeLimit: 45,
    attempts: 0,
    maxAttempts: 5,
    dueDate: "15 Ene 2026",
    subject: "Estructuras de Datos",
  },
  {
    id: "3",
    title: "Árbol Binario de Búsqueda",
    description: "Implementa las operaciones básicas de un árbol binario de búsqueda.",
    difficulty: "hard" as const,
    status: "failed" as const,
    timeLimit: 60,
    attempts: 3,
    maxAttempts: 5,
    subject: "Estructuras de Datos",
  },
  {
    id: "4",
    title: "Quicksort",
    description: "Implementa el algoritmo de ordenación rápida (Quicksort).",
    difficulty: "medium" as const,
    status: "pending" as const,
    timeLimit: 45,
    attempts: 0,
    maxAttempts: 5,
    dueDate: "18 Ene 2026",
    subject: "Algoritmos",
  },
  {
    id: "5",
    title: "Grafos - BFS",
    description: "Implementa el algoritmo de búsqueda en anchura (BFS) para grafos.",
    difficulty: "hard" as const,
    status: "pending" as const,
    timeLimit: 60,
    attempts: 0,
    maxAttempts: 5,
    dueDate: "20 Ene 2026",
    subject: "Algoritmos",
  },
  {
    id: "6",
    title: "Clase Persona",
    description: "Crea una clase Persona con atributos y métodos básicos.",
    difficulty: "easy" as const,
    status: "completed" as const,
    timeLimit: 20,
    attempts: 1,
    maxAttempts: 5,
    subject: "POO",
  },
];

const StudentExercises = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [difficultyFilter, setDifficultyFilter] = useState("all");

  const filteredExercises = allExercises.filter((exercise) => {
    const matchesSearch = exercise.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || exercise.status === statusFilter;
    const matchesDifficulty = difficultyFilter === "all" || exercise.difficulty === difficultyFilter;
    return matchesSearch && matchesStatus && matchesDifficulty;
  });

  const statusCounts = {
    all: allExercises.length,
    completed: allExercises.filter((e) => e.status === "completed").length,
    pending: allExercises.filter((e) => e.status === "pending").length,
    failed: allExercises.filter((e) => e.status === "failed").length,
  };

  return (
    <DashboardLayout userRole="student" userName="María García">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Todos los Ejercicios</h1>
        <p className="text-muted-foreground">
          Explora y resuelve los ejercicios de tus asignaturas.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar ejercicios..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-3">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-40">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos ({statusCounts.all})</SelectItem>
              <SelectItem value="completed">Completados ({statusCounts.completed})</SelectItem>
              <SelectItem value="pending">Pendientes ({statusCounts.pending})</SelectItem>
              <SelectItem value="failed">Fallidos ({statusCounts.failed})</SelectItem>
            </SelectContent>
          </Select>
          <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
            <SelectTrigger className="w-40">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Dificultad" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              <SelectItem value="easy">Fácil</SelectItem>
              <SelectItem value="medium">Media</SelectItem>
              <SelectItem value="hard">Difícil</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Status Badges */}
      <div className="flex flex-wrap gap-2 mb-6">
        {["all", "completed", "pending", "failed"].map((status) => (
          <Badge
            key={status}
            variant={statusFilter === status ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setStatusFilter(status)}
          >
            {status === "all" && "Todos"}
            {status === "completed" && "✓ Completados"}
            {status === "pending" && "⏳ Pendientes"}
            {status === "failed" && "✗ Fallidos"}
            <span className="ml-1">({statusCounts[status as keyof typeof statusCounts]})</span>
          </Badge>
        ))}
      </div>

      {/* Exercise List */}
      <div className="space-y-4">
        {filteredExercises.length > 0 ? (
          filteredExercises.map((exercise) => (
            <ExerciseCard key={exercise.id} {...exercise} />
          ))
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            <p>No se encontraron ejercicios con los filtros seleccionados.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default StudentExercises;
