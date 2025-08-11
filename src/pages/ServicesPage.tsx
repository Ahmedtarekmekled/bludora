import { Link } from "react-router-dom";
import CircularText from "../components/CircularText";
import CurvedLoop from "../components/CurvedLoop";

export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom web applications built with cutting-edge technologies and modern frameworks.",
      features: [
        "React & Next.js",
        "TypeScript",
        "Progressive Web Apps",
        "Performance Optimization",
      ],
      icon: "🌐",
    },
    {
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile apps that deliver exceptional user experiences.",
      features: [
        "React Native",
        "Flutter",
        "iOS & Android",
        "App Store Optimization",
      ],
      icon: "📱",
    },
    {
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive designs that users love and businesses rely on.",
      features: [
        "User Research",
        "Prototyping",
        "Design Systems",
        "Accessibility",
      ],
      icon: "🎨",
    },
    {
      title: "Backend Development",
      description:
        "Scalable server architectures and APIs that power your applications.",
      features: [
        "Node.js & Python",
        "Database Design",
        "API Development",
        "Cloud Infrastructure",
      ],
      icon: "⚙️",
    },
    {
      title: "AI & Machine Learning",
      description:
        "Intelligent solutions that learn, adapt, and provide valuable insights.",
      features: [
        "Data Analysis",
        "Predictive Models",
        "Natural Language Processing",
        "Computer Vision",
      ],
      icon: "🤖",
    },
    {
      title: "DevOps & Cloud",
      description:
        "Reliable deployment and infrastructure management for seamless operations.",
      features: [
        "CI/CD Pipelines",
        "Docker & Kubernetes",
        "AWS/Azure/GCP",
        "Monitoring & Analytics",
      ],
      icon: "☁️",
    },
  ];

  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-surface to-background-light relative overflow-hidden">
        <div className="container mx-auto px-container text-center">
          <h1 className="text-6xl lg:text-8xl font-display font-bold text-white mb-8 leading-tight">
            Our
            <span className="text-accent-400 block">Services</span>
          </h1>
          <p className="text-2xl lg:text-3xl text-text-secondary font-light max-w-4xl mx-auto leading-relaxed">
            From concept to deployment, we deliver end-to-end digital solutions
            that drive results.
          </p>
        </div>
      </section>

      {/* Curved Loop */}
      <section className="relative overflow-hidden bg-surface-dark">
        <CurvedLoop
          marqueeText="✦ DESIGN ✦ DEVELOP ✦ DEPLOY ✦ DELIVER ✦"
          speed={2.5}
          curveAmount={350}
          direction="right"
          interactive={true}
          className="font-display font-bold text-accent-400"
        />
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-gradient-to-br from-background to-surface">
        <div className="container mx-auto px-container">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display font-bold text-white mb-6">
              What We Do
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              We combine technical expertise with creative vision to build
              digital experiences that matter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-surface-dark p-8 rounded-2xl border border-border hover:border-accent-400/50 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-text-muted"
                    >
                      <span className="w-2 h-2 bg-accent-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-surface relative overflow-hidden">
        <div className="container mx-auto px-container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-display font-bold text-white mb-8">
                Our Process
              </h2>
              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Discovery",
                    description:
                      "We dive deep into your vision, goals, and challenges to understand what success looks like.",
                  },
                  {
                    step: "02",
                    title: "Strategy",
                    description:
                      "We craft a comprehensive plan that aligns technology choices with your business objectives.",
                  },
                  {
                    step: "03",
                    title: "Design & Build",
                    description:
                      "Our team brings your vision to life with beautiful designs and robust, scalable code.",
                  },
                  {
                    step: "04",
                    title: "Launch & Support",
                    description:
                      "We ensure a smooth launch and provide ongoing support to keep your solution thriving.",
                  },
                ].map((phase, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-accent-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-display font-bold text-lg">
                        {phase.step}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-white mb-2">
                        {phase.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <CircularText
                text="✦ DISCOVER ✦ STRATEGY ✦ BUILD ✦ LAUNCH ✦"
                onHover="slowDown"
                spinDuration={25}
                className="w-96 h-96 text-accent-400 font-display text-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-background to-surface-dark">
        <div className="container mx-auto px-container text-center">
          <h2 className="text-5xl lg:text-6xl font-display font-bold text-white mb-8">
            Ready to Start?
          </h2>
          <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
            Let's discuss your project and explore how we can bring your digital
            vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-accent-400 text-white font-display font-bold rounded-full hover:bg-accent-500 transition-colors duration-300 transform hover:scale-105 inline-block"
            >
              Start a Project
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-accent-400 text-accent-400 font-display font-bold rounded-full hover:bg-accent-400 hover:text-white transition-all duration-300 inline-block"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
