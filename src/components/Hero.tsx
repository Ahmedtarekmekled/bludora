import { Link } from "react-router-dom";
import RotatingText from "./RotatingText";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-surface to-background-light overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-accent-500 opacity-20 rounded-full animate-bounce"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-secondary-500 opacity-30 transform rotate-45 animate-pulse"></div>
        <div className="absolute top-1/2 left-3/4 w-4 h-12 bg-accent-400 opacity-25 transform rotate-12 animate-ping"></div>
        <div
          className="absolute bottom-1/4 left-1/2 w-10 h-4 bg-secondary-600 opacity-20 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Badge */}
        <div className="mt-8 sm:mt-16 inline-flex items-center space-x-2 bg-surface/90 backdrop-blur-sm border border-accent-400/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-400 rounded-full animate-pulse"></span>
          <span className="text-xs sm:text-sm font-mono text-accent-400 uppercase tracking-wider">
            Digital Innovation Studio
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold text-white mb-4 sm:mb-6 leading-none tracking-tight">
          <span className="inline-block animate-slide-up-delay-1">B</span>
          <span className="inline-block animate-slide-up-delay-2">l</span>
          <span className="inline-block animate-slide-up-delay-3">u</span>
          <span className="inline-block animate-slide-up-delay-4">d</span>
          <span className="inline-block animate-slide-up-delay-5">o</span>
          <span className="inline-block animate-slide-up-delay-6">r</span>
          <span className="inline-block animate-slide-up-delay-7 text-accent-400">
            a
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-display font-light text-text-secondary mb-6 sm:mb-8 max-w-5xl mx-auto leading-relaxed animate-fade-in-up px-4">
          We craft{" "}
          <RotatingText
            texts={[
              "digital experiences",
              "innovative solutions",
              "creative platforms",
              "future technology",
              "amazing websites",
              "powerful applications",
            ]}
            mainClassName="text-accent-400 font-medium"
            staggerFrom="last"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-120%", opacity: 0 }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={3000}
          />{" "}
          that push the boundaries of technology and creativity.
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-fade-in-up-delay px-4">
          From concept to deployment, we build software that matters. Join us in
          creating the future of digital innovation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in-up-delay-2 px-4">
          <Link
            to="/contact"
            className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-accent-400 text-white font-display font-bold rounded-full hover:bg-accent-500 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-accent-400/25 inline-block"
          >
            <span className="flex items-center justify-center space-x-2">
              <span>Start a Project</span>
              <span className="transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </span>
          </Link>
          <Link
            to="/work"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/20 text-white font-display font-medium rounded-full hover:border-accent-400 hover:text-accent-400 transition-all duration-300 backdrop-blur-sm inline-block text-center"
          >
            View Our Work
          </Link>
        </div>

        {/* Social Proof */}
        <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-sm sm:max-w-md mx-auto animate-fade-in-up-delay-3 px-4">
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-display font-bold text-accent-400">
              50+
            </div>
            <div className="text-xs sm:text-sm text-text-muted">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-display font-bold text-accent-400">
              5+
            </div>
            <div className="text-xs sm:text-sm text-text-muted">Years</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-display font-bold text-accent-400">
              100%
            </div>
            <div className="text-xs sm:text-sm text-text-muted">
              Satisfaction
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
    </section>
  );
}
