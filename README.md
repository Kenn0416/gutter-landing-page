# Next Day Roofing & Gutter Solutions

This site preserves the existing Next Day gutter-protection service page and GutterDome installation guide, with more breathing room between sections and a clearer heading hierarchy. Hero headlines are smaller than section titles; supporting headings and eyebrow labels remain smaller still.

## Technology and structure

The project uses static HTML, CSS, a small browser JavaScript enhancement, and Netlify hosting. No framework, dependency installation, or compilation is required. Existing brand imagery, diagrams, and the custom heading font are included locally.

- `public/index.html`: the gutter-protection landing page.
- `public/gutter-protection/index.html`: the service page at its original route.
- `public/blog/why-gutter-protection-matters/index.html`: the installation guide.
- `public/refinements.css`: responsive spacing, heading hierarchy, and accessibility refinements.
- `public/assets/`: original brand assets and estimate-form campaign tracking.
- `netlify.toml`: publishes `public` directly with no build step.

## Local preview

Run `npx serve public` from the project root, then open the local address printed by the command. Alternatively, use `netlify dev --port 8889` to preview with Netlify routing.

## Estimate requests

The service page retains the original Renovareach embedded estimate form and its embed script so submissions continue through the business's existing workflow. Form availability and submission processing are managed by that existing provider; this project does not introduce a separate database or duplicate form handler.

## Publishing

Netlify publishes the `public` directory directly. Both pages include metadata, a sitemap, and robots configuration for the project domain. When moving to a custom domain, update canonical URLs, social metadata, structured-data URLs, the sitemap, and robots configuration together.
