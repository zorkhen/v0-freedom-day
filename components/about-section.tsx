export function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-neutral-200 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-neutral-300 flex items-center justify-center">
                  <svg className="w-8 h-8 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm text-neutral-500">Project Image Placeholder</p>
              </div>
            </div>
            {/* Accent element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-700 -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold text-red-700 uppercase tracking-wider mb-3">
              About the Project
            </p>
            <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl tracking-tight text-balance">
              What is #MyFreedomDay?
            </h2>
            <div className="mt-6 space-y-4 text-neutral-600 leading-7">
              <p>
                #MyFreedomDay is a global education initiative designed to engage young people in the fight against modern slavery.
                Launched by CNN Freedom Project, this annual event held every March encourages students and community members worldwide 
                to share their understanding of freedom and take meaningful action to help end human trafficking.
              </p>
              <p>
                Modern slavery takes many forms, including forced labor, debt bondage, forced marriage, and human trafficking.
                Victims may be exploited in factories, farms, construction sites, private homes, or other locations.
                Through awareness and education, we can work together to identify these issues and take action.
              </p>
            </div>
            
            {/* Key points */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-red-700 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-neutral-700">Raise public awareness about modern slavery</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-red-700 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-neutral-700">Educate young people to recognize signs of trafficking</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-red-700 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-neutral-700">Mobilize communities to take meaningful action</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
