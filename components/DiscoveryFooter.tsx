import Link from "next/link";
import { Icon, LogoMark } from "./Icons";

const columns: { heading: string; links: string[] }[] = [
  {
    heading: "Services",
    links: ["Hair Salon", "Barbershop", "Nail Salon", "Massage & Spa", "Cleaning Service"],
  },
  {
    heading: "Cities",
    links: ["Phnom Penh", "Siem Reap", "Preah Sihanouk", "Battambang", "Kampot"],
  },
  {
    heading: "Company",
    links: ["About", "How it works", "For partners", "Blog", "Contact"],
  },
  {
    heading: "Compare",
    links: ["Fresha alternative", "Mindbody alternative", "Booksy alternative"],
  },
  {
    heading: "Legal",
    links: ["Privacy", "Terms", "Cancellation policy"],
  },
];

// The discovery page's own footer: a closing call to action above a rounded
// panel holding the sign-up form and link columns. Replaces the standard site
// footer on this route only.
export default function DiscoveryFooter() {
  return (
    <footer className="dfoot">
      <div className="dfoot-cta">
        <h2 className="dfoot-cta-title">Ready to book your next appointment?</h2>
        <p className="dfoot-cta-text">
          Find trusted partners across Cambodia for beauty, wellness, home, pet, and auto services
          — with real availability.
        </p>
        <div className="dfoot-cta-actions">
          <Link className="dfoot-cta-primary" href="/about">
            Find a service
          </Link>
          <Link className="dfoot-cta-secondary" href="/about">
            Become a partner
          </Link>
        </div>
      </div>

      <div className="dfoot-panel">
        <div className="dfoot-top">
          <div className="dfoot-brand-col">
            <Link className="dfoot-brand" href="/">
              <LogoMark className="dfoot-brand-mark" />
              <span className="dfoot-brand-word">KOKSIN</span>
            </Link>
            <p className="dfoot-signup-label">Sign up for new partners and booking tips.</p>
            <form className="dfoot-form" action="/about">
              <input
                className="dfoot-input"
                type="email"
                name="email"
                placeholder="Enter your email"
                aria-label="Email address"
              />
              <button className="dfoot-submit" type="submit">
                Submit
              </button>
            </form>
            <p className="dfoot-fineprint">
              By subscribing you agree to our Privacy Policy and consent to receive updates from
              KOKSIN.
            </p>
            <div className="dfoot-socials">
              <a className="dfoot-social" href="https://t.me" aria-label="Telegram">
                <Icon name="telegram" className="dfoot-social-icon" />
              </a>
              <a className="dfoot-social" href="https://facebook.com" aria-label="Facebook">
                <Icon name="facebook" className="dfoot-social-icon" />
              </a>
              <a className="dfoot-social" href="https://instagram.com" aria-label="Instagram">
                <Icon name="instagram" className="dfoot-social-icon" />
              </a>
            </div>
          </div>

          <div className="dfoot-links">
            {columns.map((column) => (
              <div className="dfoot-col" key={column.heading}>
                <h3 className="dfoot-heading">{column.heading}</h3>
                <ul className="dfoot-list">
                  {column.links.map((link) => (
                    <li className="dfoot-item" key={link}>
                      <Link className="dfoot-link" href="/about">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="dfoot-bottom">
          <p className="dfoot-legal">
            © 2026 KOKSIN · Operated by Velon Innovations, Phnom Penh
          </p>
        </div>
      </div>
    </footer>
  );
}
