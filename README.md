# Benyah Website

Production-ready marketing-site scaffold for Benyah, built with Next.js, TypeScript, Tailwind CSS v4, shadcn/ui, and Framer Motion.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Framer Motion
- Locale-ready routing for English and Arabic

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run typecheck
```

## Project Structure

```text
src/
  app/
    [locale]/
      (marketing)/
        about/
        case-studies/
        contact/
        services/
          [slug]/
  components/
    layout/
    marketing/
    motion/
    ui/
  config/
  content/
  i18n/
  lib/
```

## Notes

- Root requests redirect to `/en`.
- All marketing routes are locale-prefixed so English and Arabic can share one scalable architecture.
- `src/content/marketing.ts` contains lightweight placeholder content only, ready for a dedicated copy pass.
- `src/app/sitemap.ts` and `src/app/robots.ts` are already set up for SEO.
- Set `NEXT_PUBLIC_SITE_URL` in production for canonical URLs and sitemap generation.

## Deploying to Vercel

1. Import the repository into Vercel.
2. Set `NEXT_PUBLIC_SITE_URL` to your production domain.
3. Deploy with the default Next.js build command.
