import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "../data/site";

/** Phone-only action bar that slides up once the visitor has scrolled past the first screen. */
export default function MobileCTA() {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  if (pathname === "/start" || pathname === "/contact") return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-x-3 bottom-3 z-50 flex gap-2 rounded-full border border-line bg-ink/85 p-1.5 shadow-2xl backdrop-blur-xl md:hidden"
          style={{ marginBottom: "env(safe-area-inset-bottom)" }}
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <Link to="/start" className="btn-accent flex-1 !py-3">
            Plan your project <ArrowRight size={16} />
          </Link>
          <a
            href={whatsappLink("Hi Bludora, I'd like to talk about a project.")}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex w-12 shrink-0 items-center justify-center rounded-full bg-[#25d366] text-white"
          >
            <MessageCircle size={20} />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
