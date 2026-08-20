import Link from "next/link";
import { Icon, LogoMark } from "./Icons";

// Sticky top bar: brand left, nav centered, partner link and icon buttons right.
export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/">
          <LogoMark className="brand-mark" />
          <span className="brand-word">KOKSIN</span>
        </Link>
        <nav className="header-nav" aria-label="Primary">
          <Link className="header-link" href="/discovery">
            Discover
          </Link>
          <Link className="header-link" href="/listings">
            Listings
          </Link>
        </nav>
        <div className="header-actions">
          <Link className="header-link" href="/about">
            Become a partner
          </Link>
          <button className="header-icon-btn" type="button" aria-label="Change language">
            <Icon name="globe" className="header-icon" />
          </button>
          <button className="header-icon-btn" type="button" aria-label="Open menu">
            <Icon name="menu" className="header-icon" />
          </button>
        </div>
      </div>
    </header>
  );
}
