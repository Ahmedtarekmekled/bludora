import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { text: "Selected Work", link: "/work" },
    { text: "About", link: "/about" },
    { text: "Services", link: "/services" },
    { text: "Let's chat", link: "/contact" },
  ];

  const socialLinks = [
    {
      label: "IG",
      platform: "Instagram",
      url: "https://www.instagram.com/bludorasoftware/",
    },
  ];

  return (
    <>
      <nav
        className={`navigation fixed top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 lg:top-8 lg:left-8 lg:right-8 z-50 transition-all duration-300 rounded-2xl border ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-border shadow-2xl shadow-background/50"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="flex items-center justify-between p-3 sm:p-4">
          {/* Left Side - Logo and Brand */}
          <div className="flex items-center space-x-3 sm:space-x-6">
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
              <img
                src="/logo1.png"
                alt="Bludora Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 hover:scale-110 transition-transform duration-300"
              />
              <span className="font-display font-bold text-lg sm:text-xl text-white hidden sm:block">
                Bludora
              </span>
            </Link>
          </div>

          {/* Center Navigation - Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => {
              const isActive = location.pathname === item.link;

              return (
                <Link
                  key={index}
                  to={item.link}
                  className={`nav-item text-sm tracking-wide transition-colors duration-200 relative ${
                    isActive ? "text-accent-400" : ""
                  }`}
                >
                  {item.text}
                </Link>
              );
            })}
          </div>

          {/* Right Side - Social Links and Menu */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* Social Links - Desktop */}
            <div className="hidden xl:flex items-center space-x-1">
              <span className="text-text-secondary text-xs mr-3">(Social)</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-400 transition-colors duration-200 text-xs px-2"
                  aria-label={social.platform}
                >
                  {social.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="lg:hidden flex items-center space-x-2 text-text-primary hover:text-accent-400 transition-colors duration-200 bg-surface/20 backdrop-blur-sm rounded-full px-3 py-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.div>
              <span className="text-sm font-display">
                {isMenuOpen ? "Close" : "Menu"}
              </span>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-background/98 backdrop-blur-md z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div
              className="flex flex-col items-center justify-center h-full space-y-8 px-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
            >
              {/* Close button */}
              <motion.button
                className="absolute top-6 right-6 p-3 rounded-full bg-surface/20 backdrop-blur-sm hover:bg-surface/40 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 90 }}
                transition={{ duration: 0.2, delay: 0.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} className="text-white" />
              </motion.button>

              {/* Menu Items */}
              <div className="flex flex-col items-center space-y-8">
                {navigationItems.map((item, index) => {
                  const isActive = location.pathname === item.link;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.1 + index * 0.1,
                        ease: "easeOut",
                      }}
                    >
                      <Link
                        to={item.link}
                        className={`text-2xl sm:text-3xl font-display font-light transition-all duration-300 hover:scale-110 transform ${
                          isActive
                            ? "text-accent-400"
                            : "text-text-primary hover:text-accent-400"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.text}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Mobile Social Links */}
              <motion.div
                className="flex items-center space-x-8 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent-400 transition-colors duration-200 text-lg"
                    aria-label={social.platform}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.label}
                  </motion.a>
                ))}
              </motion.div>

              {/* Mobile CTA */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <Link
                  to="/contact"
                  className="px-8 py-3 bg-accent-400 text-white font-display font-bold rounded-full hover:bg-accent-500 transition-all duration-300 inline-block transform hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Start a Project
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
