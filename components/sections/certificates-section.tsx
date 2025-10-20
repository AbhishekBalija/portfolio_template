"use client"

import { Award, ExternalLink } from 'lucide-react'

export default function CertificatesSection({ data }) {
  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-balance">
            Certificates & Achievements
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {data.map((cert, index) => (
              <a
                key={index}
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-lg text-background">
                    <Award size={24} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-secondary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                    <p className="text-muted-foreground/70 text-xs">{cert.date}</p>
                  </div>

                  <ExternalLink
                    className="text-muted-foreground group-hover:text-secondary transition-colors flex-shrink-0"
                    size={20}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
