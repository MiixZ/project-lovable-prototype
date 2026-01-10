import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  TrendingUp,
  Users,
  FileCode,
  Clock,
  Target,
  Award,
} from "lucide-react";

const exercisePerformance = [
  { name: "Burbuja", successRate: 82, avgTime: 12 },
  { name: "Binaria", successRate: 68, avgTime: 25 },
  { name: "ABB", successRate: 45, avgTime: 45 },
  { name: "Quicksort", successRate: 72, avgTime: 30 },
  { name: "BFS", successRate: 40, avgTime: 50 },
];

const weeklySubmissions = [
  { week: "Sem 1", submissions: 120, accepted: 85 },
  { week: "Sem 2", submissions: 145, accepted: 102 },
  { week: "Sem 3", submissions: 98, accepted: 72 },
  { week: "Sem 4", submissions: 167, accepted: 128 },
];

const difficultyDistribution = [
  { name: "Fácil", value: 35, color: "hsl(var(--chart-2))" },
  { name: "Media", value: 45, color: "hsl(var(--chart-4))" },
  { name: "Difícil", value: 20, color: "hsl(var(--destructive))" },
];

const topStudents = [
  { name: "Laura Jiménez", exercises: 30, successRate: 95 },
  { name: "María García", exercises: 28, successRate: 92 },
  { name: "Carlos Rodríguez", exercises: 25, successRate: 78 },
  { name: "Diego Martín", exercises: 22, successRate: 80 },
  { name: "Ana Fernández", exercises: 15, successRate: 65 },
];

const ProfessorAnalytics = () => {
  return (
    <DashboardLayout userRole="professor" userName="Dr. Juan Martínez">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-1">Estadísticas</h1>
          <p className="text-muted-foreground">
            Analiza el rendimiento de tus estudiantes y ejercicios.
          </p>
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Seleccionar grupo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los grupos</SelectItem>
            <SelectItem value="a1">Grupo A1</SelectItem>
            <SelectItem value="a2">Grupo A2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold">45</p>
                <p className="text-xs text-muted-foreground">Estudiantes</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-chart-2/10 text-chart-2">
                <FileCode className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold">530</p>
                <p className="text-xs text-muted-foreground">Envíos totales</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-chart-4/10 text-chart-4">
                <Target className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold">76%</p>
                <p className="text-xs text-muted-foreground">Tasa de éxito</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/30 text-accent-foreground">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold">28m</p>
                <p className="text-xs text-muted-foreground">Tiempo medio</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        {/* Exercise Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              Rendimiento por Ejercicio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={exercisePerformance}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="name" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="successRate" name="Tasa éxito %" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Weekly Submissions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <FileCode className="h-4 w-4 text-primary" />
              Envíos Semanales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={weeklySubmissions}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="week" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="submissions"
                  name="Envíos"
                  stroke="hsl(var(--muted-foreground))"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="accepted"
                  name="Aceptados"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Difficulty Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Distribución por Dificultad</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={difficultyDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {difficultyDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-4">
              {difficultyDistribution.map((item) => (
                <div key={item.name} className="flex items-center gap-2 text-sm">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Students */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Award className="h-4 w-4 text-primary" />
              Top Estudiantes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topStudents.map((student, index) => (
                <div key={student.name} className="flex items-center gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{student.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {student.exercises} ejercicios completados
                    </p>
                  </div>
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
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ProfessorAnalytics;
