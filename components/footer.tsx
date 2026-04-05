import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

const infoLinks = [
  { name: "Placeholder Link One", href: "/#about" },
  { name: "Placeholder Link Two", href: "/#issue" },
  { name: "Placeholder Link Three", href: "/#signs" },
  { name: "Placeholder Link Four", href: "/#report" },
  { name: "Placeholder Link Five", href: "/#resources" },
  { name: "Placeholder Link Six", href: "/gallery" },
]

const contacts = [
  { country: "Placeholder Country One", line: "0-000-000-0000", label: "Placeholder Organization Name" },
  { country: "Placeholder Country Two", line: "0000 0000 000", label: "Placeholder Organization Name" },
  { country: "Placeholder Country Three", line: "0000 000 000", label: "Placeholder Organization Name" },
]

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3 w-fit">
              <div className="flex h-10 w-10 items-center justify-center bg-red-700 font-bold text-sm tracking-tight text-white shrink-0">
                PLH
              </div>
              <span className="text-base font-semibold tracking-tight">#PlaceholderBrand</span>
            </Link>
            <p className="text-sm leading-relaxed text-neutral-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua ut enim ad minim.
            </p>
            <Badge variant="outline" className="border-neutral-700 text-neutral-500 text-xs">
              Placeholder badge
            </Badge>
          </div>

          {/* Navigation */}
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Placeholder Nav Label
            </p>
            <ul className="space-y-2">
              {infoLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Placeholder Contact Label
            </p>
            <ul className="space-y-4">
              {contacts.map((entry) => (
                <li key={entry.country} className="rounded-md border border-neutral-800 bg-neutral-900 px-4 py-3">
                  <p className="text-xs text-neutral-500">{entry.country}</p>
                  <p className="mt-0.5 text-sm font-semibold text-white">{entry.line}</p>
                  <p className="text-xs text-neutral-500">{entry.label}</p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <Separator className="bg-neutral-800" />

      <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
        <p className="text-xs text-neutral-500">
          Placeholder disclaimer text. Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
    </footer>
  )
}
