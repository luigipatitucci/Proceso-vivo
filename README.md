# Proceso Vivo

Landing page for Proceso Vivo therapeutic method.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **CSS Modules** (no Tailwind, no UI libraries)
- **Google Fonts** (Poppins for body text)
- **Georgia** (serif for headings)

## Project Structure

```
/app
  /layout.tsx       # Root layout with Poppins font
  /page.tsx         # Home page
  /globals.css      # Global styles & CSS variables

/components         # React components (empty for now)
/public             # Static assets
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Design System

### Typography
- **Headings**: Georgia (serif)
- **Body**: Poppins (sans-serif)

### CSS Variables
Defined in `globals.css`:
- `--color-bg`: Background color
- `--color-text`: Text color
- `--color-accent`: Accent color
- `--max-width`: Container max width
- `--spacing-base`: Base spacing unit

### Container System
Use `.container` class for centered, max-width layouts with responsive padding.

## Development Guidelines

- Use CSS Modules for component-specific styles
- Keep design minimal and editorial
- No unnecessary dependencies
- Content-driven, not UI-driven
