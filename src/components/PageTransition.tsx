import { useState, useEffect, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import PageLoader from "./PageLoader";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const [previousPath, setPreviousPath] = useState(location.pathname);

  useEffect(() => {
    // Only trigger loading when the actual path changes
    if (location.pathname !== previousPath) {
      setIsLoading(true);
      setPreviousPath(location.pathname);

      // Set a minimum loading time of 800ms for smooth transition
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 800);

      return () => {
        clearTimeout(timer);
        // Ensure loading state is cleared on cleanup
        setIsLoading(false);
      };
    }
  }, [location.pathname, previousPath]);

  // Fallback: ensure loading never gets stuck for more than 2 seconds
  useEffect(() => {
    if (isLoading) {
      const fallbackTimer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return () => clearTimeout(fallbackTimer);
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <PageLoader key="loader" isLoading={isLoading} />
        ) : (
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: 0.1,
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
