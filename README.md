# Next.js Plain CSS Starter

A fast [Next.js](https://nextjs.org) starter styled with plain, class-based
CSS — **no Tailwind, no UI framework**. It's the ideal canvas for editing
styles visually inside Ship Studio.

## Why this starter

Most starters reach for a utility-CSS framework. This one keeps styling in a
single, readable stylesheet where **every element has one semantic class and
each class is defined by exactly one CSS rule**. That makes the markup clean and
makes styles easy to edit — by hand or by clicking elements in Ship Studio's
visual editor, which writes real CSS (`padding: 24px`, any property, any value)
straight into the stylesheet.

## Structure

```
app/
  layout.tsx              Shared <html> shell (fonts, header, footer)
  page.tsx                Homepage
  about/page.tsx          About page (one folder per route)
  icon.svg                Favicon
components/               Header, Footer — reusable markup
styles/main.css           The authored stylesheet — one rule per class
public/                   Static assets
```

## The styling convention

Keep these and the visual editor stays reliable:

- Style through **classes**, not inline `style=""`.
- Give each editable element **one semantic class** (`.hero-title`, `.feature-card`).
- Define each class with **one rule** in `styles/main.css`.
- Put responsive overrides in the **`@media` block** at the bottom of the file.

## Commands

| Command           | Action                                       |
| ----------------- | -------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the dev server at `localhost:3000`     |
| `npm run build`   | Build the production site                    |
| `npm start`       | Serve the production build locally           |

Built for [Ship Studio](https://github.com/ship-studio/ship-studio).
