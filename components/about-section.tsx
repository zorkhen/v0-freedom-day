export function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column: what it is */}
          <div>
            <p className="text-sm font-semibold text-red-700 uppercase tracking-wider mb-3">
              About the Campaign
            </p>
            <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl tracking-tight text-balance">
              What is #MyFreedomDay?
            </h2>
            <div className="mt-6 space-y-4 text-neutral-600 leading-relaxed">
              <p>
                #MyFreedomDay is a student-led global day of action against modern slavery,
                powered by CNN. Held each year on March 14, it asks one simple but profound
                question to young people around the world: <strong className="text-neutral-800">What does freedom mean to you?</strong>
              </p>
              <p>
                The initiative was launched by CNN in partnership with anti-slavery organizations
                to engage schools, universities, and communities in a global conversation about
                human trafficking and forced labor. Students participate by hosting events,
                sharing messages, and educating their peers.
              </p>
              <p>
                Awareness is the first and most critical tool in the fight against modern slavery.
                Traffickers rely on public ignorance. The more people understand how slavery
                operates, what it looks like, and who it affects, the harder it becomes for
                exploitation to go unnoticed and unreported.
              </p>
            </div>
          {/* Image */}
            <div className="mt-8">
              <img
                src="/images/about-campaign.jpg"
                alt="Students holding awareness signs at a #MyFreedomDay school event"
                className="w-full object-cover aspect-video"
              />
              <p className="mt-2 text-xs text-neutral-400">
                Students participating in a #MyFreedomDay awareness event.
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-red-700 uppercase tracking-wider mb-3">
              Defining the Issue
            </p>
            <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl tracking-tight text-balance">
              What is Modern Slavery?
            </h2>
            <div className="mt-6 space-y-4 text-neutral-600 leading-relaxed">
              <p>
                Modern slavery is an umbrella term covering serious exploitations including
                human trafficking, forced labor, debt bondage, forced marriage, and domestic
                servitude. While legal slavery was abolished worldwide, these practices
                continue in every region of the globe.
              </p>
              <p>
                Unlike historical chattel slavery, modern slavery is often hidden in plain
                sight — in supply chains, private households, nail salons, car washes, and
                construction sites. Victims are controlled through violence, threats, debt
                manipulation, and document confiscation.
              </p>
            </div>

            {/* Key definitions */}
            <dl className="mt-8 space-y-4">
              {[
                {
                  term: "Human Trafficking",
                  def: "The recruitment, transport, or harboring of people by force, fraud, or coercion for exploitation.",
                },
                {
                  term: "Forced Labor",
                  def: "Any work performed under threat of penalty that a person has not offered themselves for voluntarily.",
                },
                {
                  term: "Debt Bondage",
                  def: "Requiring a person to work to repay a debt under terms that make repayment impossible.",
                },
              ].map(({ term, def }) => (
                <div key={term} className="border-l-2 border-red-700 pl-4">
                  <dt className="font-semibold text-neutral-900 text-sm">{term}</dt>
                  <dd className="mt-1 text-sm text-neutral-600 leading-relaxed">{def}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
