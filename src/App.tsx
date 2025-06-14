
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Users from "./pages/admin/Users";
import Bookings from "./pages/admin/Bookings";
import Disputes from "./pages/admin/Disputes";
import Commissions from "./pages/admin/Commissions";
import Finance from "./pages/admin/Finance";
import Notifications from "./pages/admin/Notifications";
import Kyc from "./pages/admin/Kyc";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="disputes" element={<Disputes />} />
            <Route path="commissions" element={<Commissions />} />
            <Route path="finance" element={<Finance />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="kyc" element={<Kyc />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
