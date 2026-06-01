"use client";
import { useState } from "react";
import { FaEnvelope, FaPaperPlane, FaCheckCircle, FaGithub, FaLinkedin } from "react-icons/fa";

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
    if (!formData.get("access_key")) {
      formData.set("access_key", accessKey);
    }

    try {
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

  const inputClass =
    "w-full px-4 py-3 bg-background border-2 border-foreground rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:shadow-[3px_3px_0_0_hsl(var(--primary))] focus:-translate-x-[1px] focus:-translate-y-[1px] transition-all duration-150";

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-end gap-4 mb-12 md:mb-16">
            <span className="font-display font-black text-primary text-3xl sm:text-4xl leading-none">06</span>
            <div>
              <p className="eyebrow mb-2">Say hello</p>
              <h2 className="font-display font-black text-foreground text-4xl sm:text-5xl leading-[0.95]">
                Let&apos;s build something
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 md:gap-8 items-start">
            {/* Left: pitch */}
            <div className="lg:col-span-2">
              <p className="text-lg text-foreground/75 leading-relaxed mb-6">
                Open to <span className="font-semibold text-foreground">AI Engineer, ML Engineer, and Data Scientist</span> roles
                and collaborations. Always happy to talk LLM applications, ML models, and data.
              </p>
              <div className="space-y-3">
                <a href="mailto:rogerdemello289@gmail.com" className="ink-card ink-card--hover flex items-center gap-3 p-4">
                  <span className="grid place-items-center w-10 h-10 rounded-lg border-2 border-foreground bg-primary text-primary-foreground flex-shrink-0">
                    <FaEnvelope size={16} />
                  </span>
                  <span className="font-semibold text-foreground break-all">rogerdemello289@gmail.com</span>
                </a>
                <div className="flex gap-3">
                  <a href="https://github.com/rogerdemello" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="ink-card ink-card--hover grid place-items-center w-12 h-12 text-foreground">
                    <FaGithub size={20} />
                  </a>
                  <a href="https://linkedin.com/in/rogerdemello" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="ink-card ink-card--hover grid place-items-center w-12 h-12 text-foreground">
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <div className="ink-card p-6 sm:p-8">
                {status === "sent" ? (
                  <div className="text-center py-10">
                    <FaCheckCircle className="text-5xl text-accent mx-auto mb-5" />
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">Message sent!</h3>
                    <p className="text-foreground/70">Thanks for reaching out - I&apos;ll reply within 24–48 hours.</p>
                  </div>
                ) : status === "error" ? (
                  <div className="text-center py-10">
                    <p className="text-decorative font-medium mb-5">{errorMessage}</p>
                    <a href="mailto:rogerdemello289@gmail.com" className="btn-solid">
                      <FaEnvelope size={14} /> Email directly
                    </a>
                    <button
                      type="button"
                      onClick={() => { setStatus("idle"); setErrorMessage(""); }}
                      className="block mt-4 mx-auto text-sm text-foreground/60 hover:text-foreground underline underline-offset-4"
                    >
                      Try again
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ""} />
                    <input type="hidden" name="redirect" value="false" />
                    <input type="checkbox" name="botcheck" style={{ display: "none" }} />

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block font-mono text-xs uppercase tracking-[0.14em] font-semibold text-foreground/70 mb-2">Name</label>
                        <input type="text" id="name" name="name" required className={inputClass} placeholder="Jane Doe" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block font-mono text-xs uppercase tracking-[0.14em] font-semibold text-foreground/70 mb-2">Email</label>
                        <input type="email" id="email" name="email" required className={inputClass} placeholder="jane@example.com" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block font-mono text-xs uppercase tracking-[0.14em] font-semibold text-foreground/70 mb-2">Subject</label>
                      <input type="text" id="subject" name="subject" required className={inputClass} placeholder="Opportunity / collaboration" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block font-mono text-xs uppercase tracking-[0.14em] font-semibold text-foreground/70 mb-2">Message</label>
                      <textarea id="message" name="message" required rows={5} className={`${inputClass} resize-none`} placeholder="Tell me about what you're building…" />
                    </div>
                    <button type="submit" disabled={status === "sending"} className="btn-solid w-full disabled:opacity-60 disabled:cursor-not-allowed">
                      {status === "sending" ? (
                        <>
                          <span className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <FaPaperPlane size={14} /> Send message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
