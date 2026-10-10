# Project guidance

## Architecture

This is a static Next Day Roofing & Gutter Solutions site. Netlify serves `public` without compiling or bundling. The source pages and original assets were preserved rather than replaced with a framework template because the requested changes were limited to spacing, heading sizes, and publishing.

## Key directories

- `public/`: deployable HTML, CSS, sitemap, and robots configuration.
- `public/assets/`: logo, gutter photograph, explanatory SVGs, heading font, and campaign parameter forwarding for the embedded estimate form.
- `.netlify/results.md`: product-owner summary.

## Conventions

Keep the landing page in `public/index.html` synchronized with `public/gutter-protection/index.html`. The guide is at `public/blog/why-gutter-protection-matters/index.html`.

Preserve the original content, branding, image assets, and estimate workflow unless changes are requested. Original styles live in `style.css` and `modern.css`; keep focused layout refinements in `refinements.css`, loaded last. Maintain the heading hierarchy: section titles are visually larger than hero headlines, while supporting headings and eyebrow labels are smaller.

Use mobile-aware spacing, keyboard-visible focus states, semantic headings, and reduced-motion support. Do not copy hosting-provider challenge scripts from the reference site. No backend or local persistent storage is needed; the existing estimate form is provider-hosted.

If the domain changes, update HTML metadata, JSON-LD, sitemap, and robots URLs consistently. Avoid build commands: the published files are already deployable.
