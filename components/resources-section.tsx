export function ResourcesSection() {
  const reports = [
    {
      category: "Placeholder Category",
      title: "Placeholder Resource Title One",
      publisher: "Placeholder Publisher Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.",
      href: "#",
    },
    {
      category: "Placeholder Category",
      title: "Placeholder Resource Title Two",
      publisher: "Placeholder Publisher Name",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      href: "#",
    },
    {
      category: "Placeholder Category",
      title: "Placeholder Resource Title Three",
      publisher: "Placeholder Publisher Name",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi.",
      href: "#",
    },
    {
      category: "Placeholder Category",
      title: "Placeholder Resource Title Four",
      publisher: "Placeholder Publisher Name",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.",
      href: "#",
    },
    {
      category: "Placeholder Category",
      title: "Placeholder Resource Title Five",
      publisher: "Placeholder Publisher Name",
      description:
        "Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus omnis voluptas.",
      href: "#",
    },
    {
      category: "Placeholder Category",
      title: "Placeholder Resource Title Six",
      publisher: "Placeholder Publisher Name",
      description:
        "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non.",
      href: "#",
    },
  ]

  return (
    <section id="resources" className="scroll-mt-28 bg-neutral-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-red-700 uppercase tracking-wider mb-3">
            Placeholder Label
          </p>
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl tracking-tight text-balance">
            Placeholder Section Heading
          </h2>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.
          </p>
        </div>

        {/* Resource list */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((resource) => (
            <a
              key={resource.title}
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-neutral-200 p-7 flex flex-col hover:border-neutral-400"
            >
              <p className="text-xs font-semibold text-red-700 uppercase tracking-wider mb-2">
                {resource.category}
              </p>
              <h3 className="text-base font-semibold text-neutral-900 mb-1 group-hover:underline">
                {resource.title}
              </h3>
              <p className="text-xs text-neutral-500 mb-3">{resource.publisher}</p>
              <p className="text-sm text-neutral-600 leading-relaxed flex-1">
                {resource.description}
              </p>
              <div className="mt-5 flex items-center gap-1 text-sm font-medium text-red-700">
                Placeholder link text
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Key organizations */}
        <div className="mt-16">
          <h3 className="text-lg font-semibold text-neutral-900 mb-6">Placeholder Organizations Heading</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Placeholder Organization One", url: "#", focus: "Placeholder focus" },
              { name: "Placeholder Organization Two", url: "#", focus: "Placeholder focus" },
              { name: "Placeholder Organization Three", url: "#", focus: "Placeholder focus" },
              { name: "Placeholder Organization Four", url: "#", focus: "Placeholder focus" },
            ].map((org) => (
              <a
                key={org.name}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-neutral-200 bg-white px-5 py-4 hover:border-neutral-400"
              >
                <p className="font-medium text-sm text-neutral-900">{org.name}</p>
                <p className="text-xs text-neutral-500 mt-1">{org.focus}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
