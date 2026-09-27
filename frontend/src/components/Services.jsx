import Reveal from "./Reveal.jsx";

const SERVICES = [
  {
    title: "Blouse Stitching",
    description: "Everyday and occasion blouses stitched to your exact measurements and style.",
    icon: (
      <path d="M8 4l4 3 4-3 3 4-3 2v11H5V10L2 8l3-4h3z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Saree Blouse Designing",
    description: "Designer, bridal and party-wear blouses with detailing to match your saree.",
    icon: (
      <path d="M4 4h16M6 4v16l6-4 6 4V4" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Dress Stitching",
    description: "Custom-fitted dresses and everyday wear stitched from your chosen fabric.",
    icon: <path d="M12 2l3 5 5 1-4 4 1 5-5-3-5 3 1-5-4-4 5-1z" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    title: "Custom Measurements",
    description: "A dedicated measurement session so every garment fits exactly as it should.",
    icon: <path d="M4 12h16M4 12v4M9 12v3M14 12v4M19 12v3" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    title: "Alterations",
    description: "Resizing, refitting and repair work for garments that need a second life.",
    icon: <path d="M4 20l7-7M14 4l6 6-3 3-6-6zM10 10l-4 4 3 3 4-4" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    title: "Kids Dress Stitching",
    description: "Comfortable, well-finished outfits stitched specially for children.",
    icon: <path d="M12 3l2 3h4l-3 3 1 4-4-2-4 2 1-4-3-3h4z" strokeLinecap="round" strokeLinejoin="round" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container-shell">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-eyebrow justify-center flex">Our Services</p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink">Tailoring, done properly</h2>
          <p className="mt-4 text-ink/70">
            From a single blouse to a full wardrobe of custom pieces, every order gets the same
            careful attention to fit and finish.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 60}>
              <div className="h-full bg-white/70 border border-gold-light/60 rounded-soft p-7 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-maroon/10 flex items-center justify-center mb-5">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="text-maroon"
                  >
                    {service.icon}
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-ink mb-2">{service.title}</h3>
                <p className="text-ink/70 text-[15px] leading-relaxed">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
