import bridalKanjivaram from "../assets/design-bridal-kanjivaram.jpg";
import mirrorWork from "../assets/design-mirror-work.jpg";
import traditionalSet from "../assets/design-traditional-set.jpg";
import peacockGreen from "../assets/design-peacock-green.jpg";
import partyWear from "../assets/design-party-wear.jpg";
import broochBlouse from "../assets/design-brooch-blouse.jpg";
import Reveal from "./Reveal.jsx";

const DESIGNS = [
  {
    image: bridalKanjivaram,
    name: "Bridal Kanjivaram Blouse",
    category: "Bridal Blouse",
    description: "Silk blouse with a contrast kanjivaram border and hand-finished stone work.",
  },
  {
    image: mirrorWork,
    name: "Mirror Work Designer Blouse",
    category: "Designer Blouse",
    description: "Statement sleeves finished with mirror and bead detailing for occasion wear.",
  },
  {
    image: traditionalSet,
    name: "Traditional Blouse Set",
    category: "Traditional Blouse",
    description: "A classic silhouette with delicate pearl borders and teardrop motifs.",
  },
  {
    image: peacockGreen,
    name: "Peacock Green Bridal Blouse",
    category: "Bridal Blouse",
    description: "Rich peacock-green silk with an elaborate gold and stone neckline.",
  },
  {
    image: partyWear,
    name: "Designer Party Wear Blouse",
    category: "Party Wear Blouse",
    description: "A deep-neck design with brocade sleeves, finished with beaded tassels.",
  },
  {
    image: broochBlouse,
    name: "Blue Designer Blouse",
    category: "Custom Blouse",
    description: "Sleeveless blouse with a layered gold border and a handcrafted fabric brooch.",
  },
];

export default function Designs() {
  return (
    <section id="designs" className="py-20 md:py-28 bg-cream-dark/40">
      <div className="container-shell">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-eyebrow justify-center flex">Our Designs</p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink">Stitched by hand, one at a time</h2>
          <p className="mt-4 text-ink/70">
            A selection of blouse designs stitched at Jensi Tailoring Shop — each one made to order
            and fitted to the customer who wears it.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {DESIGNS.map((design, i) => (
            <Reveal key={design.name} delay={i * 70}>
              <article className="group bg-white rounded-soft overflow-hidden shadow-card hover:shadow-elegant transition-shadow duration-300">
                <div className="aspect-[4/5] overflow-hidden bg-cream-dark">
                  <img
                    src={design.image}
                    alt={design.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs tracking-wide text-gold-dark font-medium">
                    {design.category}
                  </span>
                  <h3 className="font-serif text-lg text-ink mt-1">{design.name}</h3>
                  <p className="text-ink/65 text-sm mt-1.5 leading-relaxed">{design.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
