"use client"

import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"

export default function ContactSection({ data }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-balance text-center">Get in Touch</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/20 rounded-lg">
                  <Mail className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a
                    href={`mailto:${data.email}`}
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    {data.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/20 rounded-lg">
                  <Phone className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a
                    href={`tel:${data.phone}`}
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    {data.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/20 rounded-lg">
                  <MapPin className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground">{data.location}</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-xl p-8 border border-border animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="mb-6">
                <label className="block text-foreground font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-6">
                <label className="block text-foreground font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-foreground font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-secondary text-background rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>

              {submitted && (
                <p className="mt-4 text-center text-green-600 font-semibold animate-fade-in">
                  Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
