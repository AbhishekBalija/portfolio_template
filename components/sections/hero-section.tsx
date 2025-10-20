"use client"

import { ArrowRight, Download } from "lucide-react"

export default function HeroSection({ data }) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 bg-background">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="w-56 h-56 mx-auto rounded-full overflow-hidden border-4 border-primary/30 shadow-lg">
            <img src={data.avatar || "/placeholder.svg"} alt={data.name} className="w-full h-full object-cover" />
          </div>
        </div>

        <h1
          className="text-5xl sm:text-6xl font-bold text-foreground mb-4 text-balance animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          {data.name}
        </h1>

        <p
          className="text-xl sm:text-2xl text-primary font-semibold mb-6 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          {data.title}
        </p>

        <p
          className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          {data.tagline}
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 group"
          >
            Get in Touch
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={data.resume}
            download
            className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors flex items-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
