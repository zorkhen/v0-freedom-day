import Link from "next/link"

export function Footer() {
  const infoLinks = [
    { name: "About the Campaign", href: "#about" },
    { name: "Forms of Modern Slavery", href: "#issue" },
    { name: "Warning Signs", href: "#signs" },
    { name: "How to Report", href: "#report" },
    { name: "Further Reading", href: "#resources" },
    { name: "Gallery", href: "/gallery" },
  ]

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Use", href: "#" },
  ]

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand + description */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="flex h-9 w-9 items-center justify-center bg-red-700 text-white font-bold text-sm tracking-tight">
                MFD
              </div>
              <span className="text-base font-semibold tracking-tight">#MyFreedomDay</span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed">
              An informational resource about the #MyFreedomDay campaign and the global
              crisis of modern slavery. This site is for educational purposes.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-5">
              On This Page
            </h3>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-neutral-400 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-5">
              Emergency Contacts
            </h3>
            <ul className="space-y-4">
              {[
                { country: "United States", line: "1-888-373-7888", label: "National Human Trafficking Hotline" },
                { country: "United Kingdom", line: "0800 0121 700", label: "Modern Slavery Helpline" },
                { country: "Australia", line: "1800 021 221", label: "Australian Federal Police" },
              ].map((entry) => (
                <li key={entry.country}>
                  <p className="text-xs text-neutral-500">{entry.country}</p>
                  <p className="text-sm font-semibold text-white">{entry.line}</p>
                  <p className="text-xs text-neutral-500">{entry.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800">
        <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            This is an informational website. All statistics sourced from ILO, Walk Free, and UNODC.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-xs text-neutral-500 hover:text-neutral-300">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
