import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import heroBg from "@/assets/hero-bg.jpg";
import {
  Code2,
  Zap,
  Shield,
  BarChart3,
  Users,
  CheckCircle2,
  ArrowRight,
  Play,
  FileCode,
  GraduationCap,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Evaluación Instantánea",
    description:
      "Obtén retroalimentación inmediata sobre tu código con nuestro sistema de evaluación automática.",
  },
  {
    icon: Shield,
    title: "Ejecución Segura",
    description:
      "Tu código se ejecuta en entornos aislados garantizando la seguridad del sistema.",
  },
  {
    icon: BarChart3,
    title: "Seguimiento de Progreso",
    description:
      "Visualiza tu evolución con estadísticas detalladas y métricas de rendimiento.",
  },
  {
    icon: Users,
    title: "Gestión de Grupos",
    description:
      "Profesores pueden gestionar estudiantes y monitorizar el progreso del grupo.",
  },
  {
    icon: FileCode,
    title: "Múltiples Lenguajes",
    description:
      "Soporte para Python, Java, C++, C y JavaScript con configuración flexible.",
  },
  {
    icon: GraduationCap,
    title: "Estructura Académica",
    description:
      "Organiza contenido por titulaciones, asignaturas y temarios.",
  },
];

const stats = [
  { value: "10+", label: "Lenguajes soportados" },
  { value: "99.9%", label: "Disponibilidad" },
  { value: "< 2s", label: "Tiempo de respuesta" },
  { value: "24/7", label: "Soporte técnico" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        </div>

        <div className="container relative z-10 px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Code2 className="h-4 w-4" />
              Plataforma de Evaluación Automática
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Aprende a programar con{" "}
              <span className="text-primary">retroalimentación instantánea</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Plataforma educativa para la evaluación automática de ejercicios de programación.
              Envía tu código, recibe resultados al instante y mejora tus habilidades.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link to="/login">
                  Comenzar ahora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link to="/demo">
                  <Play className="mr-2 h-5 w-5" />
                  Ver demo
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Todo lo que necesitas para aprender
            </h2>
            <p className="text-muted-foreground text-lg">
              Una plataforma completa diseñada para estudiantes y profesores de programación.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30"
              >
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Cómo funciona?</h2>
            <p className="text-muted-foreground text-lg">
              Tres simples pasos para empezar a mejorar tus habilidades de programación.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Selecciona un ejercicio",
                description:
                  "Explora el temario de tu asignatura y elige el ejercicio que quieras resolver.",
              },
              {
                step: "02",
                title: "Escribe tu solución",
                description:
                  "Usa nuestro editor de código integrado para escribir tu solución en el lenguaje configurado.",
              },
              {
                step: "03",
                title: "Recibe retroalimentación",
                description:
                  "Envía tu código y obtén resultados instantáneos con información detallada.",
              },
            ].map((item, index) => (
              <div key={item.step} className="relative text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-6">
                  {item.step}
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-primary/20" />
                )}
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary/5">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              ¿Listo para empezar?
            </h2>
            <p className="text-lg text-muted-foreground">
              Únete a nuestra plataforma y comienza a mejorar tus habilidades de programación hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/login">
                  <CheckCircle2 className="mr-2 h-5 w-5" />
                  Acceder a la plataforma
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-xl font-bold text-primary">
              <Code2 className="h-6 w-6" />
              <span>CodeEval</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-foreground transition-colors">
                Privacidad
              </Link>
              <Link to="/terms" className="hover:text-foreground transition-colors">
                Términos
              </Link>
              <Link to="/contact" className="hover:text-foreground transition-colors">
                Contacto
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 CodeEval. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
