"use client"

import { List } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const HEADER_OFFSET = 96

/** Prevents rapid report ↔ signs flicker: #report is nested inside #signs, so scroll probe oscillates at one pixel line. */
const REPORT_SIGN_HYSTERESIS_PX = 64

const sections = [
  { id: "about", label: "About" },
  { id: "issue", label: "The Issue" },
  { id: "signs", label: "Warning Signs" },
  { id: "report", label: "Report" },
  { id: "resources", label: "Resources" },
]

const SCROLL_SPY_FALLBACK_MS = 3500

export function SectionNavigator() {
  const [activeSection, setActiveSection] = useState(sections[0].id)
  const [minimized, setMinimized] = useState(false)
  /** True while programmatic scroll is in progress — scroll spy must not read intermediate positions. */
  const suppressScrollSpyRef = useRef(false)
  /** Cancels pending scrollend / fallback from the previous navigation. */
  const releaseScrollSpyCleanupRef = useRef<(() => void) | null>(null)
  /** Latest scroll-spy implementation (for sync after scrollend). */
  const runScrollSpyRef = useRef<() => void>(() => {})
  /** `window.scrollTo` target from the last sidebar navigation (for scrollend validation). */
  const pendingScrollTargetYRef = useRef<number | null>(null)
  /** Last section id chosen by scroll spy (not click); used for report/signs hysteresis. */
  const lastScrollPickRef = useRef<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (suppressScrollSpyRef.current) {
        return
      }

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

      const reportEl = document.getElementById("report")
      const reportTop = reportEl ? reportEl.getBoundingClientRect().top + scrollY : null
      const probe = scrollY + threshold

      if (
        reportTop != null &&
        lastScrollPickRef.current === "report" &&
        current === "signs" &&
        probe >= reportTop - REPORT_SIGN_HYSTERESIS_PX
      ) {
        current = "report"
      }
      lastScrollPickRef.current = current

      setActiveSection(current)
    }

    runScrollSpyRef.current = handleScroll

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    return () => {
      releaseScrollSpyCleanupRef.current?.()
      suppressScrollSpyRef.current = false
    }
  }, [])

  const navigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)

    if (!element) {
      return
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const scrollBehavior = prefersReducedMotion ? "auto" : "smooth"

    setActiveSection(sectionId)
    lastScrollPickRef.current = sectionId

    releaseScrollSpyCleanupRef.current?.()
    suppressScrollSpyRef.current = true

    const releaseSpy = () => {
      pendingScrollTargetYRef.current = null
      suppressScrollSpyRef.current = false
      releaseScrollSpyCleanupRef.current = null
      runScrollSpyRef.current()
    }

    const onScrollEnd = () => {
      const target = pendingScrollTargetYRef.current
      const y = window.scrollY
      if (target != null && Math.abs(y - target) > 72) {
        return
      }
      window.removeEventListener("scrollend", onScrollEnd)
      clearTimeout(fallbackTimer)
      releaseSpy()
    }

    window.addEventListener("scrollend", onScrollEnd, { passive: true })
    const fallbackTimer = window.setTimeout(() => {
      window.removeEventListener("scrollend", onScrollEnd)
      releaseSpy()
    }, SCROLL_SPY_FALLBACK_MS)

    releaseScrollSpyCleanupRef.current = () => {
      window.removeEventListener("scrollend", onScrollEnd)
      clearTimeout(fallbackTimer)
    }

    const top = element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
    pendingScrollTargetYRef.current = top

    window.scrollTo({
      top,
      behavior: scrollBehavior,
    })
  }

  const panelChrome =
    "border border-neutral-200 bg-white/95 shadow-[0_18px_40px_rgba(15,23,42,0.12)] backdrop-blur"

  return (
    <aside className="pointer-events-none fixed bottom-4 right-4 z-40 w-auto">
      {minimized ? (
        <button
          type="button"
          onClick={() => setMinimized(false)}
          aria-label="Open on this page navigation"
          aria-expanded={false}
          className={`pointer-events-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${panelChrome} text-neutral-600 transition-colors hover:bg-white hover:text-neutral-900`}
        >
          <List className="h-5 w-5" strokeWidth={2} aria-hidden />
        </button>
      ) : (
        <div className={`pointer-events-auto w-[min(13rem,calc(100vw-2rem))] ${panelChrome}`}>
          <div className="flex items-center justify-between px-3 pt-3 pb-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
              On this page
            </p>
            <button
              type="button"
              onClick={() => setMinimized(true)}
              aria-label="Minimize navigation"
              className="flex h-5 w-5 items-center justify-center text-neutral-400 transition-colors hover:text-neutral-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
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
        </div>
      )}
    </aside>
  )
}
