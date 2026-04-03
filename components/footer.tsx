import Link from "next/link"

export function Footer() {
  const infoLinks = [
    { name: "Placeholder Link One", href: "/#about" },
    { name: "Placeholder Link Two", href: "/#issue" },
    { name: "Placeholder Link Three", href: "/#signs" },
    { name: "Placeholder Link Four", href: "/#report" },
    { name: "Placeholder Link Five", href: "/#resources" },
    { name: "Placeholder Link Six", href: "/gallery" },
  ]

  const legalLinks = [
    { name: "Placeholder Policy", href: "#" },
    { name: "Placeholder Terms", href: "#" },
  ]

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand + description */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="flex h-9 w-9 items-center justify-center bg-red-700 text-white font-bold text-sm tracking-tight">
                PLH
              </div>
              <span className="text-base font-semibold tracking-tight">#PlaceholderBrand</span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua ut enim ad minim.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-5">
              Placeholder Nav Label
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

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-5">
              Placeholder Contact Label
            </h3>
            <ul className="space-y-4">
              {[
                { country: "Placeholder Country One", line: "0-000-000-0000", label: "Placeholder Organization Name" },
                { country: "Placeholder Country Two", line: "0000 0000 000", label: "Placeholder Organization Name" },
                { country: "Placeholder Country Three", line: "0000 000 000", label: "Placeholder Organization Name" },
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
            Placeholder disclaimer text. Lorem ipsum dolor sit amet consectetur.
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
