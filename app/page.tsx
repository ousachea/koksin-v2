import Link from "next/link";
import { Icon, type IconName } from "../components/Icons";
import { DashboardMock, PhoneMocks } from "../components/Mockups";

const popularSearches = [
  "Hair Salon",
  "Barbershop",
  "Nail Salon",
  "Facial & Skincare",
  "Waxing & Hair Removal",
  "Tattoo & Piercing",
  "Massage & Spa",
  "Brows & Lashes",
];

const categories: { icon: IconName; label: string }[] = [
  { icon: "grid", label: "All" },
  { icon: "hair", label: "Hair" },
  { icon: "barber", label: "Barber" },
  { icon: "nails", label: "Nails" },
  { icon: "facial", label: "Facial" },
  { icon: "waxing", label: "Waxing" },
  { icon: "tattoo", label: "Tattoo" },
  { icon: "massage", label: "Massage" },
  { icon: "brows", label: "Brows" },
  { icon: "makeup", label: "Makeup" },
  { icon: "cleaning", label: "Cleaning" },
  { icon: "yoga", label: "Yoga" },
  { icon: "pilates", label: "Pilates" },
  { icon: "gym", label: "Gym" },
  { icon: "physio", label: "Physio" },
  { icon: "laundry", label: "Laundry" },
  { icon: "repairs", label: "Repairs" },
  { icon: "pest", label: "Pest" },
  { icon: "pet", label: "Pet" },
  { icon: "auto", label: "Auto" },
];

const steps = [
  {
    numeral: "១",
    title: "Search what you need",
    text: "Haircut, massage, house cleaning, pet grooming, car wash. Tell us the service, your city, and the time that suits you. We only show partners who really have a slot free.",
  },
  {
    numeral: "២",
    title: "Pick a time that suits you",
    text: "You see live availability, not a request form. Pick your time, pick your favourite staff member, and we hold the slot for you.",
  },
  {
    numeral: "៣",
    title: "We tell you when it's confirmed",
    text: "As soon as the partner confirms, you get an SMS or Telegram message with the address, plus a friendly reminder before you go. Need to change it? Reschedule or cancel in a tap.",
  },
];

const cities = ["Phnom Penh", "Siem Reap", "Preah Sihanouk", "Battambang", "Kampot", "Kandal"];

const faqs = [
  {
    q: "What is KOKSIN?",
    a: "KOKSIN is Cambodia's appointments marketplace. Browse verified partners for beauty, wellness, fitness, home, pet, and auto services, see their real availability, and book a slot in seconds.",
  },
  {
    q: "Where in Cambodia does KOKSIN operate?",
    a: "We are starting in Phnom Penh, with Siem Reap, Preah Sihanouk, Battambang, Kampot, and Kandal coming next.",
  },
  {
    q: "What kinds of services can I book?",
    a: "Hair, barber, nails, facial and skincare, waxing, tattoo, massage and spa, brows and lashes, makeup, cleaning, yoga, pilates, gym, physio, laundry, repairs, pest control, pet grooming, and car wash.",
  },
  {
    q: "How do I pay?",
    a: "Most bookings are paid at the shop. Where a partner asks for a deposit, you pay online with ABA PayWay or KHQR and the rest on the day.",
  },
  {
    q: "Can I pay with KHQR?",
    a: "Yes. Scan the KHQR code with any Cambodian banking app to pay a deposit or settle a booking.",
  },
  {
    q: "How do ABA PayWay deposits work?",
    a: "The partner sets the deposit amount. You pay it when you book, it comes off your final bill, and it is refunded under the partner's cancellation policy.",
  },
  {
    q: "What is a group booking?",
    a: "Some partners run classes and group sessions — yoga, pilates, group training. You book a seat in the session instead of a private appointment.",
  },
  {
    q: "How are partners verified?",
    a: "We check the business, its location, and its contact details before it goes live, and we keep watching reviews and no-shows afterwards.",
  },
  {
    q: "I run an appointment-based business. How do I list?",
    a: "Apply to list and we will set up your booking page, staff schedule, and Telegram alerts. Setup fees are waived for launch partners.",
  },
];

const partnerFeatures: { icon: IconName; label: string }[] = [
  { icon: "page", label: "Your own booking page" },
  { icon: "card", label: "Deposits via ABA PayWay" },
  { icon: "users", label: "Group sessions, multi-staff" },
  { icon: "telegram", label: "Telegram alerts for staff" },
  { icon: "bell", label: "Automatic booking reminders" },
  { icon: "clock", label: "Apply in under 2 minutes" },
];

const appFeatures: { icon: IconName; label: string }[] = [
  { icon: "phone", label: "Book in a few taps" },
  { icon: "bell", label: "Reminders before every visit" },
  { icon: "clock", label: "Reschedule on the go" },
  { icon: "user", label: "Same account as the web" },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <div className="hero-media-glow" />
        </div>
        <div className="hero-inner">
          <h1 className="hero-title">
            Discover Cambodia&apos;s
            <em className="hero-title-accent">best local services.</em>
          </h1>
          <span className="hero-rule" />
          <p className="hero-sub">
            Book trusted partners. See real availability.{" "}
            <strong className="hero-sub-strong">Reserve in seconds.</strong>
          </p>
          <p className="hero-sub-km">
            កក់ជាមួយដៃគូដែលទុកចិត្តបាន មើលពេលទំនេរពិតប្រាកដ កក់បានក្នុងប៉ុន្មានវិនាទី។
          </p>

          <form className="search-bar" action="/about">
            <label className="search-field">
              <Icon name="grid" className="search-icon" />
              <span className="search-text">All services</span>
            </label>
            <label className="search-field">
              <Icon name="pin" className="search-icon" />
              <span className="search-text">Anywhere in Cambodia</span>
            </label>
            <label className="search-field-last">
              <Icon name="calendar" className="search-icon" />
              <span className="search-text">Any date</span>
            </label>
            <button className="search-submit" type="submit" aria-label="Search">
              <Icon name="search" className="search-submit-icon" />
            </button>
          </form>

          <p className="popular-label">Popular searches</p>
          <div className="popular-chips">
            {popularSearches.map((p) => (
              <Link className="popular-chip" href="/about" key={p}>
                {p}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="categories">
        <p className="section-eyebrow">
          <span className="eyebrow-dash" />
          Browse by category
        </p>
        <div className="cat-strip">
          {categories.map((c) => (
            <Link className="cat-item" href="/about" key={c.label}>
              <span className="cat-tile">
                <Icon name={c.icon} className="cat-icon" />
              </span>
              <span className="cat-label">{c.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="how">
        <p className="section-eyebrow">
          <span className="eyebrow-dash" />
          How it works
        </p>
        <div className="how-grid">
          {steps.map((s) => (
            <article className="step-card" key={s.title}>
              <span className="step-badge">{s.numeral}</span>
              <h2 className="step-title">{s.title}</h2>
              <p className="step-text">{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cities">
        <p className="section-eyebrow">
          <span className="eyebrow-dash" />
          By cities
        </p>
        <div className="city-grid">
          {cities.map((c) => (
            <article className="city-card" key={c}>
              <h2 className="city-name">{c}</h2>
              <p className="city-status">Coming soon</p>
            </article>
          ))}
        </div>
      </section>

      <section className="faq">
        <div className="faq-intro">
          <p className="faq-eyebrow">Common questions</p>
          <h2 className="faq-title">Before you book</h2>
          <p className="faq-text">
            The things people ask us most. If yours isn&apos;t here, send us a message and
            we&apos;ll answer it.
          </p>
          <Link className="faq-link" href="/about">
            How booking works <span className="faq-link-arrow">→</span>
          </Link>
          <Link className="faq-link" href="/about">
            Message support <span className="faq-link-arrow">→</span>
          </Link>
        </div>
        <div className="faq-list">
          {faqs.map((f) => (
            <details className="faq-item" key={f.q}>
              <summary className="faq-question">
                {f.q}
                <span className="faq-chevron">
                  <Icon name="chevron" className="faq-chevron-icon" />
                </span>
              </summary>
              <p className="faq-answer">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="promos">
        <article className="promo-card">
          <p className="section-eyebrow">
            <span className="eyebrow-dash" />
            For partners
          </p>
          <h2 className="promo-title">Run an appointment-based business?</h2>
          <p className="promo-text">
            Salons, spas, barbers, gyms, cleaners, pet groomers, car washes. KOKSIN keeps your
            bookings, deposits, staff schedules, and Telegram alerts in one place, so your team can
            stop living in DMs.
          </p>
          <ul className="promo-features">
            {partnerFeatures.map((f) => (
              <li className="promo-feature" key={f.label}>
                <span className="promo-feature-icon-wrap">
                  <Icon name={f.icon} className="promo-feature-icon" />
                </span>
                {f.label}
              </li>
            ))}
          </ul>
          <div className="promo-actions">
            <Link className="promo-btn" href="/about">
              List your business
            </Link>
            <Link className="promo-btn-ghost" href="/about">
              How it works
            </Link>
          </div>
          <p className="promo-note">
            Setup fees waived for launch partners · verified before going live · no hidden fees.
          </p>
          <DashboardMock />
        </article>

        <article className="promo-card">
          <p className="section-eyebrow">
            <span className="eyebrow-dash" />
            Coming soon
          </p>
          <h2 className="promo-title">KOKSIN on your phone</h2>
          <p className="promo-text">
            We&apos;re building the KOKSIN app for iOS and Android. Your bookings, your reminders,
            and the partners you keep going back to, all in one place.
          </p>
          <ul className="promo-features">
            {appFeatures.map((f) => (
              <li className="promo-feature" key={f.label}>
                <span className="promo-feature-icon-wrap">
                  <Icon name={f.icon} className="promo-feature-icon" />
                </span>
                {f.label}
              </li>
            ))}
          </ul>
          <div className="promo-actions">
            <span className="store-badge">
              <Icon name="apple" className="store-icon" />
              iOS <span className="store-soon">soon</span>
            </span>
            <span className="store-badge">
              <Icon name="android" className="store-icon" />
              Android <span className="store-soon">soon</span>
            </span>
          </div>
          <p className="promo-note">
            You don&apos;t need it to book. KOKSIN works in any phone browser, with nothing to
            install and nothing to update.
          </p>
          <PhoneMocks />
        </article>
      </section>
    </>
  );
}
