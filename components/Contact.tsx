"use client";
import { useState } from "react";
import { FaEnvelope, FaUser, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    try {
      // Using FormSubmit - Replace YOUR_EMAIL with your actual email
      const response = await fetch("https://formsubmit.co/rogerdemello289@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _captcha: "false", // Disable captcha
          _template: "table", // Use table format
        })
      });

      if (response.ok) {
        setStatus("sent");
        setTimeout(() => {
          setStatus("idle");
          setFormData({ name: "", email: "", subject: "", message: "" });
        }, 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Get In Touch
            </h2>
            <p className="text-gray-400 text-lg">
              Interested in collaboration or have questions? Feel free to reach out.
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-700">
            {status === "sent" ? (
              <div className="text-center py-12 animate-fade-in-up">
                <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-100 mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-400">
                  Thank you for reaching out. I will respond as soon as possible.
                </p>
              </div>
            ) : status === "error" ? (
              <div className="text-center py-12 animate-fade-in-up">
                <div className="text-6xl text-red-500 mx-auto mb-4">✕</div>
                <h3 className="text-2xl font-bold text-gray-100 mb-2">
                  Something Went Wrong
                </h3>
                <p className="text-gray-400 mb-4">
                  Failed to send message. Please try again or email me directly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-100"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Email
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-100"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-100"
                    placeholder="Project Opportunity"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-gray-100"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
