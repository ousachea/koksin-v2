"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icons";

// The visitor's own date and time, in their own locale and time zone.
function formatNow() {
  return new Intl.DateTimeFormat(undefined, {
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date());
}

// The date field of the discovery search, showing the visitor's current date
// and time. It starts empty so the server render and the first client render
// agree — the clock lands on mount — and then keeps itself honest while the
// page stays open. Clicking falls back to the "Any date" placeholder.
export default function DateField() {
  const [now, setNow] = useState("");
  const [live, setLive] = useState(true);

  useEffect(() => {
    if (!live) return;
    const tick = () => setNow(formatNow());
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, [live]);

  const showing = live && now !== "";

  return (
    <button
      className="disc-search-field-last"
      type="button"
      onClick={() => setLive((value) => !value)}
      aria-label={showing ? `Date: ${now}. Clear` : "Use my current date and time"}
    >
      <Icon name="calendar" className="disc-search-icon" />
      <span className="disc-search-text">{showing ? now : "Any date"}</span>
    </button>
  );
}
