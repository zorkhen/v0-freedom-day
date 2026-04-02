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
            自由是每个人的
            <span className="text-red-500">基本权利</span>
          </h1>

          {/* Supporting text */}
          <p className="mt-6 text-lg leading-8 text-neutral-300 max-w-xl">
            全球有超过5000万人正处于现代奴役之中。这不是历史，而是正在发生的现实。
            加入我们，共同提高意识，打击人口贩卖，为受害者发声。
          </p>

          {/* Statistics */}
          <div className="mt-10 grid grid-cols-3 gap-8">
            <div>
              <p className="text-3xl font-bold text-red-500">50M+</p>
              <p className="mt-1 text-sm text-neutral-400">现代奴役受害者</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-red-500">150B</p>
              <p className="mt-1 text-sm text-neutral-400">非法利润（美元）</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-red-500">167</p>
              <p className="mt-1 text-sm text-neutral-400">受影响国家</p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-red-700 text-white hover:bg-red-800 px-8"
            >
              采取行动
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-neutral-600 text-white hover:bg-neutral-800 hover:text-white"
            >
              了解更多
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
