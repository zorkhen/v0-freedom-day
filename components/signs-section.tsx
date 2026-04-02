export function SignsSection() {
  const signs = [
    {
      context: "In Public",
      indicators: [
        "Appears disoriented, confused, or fearful",
        "Does not make eye contact or speak freely",
        "Has a third party speaking on their behalf",
        "Seems not to know where they are or what city/country they are in",
        "Wears clothing inappropriate for the weather",
      ],
    },
    {
      context: "In the Workplace",
      indicators: [
        "Works excessively long hours with no breaks",
        "Not paid directly — wages go to someone else",
        "Lives at the place of work with many others in poor conditions",
        "Documents (passport, ID) are held by an employer",
        "Not allowed to take breaks or days off",
      ],
    },
    {
      context: "In the Home",
      indicators: [
        "Domestic worker who is not allowed to leave or speak privately",
        "Sleeps in a shared, inadequate space on the premises",
        "Shows signs of physical abuse or malnourishment",
        "Unaware of their legal rights or unable to access support",
        "Has no personal possessions or freedom of movement",
      ],
    },
    {
      context: "In Children",
      indicators: [
        "Absent from school or frequently changing schools",
        "Appears malnourished, tired, or poorly clothed",
        "An adult controls all communication with the child",
        "Child does not know the adult they are with well",
        "Shows signs of physical abuse or fear of adults",
      ],
    },
  ]

  return (
    <section id="signs" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-red-700 uppercase tracking-wider mb-3">
            Awareness
          </p>
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl tracking-tight text-balance">
            Recognizing the Warning Signs
          </h2>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            Modern slavery is often hidden in plain sight. These indicators do not confirm
            that someone is a victim, but they may signal that something is wrong. If you
            suspect modern slavery, do not confront the suspected trafficker — contact the
            relevant authorities.
          </p>
        </div>

        {/* Signs grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {signs.map((group) => (
            <div key={group.context} className="border border-neutral-200 p-7">
              <h3 className="text-base font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <span className="block w-3 h-3 bg-red-700 flex-shrink-0" />
                {group.context}
              </h3>
              <ul className="space-y-2">
                {group.indicators.map((indicator) => (
                  <li
                    key={indicator}
                    className="flex items-start gap-3 text-sm text-neutral-600 leading-relaxed"
                  >
                    <span className="mt-2 block w-1.5 h-1.5 bg-neutral-400 rounded-full flex-shrink-0" />
                    {indicator}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Report callout */}
        <div id="report" className="mt-14 bg-neutral-900 px-8 py-10 md:px-12">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">How to Report</h3>
              <p className="text-neutral-400 leading-relaxed text-sm">
                If you believe someone is a victim of trafficking or modern slavery, contact
                the relevant national hotline. Do not put yourself or the potential victim in
                danger. If there is an immediate threat to life, call emergency services first.
              </p>
              <p className="mt-4 text-neutral-400 leading-relaxed text-sm">
                When reporting, try to note: location, number of people, physical descriptions,
                vehicle details if applicable, and any other relevant observations.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  country: "United States",
                  line: "1-888-373-7888",
                  org: "National Human Trafficking Hotline",
                  text: "Text: 233733",
                },
                {
                  country: "United Kingdom",
                  line: "0800 0121 700",
                  org: "Modern Slavery Helpline",
                  text: null,
                },
                {
                  country: "Australia",
                  line: "1800 021 221",
                  org: "Australian Federal Police",
                  text: null,
                },
                {
                  country: "International",
                  line: "report.unhcr.org",
                  org: "UNHCR — Report exploitation",
                  text: null,
                },
              ].map((entry) => (
                <div key={entry.country} className="border border-neutral-700 px-5 py-4">
                  <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">
                    {entry.country}
                  </p>
                  <p className="text-white font-semibold">{entry.line}</p>
                  <p className="text-neutral-500 text-xs mt-0.5">{entry.org}</p>
                  {entry.text && <p className="text-neutral-500 text-xs">{entry.text}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
