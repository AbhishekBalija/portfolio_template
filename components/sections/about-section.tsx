"use client"

export default function AboutSection({ data }) {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-8 text-balance">About Me</h2>

          <p
            className="text-lg text-muted-foreground mb-6 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            {data.personal.bio}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {[
              { label: "Semester", value: "5th" },
              { label: "Location", value: data.personal.location },
              { label: "Email", value: data.personal.email },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-background rounded-lg border border-border hover:shadow-md transition-shadow"
              >
                <p className="text-sm text-muted-foreground mb-2">{item.label}</p>
                <p className="text-lg font-semibold text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
