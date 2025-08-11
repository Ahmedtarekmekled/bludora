// GSAP Animation utilities
declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

// Dynamically import GSAP to avoid SSR issues
let gsap: any;
let ScrollTrigger: any;

const initGSAP = async () => {
  if (typeof window !== "undefined" && !gsap) {
    try {
      // @ts-ignore - Dynamic import for GSAP
      const gsapModule = await import("gsap");
      // @ts-ignore - Dynamic import for ScrollTrigger
      const scrollTriggerModule = await import("gsap/ScrollTrigger");

      gsap = gsapModule.gsap || gsapModule.default;
      ScrollTrigger =
        scrollTriggerModule.ScrollTrigger || scrollTriggerModule.default;

      if (gsap && ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
      }
    } catch (error) {
      console.warn("GSAP not loaded, animations will be disabled:", error);
    }
  }
};

export class GSAPAnimations {
  static async init() {
    await initGSAP();
  }

  static async initHeroAnimations() {
    await initGSAP();
    if (!gsap) return;

    const tl = gsap.timeline({ delay: 0.2 });

    tl.from(".hero-title", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "cubic-bezier(0.25, 0.1, 0.25, 1)",
    }).from(
      ".hero-subtitle",
      {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
      "-=0.8"
    );

    return tl;
  }

  static async initScrollAnimations() {
    await initGSAP();
    if (!ScrollTrigger) return;

    // Featured Work Section
    ScrollTrigger.create({
      trigger: ".featured-work",
      start: "top 70%",
      animation: gsap.from(".project-item", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      }),
    });

    // About Section
    ScrollTrigger.create({
      trigger: ".about-section",
      start: "top 70%",
      animation: gsap.from(".about-content", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      }),
    });

    // Section titles
    ScrollTrigger.batch(".section-title", {
      onEnter: (elements: any) => {
        gsap.from(elements, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "cubic-bezier(0.25, 0.1, 0.25, 1)",
        });
      },
      start: "top 80%",
    });
  }

  static async initHoverAnimations() {
    await initGSAP();
    if (!gsap) return;
    // Project hover effects
    document.querySelectorAll(".project-item").forEach((item) => {
      const element = item as HTMLElement;

      element.addEventListener("mouseenter", () => {
        gsap.to(element, {
          scale: 1.02,
          textShadow: "0 0 20px #3b82f6",
          duration: 0.3,
          ease: "power2.out",
        });
      });

      element.addEventListener("mouseleave", () => {
        gsap.to(element, {
          scale: 1,
          textShadow: "0 0 0px #3b82f6",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    // Logo hover effects
    document.querySelectorAll(".origami-logo").forEach((logo) => {
      const element = logo as HTMLElement;

      element.addEventListener("mouseenter", () => {
        gsap.to(element, {
          rotation: 15,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      element.addEventListener("mouseleave", () => {
        gsap.to(element, {
          rotation: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }

  static async initParticleAnimations() {
    await initGSAP();
    if (!gsap) return;
    document.querySelectorAll(".particle").forEach((particle, index) => {
      gsap.to(particle, {
        y: "random(-50, 50)",
        x: "random(-30, 30)",
        rotation: "random(0, 360)",
        duration: "random(6, 12)",
        ease: "none",
        repeat: -1,
        yoyo: true,
        delay: index * 0.5,
      });
    });
  }

  static async initNavigationAnimations() {
    await initGSAP();
    if (!ScrollTrigger) return;

    // Navigation background fade on scroll
    ScrollTrigger.create({
      start: "top -80",
      end: "bottom bottom",
      onUpdate: (self: any) => {
        const opacity = Math.min(self.progress * 2, 0.95);
        gsap.to(".navigation", {
          backgroundColor: `rgba(10, 10, 10, ${opacity})`,
          backdropFilter: opacity > 0.1 ? "blur(10px)" : "none",
          duration: 0.3,
        });
      },
    });
  }

  static async initMarqueeAnimation() {
    await initGSAP();
    if (!gsap) return;
    const marqueeItems = document.querySelectorAll(".marquee-item");

    marqueeItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { x: "100vw" },
        {
          x: "-100vw",
          duration: 30,
          ease: "none",
          repeat: -1,
          delay: index * 3,
        }
      );
    });
  }

  static async refreshScrollTrigger() {
    await initGSAP();
    if (ScrollTrigger) {
      ScrollTrigger.refresh();
    }
  }

  static async killAllAnimations() {
    await initGSAP();
    if (gsap) {
      gsap.killTweensOf("*");
    }
    if (ScrollTrigger) {
      ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
    }
  }
}
