"use client"

import { BookOpen } from "lucide-react"

export default function LearningSection({ data }) {
  return (
    <section id="learning" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-balance">Learning Journey</h2>

          <div className="space-y-6">
            {data.map((course, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/20 rounded-lg">
                    <BookOpen className="text-secondary" size={24} />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-foreground">{course.title}</h3>
                      <span
                        className={`text-sm font-semibold px-3 py-1 rounded-full ${
                          course.status === "In Progress"
                            ? "bg-primary/20 text-primary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {course.status}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-4">{course.platform}</p>

                    {course.progress > 0 && (
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-secondary rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
