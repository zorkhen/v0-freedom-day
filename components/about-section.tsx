export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <div>
            <p className="text-sm font-semibold text-red-700 uppercase tracking-wider mb-3">
              Placeholder Label
            </p>
            <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl tracking-tight text-balance">
              Placeholder Heading One
            </h2>
            <div className="mt-6 space-y-4 text-neutral-600 leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. <strong className="text-neutral-800">Placeholder emphasis text.</strong>
              </p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium.
              </p>
            </div>
            {/* Image placeholder */}
            <div className="mt-8">
              <div className="w-full aspect-video bg-neutral-200 flex items-center justify-center">
                <span className="text-neutral-400 text-sm">Image placeholder</span>
              </div>
              <p className="mt-2 text-xs text-neutral-400">
                Placeholder image caption text.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div>
            <p className="text-sm font-semibold text-red-700 uppercase tracking-wider mb-3">
              Placeholder Label
            </p>
            <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl tracking-tight text-balance">
              Placeholder Heading Two
            </h2>
            <div className="mt-6 space-y-4 text-neutral-600 leading-relaxed">
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque
                porro quisquam est.
              </p>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                excepturi sint occaecati cupiditate.
              </p>
            </div>

            <dl className="mt-8 space-y-4">
              {[
                {
                  term: "Placeholder Term One",
                  def: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                },
                {
                  term: "Placeholder Term Two",
                  def: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
                },
                {
                  term: "Placeholder Term Three",
                  def: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
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
