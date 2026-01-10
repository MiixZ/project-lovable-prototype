import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Target,
  Clock,
  Award,
  Calendar,
  CheckCircle2,
  XCircle,
  Flame,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const weeklyProgress = [
  { day: "Lun", ejercicios: 3, aciertos: 2 },
  { day: "Mar", ejercicios: 5, aciertos: 4 },
  { day: "Mié", ejercicios: 2, aciertos: 2 },
  { day: "Jue", ejercicios: 4, aciertos: 3 },
  { day: "Vie", ejercicios: 6, aciertos: 5 },
  { day: "Sáb", ejercicios: 1, aciertos: 1 },
  { day: "Dom", ejercicios: 0, aciertos: 0 },
];

const monthlyTrend = [
  { week: "Sem 1", tasa: 65 },
  { week: "Sem 2", tasa: 72 },
  { week: "Sem 3", tasa: 78 },
  { week: "Sem 4", tasa: 85 },
];

const subjectStats = [
  { name: "Estructuras de Datos", completed: 15, total: 20, successRate: 87 },
  { name: "Algoritmos", completed: 6, total: 15, successRate: 75 },
  { name: "POO", completed: 9, total: 10, successRate: 92 },
];

const recentActivity = [
  { date: "Hoy", exercise: "Búsqueda Binaria", status: "completed", time: "12 min" },
  { date: "Ayer", exercise: "Quicksort", status: "failed", time: "45 min" },
  { date: "Ayer", exercise: "Listas Enlazadas", status: "completed", time: "18 min" },
  { date: "Hace 2 días", exercise: "Árbol AVL", status: "completed", time: "35 min" },
  { date: "Hace 3 días", exercise: "Grafos - DFS", status: "failed", time: "60 min" },
];

const StudentProgress = () => {
  return (
    <DashboardLayout userRole="student" userName="María García">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Mi Progreso</h1>
        <p className="text-muted-foreground">
          Visualiza tu evolución y estadísticas de rendimiento.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold">30</p>
                <p className="text-xs text-muted-foreground">Completados</p>
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
                <p className="text-2xl font-bold">85%</p>
                <p className="text-xs text-muted-foreground">Tasa de éxito</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/30 text-accent-foreground">
                <Flame className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold">7</p>
                <p className="text-xs text-muted-foreground">Días de racha</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-chart-2/10 text-chart-2">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold">18m</p>
                <p className="text-xs text-muted-foreground">Tiempo medio</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        {/* Weekly Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              Actividad Semanal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={weeklyProgress}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="day" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="ejercicios" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="aciertos" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Monthly Trend */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              Evolución Mensual
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={monthlyTrend}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="week" className="text-xs" />
                <YAxis className="text-xs" domain={[0, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="tasa"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--primary))" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Subject Progress */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                Progreso por Asignatura
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {subjectStats.map((subject) => (
                <div key={subject.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">{subject.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground">
                        {subject.completed}/{subject.total}
                      </span>
                      <Badge
                        variant="secondary"
                        className={
                          subject.successRate >= 80
                            ? "bg-primary/10 text-primary"
                            : subject.successRate >= 60
                            ? "bg-chart-4/10 text-chart-4"
                            : "bg-destructive/10 text-destructive"
                        }
                      >
                        {subject.successRate}%
                      </Badge>
                    </div>
                  </div>
                  <Progress value={(subject.completed / subject.total) * 100} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Actividad Reciente</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                {activity.status === "completed" ? (
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary" />
                ) : (
                  <XCircle className="h-4 w-4 mt-0.5 text-destructive" />
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{activity.exercise}</p>
                  <p className="text-xs text-muted-foreground">
                    {activity.date} • {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default StudentProgress;
