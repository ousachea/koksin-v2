import { Icon, LogoMark } from "./Icons";

const columns = ["Puthearty Pich", "Sinat Hor", "Sreyleak Sin", "Sreypov Khim", "Kanha Khim"];

const events = [
  { col: 0, top: 18, height: 74, tone: "blue", name: "Sangha Nong", detail: "Couples Spa Package", time: "$140.00 · 120m" },
  { col: 0, top: 118, height: 58, tone: "amber", name: "Sokha Hun", detail: "Aromatherapy", time: "$32.00 · 60m" },
  { col: 1, top: 46, height: 88, tone: "blue", name: "Vichea Khoun", detail: "Couples Spa Package", time: "$140.00 · 120m" },
  { col: 2, top: 42, height: 62, tone: "blue", name: "Sinat Khim", detail: "Body Scrub & Polish", time: "$45.00 · 90m" },
  { col: 2, top: 130, height: 54, tone: "sky", name: "Bopha Lim", detail: "Foot Reflexology", time: "$18.00 · 45m" },
  { col: 3, top: 20, height: 52, tone: "sky", name: "Mony Hak", detail: "Deep Tissue", time: "$60.00 · 60m" },
  { col: 3, top: 150, height: 60, tone: "amber", name: "Thoeu Srey", detail: "Couples Spa Package", time: "$140.00 · 120m" },
  { col: 4, top: 12, height: 46, tone: "grey", name: "Sokha Hun", detail: "Blocked", time: "Break" },
  { col: 4, top: 96, height: 66, tone: "blue", name: "Serey Vann", detail: "Hot Stone Ritual", time: "$55.00 · 75m" },
  { col: 0, top: 214, height: 62, tone: "sky", name: "Rithy Chan", detail: "Herbal Compress", time: "$38.00 · 60m" },
  { col: 1, top: 190, height: 74, tone: "amber", name: "Dara Meas", detail: "Facial & Peel", time: "$65.00 · 90m" },
  { col: 2, top: 224, height: 56, tone: "blue", name: "Leakhena Ou", detail: "Manicure", time: "$16.00 · 45m" },
  { col: 3, top: 246, height: 68, tone: "sky", name: "Chariya Sok", detail: "Prenatal Massage", time: "$42.00 · 75m" },
  { col: 4, top: 210, height: 60, tone: "blue", name: "Nary Pen", detail: "Aroma Ritual", time: "$48.00 · 60m" },
  { col: 0, top: 300, height: 58, tone: "grey", name: "Team break", detail: "Blocked", time: "30m" },
  { col: 2, top: 306, height: 66, tone: "amber", name: "Sophea Ly", detail: "Couples Spa Package", time: "$140.00 · 120m" },
];

// Abstract of the partner dashboard, shown peeking out of the partner card.
export function DashboardMock() {
  return (
    <div className="dash-mock">
      <div className="dash-frame">
        <div className="dash-notch" />
        <div className="dash-body">
          <aside className="dash-side">
            <p className="dash-side-brand">Aura Spa &amp; Wellness</p>
            <p className="dash-side-label">Operate</p>
            <p className="dash-side-item-active">Overview</p>
            <p className="dash-side-item">Bookings</p>
            <p className="dash-side-item">Customers</p>
            <p className="dash-side-label">Catalog</p>
            <p className="dash-side-item">Services</p>
            <p className="dash-side-item">Group sessions</p>
            <p className="dash-side-item">Promotions</p>
            <p className="dash-side-label">Insights</p>
            <p className="dash-side-item">Reviews</p>
            <p className="dash-side-item">Reports</p>
            <p className="dash-side-item">Transactions</p>
          </aside>
          <div className="dash-main">
            <div className="dash-toolbar">
              <span className="dash-date">Sat 1 Aug</span>
              <span className="dash-today">Today</span>
              <span className="dash-tool">Jump to date</span>
              <span className="dash-tool">Back to now · 12:46 AM</span>
              <span className="dash-filter">Filters</span>
            </div>
            <p className="dash-meta">BKK1 Flagship · 5 staff columns · 09:00 – 20:00</p>
            <div className="dash-grid">
              <div className="dash-times">
                {["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"].map((t) => (
                  <span className="dash-time" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="dash-columns">
                {columns.map((c) => (
                  <div className="dash-column" key={c}>
                    <p className="dash-column-name">{c}</p>
                  </div>
                ))}
                {events.map((e, i) => (
                  <div
                    className={`dash-event dash-event-${e.tone}`}
                    key={i}
                    style={{ left: `calc(${e.col} * 20% + 4px)`, top: `${e.top + 26}px`, height: `${e.height}px` }}
                  >
                    <span className="dash-event-name">{e.name}</span>
                    <span className="dash-event-detail">{e.detail}</span>
                    <span className="dash-event-time">{e.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const appCats = [
  { icon: "hair", label: "សក់" },
  { icon: "facial", label: "មុខ" },
  { icon: "barber", label: "កាត់សក់" },
  { icon: "nails", label: "ក្រចក" },
  { icon: "massage", label: "ម៉ាស្សា" },
  { icon: "brows", label: "ចិញ្ចើម" },
  { icon: "makeup", label: "តុបតែងមុខ" },
  { icon: "yoga", label: "យោគៈ" },
  { icon: "gym", label: "ហាត់ប្រាណ" },
  { icon: "cleaning", label: "សម្អាត" },
] as const;

// Abstract of the mobile app, shown peeking out of the "on your phone" card.
export function PhoneMocks() {
  return (
    <div className="phones">
      <div className="phone phone-left">
        <div className="phone-screen">
          <div className="phone-status">
            <span className="phone-time">9:10</span>
          </div>
          <p className="phone-title">Bookings</p>
          <div className="phone-tabs">
            <span className="phone-tab-active">Upcoming 15</span>
            <span className="phone-tab">Past 61</span>
          </div>
          <div className="phone-booking">
            <div className="phone-booking-top">
              <span className="phone-booking-next">NEXT UP · IN 2 DAYS</span>
              <span className="phone-badge-confirmed">CONFIRMED</span>
            </div>
            <p className="phone-booking-title">Gel Polish</p>
            <p className="phone-booking-sub">Polished Nail Atelier · Aeon 1</p>
            <p className="phone-booking-time">1:00 – 2:00 PM</p>
            <div className="phone-booking-actions">
              <span className="phone-btn-primary">Directions</span>
              <span className="phone-btn-ghost">Cancel</span>
            </div>
          </div>
          <p className="phone-day">WED 5 AUG</p>
          <div className="phone-row">
            <span className="phone-row-time">4:30 PM</span>
            <div className="phone-row-body">
              <p className="phone-row-title">Khmer Traditional Massage</p>
              <p className="phone-row-sub">Serenity Spa Lounge</p>
              <p className="phone-row-meta">
                <span className="phone-badge-confirmed">CONFIRMED</span> $50.00
              </p>
            </div>
          </div>
          <div className="phone-row">
            <span className="phone-row-time">5:30 PM</span>
            <div className="phone-row-body">
              <p className="phone-row-title">Design Consultation</p>
              <p className="phone-row-sub">Needle &amp; Thread Studio</p>
              <p className="phone-row-meta">
                <span className="phone-badge-confirmed">CONFIRMED</span> $0.00
              </p>
            </div>
          </div>
          <div className="phone-row">
            <span className="phone-row-time">7:00 PM</span>
            <div className="phone-row-body">
              <p className="phone-row-title">Beard Trim &amp; Hot Towel</p>
              <p className="phone-row-sub">Sharp Fade Barbers</p>
              <p className="phone-row-meta">
                <span className="phone-badge-confirmed">CONFIRMED</span> $9.00
              </p>
            </div>
          </div>
          <p className="phone-day">THU 6 AUG</p>
          <div className="phone-row">
            <span className="phone-row-time">9:30 AM</span>
            <div className="phone-row-body">
              <p className="phone-row-title">Yin &amp; Restore</p>
              <p className="phone-row-sub">Sun Salutation Yoga Silom Studio</p>
              <p className="phone-row-meta">
                <span className="phone-badge-pending">PENDING</span> $15.00
              </p>
            </div>
          </div>
          <div className="phone-row">
            <span className="phone-row-time">11:00 AM</span>
            <div className="phone-row-body">
              <p className="phone-row-title">Full House Cleaning</p>
              <p className="phone-row-sub">Bright Home Services</p>
              <p className="phone-row-meta">
                <span className="phone-badge-confirmed">CONFIRMED</span> $28.00
              </p>
            </div>
          </div>
          <p className="phone-day">FRI 8 AUG</p>
          <div className="phone-row">
            <span className="phone-row-time">2:00 PM</span>
            <div className="phone-row-body">
              <p className="phone-row-title">Puppy Groom &amp; Bath</p>
              <p className="phone-row-sub">Furry Friends Spa</p>
              <p className="phone-row-meta">
                <span className="phone-badge-confirmed">CONFIRMED</span> $18.00
              </p>
            </div>
          </div>
          <div className="phone-row">
            <span className="phone-row-time">6:15 PM</span>
            <div className="phone-row-body">
              <p className="phone-row-title">Express Car Wash</p>
              <p className="phone-row-sub">Riverside Auto Detail</p>
              <p className="phone-row-meta">
                <span className="phone-badge-pending">PENDING</span> $12.00
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="phone phone-center">
        <div className="phone-screen">
          <div className="phone-status">
            <span className="phone-time">9:10</span>
          </div>
          <div className="phone-brand">
            <LogoMark className="phone-brand-mark" />
            <span className="phone-brand-word">KOKSIN</span>
            <Icon name="globe" className="phone-brand-globe" />
          </div>
          <div className="phone-search">
            <Icon name="search" className="phone-search-icon" />
            <span className="phone-search-text">ស្វែងរកសេវាកម្ម ឬទីតាំង</span>
          </div>
          <div className="phone-cats">
            {appCats.map((c) => (
              <div className="phone-cat" key={c.label}>
                <span className="phone-cat-tile">
                  <Icon name={c.icon} className="phone-cat-icon" />
                </span>
                <span className="phone-cat-label">{c.label}</span>
              </div>
            ))}
          </div>
          <div className="phone-section-head">
            <span className="phone-section-title">ជិតៗ KOKSIN</span>
            <span className="phone-section-link">មើលទាំងអស់</span>
          </div>
          <div className="phone-cards">
            <div className="phone-card">
              <span className="phone-card-photo phone-card-photo-a">
                <span className="phone-card-tag">PET GROOMING</span>
              </span>
              <p className="phone-card-title">Furry Friends Spa</p>
              <p className="phone-card-sub">Wat Bo</p>
              <p className="phone-card-meta">7 ម៉ោងទំនេរ · From $8.00</p>
            </div>
            <div className="phone-card">
              <span className="phone-card-photo phone-card-photo-b">
                <span className="phone-card-tag">FACIAL</span>
              </span>
              <p className="phone-card-title">Riverside Med Spa</p>
              <p className="phone-card-sub">Riverside</p>
              <p className="phone-card-meta">6 ម៉ោងទំនេរ · From $12.00</p>
            </div>
          </div>
          <div className="phone-section-head">
            <span className="phone-section-title">កក់ម្ដងទៀត</span>
            <span className="phone-section-link">មើលទាំងអស់</span>
          </div>
          <div className="phone-cards">
            <div className="phone-card">
              <span className="phone-card-photo phone-card-photo-c">
                <span className="phone-card-tag">HAIR</span>
              </span>
              <p className="phone-card-title">Sharp Fade Barbers</p>
              <p className="phone-card-sub">Toul Kork</p>
              <p className="phone-card-meta">4 ម៉ោងទំនេរ · From $6.00</p>
            </div>
            <div className="phone-card">
              <span className="phone-card-photo phone-card-photo-a">
                <span className="phone-card-tag">MASSAGE</span>
              </span>
              <p className="phone-card-title">Serenity Spa Lounge</p>
              <p className="phone-card-sub">BKK1</p>
              <p className="phone-card-meta">9 ម៉ោងទំនេរ · From $10.00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="phone phone-right">
        <div className="phone-screen">
          <div className="phone-status">
            <span className="phone-time">9:10</span>
          </div>
          <div className="phone-search">
            <Icon name="search" className="phone-search-icon" />
            <span className="phone-search-text">ស្វែងរកសេវាកម្ម ឬទីតាំង</span>
          </div>
          <div className="phone-map">
            <span className="phone-map-road phone-map-road-a" />
            <span className="phone-map-road phone-map-road-b" />
            <span className="phone-map-road phone-map-road-c" />
            <span className="phone-map-pin phone-map-pin-a" />
            <span className="phone-map-pin phone-map-pin-b" />
            <span className="phone-map-pin phone-map-pin-c" />
            <span className="phone-map-badge">4.8 ★</span>
          </div>
          <div className="phone-map-chips">
            <span className="phone-map-chip">ម៉ាស្សា</span>
            <span className="phone-map-chip">ក្រចក</span>
            <span className="phone-map-chip">សក់</span>
          </div>
          <div className="phone-card">
            <span className="phone-card-photo phone-card-photo-c">
              <span className="phone-card-tag">SKIN &amp; BROWS</span>
            </span>
            <p className="phone-card-title">Skin Bar</p>
            <p className="phone-card-meta">From $15.00</p>
          </div>
          <div className="phone-card">
            <span className="phone-card-photo phone-card-photo-b">
              <span className="phone-card-tag">NAILS</span>
            </span>
            <p className="phone-card-title">Polished Nail Atelier</p>
            <p className="phone-card-meta">From $9.00</p>
          </div>
          <div className="phone-card">
            <span className="phone-card-photo phone-card-photo-a">
              <span className="phone-card-tag">MASSAGE</span>
            </span>
            <p className="phone-card-title">Serenity Spa Lounge</p>
            <p className="phone-card-meta">From $10.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
