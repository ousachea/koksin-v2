import Link from "next/link";
import { Icon, LogoMark } from "./Icons";

const services = [
  "Hair Salon",
  "Barbershop",
  "Nail Salon",
  "Brows & Lashes",
  "Makeup Artist",
  "Facial & Skincare",
];

const servicesTwo = [
  "Massage & Spa",
  "Yoga Studio",
  "Gym & Personal Training",
  "Cleaning Service",
  "Pet Grooming",
  "Car Wash & Detailing",
];

const cities = [
  "Phnom Penh",
  "Siem Reap",
  "Preah Sihanouk",
  "Battambang",
  "Kampot",
  "Kandal",
];

const compare = [
  "Fresha alternative",
  "Mindbody alternative",
  "Booksy alternative",
  "Vagaro alternative",
  "Square Appointments alternative",
];

const company = ["About", "How it works", "For partners", "Apply to list", "Blog", "Careers", "Contact"];

const legal = ["Privacy", "Terms", "Cancellation policy"];

// Site footer: brand blurb, four link groups and the legal bar.
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand-col">
          <Link className="footer-brand" href="/">
            <LogoMark className="footer-brand-mark" />
            <span className="footer-brand-word">KOKSIN</span>
          </Link>
          <p className="footer-blurb">
            Cambodia&apos;s appointments marketplace for beauty, wellness, fitness, home, pet, and
            auto services.
          </p>
          <p className="footer-blurb-km">ស្វែងរក និងកក់សេវាកម្មគ្រប់ប្រភេទទូទាំងប្រទេស</p>
          <div className="footer-socials">
            <a className="footer-social" href="https://t.me" aria-label="Telegram">
              <Icon name="telegram" className="footer-social-icon" />
            </a>
            <a className="footer-social" href="https://facebook.com" aria-label="Facebook">
              <Icon name="facebook" className="footer-social-icon" />
            </a>
            <a className="footer-social" href="https://instagram.com" aria-label="Instagram">
              <Icon name="instagram" className="footer-social-icon" />
            </a>
          </div>
        </div>

        <div className="footer-col-wide">
          <h2 className="footer-heading">Browse services</h2>
          <div className="footer-service-cols">
            <ul className="footer-list">
              {services.map((s) => (
                <li className="footer-item" key={s}>
                  <Link className="footer-link" href="/about">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="footer-list">
              {servicesTwo.map((s) => (
                <li className="footer-item" key={s}>
                  <Link className="footer-link" href="/about">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link className="footer-all-link" href="/about">
            All 19 categories <span className="footer-all-arrow">→</span>
          </Link>
        </div>

        <div className="footer-col">
          <h2 className="footer-heading">Cities</h2>
          <ul className="footer-list">
            {cities.map((c) => (
              <li className="footer-item" key={c}>
                <Link className="footer-link" href="/about">
                  {c}
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="footer-heading-second">Compare</h2>
          <ul className="footer-list">
            {compare.map((c) => (
              <li className="footer-item" key={c}>
                <Link className="footer-link" href="/about">
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h2 className="footer-heading">Company</h2>
          <ul className="footer-list">
            {company.map((c) => (
              <li className="footer-item" key={c}>
                <Link className="footer-link" href="/about">
                  {c}
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="footer-heading-second">Legal</h2>
          <ul className="footer-list">
            {legal.map((c) => (
              <li className="footer-item" key={c}>
                <Link className="footer-link" href="/about">
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bar">
        <div className="footer-bar-inner">
          <p className="footer-legal">© 2026 KOKSIN · Operated by Velon Innovations, Phnom Penh</p>
          <div className="footer-pay">
            <span className="footer-pay-label">We accept:</span>
            <span className="pay-badge-aba">ABA</span>
            <span className="pay-badge-khqr">KHQR</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
