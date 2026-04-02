import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative bg-neutral-900">
      {/* Background image placeholder */}
      <div className="absolute inset-0">
        <div className="h-full w-full bg-gradient-to-r from-neutral-900 via-neutral-900/95 to-neutral-900/80" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-2xl">
          {/* Hashtag badge */}
          <div className="mb-6">
            <span className="inline-flex items-center bg-red-700/20 px-4 py-1.5 text-sm font-medium text-red-400 border border-red-700/30">
              #MyFreedomDay
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            Freedom is a
            <span className="text-red-500"> Fundamental Right</span>
          </h1>

          {/* Supporting text */}
          <p className="mt-6 text-lg leading-8 text-neutral-300 max-w-xl">
            Over 50 million people are trapped in modern slavery today. This is not history — it is happening now.
            Join us to raise awareness, combat human trafficking, and give voice to the voiceless.
          </p>

          {/* Statistics */}
          <div className="mt-10 grid grid-cols-3 gap-8">
            <div>
              <p className="text-3xl font-bold text-red-500">50M+</p>
              <p className="mt-1 text-sm text-neutral-400">Victims of Modern Slavery</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-red-500">$150B</p>
              <p className="mt-1 text-sm text-neutral-400">Illegal Profits Annually</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-red-500">167</p>
              <p className="mt-1 text-sm text-neutral-400">Countries Affected</p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-red-700 text-white hover:bg-red-800 px-8"
            >
              Take Action
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-neutral-600 text-white hover:bg-neutral-800 hover:text-white"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
