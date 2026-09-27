import Reveal from "./Reveal.jsx";

// NOTE: Replace every [PLACEHOLDER] below with your real business details
// before publishing the site. See README.md for exact instructions.
const CONTACT_INFO = {
  phone: "9787376076",
  whatsapp: "9787376076",
  email: "manojensi813@gmail.com",
  address: "4/166, Market Street, Thirumazhapadi, Ariyalur(TK & DT)",
  hours: "Mon–Sat, 10:00 AM – 7:00 PM",
  instagram: "mom_love_609",
  facebook: "jenisibiruntha",
};

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container-shell grid md:grid-cols-2 gap-12">
        <Reveal>
          <p className="section-eyebrow">Contact Us</p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6">Visit or reach out</h2>
          <p className="text-ink/70 leading-relaxed mb-8 max-w-md">
            Have a question about a design or an existing order? Reach out any of the ways below —
            we're happy to help.
          </p>

          <dl className="space-y-5">
            <div className="flex gap-4">
              <dt className="w-28 shrink-0 text-ink/50 text-sm">Phone</dt>
              <dd className="text-ink/85">{CONTACT_INFO.phone}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-28 shrink-0 text-ink/50 text-sm">WhatsApp</dt>
              <dd className="text-ink/85">{CONTACT_INFO.whatsapp}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-28 shrink-0 text-ink/50 text-sm">Email</dt>
              <dd className="text-ink/85">{CONTACT_INFO.email}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-28 shrink-0 text-ink/50 text-sm">Address</dt>
              <dd className="text-ink/85">{CONTACT_INFO.address}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-28 shrink-0 text-ink/50 text-sm">Hours</dt>
              <dd className="text-ink/85">{CONTACT_INFO.hours}</dd>
            </div>
          </dl>

          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="border border-maroon/40 text-maroon px-5 py-2.5 rounded-soft text-sm hover:bg-maroon/5 transition-colors"
            >
              Call Now
            </a>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-maroon/40 text-maroon px-5 py-2.5 rounded-soft text-sm hover:bg-maroon/5 transition-colors"
            >
              WhatsApp Us
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="border border-maroon/40 text-maroon px-5 py-2.5 rounded-soft text-sm hover:bg-maroon/5 transition-colors"
            >
              Send an Email
            </a>
          </div>
          <p className="text-xs text-ink/40 mt-4">
            Replace the placeholders above in <code>src/components/Contact.jsx</code> with your real
            contact details.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
