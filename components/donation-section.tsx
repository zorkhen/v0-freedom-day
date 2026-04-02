import { Button } from "@/components/ui/button"

export function DonationSection() {
  return (
    <section className="bg-neutral-900 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-3">
              支持我们的使命
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl tracking-tight text-balance">
              您的捐款可以改变生命
            </h2>
            <p className="mt-6 text-neutral-300 leading-7">
              您的慷慨支持将直接帮助我们扩大教育项目，
              支持幸存者康复，并推动政策变革。每一份捐款，
              无论大小，都是对抗现代奴役斗争中的重要力量。
            </p>

            {/* Impact stats */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="border-l-2 border-red-700 pl-4">
                <p className="text-2xl font-bold text-white">500+</p>
                <p className="text-sm text-neutral-400">救援幸存者</p>
              </div>
              <div className="border-l-2 border-red-700 pl-4">
                <p className="text-2xl font-bold text-white">50K+</p>
                <p className="text-sm text-neutral-400">教育参与者</p>
              </div>
              <div className="border-l-2 border-red-700 pl-4">
                <p className="text-2xl font-bold text-white">30+</p>
                <p className="text-sm text-neutral-400">合作国家</p>
              </div>
              <div className="border-l-2 border-red-700 pl-4">
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-sm text-neutral-400">透明度承诺</p>
              </div>
            </div>
          </div>

          {/* Donation form placeholder */}
          <div className="bg-white p-8">
            <h3 className="text-xl font-semibold text-neutral-900 mb-6">
              选择捐款金额
            </h3>

            {/* Amount buttons */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {["¥50", "¥100", "¥200", "¥500", "¥1000", "其他"].map(
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
                捐款频率
              </p>
              <div className="flex gap-3">
                <button className="flex-1 py-2 text-center bg-red-700 text-white font-medium">
                  一次性
                </button>
                <button className="flex-1 py-2 text-center border border-neutral-300 text-neutral-700 font-medium hover:border-red-700">
                  每月
                </button>
              </div>
            </div>

            {/* Name input placeholder */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                您的姓名
              </label>
              <input
                type="text"
                placeholder="请输入您的姓名"
                className="w-full px-4 py-3 border border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:border-red-700 focus:outline-none"
              />
            </div>

            {/* Email input placeholder */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                电子邮箱
              </label>
              <input
                type="email"
                placeholder="请输入您的邮箱"
                className="w-full px-4 py-3 border border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:border-red-700 focus:outline-none"
              />
            </div>

            <Button
              size="lg"
              className="w-full bg-red-700 text-white hover:bg-red-800"
            >
              确认捐款
            </Button>

            <p className="mt-4 text-xs text-neutral-500 text-center">
              您的捐款安全可靠。我们使用加密技术保护您的信息。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
