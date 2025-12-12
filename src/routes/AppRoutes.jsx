import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import IntroPage from "../pages/IntroPage";
import ResourcesPage from "@/pages/ResourcesPage";
import LegalPage from "@/pages/legal/LegalPage";
import LegalDetail from "@/pages/legal/LegalDetail";
import Contact from "@/pages/Contact";
import Events from "@/pages/Events";
import Community from "@/pages/Community";
import MediaPage from "@/pages/MediaPage";
import UseCases from "@/pages/usecases/UseCases";
import UsecaseDetail from "@/pages/usecases/UsecaseDetail";
import FaqPage from "@/pages/FaqPage";
import NotFound from "@/components/NotFound";
import StatusPage from "@/pages/StatusPage";

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
          <Route path="/sph" element={<IntroPage />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/use-cases/:slug" element={<UsecaseDetail />} />
          <Route path="/faqs" element={<FaqPage />} />

          {/* More links */}
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/legal/:slug" element={<LegalDetail />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/community" element={<Community />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/status" element={<StatusPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
