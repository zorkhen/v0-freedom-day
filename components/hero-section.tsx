export function HeroSection() {
  return (
    <section className="relative bg-neutral-900">
      {/* Background placeholder */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-full h-full bg-neutral-700 flex items-center justify-center">
          <span className="text-neutral-500 text-sm">Image placeholder</span>
        </div>
        <div className="absolute inset-0 bg-neutral-900/60" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-3xl">
          <div className="mb-6">
            <span className="inline-flex items-center bg-red-700/20 px-4 py-1.5 text-sm font-medium text-red-400 border border-red-700/30">
              #PlaceholderTag
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            Placeholder Headline{" "}
            <span className="text-red-500">Placeholder Highlight</span>{" "}
            Text
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-neutral-300 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-neutral-700 pt-10">
            <div>
              <p className="text-3xl font-bold text-red-500">00M+</p>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                Placeholder statistic description one
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-red-500">$000B</p>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                Placeholder statistic description two
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-red-500">0 in 0</p>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                Placeholder statistic description three
              </p>
            </div>
          </div>

          <p className="mt-6 text-xs text-neutral-500">
            Source: Placeholder source name, Year
          </p>
        </div>
      </div>
    </section>
  )
}
