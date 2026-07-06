import { Link } from "react-router-dom";
import RotatingText from "./RotatingText";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden">
      {/* Premium Ambient Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glowing Orbs */}
        <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-accent-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        <div 
          className="absolute bottom-[5%] right-[10%] w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-secondary-500/20 rounded-full blur-[150px] mix-blend-screen animate-pulse" 
          style={{ animationDelay: "2s" }}
        ></div>
        <div 
          className="absolute top-[40%] left-[45%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-primary-500/30 rounded-full blur-[100px] mix-blend-screen animate-pulse" 
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Subtle Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
        
        {/* Radial vignette to focus center */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#050505] opacity-80"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-0">
        
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in-up shadow-[0_0_20px_rgba(255,255,255,0.05)]">
          <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse"></span>
          <span className="text-xs sm:text-sm font-medium text-white/80 tracking-widest uppercase">Welcome to the future of digital</span>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold mb-6 leading-tight tracking-tighter">
          <span className="bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent inline-block animate-slide-up-delay-1">B</span>
          <span className="bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent inline-block animate-slide-up-delay-2">l</span>
          <span className="bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent inline-block animate-slide-up-delay-3">u</span>
          <span className="bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent inline-block animate-slide-up-delay-4">d</span>
          <span className="bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent inline-block animate-slide-up-delay-5">o</span>
          <span className="bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent inline-block animate-slide-up-delay-6">r</span>
          <span className="bg-gradient-to-tr from-accent-600 to-accent-300 bg-clip-text text-transparent inline-block animate-slide-up-delay-7">
            a
          </span>
        </h1>

        {/* Subtitle */}
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-display font-light text-text-secondary mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up px-4 flex flex-col sm:flex-row items-center justify-center gap-2 flex-wrap">
          <span>We craft</span>
          <RotatingText
            texts={[
              "digital experiences",
              "innovative solutions",
              "creative platforms",
              "future technology",
              "amazing websites",
              "powerful applications",
            ]}
            mainClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-accent-400 inline-block px-2"
            staggerFrom="last"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-120%", opacity: 0 }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={3000}
          />
          <span className="text-center sm:text-left mt-2 sm:mt-0">that push the boundaries of technology and creativity.</span>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up-delay px-4 font-light">
          From concept to deployment, we build software that matters. Join us in
          creating the future of digital innovation with uncompromising quality.
        </p>

        {/* Premium CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up-delay-2 px-4">
          <Link
            to="/contact"
            className="group relative w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-accent-400/50 text-white font-display font-medium rounded-full overflow-hidden transition-all duration-500 shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:shadow-[0_0_50px_rgba(59,130,246,0.3)] inline-flex items-center justify-center gap-3"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent-600/20 to-secondary-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10">Start a Project</span>
            <svg 
              className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            to="/work"
            className="group w-full sm:w-auto px-8 py-4 text-white/70 hover:text-white font-display font-medium rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            <span className="border-b border-transparent group-hover:border-white/50 transition-colors pb-1">View Our Work</span>
          </Link>
        </div>

        {/* Social Proof */}
        <div className="mt-20 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto animate-fade-in-up-delay-3 px-4 pt-8 border-t border-white/5">
          <div className="text-center group">
            <div className="text-2xl sm:text-3xl font-display font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
              30+
            </div>
            <div className="text-xs sm:text-sm text-white/40 mt-1 uppercase tracking-wider">Projects</div>
          </div>
          <div className="text-center group">
            <div className="text-2xl sm:text-3xl font-display font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
              5+
            </div>
            <div className="text-xs sm:text-sm text-white/40 mt-1 uppercase tracking-wider">Years</div>
          </div>
          <div className="text-center group">
            <div className="text-2xl sm:text-3xl font-display font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
              100%
            </div>
            <div className="text-xs sm:text-sm text-white/40 mt-1 uppercase tracking-wider">
              Satisfaction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
