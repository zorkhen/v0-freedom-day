import { Button } from "@/components/ui/button"

export function DonationSection() {
  return (
    <section className="bg-neutral-900 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-3">
              Support Our Mission
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl tracking-tight text-balance">
              Your Donation Can Change Lives
            </h2>
            <p className="mt-6 text-neutral-300 leading-7">
              Your generous support will directly help us expand education programs,
              support survivor recovery, and drive policy change. Every donation,
              no matter the size, is a vital force in the fight against modern slavery.
            </p>

            {/* Impact stats */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="border-l-2 border-red-700 pl-4">
                <p className="text-2xl font-bold text-white">500+</p>
                <p className="text-sm text-neutral-400">Survivors Rescued</p>
              </div>
              <div className="border-l-2 border-red-700 pl-4">
                <p className="text-2xl font-bold text-white">50K+</p>
                <p className="text-sm text-neutral-400">People Educated</p>
              </div>
              <div className="border-l-2 border-red-700 pl-4">
                <p className="text-2xl font-bold text-white">30+</p>
                <p className="text-sm text-neutral-400">Partner Countries</p>
              </div>
              <div className="border-l-2 border-red-700 pl-4">
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-sm text-neutral-400">Transparency Commitment</p>
              </div>
            </div>
          </div>

          {/* Donation form placeholder */}
          <div className="bg-white p-8">
            <h3 className="text-xl font-semibold text-neutral-900 mb-6">
              Choose Your Donation Amount
            </h3>

            {/* Amount buttons */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {["$25", "$50", "$100", "$250", "$500", "Other"].map(
                (amount) => (
                  <button
                    key={amount}
                    className="py-3 text-center border border-neutral-300 text-neutral-700 font-medium hover:border-red-700 hover:text-red-700 focus:border-red-700 focus:text-red-700 focus:outline-none"
                  >
                    {amount}
                  </button>
                )
              )}
            </div>

            {/* Frequency */}
            <div className="mb-6">
              <p className="text-sm font-medium text-neutral-700 mb-3">
                Donation Frequency
              </p>
              <div className="flex gap-3">
                <button className="flex-1 py-2 text-center bg-red-700 text-white font-medium">
                  One-time
                </button>
                <button className="flex-1 py-2 text-center border border-neutral-300 text-neutral-700 font-medium hover:border-red-700">
                  Monthly
                </button>
              </div>
            </div>

            {/* Name input placeholder */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:border-red-700 focus:outline-none"
              />
            </div>

            {/* Email input placeholder */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:border-red-700 focus:outline-none"
              />
            </div>

            <Button
              size="lg"
              className="w-full bg-red-700 text-white hover:bg-red-800"
            >
              Complete Donation
            </Button>

            <p className="mt-4 text-xs text-neutral-500 text-center">
              Your donation is secure. We use encryption to protect your information.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
