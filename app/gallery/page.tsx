import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const images = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Child workers in a brick factory",
    caption: "Child labor in brick kilns remains one of the most visible forms of child slavery, prevalent across South Asia.",
    tag: "Child Labor",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Migrant workers in overcrowded dormitory accommodation",
    caption: "Migrant workers are often housed in severely overcrowded and unsafe conditions, stripped of basic dignity.",
    tag: "Forced Labor",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Young woman isolated, looking out of a window",
    caption: "Domestic servitude victims are frequently isolated from the outside world with no freedom of movement.",
    tag: "Domestic Servitude",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Fishing boat crew in poor conditions at sea",
    caption: "Fishing vessels operating in international waters are among the least regulated environments for labor exploitation.",
    tag: "Maritime Forced Labor",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Workers at sewing machines in a garment factory",
    caption: "The global fashion supply chain is a major driver of forced labor, with workers often denied fair wages and breaks.",
    tag: "Supply Chain Labor",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Night-time protest march against human trafficking with candles and banners",
    caption: "Communities around the world hold vigils and marches to demand action against human trafficking.",
    tag: "Awareness & Advocacy",
  },
  {
    src: "/images/gallery-7.jpg",
    alt: "Silhouettes of migrants waiting at a border crossing at dawn",
    caption: "Trafficking often exploits vulnerable people at borders, preying on those fleeing conflict or poverty.",
    tag: "Human Trafficking",
  },
  {
    src: "/images/gallery-8.jpg",
    alt: "Children in a classroom in a refugee settlement",
    caption: "Access to education is a critical protective factor — children in displacement are disproportionately vulnerable to trafficking.",
    tag: "Children & Education",
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
              Visual Documentation
            </p>
            <h1 className="text-3xl font-bold text-white sm:text-4xl tracking-tight text-balance">
              The Human Face of Modern Slavery
            </h1>
            <p className="mt-4 text-lg text-neutral-400 leading-relaxed max-w-2xl">
              These images document conditions associated with modern slavery around the world.
              They are shared to inform and educate — to make visible what traffickers and
              exploiters depend on keeping hidden.
            </p>
          </div>
        </div>

        {/* Gallery grid */}
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image) => (
              <figure key={image.src} className="bg-white border border-neutral-200 flex flex-col">
                <div className="overflow-hidden aspect-[4/3] bg-neutral-200">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
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
              All images on this page are used for informational and educational purposes to raise
              awareness of modern slavery. They are not intended to sensationalize the suffering
              of individuals. If you recognize a situation depicted here or know someone who may
              be a victim, please contact the relevant national hotline.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
