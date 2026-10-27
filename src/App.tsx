import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { MotionConfig, motion } from "framer-motion";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";
import MobileCTA from "./components/MobileCTA";
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/SelectedWorkPage";
import ProjectPage from "./pages/ProjectPage";
import StartProjectPage from "./pages/StartProjectPage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/:slug" element={<ProjectPage />} />
        <Route path="/selected-work" element={<Navigate to="/work" replace />} />
        <Route path="/start" element={<StartProjectPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </motion.div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <div className="grain min-h-screen">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-paper focus:px-4 focus:py-2 focus:text-ink"
          >
            Skip to content
          </a>
          <ScrollProgress />
          <Navigation />
          <ScrollToTop />
          <main id="main">
            <AnimatedRoutes />
          </main>
          <Footer />
          <MobileCTA />
        </div>
      </MotionConfig>
    </BrowserRouter>
  );
}
