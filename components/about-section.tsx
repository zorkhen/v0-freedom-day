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
                <p className="text-sm text-neutral-500">项目图片占位</p>
              </div>
            </div>
            {/* Accent element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-700 -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold text-red-700 uppercase tracking-wider mb-3">
              关于项目
            </p>
            <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl tracking-tight text-balance">
              什么是 #MyFreedomDay？
            </h2>
            <div className="mt-6 space-y-4 text-neutral-600 leading-7">
              <p>
                #MyFreedomDay 是一项全球性教育倡议，旨在让年轻人参与对抗现代奴役的行动。
                这项活动由 CNN 自由计划发起，每年三月举行，鼓励全球学生和社区成员分享对自由的理解，
                并采取实际行动来帮助终结人口贩卖。
              </p>
              <p>
                现代奴役采取多种形式，包括强迫劳动、债务奴役、强迫婚姻和人口贩卖。
                受害者可能在工厂、农场、建筑工地、私人住宅或其他地方被剥削。
                通过提高意识和教育，我们可以共同识别这些问题并采取行动。
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
                <p className="text-neutral-700">提高公众对现代奴役问题的认识</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-red-700 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-neutral-700">教育年轻人识别人口贩卖的迹象</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-red-700 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-neutral-700">动员社区采取有意义的行动</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
