import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import StudentDashboard from "./pages/student/Dashboard";
import StudentSubjects from "./pages/student/Subjects";
import StudentExercises from "./pages/student/Exercises";
import StudentProgress from "./pages/student/Progress";
import ExerciseView from "./pages/student/ExerciseView";
import ProfessorDashboard from "./pages/professor/Dashboard";
import ProfessorStudents from "./pages/professor/Students";
import ProfessorExercises from "./pages/professor/Exercises";
import ProfessorAnalytics from "./pages/professor/Analytics";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminUsers from "./pages/admin/Users";
import AdminDegrees from "./pages/admin/Degrees";
import AdminSubjects from "./pages/admin/Subjects";
import AdminExercises from "./pages/admin/Exercises";
import AdminSecurity from "./pages/admin/Security";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          
          {/* Student Routes */}
          <Route path="/dashboard" element={<StudentDashboard />} />
          <Route path="/dashboard/subjects" element={<StudentSubjects />} />
          <Route path="/dashboard/exercises" element={<StudentExercises />} />
          <Route path="/dashboard/progress" element={<StudentProgress />} />
          <Route path="/dashboard/exercise/:id" element={<ExerciseView />} />
          
          {/* Professor Routes */}
          <Route path="/professor" element={<ProfessorDashboard />} />
          <Route path="/professor/students" element={<ProfessorStudents />} />
          <Route path="/professor/exercises" element={<ProfessorExercises />} />
          <Route path="/professor/analytics" element={<ProfessorAnalytics />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/degrees" element={<AdminDegrees />} />
          <Route path="/admin/subjects" element={<AdminSubjects />} />
          <Route path="/admin/exercises" element={<AdminExercises />} />
          <Route path="/admin/security" element={<AdminSecurity />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
