import mother from "../assets/mother.jpg";
import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-cream-dark/40">
      <div className="container-shell grid md:grid-cols-2 gap-14 items-center">
        <Reveal className="order-2 md:order-1 flex justify-center">
          <div className="relative">
            <img
              src={mother}
              alt="Founder of Jensi Tailoring Shop"
              className="w-56 h-56 sm:w-64 sm:h-64 rounded-full object-cover shadow-elegant border-4 border-cream"
            />
            <div className="stitch-divider absolute -bottom-6 left-1/2 -translate-x-1/2" />
          </div>
        </Reveal>

        <Reveal delay={100} className="order-1 md:order-2">
          <p className="section-eyebrow">About Us</p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6">
            The hands behind every stitch
          </h2>
          <p className="text-ink/75 leading-relaxed mb-4">
            At Jensi Tailoring Shop, every outfit is stitched with care, attention to detail and a
            focus on the perfect fit. What began as a passion for the needle and thread has grown
            into a shop trusted by customers who want their clothes to fit exactly as they imagined.
          </p>
          <p className="text-ink/75 leading-relaxed mb-4">
            [PLACEHOLDER: Add a few lines here about your mother's tailoring journey — how she
            started, what she specialises in, and what makes her approach to stitching different.]
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Careful, personalised measurements for every customer",
              "Close attention to fitting and finishing on every garment",
              "Custom tailoring for blouses, dresses and everyday wear",
              "Friendly, one-on-one service from start to fitting",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3 text-ink/80">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
