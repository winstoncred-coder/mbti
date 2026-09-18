# latent-platform

The real, extensible codebase for the Latent photography platform (Next.js + TypeScript +
Tailwind). This is separate from the quick shareable single-file site — this is what grows into
the full product: accounts, uploads, Stripe payments, print fulfillment.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What's actually working right now

- Home page with digital gallery + film "contact sheet" gallery (mock data)
- Photo detail pages (`/photo/[id]`) with a working Share button (Web Share API,
  clipboard fallback)
- **New:** `/types` — 16 MBTI-styled color albums, each with a tinted mini-gallery, a matching
  frame recommendation, and a matching crystal bracelet recommendation (`/types/[code]`, e.g.
  `/types/infp`)
- Fully responsive, dark/light theme aware

## What's NOT wired up yet (on purpose)

- **No real accounts** — `lib/supabase.ts` is a commented-out placeholder. See the comments in
  that file for the exact steps to activate it once you're ready (create a Supabase project, add
  `.env.local`, uncomment).
- **No real images** — `lib/photos.ts` returns mock data with generated placeholder gradients
  (`lib/placeholder.ts`). Swap in real Supabase Storage URLs later; nothing else needs to change.
- **No payments** — frame and crystal bracelet "Buy" actions aren't there yet; the pages just show
  the recommendation. Stripe Connect gets added in a later phase (see the build guide artifact
  from earlier in our conversation).
- **No uploads** — this is a read-only showcase for now.

## Project structure

```
app/
├── layout.tsx          # root layout, nav, fonts
├── page.tsx             # home (digital + film galleries)
├── about/page.tsx
├── photo/[id]/page.tsx   # photo detail + share
└── types/
    ├── page.tsx          # 16-type grid
    └── [code]/page.tsx   # one MBTI type: tinted album + frame + crystal rec

components/
├── Nav.tsx
├── PhotoGrid.tsx         # main gallery grid (grid / contact-sheet variants)
├── MbtiGrid.tsx          # 16-color grid on /types
├── MbtiAlbum.tsx         # tinted mini-gallery on /types/[code]
└── ShareButton.tsx       # Web Share API + clipboard fallback

lib/
├── photos.ts             # ALL photo data flows through here — swap mock for Supabase later
├── mbti.ts                # 16 types: color, frame rec, crystal rec
├── placeholder.ts         # generates gradient placeholder images (+ a tinted variant for MBTI)
└── supabase.ts            # inactive placeholder client, see comments to activate
```

## Next steps (in order)

1. **Real photos**: replace the mock arrays in `lib/photos.ts` with your own images (either
   static files in `public/` for now, or go straight to Supabase Storage).
2. **Supabase**: follow the comments in `lib/supabase.ts` to wire up a real project, then swap
   `lib/photos.ts` to query it instead of returning mock arrays.
3. **Accounts**: add Supabase Auth (email + Google) so photographers can sign in.
4. **Uploads**: an upload form that writes to Supabase Storage + a `photos` row.
5. **Payments**: Stripe Connect for tipping, plus checkout for frames/crystal bracelets
   (Printful/Prodigi API for the physical frame fulfillment; bracelets would need a similar
   print-on-demand-style supplier or your own small inventory).
6. **Deploy**: push this repo to GitHub, import it into Vercel, done — Vercel builds Next.js
   projects with zero config.

## Deploying

```bash
git init
git add .
git commit -m "Initial commit: latent-platform"
git branch -M main
git remote add origin https://github.com/<your-username>/latent-platform.git
git push -u origin main
```

Then go to vercel.com → **Add New Project** → import the GitHub repo → Deploy. No configuration
needed for this stage since nothing depends on environment variables yet.
