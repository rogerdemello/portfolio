"use client";
import { useState } from "react";
import { FaEnvelope, FaUser, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    
    const form = e.currentTarget;
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
    if (!accessKey) {
      setStatus("error");
      setErrorMessage("Contact form is not configured. Please email me directly at rogerdemello289@gmail.com");
      console.warn("Web3Forms API key missing. Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local (local) or Vercel env vars (production)");
      return;
    }
    
    setStatus("sending");

    const formData = new FormData(form);
    // Ensure access_key is set (fallback to env var if hidden input missing)
    if (!formData.get("access_key")) {
      formData.set("access_key", accessKey);
    }

    try {
      // Web3Forms expects FormData without custom headers (browser sets Content-Type automatically)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      let data: any = {};
      try {
        const text = await response.text();
        data = text ? JSON.parse(text) : {};
      } catch {
        // Response might not be JSON
      }

      if (response.ok && data.success !== false) {
        setStatus("sent");
        // Reset form - form reference captured before async call
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        const errorMsg = data.message || `Failed to send (${response.status}). Please email me directly.`;
        setErrorMessage(errorMsg);
        console.error("Web3Forms error:", { status: response.status, data });
      }
    } catch (error: any) {
      setStatus("error");
      console.error("Contact form network error:", error);
      const errorDetails = error?.message || "Unknown error";
      setErrorMessage(`Network error: ${errorDetails}. Please email me directly at rogerdemello289@gmail.com`);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-block mb-4 px-5 py-2 sm:px-6 bg-primary/10 rounded-full border border-primary/30 backdrop-blur-sm">
              <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wide">
                Get In Touch
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-foreground-muted text-base md:text-lg">
              Looking for ML engineering internships for summer 2026. Also down to chat about projects, especially if you're working on something with AI Agents.
            </p>
          </div>

          <div className="bg-gradient-to-br from-background-tertiary/80 to-background-secondary/80 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-card-border p-6 sm:p-8 md:p-12 hover:border-primary/30 transition-all duration-350 ease-smooth">
            {status === "sent" ? (
              <div className="text-center py-12">
                <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-6 animate-bounce" />
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Message Sent Successfully!
                </h3>
                <p className="text-foreground-muted">
                  Thank you for reaching out. I&apos;ll respond within 24-48 hours.
                </p>
              </div>
            ) : status === "error" ? (
              <div className="text-center py-12">
                <p className="text-primary mb-4">{errorMessage}</p>
                <a
                  href="mailto:rogerdemello289@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary-light rounded-xl transition-colors font-medium"
                >
                  <FaEnvelope /> Email directly
                </a>
                <button
                  type="button"
                  onClick={() => { setStatus("idle"); setErrorMessage(""); }}
                  className="block mt-4 mx-auto text-sm text-foreground-muted hover:text-foreground"
                >
                  Try again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Web3Forms: set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local */}
                <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ""} />
                <input type="hidden" name="redirect" value="false" />
                <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground-muted" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full pl-12 pr-4 py-3.5 bg-background-tertiary/80 backdrop-blur-sm border border-card-border rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 ease-smooth text-foreground placeholder:text-foreground-muted"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Your Email
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground-muted" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full pl-12 pr-4 py-3.5 bg-background-tertiary/80 backdrop-blur-sm border border-card-border rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 ease-smooth text-foreground placeholder:text-foreground-muted"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3.5 bg-background-tertiary/80 backdrop-blur-sm border border-card-border rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 ease-smooth text-foreground placeholder:text-foreground-muted"
                    placeholder="Project Opportunity / Collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3.5 bg-background-tertiary/80 backdrop-blur-sm border border-card-border rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 ease-smooth resize-none text-foreground placeholder:text-foreground-muted"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-primary text-primary-foreground font-semibold py-4 rounded-xl transition-all transform hover:bg-primary-dark hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/30"
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-foreground-muted mb-4">Direct contact:</p>
            <a
              href="mailto:rogerdemello289@gmail.com"
              className="text-primary hover:underline text-lg font-medium"
            >
              rogerdemello289@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
