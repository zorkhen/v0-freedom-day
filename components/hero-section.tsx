export function HeroSection() {
  return (
    <section className="relative bg-neutral-900">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-neutral-900/60" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-3xl">
          {/* Hashtag badge */}
          <div className="mb-6">
            <span className="inline-flex items-center bg-red-700/20 px-4 py-1.5 text-sm font-medium text-red-400 border border-red-700/30">
              #MyFreedomDay
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            Modern Slavery Affects{" "}
            <span className="text-red-500">50 Million People</span>{" "}
            Today
          </h1>

          {/* Supporting text */}
          <p className="mt-6 text-lg leading-relaxed text-neutral-300 max-w-2xl">
            Modern slavery is not a relic of the past. It is happening right now — in factories,
            farms, homes, and streets across every country on earth. #MyFreedomDay is a CNN-led
            global awareness initiative that brings this crisis into focus.
          </p>

          {/* Statistics row */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-neutral-700 pt-10">
            <div>
              <p className="text-3xl font-bold text-red-500">50M+</p>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                People living in modern slavery worldwide
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-red-500">$150B</p>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                Generated annually in illegal profits by traffickers
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-red-500">1 in 4</p>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                Victims of modern slavery are children
              </p>
            </div>
          </div>

          {/* Source note */}
          <p className="mt-6 text-xs text-neutral-500">
            Source: International Labour Organization (ILO) &amp; Walk Free Global Slavery Index, 2023
          </p>
        </div>
      </div>
    </section>
  )
}
