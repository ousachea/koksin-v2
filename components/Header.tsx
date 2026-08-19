import Link from "next/link";
import { Icon, LogoMark } from "./Icons";

// Sticky top bar: brand on the left, partner link and two icon buttons right.
export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/">
          <LogoMark className="brand-mark" />
          <span className="brand-word">KOKSIN</span>
        </Link>
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
