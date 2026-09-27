import logo from "../assets/logo.png";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Designs", href: "#designs" },
  { label: "Gallery", href: "#gallery" },
];

const SERVICES = [
  "Blouse Stitching",
  "Dress Stitching",
  "Saree Blouse Designing",
  "Alterations",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream/80 pt-16 pb-8">
      <div className="container-shell grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <a href="#home" className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Jensi Tailoring Shop logo" className="h-11 w-11 rounded-full object-cover" />
            <span className="font-serif text-lg text-cream">Jensi Tailoring Shop</span>
          </a>
          <p className="text-sm text-cream/60 leading-relaxed max-w-xs">
            Custom blouse and dress stitching, made with care and a focus on fit.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-cream text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-gold-light transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-cream text-lg mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {SERVICES.map((service) => (
              <li key={service} className="text-cream/70">
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-cream text-lg mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-cream/70">
            <li>[9787376076]</li>
            <li>[manojensi813@gmail.com]</li>
            <li>[4/166, Market Street, Thirumazhapadi, Ariyalur(TK & DT)]</li>
          </ul>
          <div className="flex gap-3 mt-4">
            <a href="#" aria-label="Instagram" className="hover:text-gold-light transition-colors text-sm">
              Instagram
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-gold-light transition-colors text-sm">
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="container-shell mt-12 pt-6 border-t border-cream/10 text-center text-xs text-cream/50">
        © {year} Jensi Tailoring Shop. All Rights Reserved.
      </div>
    </footer>
  );
}
