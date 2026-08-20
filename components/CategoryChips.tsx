"use client";

import { useState, type CSSProperties } from "react";
import Link from "next/link";
import { Icon } from "./Icons";
import { heroCategories } from "./homeData";

// heroCategories is ordered popular-first, so the hero can show the leading
// few and keep the rest behind "See all".
const POPULAR = 8;

type Category = (typeof heroCategories)[number];

function Chip({ category, index }: { category: Category; index: number }) {
  return (
    <Link
      className={`disc-hero-chip disc-hero-chip-${category.tint}`}
      href="/about"
      style={{ "--i": index } as CSSProperties}
    >
      <Icon
        name={category.icon}
        className={`disc-hero-chip-icon disc-hero-chip-${category.motion}`}
      />
      {category.label}
    </Link>
  );
}

// The hero's category cloud: the popular few up front, the rest revealed by
// "See all". The reveal animates the wrapper's height with a 0fr→1fr grid row
// so it stays smooth without measuring anything, and the chips inside stagger
// in behind it.
export default function CategoryChips() {
  const [open, setOpen] = useState(false);
  const popular = heroCategories.slice(0, POPULAR);
  const rest = heroCategories.slice(POPULAR);

  return (
    <div className="disc-cats">
      <div className="disc-hero-chips">
        {popular.map((category, index) => (
          <Chip category={category} index={index} key={category.label} />
        ))}
      </div>
      <div className="disc-cats-more" data-open={open} inert={!open || undefined}>
        <div className="disc-cats-more-inner">
          <div className="disc-hero-chips">
            {rest.map((category, index) => (
              <Chip category={category} index={index} key={category.label} />
            ))}
          </div>
        </div>
      </div>
      <button
        className="disc-cats-toggle"
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        {open ? "Show less" : `See all ${heroCategories.length}`}
        <Icon name="chevron" className="disc-cats-chevron" data-open={open} />
      </button>
    </div>
  );
}
