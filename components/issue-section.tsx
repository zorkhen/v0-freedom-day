export function IssueSection() {
  const issues = [
    {
      title: "强迫劳动",
      description:
        "数百万人被迫在恶劣条件下工作，无法自由离开。他们可能在工厂、农业、建筑业或家庭服务中被剥削。受害者通常被没收证件，受到威胁或实际暴力。",
      stat: "27.6M",
      statLabel: "强迫劳动受害者",
    },
    {
      title: "强迫婚姻",
      description:
        "强迫婚姻影响着全球数百万人，主要是妇女和女孩。受害者在没有同意的情况下被迫结婚，往往面临身体和心理虐待。",
      stat: "22M",
      statLabel: "强迫婚姻受害者",
    },
    {
      title: "债务奴役",
      description:
        "当人们被迫工作以偿还债务，而债务条件使他们永远无法还清时，就会发生债务奴役。这是世界上最普遍的奴役形式之一。",
      stat: "50%",
      statLabel: "强迫劳动中的债务奴役",
    },
    {
      title: "人口贩卖",
      description:
        "人口贩卖涉及通过武力、欺诈或胁迫招募、运输或窝藏人员进行剥削。受害者可能被贩卖用于性剥削、强迫劳动或器官摘取。",
      stat: "4.8M",
      statLabel: "性剥削受害者",
    },
  ]

  return (
    <section id="issue" className="bg-neutral-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-red-700 uppercase tracking-wider mb-3">
            问题现状
          </p>
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl tracking-tight text-balance">
            现代奴役的多种形式
          </h2>
          <p className="mt-4 text-lg text-neutral-600 leading-7">
            现代奴役不是过去的遗迹，而是当今世界面临的严峻现实。
            了解其不同形式是打击它的第一步。
          </p>
        </div>

        {/* Issue cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {issues.map((issue, index) => (
            <div
              key={index}
              className="bg-white p-8 border border-neutral-200"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-neutral-900">
                  {issue.title}
                </h3>
                <div className="text-right">
                  <p className="text-2xl font-bold text-red-700">{issue.stat}</p>
                  <p className="text-xs text-neutral-500">{issue.statLabel}</p>
                </div>
              </div>
              <p className="text-neutral-600 leading-7">{issue.description}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 bg-red-700 p-8 md:p-12">
          <blockquote className="text-center">
            <p className="text-xl md:text-2xl font-medium text-white leading-relaxed max-w-3xl mx-auto text-balance">
              {"\"自由的真正考验不是我们拥有自由，而是我们如何为没有自由的人争取自由。\""}
            </p>
            <footer className="mt-6">
              <p className="text-red-200">— 人权倡导者</p>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
