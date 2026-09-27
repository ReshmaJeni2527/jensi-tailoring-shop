import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Designs", href: "#designs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-cream/95 shadow-card backdrop-blur" : "bg-cream/80 backdrop-blur"
      }`}
    >
      <nav
        aria-label="Primary"
        className="container-shell flex items-center justify-between py-3"
      >
        <a href="#home" className="flex items-center gap-3 shrink-0" aria-label="Jensi Tailoring Shop, home">
          <img src={logo} alt="Jensi Tailoring Shop logo" className="h-12 w-12 rounded-full object-cover" />
          <span className="font-serif text-xl md:text-2xl text-maroon-dark tracking-wide">
            Jensi Tailoring Shop
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8 font-sans text-[15px] text-ink/80">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-maroon transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#appointment"
          className="hidden lg:inline-block bg-maroon text-cream px-6 py-2.5 rounded-soft font-sans text-sm tracking-wide hover:bg-maroon-dark transition-colors"
        >
          Book Appointment
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden p-2 text-ink"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {isOpen ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-cream border-t border-gold-light/60 shadow-card">
          <ul className="container-shell flex flex-col py-4 gap-1 font-sans text-ink/85">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block py-2.5 border-b border-cream-dark last:border-none"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="#appointment"
                onClick={handleLinkClick}
                className="block text-center bg-maroon text-cream px-6 py-3 rounded-soft"
              >
                Book Appointment
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
