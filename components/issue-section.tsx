export function IssueSection() {
  const issues = [
    {
      title: "Placeholder Title One",
      stat: "00.0M",
      statLabel: "placeholder stat label",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      source: "Placeholder Source, Year",
    },
    {
      title: "Placeholder Title Two",
      stat: "00M",
      statLabel: "placeholder stat label",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      source: "Placeholder Source, Year",
    },
    {
      title: "Placeholder Title Three",
      stat: "~00%",
      statLabel: "placeholder stat label",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam.",
      source: "Placeholder Source",
    },
    {
      title: "Placeholder Title Four",
      stat: "00M",
      statLabel: "placeholder stat label",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.",
      source: "Placeholder Source, Year",
    },
    {
      title: "Placeholder Title Five",
      stat: "0.0M",
      statLabel: "placeholder stat label",
      description:
        "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae itaque earum rerum.",
      source: "Placeholder Source, Year",
    },
    {
      title: "Placeholder Title Six",
      stat: "Placeholder",
      statLabel: "placeholder stat label",
      description:
        "Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
      source: "Placeholder Source",
    },
  ]

  return (
    <section id="issue" className="scroll-mt-28 bg-neutral-50 py-20 lg:py-28">
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

        {/* Issue cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {issues.map((issue) => (
            <div key={issue.title} className="bg-white p-7 border border-neutral-200">
              <div className="mb-4">
                <p className="text-2xl font-bold text-red-700">{issue.stat}</p>
                <p className="text-xs text-neutral-500 mt-0.5">{issue.statLabel}</p>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">{issue.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{issue.description}</p>
              <p className="mt-4 text-xs text-neutral-400">Source: {issue.source}</p>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div className="mt-14 bg-red-700 px-8 py-10 md:px-12">
          <blockquote>
            <p className="text-xl md:text-2xl font-medium text-white leading-relaxed max-w-3xl text-balance">
              {'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."'}
            </p>
            <footer className="mt-5">
              <p className="text-red-200 text-sm">
                — Placeholder Attribution, Placeholder Publication Title
              </p>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
