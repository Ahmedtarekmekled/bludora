import CircularText from "../components/CircularText";
import CurvedLoop from "../components/CurvedLoop";

export default function AboutPage() {
  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-surface to-background-light relative overflow-hidden">
        <div className="container mx-auto px-container text-center">
          <h1 className="text-6xl lg:text-8xl font-display font-bold text-white mb-8 leading-tight">
            About
            <span className="text-accent-400 block">Bludora</span>
          </h1>
          <p className="text-2xl lg:text-3xl text-text-secondary font-light max-w-4xl mx-auto leading-relaxed">
            We are digital architects, crafting tomorrow's technology today with
            passion, precision, and a touch of madness.
          </p>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-accent-500 opacity-30 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/3 w-6 h-6 bg-secondary-500 opacity-20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-accent-400 opacity-40 rounded-full animate-ping"></div>
        </div>
      </section>

      {/* Curved Loop */}
      <section className="relative overflow-hidden bg-surface-dark">
        <CurvedLoop
          marqueeText="✦ PASSION ✦ INNOVATION ✦ EXCELLENCE ✦ CREATIVITY ✦"
          speed={1.5}
          curveAmount={400}
          direction="left"
          interactive={true}
          className="font-display font-bold text-white"
        />
      </section>

      {/* Story Section */}
      <section className="py-32 bg-gradient-to-br from-surface to-background">
        <div className="container mx-auto px-container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-display font-bold text-white mb-8">
                Our Story
              </h2>
              <div className="space-y-6">
                <p className="text-xl text-text-secondary font-light leading-relaxed">
                  Born from a desire to push the boundaries of what's possible
                  in digital experiences, Bludora emerged as a collective of
                  creative technologists who believe that software should be
                  both powerful and beautiful.
                </p>
                <p className="text-lg text-text-muted leading-relaxed">
                  We started with a simple question: "What if technology could
                  be more human?" This question drives everything we do, from
                  the way we architect systems to how we design user
                  interactions.
                </p>
                <p className="text-lg text-text-muted leading-relaxed">
                  Today, we're a team of dreamers, builders, and problem-solvers
                  who create digital experiences that matter. We don't just
                  write code – we craft experiences that connect, inspire, and
                  transform.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <CircularText
                text="✦ TEAM ✦ PASSION ✦ VISION ✦ FUTURE ✦"
                onHover="goBonkers"
                spinDuration={20}
                className="w-96 h-96 text-accent-400 font-display text-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-container">
          <h2 className="text-5xl font-display font-bold text-white text-center mb-20">
            Our Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                title: "Innovation",
                description:
                  "We push boundaries and explore new possibilities in every project.",
                icon: "🚀",
              },
              {
                title: "Quality",
                description:
                  "Excellence is not negotiable. We deliver nothing but the best.",
                icon: "💎",
              },
              {
                title: "Collaboration",
                description:
                  "We believe the best solutions come from working together.",
                icon: "🤝",
              },
              {
                title: "Impact",
                description:
                  "We create technology that makes a meaningful difference.",
                icon: "⚡",
              },
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "5+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-5xl lg:text-6xl font-display font-bold text-accent-400 mb-4">
                  {stat.number}
                </div>
                <div className="text-text-secondary font-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
