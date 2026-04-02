export function ResourcesSection() {
  const reports = [
    {
      category: "Global Index",
      title: "Global Slavery Index 2023",
      publisher: "Walk Free Foundation",
      description:
        "The world's most comprehensive data on modern slavery, covering 160 countries. Includes government response rankings, prevalence estimates, and vulnerability factors.",
      href: "https://www.walkfree.org/global-slavery-index/",
    },
    {
      category: "ILO Report",
      title: "Global Estimates of Modern Slavery",
      publisher: "International Labour Organization",
      description:
        "Joint ILO and Walk Free report providing the most authoritative global statistics on forced labor and forced marriage, updated in 2022.",
      href: "https://www.ilo.org/global/topics/forced-labour/publications/WCMS_854733/lang--en/index.htm",
    },
    {
      category: "UN Report",
      title: "Global Report on Trafficking in Persons",
      publisher: "UNODC",
      description:
        "Biennial report by the UN Office on Drugs and Crime analyzing trafficking patterns, victim profiles, criminal justice responses, and trends across world regions.",
      href: "https://www.unodc.org/unodc/data-and-analysis/glotip.html",
    },
    {
      category: "UK Legislation",
      title: "Modern Slavery Act 2015",
      publisher: "UK Parliament",
      description:
        "The United Kingdom's landmark legislation consolidating offenses related to trafficking and slavery. Requires large companies to publish annual transparency statements on their supply chains.",
      href: "https://www.legislation.gov.uk/ukpga/2015/30/contents",
    },
    {
      category: "Educational",
      title: "Free the Slaves — Learning Resources",
      publisher: "Free the Slaves NGO",
      description:
        "Guides and educational materials for teachers, students, and community groups looking to learn about and discuss modern slavery in a structured way.",
      href: "https://www.freetheslaves.net/",
    },
    {
      category: "Journalism",
      title: "CNN Freedom Project",
      publisher: "CNN",
      description:
        "The original journalism initiative behind #MyFreedomDay. A long-running investigative series covering individual stories of modern slavery and the global response to it.",
      href: "https://edition.cnn.com/specials/world/freedom-project",
    },
  ]

  return (
    <section id="resources" className="bg-neutral-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-red-700 uppercase tracking-wider mb-3">
            Resources
          </p>
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl tracking-tight text-balance">
            Further Reading &amp; Research
          </h2>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            The following reports, datasets, and publications are authoritative sources for
            anyone seeking to understand the scale, mechanics, and legal frameworks around
            modern slavery.
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
                View resource
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Key organizations */}
        <div className="mt-16">
          <h3 className="text-lg font-semibold text-neutral-900 mb-6">Key Organizations Working on This Issue</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "International Justice Mission", url: "https://www.ijm.org", focus: "Rescue & restoration" },
              { name: "Anti-Slavery International", url: "https://www.antislavery.org", focus: "Advocacy & policy" },
              { name: "Polaris Project", url: "https://polarisproject.org", focus: "US hotline & research" },
              { name: "ECPAT International", url: "https://www.ecpat.org", focus: "Child trafficking" },
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
