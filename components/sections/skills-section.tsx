"use client"

export default function SkillsSection({ data }) {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-balance">Skills</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {data.map((skillGroup, groupIndex) => (
              <div
                key={groupIndex}
                className="bg-background rounded-xl p-6 border border-border hover:shadow-md transition-shadow animate-fade-in"
                style={{ animationDelay: `${groupIndex * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-foreground mb-6">{skillGroup.category}</h3>

                <div className="space-y-4">
                  {skillGroup.items.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
