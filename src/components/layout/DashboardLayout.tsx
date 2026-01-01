import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Code2,
  LayoutDashboard,
  BookOpen,
  FileCode,
  Users,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  BarChart3,
  Shield,
  Bell,
} from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
  userRole: "student" | "professor" | "admin";
  userName: string;
}

const studentLinks = [
  { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/dashboard/subjects", icon: BookOpen, label: "Asignaturas" },
  { to: "/dashboard/exercises", icon: FileCode, label: "Ejercicios" },
  { to: "/dashboard/progress", icon: BarChart3, label: "Mi Progreso" },
];

const professorLinks = [
  { to: "/professor", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/professor/students", icon: Users, label: "Estudiantes" },
  { to: "/professor/exercises", icon: FileCode, label: "Ejercicios" },
  { to: "/professor/analytics", icon: BarChart3, label: "Estadísticas" },
];

const adminLinks = [
  { to: "/admin", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/admin/users", icon: Users, label: "Usuarios" },
  { to: "/admin/degrees", icon: GraduationCap, label: "Titulaciones" },
  { to: "/admin/subjects", icon: BookOpen, label: "Asignaturas" },
  { to: "/admin/exercises", icon: FileCode, label: "Ejercicios" },
  { to: "/admin/security", icon: Shield, label: "Seguridad" },
];

export const DashboardLayout = ({ children, userRole, userName }: DashboardLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const links = userRole === "student" ? studentLinks : userRole === "professor" ? professorLinks : adminLinks;

  const getRoleBadge = () => {
    switch (userRole) {
      case "student":
        return { label: "Estudiante", color: "bg-accent text-accent-foreground" };
      case "professor":
        return { label: "Profesor", color: "bg-primary/10 text-primary" };
      case "admin":
        return { label: "Administrador", color: "bg-destructive/10 text-destructive" };
    }
  };

  const roleBadge = getRoleBadge();

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen bg-card border-r border-border transition-all duration-300 z-40 ${
          collapsed ? "w-16" : "w-64"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-16 flex items-center justify-between px-4 border-b border-border">
            {!collapsed && (
              <Link to="/" className="flex items-center gap-2 text-lg font-bold text-primary">
                <Code2 className="h-6 w-6 shrink-0" />
                <span>CodeEval</span>
              </Link>
            )}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-1.5 rounded-md hover:bg-muted/20 text-muted-foreground"
            >
              {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
            {links.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/70 hover:bg-muted/20 hover:text-foreground"
                  }`}
                >
                  <link.icon className="h-5 w-5 shrink-0" />
                  {!collapsed && <span className="text-sm font-medium">{link.label}</span>}
                </Link>
              );
            })}
          </nav>

          {/* User Section */}
          <div className="p-3 border-t border-border">
            <div className={`flex items-center gap-3 ${collapsed ? "justify-center" : ""}`}>
              <Avatar className="h-9 w-9 shrink-0">
                <AvatarFallback className="bg-primary/10 text-primary text-sm">
                  {userName.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              {!collapsed && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{userName}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${roleBadge.color}`}>
                    {roleBadge.label}
                  </span>
                </div>
              )}
            </div>
            {!collapsed && (
              <div className="mt-3 flex gap-2">
                <Button variant="ghost" size="sm" className="flex-1" asChild>
                  <Link to="/settings">
                    <Settings className="h-4 w-4 mr-1" />
                    Ajustes
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/">
                    <LogOut className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${collapsed ? "ml-16" : "ml-64"}`}>
        {/* Top Bar */}
        <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm flex items-center justify-between px-6 sticky top-0 z-30">
          <h1 className="text-lg font-semibold">
            {links.find((l) => l.to === location.pathname)?.label || "Dashboard"}
          </h1>
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-lg hover:bg-muted/20 text-muted-foreground">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-destructive rounded-full" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
};
