import Link from "next/link";
import { Icon } from "./Icons";
import { DashboardMock, PhoneMocks } from "./Mockups";
import {
  cityLinks,
  newToKoksin,
  popularSearches,
  recommended,
  reviews,
  trending,
  type Partner,
} from "./homeData";

function Rail({ title, items }: { title: string; items: Partner[] }) {
  return (
    <section className="disc-rail">
      <div className="disc-rail-head">
        <h2 className="disc-rail-title">{title}</h2>
        <button className="disc-rail-next" type="button" aria-label={`More in ${title}`}>
          <Icon name="arrow" className="disc-rail-next-icon" />
        </button>
      </div>
      <div className="disc-cards">
        {items.map((p) => (
          <article className="disc-card" key={p.name}>
            <Link className={`disc-card-photo disc-card-photo-${p.tone}`} href="/about">
              {p.badge ? <span className="disc-card-badge">{p.badge}</span> : null}
              <span className="disc-card-heart" aria-hidden="true">
                ♡
              </span>
            </Link>
            <div className="disc-card-head">
              <h3 className="disc-card-name">{p.name}</h3>
              <span className="disc-card-rating">
                {p.rating} <span className="disc-card-star">★</span>
              </span>
            </div>
            <p className="disc-card-area">{p.area}</p>
            <p className="disc-card-meta">
              {p.category} · {p.reviews} reviews
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

// Faux QR block — a deterministic pattern, no scanning payload.
function QrBlock() {
  const cells = [];
  for (let y = 0; y < 21; y += 1) {
    for (let x = 0; x < 21; x += 1) {
      const finder =
        (x < 7 && y < 7) || (x > 13 && y < 7) || (x < 7 && y > 13);
      const ring =
        finder &&
        (x === 0 || x === 6 || y === 0 || y === 6 || x === 14 || x === 20 || y === 14 || y === 20
          ? true
          : (x > 1 && x < 5 && y > 1 && y < 5) ||
            (x > 15 && x < 19 && y > 1 && y < 5) ||
            (x > 1 && x < 5 && y > 15 && y < 19));
      const on = finder ? ring : ((x * 7 + y * 13 + x * y * 3) % 5) % 2 === 0;
      if (on) cells.push(<rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" />);
    }
  }
  return (
    <svg className="disc-qr" viewBox="0 0 21 21" aria-hidden="true">
      {cells}
    </svg>
  );
}

// The discovery-first homepage composition: centred hero, partner rails, proof.
export default function HomeDiscovery() {
  return (
    <>
      <section className="disc-hero">
        <div className="disc-hero-glow" aria-hidden="true" />
        <div className="disc-hero-inner">
          <h1 className="disc-hero-title">Book Cambodia&apos;s best local services</h1>
          <p className="disc-hero-sub">
            Discover trusted salons, barbers, spas, gyms, home, pet, and auto services — with real
            availability you can book in seconds.
          </p>
          <form className="disc-search" action="/about">
            <label className="disc-search-field">
              <Icon name="grid" className="disc-search-icon" />
              <span className="disc-search-text">All services</span>
            </label>
            <label className="disc-search-field">
              <Icon name="pin" className="disc-search-icon" />
              <span className="disc-search-text">Anywhere in Cambodia</span>
            </label>
            <label className="disc-search-field-last">
              <Icon name="calendar" className="disc-search-icon" />
              <span className="disc-search-text">Any date</span>
            </label>
            <button className="disc-search-btn" type="submit">
              Search
            </button>
          </form>
          <p className="disc-hero-meta">19 categories · 6 cities · free to book</p>
          <Link className="disc-hero-app" href="/about">
            Get the app <span className="disc-hero-app-soon">soon</span>
          </Link>
          <div className="disc-hero-chips">
            {popularSearches.slice(0, 6).map((p) => (
              <Link className="disc-hero-chip" href="/about" key={p}>
                {p}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="disc-rails">
        <Rail title="Recommended" items={recommended} />
        <Rail title="New to KOKSIN" items={newToKoksin} />
        <Rail title="Trending" items={trending} />
      </div>

      <section className="disc-app">
        <div className="disc-app-copy">
          <p className="disc-app-eyebrow">Coming soon on iOS &amp; Android</p>
          <h2 className="disc-app-title">Download the KOKSIN app</h2>
          <p className="disc-app-text">
            Your bookings, your reminders, and the partners you keep going back to — all in one
            place.
          </p>
          <QrBlock />
        </div>
        <div className="disc-app-visual">
          <PhoneMocks />
        </div>
      </section>

      <section className="disc-reviews">
        <h2 className="disc-reviews-title">Reviews</h2>
        <div className="disc-review-grid">
          {reviews.map((r) => (
            <article className="disc-review" key={r.title}>
              <p className="disc-review-stars">★★★★★</p>
              <h3 className="disc-review-head">{r.title}</h3>
              <p className="disc-review-body">{r.body}</p>
              <div className="disc-review-person">
                <span className="disc-review-avatar" aria-hidden="true">
                  {r.name.charAt(0)}
                </span>
                <span className="disc-review-name">
                  {r.name}
                  <span className="disc-review-place">{r.place}</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="disc-stats">
        <h2 className="disc-stats-title">Built for how Cambodia books</h2>
        <p className="disc-stats-sub">One account for beauty, wellness, home, pet, and auto services.</p>
        <p className="disc-stats-big">19 categories</p>
        <p className="disc-stats-big-label">bookable across the country</p>
        <div className="disc-stats-row">
          <div className="disc-stat">
            <span className="disc-stat-value">6</span>
            <span className="disc-stat-label">cities at launch</span>
          </div>
          <div className="disc-stat">
            <span className="disc-stat-value">2 min</span>
            <span className="disc-stat-label">to list a business</span>
          </div>
          <div className="disc-stat">
            <span className="disc-stat-value">ABA · KHQR</span>
            <span className="disc-stat-label">deposits supported</span>
          </div>
        </div>
      </section>

      <section className="disc-business">
        <div className="disc-business-copy">
          <h2 className="disc-business-title">KOKSIN for business</h2>
          <p className="disc-business-text">
            Bookings, deposits, staff schedules, and Telegram alerts in one place, so your team can
            stop living in DMs. Setup fees waived for launch partners.
          </p>
          <Link className="disc-business-btn" href="/about">
            List your business <span className="disc-business-btn-arrow">→</span>
          </Link>
          <p className="disc-business-rating">Verified before going live</p>
          <p className="disc-business-stars">★★★★★</p>
        </div>
        <div className="disc-business-visual">
          <DashboardMock />
        </div>
      </section>

      <section className="disc-cities">
        <h2 className="disc-cities-title">Browse by city</h2>
        <div className="disc-city-tabs">
          {cityLinks.map((c, i) => (
            <span className={i === 0 ? "disc-city-tab-active" : "disc-city-tab"} key={c.city}>
              {c.city}
            </span>
          ))}
        </div>
        <div className="disc-city-grid">
          {cityLinks.map((c) => (
            <div className="disc-city-col" key={c.city}>
              <h3 className="disc-city-head">{c.city}</h3>
              <ul className="disc-city-list">
                {c.links.map((l) => (
                  <li className="disc-city-item" key={l}>
                    <Link className="disc-city-link" href="/about">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="disc-cat-chips">
          {["Hair Salons", "Nail Salons", "Brows & Lashes", "Barbers", "Massage", "Waxing", "Spas & Saunas", "Physio", "Tattoo & Piercing"].map(
            (c) => (
              <Link className="disc-cat-chip" href="/about" key={c}>
                {c}
              </Link>
            ),
          )}
        </div>
      </section>
    </>
  );
}
