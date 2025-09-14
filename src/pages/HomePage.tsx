import Hero from "../components/Hero";
import FeaturedWork from "../components/FeaturedWork";
import About from "../components/About";
import CircularText from "../components/CircularText";
import CurvedLoop from "../components/CurvedLoop";
import SEO from "../components/SEO";

export default function HomePage() {
  return (
    <main>
      <SEO
        title="Bludora - Software Development Studio"
        description="Creating cutting-edge digital experiences with innovative software solutions. A software development studio crafting digital experiences that push the boundaries of technology and creativity."
        url="https://bludora.vercel.app"
        image="/logo1.png"
      />
      <Hero />

      {/* Curved Loop Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background to-surface-dark py-8 sm:py-16">
        <div className="hidden md:block">
          <CurvedLoop
            marqueeText="✦ BLUDORA ✦ SOFTWARE ✦ DEVELOPMENT ✦ STUDIO ✦ INNOVATION ✦"
            speed={2}
            curveAmount={100}
            direction="right"
            interactive={true}
            className="font-display font-bold text-accent-400"
          />
        </div>
        {/* Mobile version */}
        <div className="md:hidden flex items-center justify-center py-8">
          <div className="animate-pulse">
            <h2 className="text-2xl font-display font-bold text-accent-400 text-center">
              ✦ BLUDORA STUDIO ✦
            </h2>
          </div>
        </div>
      </section>

      <FeaturedWork />

      {/* Circular Text Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-surface relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display font-bold text-white mb-6 lg:mb-8">
                We Create
                <span className="text-accent-400 block">Digital Magic</span>
              </h2>
              <p className="text-lg sm:text-xl text-text-secondary font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Spinning innovation into reality, one pixel at a time. Our
                creative process never stops moving forward.
              </p>

              {/* Modern Features List */}
              <div className="mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                <div className="bg-surface-dark p-4 rounded-xl border border-border">
                  <div className="text-2xl mb-2">🚀</div>
                  <div className="text-sm text-text-secondary">
                    Fast Delivery
                  </div>
                </div>
                <div className="bg-surface-dark p-4 rounded-xl border border-border">
                  <div className="text-2xl mb-2">💎</div>
                  <div className="text-sm text-text-secondary">
                    Premium Quality
                  </div>
                </div>
                <div className="bg-surface-dark p-4 rounded-xl border border-border">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="text-sm text-text-secondary">
                    High Performance
                  </div>
                </div>
                <div className="bg-surface-dark p-4 rounded-xl border border-border">
                  <div className="text-2xl mb-2">🎯</div>
                  <div className="text-sm text-text-secondary">
                    Precise Solutions
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center order-1 lg:order-2">
              <div className="hidden sm:block">
                <CircularText
                  text="✦ CREATIVE ✦ INNOVATIVE ✦ DIGITAL ✦ SOLUTIONS ✦"
                  onHover="speedUp"
                  spinDuration={15}
                  className="w-60 h-60 sm:w-80 sm:h-80 text-accent-400 font-display text-base sm:text-lg"
                />
              </div>
              {/* Mobile alternative */}
              <div className="sm:hidden w-48 h-48 bg-gradient-to-br from-accent-400/20 to-secondary-500/20 rounded-full flex items-center justify-center border border-accent-400/30">
                <div className="text-center">
                  <div className="text-3xl text-accent-400 mb-2">✦</div>
                  <div className="text-accent-400 font-display font-bold text-sm">
                    DIGITAL
                    <br />
                    SOLUTIONS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
    </main>
  );
}
