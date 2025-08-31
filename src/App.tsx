import { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import PageTransition from "./components/PageTransition";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import SelectedWorkPage from "./pages/SelectedWorkPage";
import ContactPage from "./pages/ContactPage";
import { GSAPAnimations } from "./animations/gsapAnimations";

function App() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<HTMLDivElement>(null);
  const [, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Initialize GSAP animations
    const initAnimations = async () => {
      await GSAPAnimations.init();
      await GSAPAnimations.initScrollAnimations();
      await GSAPAnimations.initNavigationAnimations();

      // Delay hero animations slightly for better loading experience
      setTimeout(async () => {
        await GSAPAnimations.initHeroAnimations();
        await GSAPAnimations.initHoverAnimations();
        await GSAPAnimations.initParticleAnimations();
      }, 300);
    };

    initAnimations();

    // Enhanced custom cursor functionality
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add("hover");
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove("hover");
      }
    };

    // Add event listeners for custom cursor
    document.addEventListener("mousemove", handleMouseMove);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, .project-item, .origami-logo, [role='button']"
    );
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (this: HTMLAnchorElement, e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href")!);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
      GSAPAnimations.killAllAnimations();
    };
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = async () => {
      await GSAPAnimations.refreshScrollTrigger();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <div
        ref={appRef}
        className="App relative min-h-screen bg-background text-text-primary font-primary"
      >
        {/* Enhanced Custom Cursor */}
        <div
          ref={cursorRef}
          className="custom-cursor hidden lg:block fixed w-4 h-4 bg-accent-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
          style={{
            transform: `translate(-50%, -50%) scale(1)`,
          }}
        >
          <div className="w-full h-full bg-accent-400 rounded-full animate-ping opacity-75"></div>
        </div>

        {/* Navigation */}
        <Navigation />

        {/* Scroll to top on route change */}
        <ScrollToTop />

        {/* Main Content with Page Transitions */}
        <PageTransition>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/work" element={<SelectedWorkPage />} />
            <Route path="/selected-work" element={<SelectedWorkPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </PageTransition>

        {/* Enhanced Footer */}
        <footer className="relative py-20 bg-gradient-to-t from-background to-surface border-t border-border">
          <div className="container mx-auto px-container">
            <div className="grid lg:grid-cols-4 gap-12 mb-16">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <h3 className="text-3xl font-display font-bold text-white mb-6">
                  Bludora
                </h3>
                <p className="text-text-secondary leading-relaxed mb-6 max-w-md">
                  A software development studio crafting digital experiences
                  that push the boundaries of technology and creativity.
                </p>
                <div className="flex space-x-4">
                  {["GitHub", "Twitter", "Instagram", "LinkedIn"].map(
                    (platform) => (
                      <a
                        key={platform}
                        href={`#${platform.toLowerCase()}`}
                        className="w-10 h-10 bg-surface rounded-full flex items-center justify-center text-text-muted hover:text-accent-400 hover:bg-accent-400/10 transition-all duration-300"
                        aria-label={platform}
                      >
                        {platform.charAt(0).toUpperCase()}
                      </a>
                    )
                  )}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-display font-bold text-white mb-6">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {[
                    { name: "About", href: "/about" },
                    { name: "Services", href: "/services" },
                    { name: "Selected Work", href: "/work" },
                    { name: "Contact", href: "#contact" },
                  ].map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-text-muted hover:text-accent-400 transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-lg font-display font-bold text-white mb-6">
                  Get in Touch
                </h4>
                <div className="space-y-3">
                  <a
                    href="mailto:bludorasoftware@outlook.com"
                    className="block text-text-muted hover:text-accent-400 transition-colors duration-300"
                  >
                    bludorasoftware@outlook.com
                  </a>
                  <p className="text-text-muted">
                    Ready to start your project?
                  </p>
                  <Link
                    to="/contact"
                    className="px-6 py-3 bg-accent-400 text-white font-display font-bold rounded-full hover:bg-accent-500 transition-all duration-300 transform hover:scale-105 inline-block"
                  >
                    Let's Talk
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col lg:flex-row justify-between items-center pt-8 border-t border-border">
              <div className="text-text-muted text-sm mb-4 lg:mb-0">
                © 2024 Bludora. All rights reserved.
              </div>
              <div className="flex space-x-8">
                <a
                  href="#privacy"
                  className="text-text-muted hover:text-accent-400 transition-colors duration-300 text-sm"
                >
                  Privacy Policy
                </a>
                <a
                  href="#terms"
                  className="text-text-muted hover:text-accent-400 transition-colors duration-300 text-sm"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
