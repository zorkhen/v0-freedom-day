"use client"

import { useEffect, useRef, useState } from "react"

const HEADER_OFFSET = 96

const sections = [
  { id: "about", label: "About" },
  { id: "issue", label: "The Issue" },
  { id: "signs", label: "Warning Signs" },
  { id: "report", label: "Report" },
  { id: "resources", label: "Resources" },
]

export function SectionNavigator() {
  const [activeSection, setActiveSection] = useState(sections[0].id)
  const [minimized, setMinimized] = useState(false)
  const cooldownRef = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (cooldownRef.current) return

      const scrollY = window.scrollY
      const threshold = window.innerHeight * 0.3

      let current = sections[0].id
      for (const section of sections) {
        const el = document.getElementById(section.id)
        if (!el) continue
        const top = el.getBoundingClientRect().top + scrollY
        if (scrollY + threshold >= top) {
          current = section.id
        }
      }
      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)

    if (!element) {
      return
    }

    setActiveSection(sectionId)
    cooldownRef.current = true
    setTimeout(() => { cooldownRef.current = false }, 1000)

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const top = element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET

    window.scrollTo({
      top,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    })
  }

  return (
    <aside className={`pointer-events-none fixed bottom-4 right-4 z-40 ${minimized ? "w-auto" : "w-[min(13rem,calc(100vw-2rem))]"}`}>
      <div className="pointer-events-auto border border-neutral-200 bg-white/95 shadow-[0_18px_40px_rgba(15,23,42,0.12)] backdrop-blur">
        <div className="flex items-center justify-between px-3 pt-3 pb-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
            On this page
          </p>
          <button
            type="button"
            onClick={() => setMinimized((v) => !v)}
            aria-label={minimized ? "Expand navigation" : "Minimize navigation"}
            className="flex h-5 w-5 items-center justify-center text-neutral-400 hover:text-neutral-700 transition-colors"
          >
            {minimized ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            )}
          </button>
        </div>
        {!minimized && (
          <div className="space-y-1.5 px-3 pb-3">
            {sections.map((section) => {
              const isActive = section.id === activeSection

              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => navigateToSection(section.id)}
                  className={`flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors ${
                    isActive
                      ? "bg-red-700 text-white"
                      : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
                  }`}
                  aria-current={isActive ? "location" : undefined}
                >
                  <span
                    className={`h-2.5 w-2.5 shrink-0 ${
                      isActive ? "bg-white" : "bg-red-700"
                    }`}
                  />
                  <span>{section.label}</span>
                </button>
              )
            })}
          </div>
        )}
      </div>
    </aside>
  )
}
