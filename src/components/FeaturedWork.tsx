import { Link } from "react-router-dom";
import { ExternalLink, Award, TrendingUp } from "lucide-react";

interface Project {
  name: string;
  subtitle: string;
  description: string;
  category: string;
  technologies: string[];
  link?: string;
  status: string;
  year: string;
  metrics?: {
    label: string;
    value: string;
    icon: string;
  }[];
  image: string;
}

export default function FeaturedWork() {
  const projects: Project[] = [
    {
      name: "The Royal Perfumes",
      subtitle: "Luxury E-commerce Platform",
      description:
        "A premium e-commerce platform for luxury perfumes, featuring a sleek design, responsive layout, and seamless shopping experience with Supabase and Next.js.",
      category: "E-commerce",
      technologies: [
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "Framer Motion",
      ],
      link: "https://www.royalperfumes.company/",
      status: "Live",
      year: "2026",
      image: "✨",
      metrics: [
        { label: "Modern Design", value: "100%", icon: "🎨" },
        { label: "Performance", value: "Fast", icon: "⚡" },
        { label: "Responsive", value: "100%", icon: "📱" },
      ],
    },
    {
      name: "Prestige Fly",
      subtitle: "International Travel & Education Services",
      description:
        "A modern, responsive Next.js 14 website offering comprehensive international travel and education services with bilingual support, interactive elements, and performance optimization.",
      category: "Travel & Education",
      technologies: [
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "GSAP",
        "Three.js",
        "Framer Motion",
      ],
      link: "https://prestige-fly-yxnm.vercel.app/",
      status: "Live",
      year: "2025",
      image: "✈️",
      metrics: [
        { label: "Bilingual Support", value: "EN/FR", icon: "🌍" },
        { label: "Performance", value: "Fast", icon: "⚡" },
        { label: "Responsive Design", value: "100%", icon: "📱" },
      ],
    },
    {
      name: "Dr. Alaa Clinic",
      subtitle: "Medical Practice Platform",
      description:
        "A comprehensive digital platform for Dr. Alaa's medical practice, offering seamless appointment booking, patient resource management, and a modern healthcare experience.",
      category: "Healthcare Tech",
      technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "React Hook Form"],
      link: "https://dr-alaa.vercel.app/",
      status: "Live",
      year: "2026",
      image: "🩺",
      metrics: [
        { label: "Patient Experience", value: "99%", icon: "⭐" },
        { label: "Booking Efficiency", value: "+50%", icon: "📈" },
        { label: "Mobile Responsive", value: "100%", icon: "📱" },
      ],
    },
    {
      name: "Bisat Next",
      subtitle: "Modern E-commerce Solution",
      description:
        "An advanced e-commerce web application featuring high-performance rendering, dynamic product filtering, and a fully responsive shopping cart experience.",
      category: "E-commerce",
      technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
      link: "https://bisatim.com/",
      status: "Live",
      year: "2026",
      image: "🛒",
      metrics: [
        { label: "Page Load Speed", value: "<1s", icon: "⚡" },
        { label: "Conversion Rate", value: "+30%", icon: "📈" },
        { label: "UI Experience", value: "Modern", icon: "✨" },
      ],
    },
    {
      name: "AI ContentStudio",
      subtitle: "Machine Learning Platform",
      description:
        "Intelligent content creation platform leveraging advanced AI models to generate, optimize, and personalize digital content at enterprise scale with sophisticated analytics.",
      category: "AI/ML",
      technologies: ["Next.js", "OpenAI API", "TensorFlow", "Redis", "Docker"],
      status: "Development",
      year: "2024",
      image: "🤖",
      metrics: [
        { label: "Content Approval", value: "90%", icon: "✅" },
        { label: "Speed Increase", value: "5x", icon: "🚀" },
        { label: "Industries Served", value: "10+", icon: "🏢" },
      ],
    },
  ];

  const handleProjectClick = (project: Project) => {
    if (project.link) {
      window.open(project.link, "_blank", "noopener,noreferrer");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "live":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "development":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "coming soon":
        return "bg-amber-500/20 text-amber-400 border-amber-500/30";
      default:
        return "bg-surface text-text-muted border-border";
    }
  };

  return (
    <section id="work" className="py-16 sm:py-24 lg:py-32 section-container">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-32">
          <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-4 mb-8">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-accent-400/50">
              (1)
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
              Featured Work
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Showcasing our latest digital innovations and success stories across
            various industries.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 hover:border-accent-400/50 transition-all duration-500 overflow-hidden shadow-none hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 via-transparent to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative p-6 sm:p-8 lg:p-12">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Project Info */}
                  <div
                    className={`lg:col-span-7 ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div className="flex items-center space-x-4">
                          <span className="text-4xl sm:text-5xl lg:text-6xl">
                            {project.image}
                          </span>
                          <div>
                            <div className="flex flex-wrap items-center gap-3 mb-2">
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-mono border ${getStatusColor(
                                  project.status
                                )}`}
                              >
                                {project.status}
                              </span>
                              <span className="text-text-muted text-sm font-mono">
                                {project.year}
                              </span>
                              <span className="text-accent-400 text-sm font-mono">
                                {project.category}
                              </span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white group-hover:text-accent-400 transition-colors duration-300">
                              {project.name}
                            </h3>
                            <p className="text-lg sm:text-xl text-text-secondary font-light mt-2">
                              {project.subtitle}
                            </p>
                          </div>
                        </div>

                        {project.link && (
                          <button
                            onClick={() => handleProjectClick(project)}
                            className="flex-shrink-0 flex items-center space-x-2 text-accent-400 hover:text-accent-300 font-display font-medium transition-colors duration-300 group/btn"
                          >
                            <span>View Project</span>
                            <ExternalLink
                              size={16}
                              className="transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300"
                            />
                          </button>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-text-muted leading-relaxed text-base sm:text-lg">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1.5 bg-surface border border-border text-text-secondary text-sm font-mono rounded-lg hover:border-accent-400/50 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div
                    className={`lg:col-span-5 ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="bg-surface border border-border rounded-2xl p-6 lg:p-8">
                      <h4 className="text-lg font-display font-bold text-white mb-6 flex items-center space-x-2">
                        <Award size={20} />
                        <span>Key Results</span>
                      </h4>

                      {project.metrics ? (
                        <div className="space-y-4">
                          {project.metrics.map((metric, metricIndex) => (
                            <div
                              key={metricIndex}
                              className="flex items-center justify-between p-4 bg-surface-dark rounded-xl hover:bg-surface-light transition-colors duration-300"
                            >
                              <div className="flex items-center space-x-3">
                                <span className="text-lg">{metric.icon}</span>
                                <span className="text-text-secondary text-sm">
                                  {metric.label}
                                </span>
                              </div>
                              <span className="text-accent-400 font-display font-bold text-lg">
                                {metric.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <TrendingUp
                            size={32}
                            className="text-accent-400 mx-auto mb-4"
                          />
                          <p className="text-text-muted">Metrics coming soon</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 lg:mt-32 text-center">
          <div className="relative bg-white/5 backdrop-blur-xl rounded-[3rem] p-10 lg:p-16 border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.1)]">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-400/20 via-secondary-500/10 to-accent-400/20 opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto font-light">
                Let's discuss how we can bring your vision to life with the same
                dedication and expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/contact"
                  className="group relative px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-accent-400/50 text-white font-display font-medium rounded-full overflow-hidden transition-all duration-500 shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] inline-block text-center"
                >
                  <span className="relative z-10">Start a Project</span>
                </Link>
                <Link
                  to="/work"
                  className="px-8 py-4 text-white/70 hover:text-white font-display font-medium rounded-full transition-all duration-300 inline-block text-center border-b border-transparent hover:border-white/50 pb-1"
                >
                  View All Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
