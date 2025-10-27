# Sydney Deck Builder

A Next.js 14 website with Tailwind CSS. Built for authority, transparency and fast booking.

## Features

- App Router (Next.js 14) + Tailwind
- Pages: Home, Services, Pricing, Process, Portfolio, About, Contact, Book
- Components: Header, Footer, Hero, PricingCards, ProcessTimeline, BookingForm
- Transparent pricing section with guide packages
- Clear process timeline & project management promise
- Booking form posts to `/api/book` (wire this to email/CRM on Vercel)
- SEO‑friendly metadata, clean design, mobile responsive

## Local dev

```bash
npm i
npm run dev
```
Open http://localhost:3000.

## Deploy on Vercel

1. Push this repository to GitHub.
2. In Vercel, import the repo. Framework preset: **Next.js**.
3. Add an environment variable later if you connect `/api/book` to an email/CRM.
4. Deploy.

## Customising

- Update copy in `app/**/*.js`.
- Replace logo at `public/logo.svg`.
- Swap images with your project photos.
- Add reviews/testimonials and suburb pages for SEO.

## Connecting the booking form

Edit `app/api/book/route.js` to send an email (e.g., Resend, SendGrid), write to Google Sheets, or post to a CRM webhook. On Vercel you can store API keys as environment variables.
