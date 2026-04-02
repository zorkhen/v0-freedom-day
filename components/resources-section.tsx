export function ResourcesSection() {
  const resources = [
    {
      category: "报告",
      title: "2024年全球奴役指数",
      description:
        "全面分析全球现代奴役的规模、分布和政府应对措施的年度报告。",
    },
    {
      category: "指南",
      title: "识别人口贩卖迹象",
      description:
        "帮助公众识别和报告潜在人口贩卖案件的实用指南，包括关键警告信号和报告渠道。",
    },
    {
      category: "教育",
      title: "学校教育资源包",
      description:
        "为教师设计的课堂资源，帮助学生了解现代奴役问题并培养批判性思维。",
    },
  ]

  return (
    <section id="resources" className="bg-neutral-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-red-700 uppercase tracking-wider mb-3">
            资源中心
          </p>
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl tracking-tight text-balance">
            深入了解与行动
          </h2>
          <p className="mt-4 text-lg text-neutral-600 leading-7">
            探索我们精选的资源，获取更多信息并找到参与的方式。
          </p>
        </div>

        {/* Resource cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white border border-neutral-200 overflow-hidden"
            >
              {/* Image placeholder */}
              <div className="aspect-[16/10] bg-neutral-200 flex items-center justify-center">
                <div className="w-12 h-12 bg-neutral-300 flex items-center justify-center">
                  <svg className="w-6 h-6 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold text-red-700 uppercase tracking-wider mb-2">
                  {resource.category}
                </p>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-6 mb-4">
                  {resource.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-red-700 hover:text-red-800"
                >
                  了解更多
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
