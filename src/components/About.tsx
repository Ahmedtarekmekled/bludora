import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Play,
  Code,
  Palette,
  Zap,
  Users,
  Globe,
  Award,
  Heart,
  Coffee,
  Rocket,
} from "lucide-react";
import DecryptedText from "./DecryptedText";

export default function About() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [currentGreeting, setCurrentGreeting] = useState(0);

  const greetings = [
    "Hello World", // English
    "Bonjour Monde", // French
    "Hola Mundo", // Spanish
    "Hallo Welt", // German
    "Merhaba Dünya", // Turkish
    "Ciao Mondo", // Italian
    "こんにちは世界", // Japanese
    "你好世界", // Chinese
    "Привет мир", // Russian
    "مرحبا بالعالم", // Arabic
    "안녕하세요 세계", // Korean
    "Olá Mundo", // Portuguese
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [greetings.length]);

  const handlePlayShowreel = () => {
    // Placeholder for video modal functionality
    console.log("Play showreel");
  };

  const stats = [
    { icon: Award, value: "50+", label: "Projects Delivered" },
    { icon: Users, value: "30+", label: "Happy Clients" },
    { icon: Globe, value: "15+", label: "Countries Served" },
    { icon: Coffee, value: "1000+", label: "Cups of Coffee" },
  ];

  const values = [
    {
      icon: Code,
      title: "Technical Excellence",
      description:
        "We believe in writing clean, maintainable code that stands the test of time.",
    },
    {
      icon: Palette,
      title: "Design First",
      description:
        "Every pixel matters. We craft beautiful interfaces that users love to interact with.",
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description:
        "Speed and efficiency are not optional. We optimize for the best possible user experience.",
    },
    {
      icon: Heart,
      title: "Passionate Team",
      description:
        "We love what we do, and it shows in every project we deliver.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 section-container">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-32">
          <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-4 mb-8">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-text-muted">
              (2)
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display font-bold text-white">
              <DecryptedText
                text="About Bludora"
                animateOn="view"
                speed={50}
                maxIterations={25}
                sequential={true}
                revealDirection="center"
                className="text-white"
                encryptedClassName="text-accent-400/50"
              />
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We're a passionate team of developers, designers, and digital
            innovators crafting the future of web experiences.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left Side - Interactive Greeting */}
          <div className="space-y-8">
            {/* Rotating Greeting */}
            <div className="relative">
              <div className="overflow-hidden h-20 sm:h-24 lg:h-28 flex items-center bg-gradient-to-r from-surface-dark via-surface to-surface-dark rounded-2xl p-6 lg:p-8 border border-border">
                <div ref={marqueeRef} className="w-full text-center">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-display font-light text-accent-400 transition-all duration-500 ease-in-out inline-block">
                    {greetings[currentGreeting]}
                  </span>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent-400 rounded-full animate-pulse"></div>
            </div>

            {/* Story Content */}
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                <DecryptedText
                  text="Our Story"
                  animateOn="view"
                  speed={30}
                  maxIterations={15}
                  className="text-white"
                  encryptedClassName="text-accent-400/50"
                />
              </h3>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p className="text-base sm:text-lg">
                  <DecryptedText
                    text="Bludora was born from a simple belief: technology should enhance human experiences, not complicate them. We started as a small team of developers who were frustrated with the disconnect between beautiful design and functional code."
                    animateOn="view"
                    speed={20}
                    maxIterations={12}
                    sequential={true}
                    revealDirection="start"
                    className="text-text-secondary"
                    encryptedClassName="text-accent-400/30"
                  />
                </p>
                <p className="text-base sm:text-lg">
                  <DecryptedText
                    text="Today, we're a growing studio that combines technical expertise with creative vision to build digital products that matter. From healthcare platforms to financial dashboards, we tackle complex challenges with innovative solutions."
                    animateOn="view"
                    speed={25}
                    maxIterations={10}
                    sequential={true}
                    revealDirection="center"
                    className="text-text-secondary"
                    encryptedClassName="text-secondary-400/30"
                  />
                </p>
                <p className="text-base sm:text-lg">
                  <DecryptedText
                    text="Every project is an opportunity to push boundaries, learn something new, and create experiences that make a difference in people's lives."
                    animateOn="view"
                    speed={30}
                    maxIterations={8}
                    sequential={true}
                    revealDirection="end"
                    className="text-text-secondary"
                    encryptedClassName="text-accent-400/30"
                  />
                </p>
              </div>
            </div>

            {/* Technology Stack */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                "React",
                "TypeScript",
                "Node.js",
                "Python",
                "WebGL",
                "AI/ML",
                "Three.js",
                "Next.js",
                "MongoDB",
              ].map((tech, index) => (
                <div
                  key={tech}
                  className="px-4 py-2 bg-surface-dark border border-border rounded-lg text-center text-text-secondary text-sm hover:border-accent-400/50 hover:text-accent-400 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Logo and Video */}
          <div className="flex flex-col items-center space-y-8">
            {/* Large Logo */}
            <div className="relative group">
              <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 p-8 bg-gradient-to-br from-surface-dark via-surface to-surface-light rounded-3xl border border-border group-hover:border-accent-400/50 transition-all duration-500 flex items-center justify-center">
                <img
                  src="/logo1.png"
                  alt="Bludora Logo"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-2 bg-secondary-500 rounded-full opacity-30 animate-bounce"></div>
            </div>

            {/* Play Button */}
            <button
              onClick={handlePlayShowreel}
              className="group flex items-center space-x-4 bg-surface-dark hover:bg-surface-light border border-border hover:border-accent-400 rounded-full px-8 py-4 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play
                  size={20}
                  className="text-white ml-1"
                  fill="currentColor"
                />
              </div>
              <div className="text-left">
                <span className="block text-xs uppercase tracking-wide text-text-muted">
                  Watch
                </span>
                <span className="block text-sm font-display font-bold text-white">
                  Our Showreel
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-surface-dark rounded-2xl border border-border hover:border-accent-400/50 transition-all duration-300 group"
              >
                <IconComponent
                  size={32}
                  className="text-accent-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="text-3xl font-display font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-text-muted text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Values Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              <DecryptedText
                text="What Drives Us"
                animateOn="view"
                speed={40}
                maxIterations={20}
                className="text-white"
                encryptedClassName="text-accent-400/50"
              />
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              <DecryptedText
                text="Our core values shape every decision we make and every line of code we write."
                animateOn="view"
                speed={25}
                maxIterations={10}
                className="text-text-secondary"
                encryptedClassName="text-accent-400/30"
              />
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-surface-dark p-8 rounded-2xl border border-border hover:border-accent-400/50 transition-all duration-300 group"
                >
                  <IconComponent
                    size={40}
                    className="text-accent-400 mb-6 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h4 className="text-xl font-display font-bold text-white mb-4">
                    {value.title}
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-accent-400/10 via-secondary-500/10 to-accent-400/10 rounded-3xl p-8 lg:p-12 border border-accent-400/20">
            <Rocket size={48} className="text-accent-400 mx-auto mb-6" />
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with our
              expertise and passion.
            </p>
            <Link
              to="/contact"
              className="px-8 py-4 bg-accent-400 hover:bg-accent-500 text-white font-display font-bold rounded-full transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
