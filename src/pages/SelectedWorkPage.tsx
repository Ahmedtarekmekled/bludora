import { Link } from "react-router-dom";
import CircularText from "../components/CircularText";
import CurvedLoop from "../components/CurvedLoop";

export default function SelectedWorkPage() {
  const projects = [
    {
      title: "DentalVisuals",
      category: "Healthcare Technology",
      description:
        "Revolutionary dental visualization platform combining medical expertise with cutting-edge 3D animation technology.",
      image: "🦷",
      technologies: ["React", "Three.js", "WebGL", "Node.js", "MongoDB"],
      link: "https://dental-visuals.vercel.app/",
      year: "2024",
      challenge:
        "Creating intuitive 3D visualizations for complex dental procedures while maintaining medical accuracy.",
      solution:
        "Built a real-time 3D rendering engine with interactive animations that help patients understand their treatment plans.",
      results: [
        "40% increase in patient understanding",
        "60% reduction in consultation time",
        "95% user satisfaction rate",
      ],
    },
    {
      title: "FinTech Analytics",
      category: "Financial Dashboard",
      description:
        "Advanced financial analytics platform providing real-time insights and predictive modeling for investment decisions.",
      image: "📊",
      technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      link: "#",
      year: "2024",
      status: "Coming Soon",
      challenge:
        "Processing massive datasets in real-time while providing intuitive visualizations for complex financial data.",
      solution:
        "Developed a microservices architecture with advanced caching and real-time data streaming capabilities.",
      results: [
        "Real-time processing of 1M+ transactions",
        "Sub-second query response times",
        "Advanced predictive analytics",
      ],
    },
    {
      title: "AI Content Studio",
      category: "Machine Learning Platform",
      description:
        "Intelligent content creation platform leveraging AI to generate, optimize, and personalize digital content at scale.",
      image: "🤖",
      technologies: ["Next.js", "OpenAI API", "TensorFlow", "Redis", "Docker"],
      link: "#",
      year: "2024",
      status: "In Development",
      challenge:
        "Creating an AI-powered platform that generates high-quality, contextually relevant content across multiple formats.",
      solution:
        "Integrated multiple AI models with custom training data and sophisticated prompt engineering for optimal results.",
      results: [
        "90% content approval rate",
        "5x faster content creation",
        "Personalized content for 10+ industries",
      ],
    },
    {
      title: "WebGL Visualizations",
      category: "Interactive Experiences",
      description:
        "Immersive 3D web experiences and data visualizations that transform complex information into engaging interactive stories.",
      image: "🎨",
      technologies: ["Three.js", "WebGL", "GLSL", "TypeScript", "Blender"],
      link: "#",
      year: "2023",
      status: "Portfolio",
      challenge:
        "Creating performant 3D experiences that run smoothly across all devices and browsers.",
      solution:
        "Optimized rendering pipelines with advanced LOD systems and progressive loading for seamless performance.",
      results: [
        "60fps on mobile devices",
        "Cross-browser compatibility",
        "Award-winning user experience",
      ],
    },
  ];

  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-surface to-background-light relative overflow-hidden">
        <div className="container mx-auto px-container text-center">
          <h1 className="text-6xl lg:text-8xl font-display font-bold text-white mb-8 leading-tight">
            Selected
            <span className="text-accent-400 block">Work</span>
          </h1>
          <p className="text-2xl lg:text-3xl text-text-secondary font-light max-w-4xl mx-auto leading-relaxed">
            A showcase of digital experiences that push boundaries and deliver
            exceptional results.
          </p>
        </div>
      </section>

      {/* Curved Loop */}
      <section className="relative overflow-hidden bg-surface-dark">
        <CurvedLoop
          marqueeText="✦ PORTFOLIO ✦ INNOVATION ✦ EXCELLENCE ✦ CREATIVITY ✦"
          speed={2}
          curveAmount={300}
          direction="left"
          interactive={true}
          className="font-display font-bold text-white"
        />
      </section>

      {/* Projects Section */}
      <section className="py-32 bg-gradient-to-br from-background to-surface">
        <div className="container mx-auto px-container">
          <div className="space-y-32">
            {projects.map((project, index) => (
              <div
                key={index}
                className="grid lg:grid-cols-12 gap-12 items-center"
              >
                <div
                  className={`lg:col-span-7 ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <span className="text-6xl">{project.image}</span>
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-sm font-mono text-accent-400 bg-accent-400/10 px-3 py-1 rounded-full">
                            {project.year}
                          </span>
                          {project.status && (
                            <span className="text-sm font-mono text-text-muted bg-surface px-3 py-1 rounded-full">
                              {project.status}
                            </span>
                          )}
                        </div>
                        <h3 className="text-4xl lg:text-5xl font-display font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-xl text-accent-400 font-light">
                          {project.category}
                        </p>
                      </div>
                    </div>

                    <p className="text-xl text-text-secondary leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-display font-bold text-white mb-2">
                          Challenge
                        </h4>
                        <p className="text-text-muted">{project.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-display font-bold text-white mb-2">
                          Solution
                        </h4>
                        <p className="text-text-muted">{project.solution}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-sm font-mono text-text-secondary bg-surface px-3 py-1 rounded-full border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.link !== "#" && (
                      <div className="pt-4">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-accent-400 hover:text-accent-300 transition-colors duration-300 font-display font-bold"
                        >
                          <span>View Project</span>
                          <span>→</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                <div
                  className={`lg:col-span-5 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="bg-surface-dark rounded-2xl p-8 border border-border">
                    <h4 className="text-lg font-display font-bold text-white mb-6">
                      Key Results
                    </h4>
                    <ul className="space-y-4">
                      {project.results.map((result, resultIndex) => (
                        <li
                          key={resultIndex}
                          className="flex items-start space-x-3"
                        >
                          <span className="w-2 h-2 bg-accent-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-text-secondary">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Circular Text Section */}
      <section className="py-32 bg-surface relative overflow-hidden">
        <div className="container mx-auto px-container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-display font-bold text-white mb-8">
                Crafting Digital Experiences
              </h2>
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Every project is a journey of discovery, innovation, and
                meticulous craftsmanship. We don't just build software – we
                create digital experiences that inspire and transform.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-display font-bold text-accent-400 mb-2">
                    50+
                  </div>
                  <div className="text-text-muted">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-accent-400 mb-2">
                    98%
                  </div>
                  <div className="text-text-muted">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-accent-400 mb-2">
                    15+
                  </div>
                  <div className="text-text-muted">Industries Served</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-accent-400 mb-2">
                    24/7
                  </div>
                  <div className="text-text-muted">Support</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <CircularText
                text="✦ PORTFOLIO ✦ SHOWCASE ✦ INNOVATION ✦ RESULTS ✦"
                onHover="goBonkers"
                spinDuration={18}
                className="w-96 h-96 text-accent-400 font-display text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-background to-surface-dark">
        <div className="container mx-auto px-container text-center">
          <h2 className="text-5xl lg:text-6xl font-display font-bold text-white mb-8">
            Ready for Your Project?
          </h2>
          <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
            Let's create something amazing together. Your next digital
            breakthrough starts here.
          </p>
          <Link
            to="/contact"
            className="px-12 py-6 bg-accent-400 text-white font-display font-bold text-xl rounded-full hover:bg-accent-500 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-accent-400/20 inline-block"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </main>
  );
}
