import mother from "../assets/mother.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Soft decorative backdrop, subtle and on-brand rather than a loud gradient */}
      <div
        className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-gold-light/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-shell grid md:grid-cols-2 gap-14 md:gap-10 items-center relative">
        <div className="animate-fadeUp text-center md:text-left order-2 md:order-1">
          <p className="section-eyebrow">Custom Tailoring, Stitched By Hand</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-[3.4rem] leading-[1.1] text-ink">
            Beautifully stitched, made with care
          </h1>
          <p className="mt-6 text-ink/75 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            Jensi Tailoring Shop brings together traditional craftsmanship and a personal touch —
            every blouse, dress and alteration fitted to you, not the other way around.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#appointment"
              className="bg-maroon text-cream px-8 py-3.5 rounded-soft font-sans tracking-wide text-center hover:bg-maroon-dark transition-colors shadow-card"
            >
              Book an Appointment
            </a>
            <a
              href="#designs"
              className="border border-maroon/40 text-maroon px-8 py-3.5 rounded-soft font-sans tracking-wide text-center hover:bg-maroon/5 transition-colors"
            >
              View Our Designs
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative animate-fadeIn">
            <div
              className="absolute inset-0 -m-3 rounded-full border border-gold/50"
              aria-hidden="true"
            />
            <img
              src={mother}
              alt="Founder of Jensi Tailoring Shop, standing outdoors in a yellow saree with a red blouse"
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full object-cover border-[6px] border-cream shadow-elegant transition-transform duration-500 hover:scale-[1.03]"
            />
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-cream px-5 py-2 rounded-soft shadow-card border border-gold-light">
              <p className="font-serif text-maroon-dark text-sm sm:text-base whitespace-nowrap">
                Founder, Jensi Tailoring Shop
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
