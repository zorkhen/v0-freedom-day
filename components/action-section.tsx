import { Button } from "@/components/ui/button"

export function ActionSection() {
  const actions = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "自我教育",
      description:
        "了解现代奴役的形式、迹象和影响。知识是采取行动的第一步。阅读报告，观看纪录片，参加研讨会。",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      ),
      title: "传播意识",
      description:
        "使用 #MyFreedomDay 标签在社交媒体上分享信息。与家人、朋友和同事讨论这个问题。沉默是剥削的帮凶。",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "识别迹象",
      description:
        "学会识别现代奴役的警告信号：孤立、恐惧、身体虐待迹象、无法控制自己的证件或金钱。如果怀疑有问题，请报告。",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "支持组织",
      description:
        "捐款或志愿服务于打击人口贩卖的组织。您的支持可以帮助救援受害者、提供康复服务和推动政策变革。",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "道德消费",
      description:
        "了解您购买的产品的来源。选择承诺不使用强迫劳动的品牌。您的消费选择可以推动企业采用更道德的供应链。",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
        </svg>
      ),
      title: "倡导变革",
      description:
        "联系您的代表，敦促他们支持打击人口贩卖的立法。签署请愿书，参与运动。政策变革需要公民的声音。",
    },
  ]

  return (
    <section id="action" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-red-700 uppercase tracking-wider mb-3">
            采取行动
          </p>
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl tracking-tight text-balance">
            您可以做出改变
          </h2>
          <p className="mt-4 text-lg text-neutral-600 leading-7">
            每个人都可以在打击现代奴役中发挥作用。
            以下是您可以采取的具体行动。
          </p>
        </div>

        {/* Action cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <div
              key={index}
              className="group p-6 border border-neutral-200 hover:border-red-200"
            >
              <div className="w-12 h-12 bg-red-50 flex items-center justify-center text-red-700 mb-4">
                {action.icon}
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {action.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-6">
                {action.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="bg-red-700 text-white hover:bg-red-800 px-8"
          >
            加入行动
          </Button>
        </div>
      </div>
    </section>
  )
}
