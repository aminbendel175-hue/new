import { ShoppingBag } from 'lucide-react';

const artworks = [
  {
    id: 1,
    title: 'Simfony Sunyi',
    price: 'Rp 1.000.000',
    size: '100 x 100 cm',
    src: '/images/simfony-sunyi.jpg',
    soldOut: true,
  },
  {
    id: 2,
    title: 'harmony of nature',
    price: 'Rp 1.200.000',
    size: '100 x 100 cm',
    src: '/images/harmony-nature.jpg',
  },
  {
    id: 3,
    title: 'penari',
    price: 'Rp 800.000',
    size: '40 x 60 cm',
    src: '/images/penari.jpg',
  },
  {
    id: 4,
    title: 'fragments of humanity',
    price: 'Rp 1.500.000',
    size: '100 x 50 cm',
    src: '/images/fragments-humanity.jpg',
  },
  {
    id: 5,
    title: 'whispering grove',
    price: 'Rp 500.000',
    size: '30 x 30 cm',
    src: '/images/whispering-grove.jpg',
  },
  {
    id: 6,
    title: 'light beyond',
    price: 'Rp 550.000',
    size: '50 x 30 cm',
    src: '/images/light-beyond.jpg',
  },
  {
    id: 7,
    title: 'garden dream',
    price: 'Rp 8.000.000',
    size: '200 x 100 cm',
    src: '/images/garden-dream.jpg',
  },
  {
    id: 8,
    title: 'between nature',
    price: 'Rp 300.000',
    size: ' 30 x 20 cm',
    src: '/images/between-nature.jpg',
  },
];

export default function Shop() {
  return (
    <section
      id="shop"
      className="relative py-24 px-6 bg-[#14070d]"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <span className="text-[#c9a96e] uppercase tracking-[0.35em] text-xs">
            NFGallery Collection
          </span>

          <h2 className="text-white text-4xl md:text-6xl font-bold mt-4">
            FOR SALE
          </h2>

          <p className="text-white/50 mt-5 max-w-2xl mx-auto">
            Original artworks available for collectors, interior decoration,
            and art enthusiasts.
          </p>

          <div className="w-24 h-[1px] bg-[#c9a96e] mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {artworks.map((art) => (
            <div
              key={art.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-[#c9a96e]/40 transition-all duration-500 hover:-translate-y-2"
            >

              <div className="relative overflow-hidden aspect-square">

                <img
                  src={art.src}
                  alt={art.title}
                  className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                    art.soldOut ? 'grayscale opacity-60' : ''
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {art.soldOut && (
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 rounded-full bg-red-600 text-white text-xs font-semibold">
                      SOLD OUT
                    </span>
                  </div>
                )}

              </div>

              <div className="p-6">

                <h3 className="text-white text-xl font-semibold mb-2">
                  {art.title}
                </h3>

                <div className="h-px bg-white/10 mb-5"></div>

                <div className="flex flex-col gap-4">

                  <span className="text-[#c9a96e] text-2xl font-bold">
                    {art.price}
                  </span>

                  {art.soldOut ? (
                    <button
                      disabled
                      className="w-full py-3 rounded-xl border border-white/10 text-white/40 cursor-not-allowed"
                    >
                      Not Available
                    </button>
                  ) : (
                    <a
                      href={`https://wa.me/6287734609465?text=Halo%20NFGallery,%20saya%20tertarik%20dengan%20lukisan%20${art.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#c9a96e] text-black font-semibold hover:opacity-90 transition"
                    >
                      <ShoppingBag size={18} />
                      Order Now
                    </a>
                  )}

                </div>
              </div>

            </div>
          ))}

        </div>

        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm">
            Pengiriman ke seluruh Indonesia • Certificate of Authenticity • Custom Order Available
          </p>
        </div>

      </div>
    </section>
  );
}
