import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const images = [
  {
    id: "placeholder-1",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.",
    tag: "Placeholder Tag",
  },
  {
    id: "placeholder-2",
    caption: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    tag: "Placeholder Tag",
  },
  {
    id: "placeholder-3",
    caption: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    tag: "Placeholder Tag",
  },
  {
    id: "placeholder-4",
    caption: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    tag: "Placeholder Tag",
  },
  {
    id: "placeholder-5",
    caption: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit consequuntur.",
    tag: "Placeholder Tag",
  },
  {
    id: "placeholder-6",
    caption: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
    tag: "Placeholder Tag",
  },
  {
    id: "placeholder-7",
    caption: "Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus.",
    tag: "Placeholder Tag",
  },
  {
    id: "placeholder-8",
    caption: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.",
    tag: "Placeholder Tag",
  },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-neutral-50">
        {/* Page header */}
        <div className="bg-neutral-900 px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-3">
              Placeholder Label
            </p>
            <h1 className="text-3xl font-bold text-white sm:text-4xl tracking-tight text-balance">
              Placeholder Page Heading
            </h1>
            <p className="mt-4 text-lg text-neutral-400 leading-relaxed max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud.
            </p>
          </div>
        </div>

        {/* Gallery grid */}
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image) => (
              <figure key={image.id} className="bg-white border border-neutral-200 flex flex-col">
                <div className="overflow-hidden aspect-[4/3] bg-neutral-200 flex items-center justify-center">
                  <span className="text-neutral-400 text-sm">Image placeholder</span>
                </div>
                <figcaption className="p-4 flex flex-col flex-1">
                  <span className="text-xs font-semibold text-red-700 uppercase tracking-wider mb-2">
                    {image.tag}
                  </span>
                  <p className="text-sm text-neutral-600 leading-relaxed">{image.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-14 border-t border-neutral-200 pt-8">
            <p className="text-xs text-neutral-500 leading-relaxed max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
