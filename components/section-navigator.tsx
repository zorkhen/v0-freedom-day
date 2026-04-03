"use client"

import { useEffect, useState } from "react"

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

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element instanceof HTMLElement)

    if (!elements.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id)
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  const navigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)

    if (!element) {
      return
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const top = element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET

    window.scrollTo({
      top,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    })
  }

  return (
    <aside className="pointer-events-none fixed bottom-4 right-4 z-40 w-[min(13rem,calc(100vw-2rem))]">
      <div className="pointer-events-auto border border-neutral-200 bg-white/95 p-3 shadow-[0_18px_40px_rgba(15,23,42,0.12)] backdrop-blur">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
          On this page
        </p>
        <div className="space-y-1.5">
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
      </div>
    </aside>
  )
}
