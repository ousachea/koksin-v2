import Link from "next/link";
import { Icon, type IconName } from "./Icons";

type Listing = {
  service: string;
  partner: string;
  area: string;
  price: string;
  rating: string;
  reviews: number;
  icon: IconName;
  tone: string;
  badge?: string;
};

const listings: Listing[] = [
  { service: "Gel Polish", partner: "Polished Nail Atelier", area: "Aeon 1", price: "$18", rating: "4.8", reviews: 214, icon: "nails", tone: "a", badge: "New" },
  { service: "Khmer Traditional Massage", partner: "Aura Spa & Wellness", area: "BKK1", price: "$50", rating: "5.0", reviews: 128, icon: "massage", tone: "b" },
  { service: "Signature Fade", partner: "Sharp Fade Barbers", area: "Toul Kork", price: "$12", rating: "4.9", reviews: 96, icon: "barber", tone: "c" },
  { service: "Deep Cleanse Facial", partner: "Pure Skin Bar", area: "Riverside", price: "$35", rating: "4.8", reviews: 26, icon: "facial", tone: "d", badge: "New" },
  { service: "Full Home Cleaning", partner: "Bright Home Services", area: "Chamkarmon", price: "$28", rating: "4.8", reviews: 15, icon: "cleaning", tone: "e" },
  { service: "Mat Pilates Class", partner: "Core Pilates Studio", area: "BKK3", price: "$9", rating: "4.9", reviews: 54, icon: "pilates", tone: "c" },
  { service: "Dog Wash & Groom", partner: "Furry Friends Spa", area: "Wat Bo, Siem Reap", price: "$8", rating: "5.0", reviews: 12, icon: "pet", tone: "a", badge: "New" },
  { service: "Wash & Fold, 5kg", partner: "Crisp Laundry Co", area: "Sen Sok", price: "$6", rating: "4.7", reviews: 88, icon: "laundry", tone: "d" },
  { service: "Interior & Exterior Detail", partner: "Riverside Auto Detail", area: "Chroy Changvar", price: "$25", rating: "4.8", reviews: 64, icon: "auto", tone: "b" },
  { service: "Personal Training Session", partner: "Iron House Gym", area: "Sen Sok", price: "$15", rating: "4.9", reviews: 231, icon: "gym", tone: "e" },
];

const filters = ["All services", "Beauty", "Wellness", "Home", "Pet", "Auto"];

const featuredPoints = [
  { icon: "check" as IconName, label: "Verified before going live" },
  { icon: "clock" as IconName, label: "Real availability, not a request form" },
  { icon: "card" as IconName, label: "Deposits via ABA PayWay and KHQR" },
];

function Card({ listing }: { listing: Listing }) {
  return (
    <article className="lst-card">
      <Link className={`lst-card-photo lst-photo-${listing.tone}`} href="/about">
        <Icon name={listing.icon} className="lst-card-glyph" />
        {listing.badge ? <span className="lst-card-badge">{listing.badge}</span> : null}
        <span className="lst-card-fav" aria-hidden="true">
          ♡
        </span>
      </Link>
      <h3 className="lst-card-title">{listing.service}</h3>
      <p className="lst-card-partner">
        {listing.partner} · {listing.area}
      </p>
      <div className="lst-card-foot">
        <span className="lst-card-price">{listing.price}</span>
        <span className="lst-card-rating">
          <span className="lst-card-star">★</span> {listing.rating}
          <span className="lst-card-count">({listing.reviews})</span>
        </span>
      </div>
    </article>
  );
}

// Section header: title on the left, filter controls on the right.
function Head({ title, note }: { title: string; note: string }) {
  return (
    <div className="lst-head">
      <h2 className="lst-head-title">{title}</h2>
      <div className="lst-head-controls">
        <span className="lst-select">
          {note}
          <Icon name="chevron" className="lst-select-icon" />
        </span>
        <span className="lst-mini-search">
          <Icon name="search" className="lst-mini-search-icon" />
          Search
        </span>
      </div>
    </div>
  );
}

// A browse page: hero search, a featured strip, then the full listings grid.
export default function Listings() {
  return (
    <>
      <section className="lst-hero">
        <div className="lst-hero-inner">
          <div className="lst-hero-copy">
            <p className="lst-hero-kicker">Browse every service</p>
            <h1 className="lst-hero-title">
              Book what you need,
              <span className="lst-hero-title-accent">near you</span>
            </h1>
            <p className="lst-hero-sub">
              Nineteen categories across six cities, with live prices and real availability from
              verified partners.
            </p>
            <form className="lst-search" action="/about">
              <label className="lst-search-field">
                <Icon name="grid" className="lst-search-icon" />
                <span className="lst-search-text">All services</span>
              </label>
              <label className="lst-search-field">
                <Icon name="pin" className="lst-search-icon" />
                <span className="lst-search-text">Phnom Penh</span>
              </label>
              <label className="lst-search-field-last">
                <Icon name="calendar" className="lst-search-icon" />
                <span className="lst-search-text">Any date</span>
              </label>
              <button className="lst-search-btn" type="submit" aria-label="Search listings">
                <Icon name="search" className="lst-search-btn-icon" />
              </button>
            </form>
            <div className="lst-filters">
              {filters.map((filter, index) => (
                <Link
                  className={index === 0 ? "lst-filter-on" : "lst-filter"}
                  href="/about"
                  key={filter}
                >
                  {filter}
                </Link>
              ))}
            </div>
          </div>

          <div className="lst-hero-visual" aria-hidden="true">
            <span className="lst-orb-a" />
            <span className="lst-orb-b" />
            <div className="lst-float lst-float-a">
              <span className="lst-float-thumb lst-photo-b" />
              <span className="lst-float-lines">
                <span className="lst-float-line" />
                <span className="lst-float-line-short" />
              </span>
            </div>
            <div className="lst-float lst-float-b">
              <span className="lst-float-thumb lst-photo-c" />
              <span className="lst-float-lines">
                <span className="lst-float-line" />
                <span className="lst-float-line-short" />
              </span>
            </div>
            <div className="lst-float lst-float-c">
              <span className="lst-float-thumb lst-photo-a" />
              <span className="lst-float-lines">
                <span className="lst-float-line" />
                <span className="lst-float-line-short" />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="lst-featured">
        <Head title="Featured listings" note="This week" />
        <div className="lst-feature-grid">
          <article className="lst-feature-wide">
            <p className="lst-feature-eyebrow">Featured partner</p>
            <h3 className="lst-feature-title">Aura Spa &amp; Wellness</h3>
            <ul className="lst-feature-list">
              {featuredPoints.map((point) => (
                <li className="lst-feature-item" key={point.label}>
                  <Icon name={point.icon} className="lst-feature-icon" />
                  {point.label}
                </li>
              ))}
            </ul>
            <Link className="lst-feature-btn" href="/about">
              View 11 services
            </Link>
            <span className="lst-feature-art lst-photo-b" aria-hidden="true">
              <Icon name="massage" className="lst-feature-art-glyph" />
            </span>
          </article>

          <Link className="lst-feature-tile lst-photo-c" href="/about">
            <Icon name="facial" className="lst-feature-tile-glyph" />
            <span className="lst-feature-tile-label">Facial &amp; Skincare</span>
          </Link>
          <Link className="lst-feature-tile lst-photo-d" href="/about">
            <Icon name="auto" className="lst-feature-tile-glyph" />
            <span className="lst-feature-tile-label">Car Wash &amp; Detailing</span>
          </Link>
        </div>
      </section>

      <section className="lst-listings">
        <Head title="Listings" note="Most booked" />
        <div className="lst-grid">
          {listings.map((listing) => (
            <Card listing={listing} key={listing.service} />
          ))}
        </div>
        <Link className="lst-more" href="/about">
          Show more listings <span className="lst-more-arrow">→</span>
        </Link>
      </section>
    </>
  );
}
