export function IssueSection() {
  const issues = [
    {
      title: "Forced Labor",
      stat: "27.6M",
      statLabel: "victims globally",
      description:
        "Forced labor is the most prevalent form of modern slavery. Victims are compelled to work through violence, intimidation, or debt manipulation. Industries most commonly implicated include agriculture, construction, manufacturing, domestic work, and fishing.",
      source: "ILO, 2022",
    },
    {
      title: "Forced Marriage",
      stat: "22M",
      statLabel: "people affected",
      description:
        "Forced marriage occurs when one or both parties do not or cannot give their full and free consent. It disproportionately affects women and girls. In some cases it is used as a means of trafficking, with victims subsequently subjected to domestic servitude or sexual exploitation.",
      source: "ILO & Walk Free, 2022",
    },
    {
      title: "Debt Bondage",
      stat: "~50%",
      statLabel: "of forced labor cases",
      description:
        "Debt bondage is when a person's labor is demanded as repayment for a loan, but the debt is manipulated so that it can never be paid off. Traffickers often charge for transportation, food, and housing at inflated rates, trapping victims in cycles of indebtedness.",
      source: "UN Office on Drugs and Crime",
    },
    {
      title: "Child Slavery",
      stat: "12M",
      statLabel: "children in forced labor",
      description:
        "Children are particularly vulnerable to all forms of modern slavery, including forced labor, child soldiering, and sexual exploitation. They may be sold by impoverished families, abducted, or deceived with false promises of education or better opportunities.",
      source: "ILO, 2022",
    },
    {
      title: "Sexual Exploitation",
      stat: "4.8M",
      statLabel: "victims of forced sexual exploitation",
      description:
        "Sex trafficking involves the use of force, fraud, or coercion to cause a person to engage in commercial sexual acts. Traffickers target vulnerable individuals and use psychological control and physical violence to prevent escape.",
      source: "ILO, 2022",
    },
    {
      title: "Domestic Servitude",
      stat: "Least reported",
      statLabel: "form of modern slavery",
      description:
        "Domestic servitude occurs when a person is forced to work in a private home without pay, freedom of movement, or the right to leave. The private nature of households makes this form of slavery particularly difficult to detect and prosecute.",
      source: "Anti-Slavery International",
    },
  ]

  return (
    <section id="issue" className="bg-neutral-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-red-700 uppercase tracking-wider mb-3">
            The Issue
          </p>
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl tracking-tight text-balance">
            Forms of Modern Slavery
          </h2>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            Modern slavery is not a single crime — it is a constellation of related abuses.
            Understanding each form is essential to recognizing and combating it.
          </p>
        </div>

        {/* Issue cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {issues.map((issue) => (
            <div key={issue.title} className="bg-white p-7 border border-neutral-200">
              <div className="mb-4">
                <p className="text-2xl font-bold text-red-700">{issue.stat}</p>
                <p className="text-xs text-neutral-500 mt-0.5">{issue.statLabel}</p>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">{issue.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{issue.description}</p>
              <p className="mt-4 text-xs text-neutral-400">Source: {issue.source}</p>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div className="mt-14 bg-red-700 px-8 py-10 md:px-12">
          <blockquote>
            <p className="text-xl md:text-2xl font-medium text-white leading-relaxed max-w-3xl text-balance">
              {'"Modern slavery generates US$150 billion in illegal profits every year — making it one of the most profitable criminal enterprises in the world."'}
            </p>
            <footer className="mt-5">
              <p className="text-red-200 text-sm">
                — International Labour Organization, Profits and Poverty: The Economics of Forced Labour
              </p>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
