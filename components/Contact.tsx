"use client";
import { useState } from "react";
import { FaEnvelope, FaUser, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("sent");
        e.currentTarget.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("idle");
        alert("Failed to send message. Please try again.");
      }
    } catch {
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-950 via-slate-900 to-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/30 backdrop-blur-sm">
              <span className="text-sm font-semibold text-blue-400 uppercase tracking-wide">
                Get In Touch
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-100 mb-4">
              Let&apos;s <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Interested in collaboration or have questions? Feel free to reach out.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-8 md:p-12 hover:border-gray-600/50 transition-all duration-300">
            {status === "sent" ? (
              <div className="text-center py-12">
                <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-6 animate-bounce" />
                <h3 className="text-2xl font-bold text-gray-100 mb-3">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-400">
                  Thank you for reaching out. I&apos;ll respond within 24-48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Web3Forms Access Key */}
                <input type="hidden" name="access_key" value="8b298c03-b267-4dbf-85b9-d52df7930bac" />
                <input type="hidden" name="redirect" value="false" />
                <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full pl-12 pr-4 py-3.5 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all text-gray-100 placeholder:text-gray-500"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                      Your Email
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full pl-12 pr-4 py-3.5 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all text-gray-100 placeholder:text-gray-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3.5 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all text-gray-100 placeholder:text-gray-500"
                    placeholder="Project Opportunity / Collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3.5 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all resize-none text-gray-100 placeholder:text-gray-500"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/30"
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
            <p className="text-gray-400 mb-4">Direct contact:</p>
            <a
              href="mailto:rogerdemello289@gmail.com"
              className="text-blue-400 hover:underline text-lg font-medium"
            >
              rogerdemello289@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
