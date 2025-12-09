import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import IntroPage from "../pages/IntroPage";
import ResourcesPage from "@/pages/ResourcesPage";
import LegalPage from "@/pages/legal/LegalPage";
import LegalDetail from "@/pages/legal/LegalDetail";

function TrailingSlashWrapper() {
  const location = useLocation();

  if (location.pathname !== "/" && !location.pathname.endsWith("/")) {
    return <Navigate to={location.pathname + "/"} replace />;
  }

  return <Outlet />;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route element={<TrailingSlashWrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sph" element={<IntroPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/legal" element={<LegalPage />} />
            <Route path="/legal/:slug" element={<LegalDetail />} />
        </Route>
      
      </Route>
    </Routes>
  );
}
