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
      name: "DentalVisuals",
      subtitle: "Healthcare Technology Platform",
      description:
        "Revolutionary dental visualization platform combining medical expertise with cutting-edge 3D animation technology for enhanced patient communication and treatment planning.",
      category: "Healthcare Tech",
      technologies: ["React", "Three.js", "WebGL", "Node.js", "MongoDB"],
      link: "https://dental-visuals.vercel.app/",
      status: "Live",
      year: "2024",
      image: "🦷",
      metrics: [
        { label: "Patient Understanding", value: "+40%", icon: "📈" },
        { label: "Consultation Time", value: "-60%", icon: "⏱️" },
        { label: "User Satisfaction", value: "95%", icon: "⭐" },
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
    {
      name: "FinanceFlow",
      subtitle: "Financial Dashboard Suite",
      description:
        "Comprehensive financial analytics platform with real-time data visualization, predictive modeling, and advanced reporting capabilities for institutional investors.",
      category: "FinTech",
      technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      status: "Coming Soon",
      year: "2024",
      image: "📊",
      metrics: [
        { label: "Data Processing", value: "1M+ txn/s", icon: "⚡" },
        { label: "Response Time", value: "<1s", icon: "⏰" },
        { label: "Accuracy", value: "99.9%", icon: "🎯" },
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
            <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-text-muted">
              (1)
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display font-bold text-white">
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
              className="group relative bg-surface-dark/50 backdrop-blur-sm rounded-3xl border border-border hover:border-accent-400/30 transition-all duration-500 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 via-transparent to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

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
          <div className="bg-gradient-to-r from-accent-400/10 via-secondary-500/10 to-accent-400/10 rounded-3xl p-8 lg:p-12 border border-accent-400/20">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white mb-6">
              Ready to Start Your Project?
            </h3>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with the same
              dedication and expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-accent-400 hover:bg-accent-500 text-white font-display font-bold rounded-full transition-all duration-300 transform hover:scale-105 inline-block text-center"
              >
                Start a Project
              </Link>
              <Link
                to="/work"
                className="px-8 py-4 border-2 border-accent-400 text-accent-400 hover:bg-accent-400 hover:text-white font-display font-bold rounded-full transition-all duration-300 inline-block text-center"
              >
                View All Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
