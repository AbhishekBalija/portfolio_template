"use client"

export default function EducationSection({ data }) {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-balance">Education</h2>

          <div
            className="bg-card rounded-xl p-8 border border-border shadow-lg animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-foreground">{data.degree}</h3>
                <p className="text-lg text-primary font-semibold">{data.field}</p>
              </div>
              <span className="text-sm font-semibold text-muted-foreground bg-muted px-4 py-2 rounded-lg">
                {data.startYear} - {data.endYear}
              </span>
            </div>

            <p className="text-foreground mb-2">{data.college}</p>
            <p className="text-muted-foreground mb-6">{data.university}</p>

            <div className="flex items-center gap-4 mb-8">
              <div className="h-1 w-24 bg-primary rounded-full"></div>
              <span className="text-lg font-semibold text-foreground">CGPA: {data.cgpa}</span>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Key Subjects</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {data.subjects.map((subject, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-background rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{subject}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
