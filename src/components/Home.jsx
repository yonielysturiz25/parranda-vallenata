import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa"

export function Home() {
  return (
    <div className="min-h-screen bg-black flex justify-center py-16 px-4">
      <div className="relative w-full max-w-5xl bg-zinc-900 border border-yellow-600 rounded-xl shadow-[0_0_40px_rgba(202,138,4,0.4)] overflow-hidden">

        {/* HEADER */}
        <div className="relative h-56 bg-black">
          <img
            src="/image/Portada.webp"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            alt=""
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white uppercase leading-tight">
              Parranda<br />Vallenata
            </h1>
            <p className="mt-2 text-yellow-400 font-bold text-lg">
              Con sabor y tradición
            </p>
          </div>
        </div>

        {/* FRANJA */}
        <div className="bg-yellow-500 text-black text-center py-2 font-extrabold uppercase tracking-wide text-sm">
          🎉 Parranda · Alegría · Tradición 🎉
        </div>

        {/* COLLAGE VIDEOS */}
        <div className="bg-black py-16 px-6">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                video: "/videos/Video1.webm",
                poster: "/image/imagenVideo1.webp",
              },
              {
                video: "/videos/Video2.webm",
                poster: "/image/ImagenVideo2.webp",
              },
              {
                video: "/videos/Video3.webm",
                poster: "/image/ImagenVideo3.webp",
              },
            ].map((item, i) => {
              const rotation = i % 2 === 0 ? "-rotate-6" : "rotate-6"

              return (
                <div
                  key={i}
                  className={`bg-white p-2 rounded-xl shadow-2xl transform ${rotation}`}
                >
                  <video
                    src={item.video}
                    poster={item.poster}
                    className="w-48 h-48 object-cover rounded-lg bg-black"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause()
                      e.currentTarget.currentTime = 0
                    }}
                    onClick={(e) =>
                      e.currentTarget.paused
                        ? e.currentTarget.play()
                        : e.currentTarget.pause()
                    }
                  />
                </div>
              )
            })}
          </div>
        </div>

        {/* INFO */}
        <div className="bg-zinc-900 px-8 py-10 text-center">
          <p className="text-gray-300 max-w-2xl mx-auto">
            Vive la mejor experiencia de parranda vallenata con amigos,
            alegría, tradición y el auténtico sabor de nuestra música.
          </p>

          <div className="py-8">
            <span className="text-2xl bg-yellow-500 text-red-700 px-4 py-2 rounded-full font-serif font-semibold">
              SÍGUENOS
            </span>
          </div>

          <div className="mt-4 flex justify-center gap-6 flex-wrap">
          <a
            href="fb://profile/61587264470123"
            onClick={(e) => {
              setTimeout(() => {
                window.location.href =
                  "https://www.facebook.com/people/M-Son-Vallenato/61587264470123/"
              }, 500)
            }}
            className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-yellow-400 transition"
          >
            <FaFacebook className="text-blue-600 text-lg" />
            Facebook
          </a>


            <a
              href="https://www.tiktok.com/@m.son.vallenato"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-yellow-400 transition"
            >
              <FaTiktok className="text-black text-lg" />
              TikTok
            </a>

            <a
              href="https://wa.me/573219965971"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-yellow-400 transition"
            >
              <FaWhatsapp className="text-green-600 text-lg" />
              321 996 5971
            </a>

            <a
              href="https://www.instagram.com/msonvallenato"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-yellow-400 transition"
            >
              <FaInstagram className="text-pink-600 text-lg" />
              Instagram
            </a>
          </div>
        </div>

        {/* COLLAGE IMÁGENES */}
        <div className="bg-black px-6 py-12">
          <h3 className="text-center text-white font-extrabold uppercase mb-8 tracking-wide">
            Vive momentos inolvidables
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              "/image/Imagen1.webp",
              "/image/Imagen2.webp",
              "/image/Imagen3.webp",
              "/image/Imagen4.webp",
              "/image/Imagen5.webp",
              "/image/Imagen6.webp",
            ].map((src, i) => {
              const rotation = i % 2 === 0 ? "rotate-[-6deg]" : "rotate-[6deg]"

              return (
                <div
                  key={i}
                  className={`bg-white p-2 rounded-lg shadow-xl transform ${rotation} hover:scale-105 transition`}
                >
                  <img
                    src={src}
                    alt=""
                    className="rounded-md object-cover w-64 h-44"
                    loading="lazy"
                  />
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-black py-8 flex justify-center">
          <button className="px-10 py-4 bg-red-700 text-white font-bold rounded-full shadow-lg hover:bg-red-600 transition">
            ¡Que suene el acordeón! 🪗
          </button>
        </div>

      </div>
    </div>
  )
}
