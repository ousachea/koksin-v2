"use client";

import { useState } from "react";
import { Icon } from "./Icons";
import { launchCities } from "./homeData";

// Beyond this, the visitor is treated as outside the launch footprint rather
// than being shown a "nearest" city hundreds of kilometres away.
const MAX_CITY_DISTANCE_KM = 120;

type Status = "idle" | "locating" | "found" | "denied" | "unavailable" | "outside";

// Great-circle distance in kilometres.
function distanceKm(aLat: number, aLng: number, bLat: number, bLng: number) {
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const dLat = toRad(bLat - aLat);
  const dLng = toRad(bLng - aLng);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(aLat)) * Math.cos(toRad(bLat)) * Math.sin(dLng / 2) ** 2;
  return 2 * 6371 * Math.asin(Math.sqrt(h));
}

function nearestCity(lat: number, lng: number) {
  let best = launchCities[0];
  let bestDistance = Infinity;
  for (const city of launchCities) {
    const distance = distanceKm(lat, lng, city.lat, city.lng);
    if (distance < bestDistance) {
      best = city;
      bestDistance = distance;
    }
  }
  return { city: best, distance: bestDistance };
}

const labels: Record<Status, string> = {
  idle: "Anywhere in Cambodia",
  locating: "Locating…",
  found: "",
  denied: "Location blocked",
  unavailable: "Location unavailable",
  outside: "Outside Cambodia",
};

// The location field of the discovery search. Resolving the nearest launch
// city happens in the browser, so the visitor's coordinates are never sent
// anywhere. Detection runs on click only — never on load — so the permission
// prompt always follows a deliberate action.
export default function LocationField() {
  const [status, setStatus] = useState<Status>("idle");
  const [city, setCity] = useState("");

  function handleClick() {
    if (status === "found") {
      setStatus("idle");
      setCity("");
      return;
    }
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      setStatus("unavailable");
      return;
    }
    setStatus("locating");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { city: match, distance } = nearestCity(
          position.coords.latitude,
          position.coords.longitude,
        );
        if (distance > MAX_CITY_DISTANCE_KM) {
          setStatus("outside");
          return;
        }
        setCity(match.name);
        setStatus("found");
      },
      (error) => setStatus(error.code === error.PERMISSION_DENIED ? "denied" : "unavailable"),
      { timeout: 10000, maximumAge: 300000 },
    );
  }

  const label = status === "found" ? city : labels[status];

  return (
    <button
      className="disc-search-field"
      type="button"
      onClick={handleClick}
      aria-label={status === "found" ? `Location: ${city}. Clear` : "Use my current location"}
    >
      <Icon
        name="pin"
        className={status === "found" ? "disc-search-icon-on" : "disc-search-icon"}
      />
      <span className="disc-search-text">{label}</span>
      <span className="disc-search-live" role="status">
        {status === "found" ? `Showing services near ${city}` : labels[status]}
      </span>
    </button>
  );
}
