export function SignsSection() {
  const signs = [
    {
      context: "Placeholder Context One",
      indicators: [
        "Lorem ipsum dolor sit amet consectetur adipiscing elit",
        "Sed do eiusmod tempor incididunt ut labore et dolore",
        "Ut enim ad minim veniam quis nostrud exercitation",
        "Duis aute irure dolor in reprehenderit in voluptate",
        "Excepteur sint occaecat cupidatat non proident",
      ],
    },
    {
      context: "Placeholder Context Two",
      indicators: [
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
        "At vero eos et accusamus et iusto odio dignissimos",
        "Nam libero tempore cum soluta nobis est eligendi optio",
        "Temporibus autem quibusdam et aut officiis debitis",
        "Quis autem vel eum iure reprehenderit qui in ea voluptate",
      ],
    },
    {
      context: "Placeholder Context Three",
      indicators: [
        "Itaque earum rerum hic tenetur a sapiente delectus",
        "Neque porro quisquam est qui dolorem ipsum quia dolor",
        "Ut labore et dolore magnam aliquam quaerat voluptatem",
        "Quid est enim aliud agere nisi turpiter atque improbe",
        "Omnis voluptas assumenda est omnis dolor repellendus",
      ],
    },
    {
      context: "Placeholder Context Four",
      indicators: [
        "Similique sunt in culpa qui officia deserunt mollitia",
        "Et harum quidem rerum facilis est et expedita distinctio",
        "Nam libero tempore cum soluta nobis eligendi optio",
        "Temporibus autem quibusdam aut rerum necessitatibus",
        "Saepe eveniet ut et voluptates repudiandae sint molestiae",
      ],
    },
  ]

  return (
    <section id="signs" className="scroll-mt-28 bg-white py-20 lg:py-28">
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
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris.
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
        <div id="report" className="scroll-mt-28 mt-14 bg-neutral-900 px-8 py-10 md:px-12">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Placeholder Report Heading</h3>
              <p className="text-neutral-400 leading-relaxed text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip.
              </p>
              <p className="mt-4 text-neutral-400 leading-relaxed text-sm">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident deserunt.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  country: "Placeholder Country One",
                  line: "0-000-000-0000",
                  org: "Placeholder Organization Name",
                  text: "Text: 000000",
                },
                {
                  country: "Placeholder Country Two",
                  line: "0000 0000 000",
                  org: "Placeholder Organization Name",
                  text: null,
                },
                {
                  country: "Placeholder Country Three",
                  line: "0000 000 000",
                  org: "Placeholder Organization Name",
                  text: null,
                },
                {
                  country: "Placeholder International",
                  line: "placeholder.url",
                  org: "Placeholder Organization Name",
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
