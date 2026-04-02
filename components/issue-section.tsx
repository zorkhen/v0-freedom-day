export function IssueSection() {
  const issues = [
    {
      title: "Forced Labor",
      description:
        "Millions of people are forced to work under harsh conditions with no freedom to leave. They may be exploited in factories, agriculture, construction, or domestic service. Victims often have their documents confiscated and face threats or actual violence.",
      stat: "27.6M",
      statLabel: "Forced Labor Victims",
    },
    {
      title: "Forced Marriage",
      description:
        "Forced marriage affects millions of people globally, primarily women and girls. Victims are married without their consent and often face physical and psychological abuse.",
      stat: "22M",
      statLabel: "Forced Marriage Victims",
    },
    {
      title: "Debt Bondage",
      description:
        "Debt bondage occurs when people are forced to work to repay a debt, under terms that make it impossible for them to ever pay it off. It is one of the most prevalent forms of slavery in the world.",
      stat: "50%",
      statLabel: "Of Forced Labor is Debt Bondage",
    },
    {
      title: "Human Trafficking",
      description:
        "Human trafficking involves recruiting, transporting, or harboring people through force, fraud, or coercion for exploitation. Victims may be trafficked for sexual exploitation, forced labor, or organ harvesting.",
      stat: "4.8M",
      statLabel: "Sexual Exploitation Victims",
    },
  ]

  return (
    <section id="issue" className="bg-neutral-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-red-700 uppercase tracking-wider mb-3">
            The Issue
          </p>
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl tracking-tight text-balance">
            The Many Forms of Modern Slavery
          </h2>
          <p className="mt-4 text-lg text-neutral-600 leading-7">
            Modern slavery is not a relic of the past — it is a harsh reality facing the world today.
            Understanding its different forms is the first step toward fighting it.
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
              {"\"The true measure of freedom is not that we have it, but how we fight for those who do not.\""}
            </p>
            <footer className="mt-6">
              <p className="text-red-200">— Human Rights Advocate</p>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
