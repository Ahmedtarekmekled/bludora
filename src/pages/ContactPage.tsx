import React, { useState } from "react";
import { Phone, Mail, MessageCircle, Send, Clock } from "lucide-react";
import ModelViewer from "../components/ModelViewer";
import CircularText from "../components/CircularText";
import SEO from "../components/SEO";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "+905541869905";
    const message = `Hello Bludora! I'm interested in discussing a project.`;
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(
      "+",
      ""
    )}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const emailBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    const mailtoUrl = `mailto:bludorasoftware@outlook.com?subject=${encodeURIComponent(
      subject
    )}&body=${emailBody}`;
    window.location.href = mailtoUrl;
  };

  return (
    <main className="pt-32">
      <SEO
        title="Contact Bludora - Get In Touch for Your Next Project"
        description="Ready to bring your digital vision to life? Contact Bludora via WhatsApp, email, or phone. We offer 24/7 support and work with clients worldwide. Let's start your next breakthrough project."
        url="https://bludora.vercel.app/contact"
        image="/logo1.png"
        keywords={[
          "contact",
          "whatsapp",
          "email",
          "phone",
          "project consultation",
          "software development",
          "get in touch",
        ]}
      />
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-surface to-background-light relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl lg:text-8xl font-display font-bold text-white mb-8 leading-tight">
            Let's
            <span className="text-accent-400 block">Connect</span>
          </h1>
          <p className="text-2xl lg:text-3xl text-text-secondary font-light max-w-4xl mx-auto leading-relaxed">
            Ready to bring your digital vision to life? Let's start the
            conversation.
          </p>

          {/* Quick WhatsApp CTA */}
          <div className="mt-12">
            <button
              onClick={handleWhatsAppClick}
              className="group inline-flex items-center space-x-4 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-display font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-green-500/25"
            >
              <MessageCircle size={24} />
              <span>Chat on WhatsApp</span>
              <span className="transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-accent-500 opacity-30 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/3 w-6 h-6 bg-secondary-500 opacity-20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-accent-400 opacity-40 rounded-full animate-ping"></div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 sm:py-24 lg:py-32 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Choose your preferred way to reach us. We're here to help bring
              your ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* WhatsApp */}
            <div
              className="bg-surface-dark p-8 rounded-2xl border border-border hover:border-green-500/50 transition-all duration-300 group cursor-pointer"
              onClick={handleWhatsAppClick}
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                WhatsApp
              </h3>
              <p className="text-text-secondary mb-4">
                Quick chat for immediate responses
              </p>
              <p className="text-accent-400 font-mono text-sm">
                +90 554 186 99 05
              </p>
            </div>

            {/* Email */}
            <div className="bg-surface-dark p-8 rounded-2xl border border-border hover:border-accent-400/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-accent-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Email
              </h3>
              <p className="text-text-secondary mb-4">
                For detailed project discussions
              </p>
              <p className="text-accent-400 font-mono text-sm">
                bludorasoftware@outlook.com
              </p>
            </div>

            {/* Phone */}
            <div className="bg-surface-dark p-8 rounded-2xl border border-border hover:border-secondary-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Phone
              </h3>
              <p className="text-text-secondary mb-4">
                Direct line for urgent matters
              </p>
              <p className="text-accent-400 font-mono text-sm">
                +90 554 186 99 05
              </p>
            </div>

            {/* Schedule */}
            <div className="bg-surface-dark p-8 rounded-2xl border border-border hover:border-accent-400/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Availability
              </h3>
              <p className="text-text-secondary mb-4">
                Response time & working hours
              </p>
              <p className="text-accent-400 font-mono text-sm">24h Response</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & 3D Model */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-background to-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-display font-bold text-white mb-8">
                Send us a Message
              </h2>
              <form onSubmit={handleEmailSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-text-secondary font-display mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-surface-dark border border-border rounded-lg text-white placeholder-text-muted focus:border-accent-400 focus:outline-none transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-text-secondary font-display mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-surface-dark border border-border rounded-lg text-white placeholder-text-muted focus:border-accent-400 focus:outline-none transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-text-secondary font-display mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-surface-dark border border-border rounded-lg text-white placeholder-text-muted focus:border-accent-400 focus:outline-none transition-colors duration-300"
                    placeholder="Project discussion"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-text-secondary font-display mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-surface-dark border border-border rounded-lg text-white placeholder-text-muted focus:border-accent-400 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-accent-400 hover:bg-accent-500 text-white px-8 py-4 rounded-full font-display font-bold transition-all duration-300 transform hover:scale-105"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </form>
            </div>

            {/* 3D Model Viewer */}
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-display font-bold text-white mb-8 text-center">
                Interactive 3D Experience
              </h3>
              <div className="w-full max-w-md">
                <ModelViewer
                  url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb"
                  width="100%"
                  height={400}
                  autoRotate={true}
                  autoRotateSpeed={0.5}
                  enableManualRotation={true}
                  enableManualZoom={true}
                  environmentPreset="studio"
                  fadeIn={true}
                  defaultRotationY={45}
                  showScreenshotButton={false}
                />
              </div>
              <p className="text-text-muted text-center mt-4 text-sm">
                Drag to rotate • Scroll to zoom
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Circular Text & FAQs */}
      <section className="py-16 sm:py-24 lg:py-32 bg-surface relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-white mb-8">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                {[
                  {
                    question: "What's your typical project timeline?",
                    answer:
                      "Projects typically range from 2-12 weeks depending on complexity. We'll provide a detailed timeline during our initial consultation.",
                  },
                  {
                    question: "Do you work with international clients?",
                    answer:
                      "Absolutely! We work with clients worldwide and are comfortable with remote collaboration across different time zones.",
                  },
                  {
                    question: "What technologies do you specialize in?",
                    answer:
                      "We specialize in React, TypeScript, Node.js, Python, and modern web technologies. We also work with AI/ML and 3D web experiences.",
                  },
                  {
                    question: "How do you handle project communication?",
                    answer:
                      "We use WhatsApp for quick updates, email for detailed discussions, and video calls for important milestones and reviews.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="bg-surface-dark p-6 rounded-2xl border border-border"
                  >
                    <h3 className="text-lg font-display font-bold text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="hidden sm:block">
                <CircularText
                  text="✦ CONTACT ✦ CONNECT ✦ CREATE ✦ COLLABORATE ✦"
                  onHover="goBonkers"
                  spinDuration={20}
                  className="w-80 h-80 text-accent-400 font-display text-lg"
                />
              </div>
              {/* Mobile alternative */}
              <div className="sm:hidden w-64 h-64 bg-gradient-to-br from-accent-400/20 to-secondary-500/20 rounded-full flex items-center justify-center border border-accent-400/30">
                <div className="text-center">
                  <div className="text-4xl text-accent-400 mb-4">📞</div>
                  <div className="text-accent-400 font-display font-bold text-lg">
                    LET'S
                    <br />
                    CONNECT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-background to-surface-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-6xl font-display font-bold text-white mb-8">
            Ready to Start?
          </h2>
          <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
            Don't wait – your next breakthrough project is just a message away.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="px-12 py-6 bg-green-500 hover:bg-green-600 text-white font-display font-bold text-xl rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-green-500/20"
            >
              💬 WhatsApp Now
            </button>
            <a
              href="mailto:bludorasoftware@outlook.com"
              className="px-12 py-6 border-2 border-accent-400 text-accent-400 font-display font-bold text-xl rounded-full hover:bg-accent-400 hover:text-white transition-all duration-300"
            >
              📧 Send Email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
