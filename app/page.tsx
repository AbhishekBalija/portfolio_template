"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import EducationSection from "@/components/sections/education-section"
import SkillsSection from "@/components/sections/skills-section"
import LearningSection from "@/components/sections/learning-section"
import CertificatesSection from "@/components/sections/certificates-section"
import ContactSection from "@/components/sections/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json")
        const jsonData = await response.json()
        setData(jsonData)
      } catch (error) {
        console.error("Error loading data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading portfolio...</p>
        </div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <p className="text-gray-600">Error loading portfolio data</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header data={data} />
      <main>
        <HeroSection data={data.personal} />
        <AboutSection data={data} />
        <EducationSection data={data.education} />
        <SkillsSection data={data.skills} />
        <LearningSection data={data.learning} />
        <CertificatesSection data={data.certificates} />
        <ContactSection data={data.personal} />
      </main>
      <Footer data={data} />
    </div>
  )
}
