# Content Fidelity Notes — saverhealthcare.com redesign

All copy, numbers, names and phone numbers were extracted verbatim from
https://saverhealthcare.com/ (Nov 17, 2026) into `src/content/*.ts`.
Items below were kept AS PUBLISHED but should be confirmed with the client.

## Data inconsistencies (kept verbatim)

| Item | Value on original site | Issue |
|---|---|---|
| Hero pill | "847 professionals · 2026 YTD" | Differs from "850+ successful placements" and "1200+ supported" elsewhere — likely different timeframes, confirm |
| London "Office" line | `0231 056 919` | No country code, unusual format |
| Dhaka PABX | `+44 207 247 3939` | A UK number listed under the Dhaka office (same as London main line) |
| Dhaka main | `+88 0222 3311722` | Non-standard "+88 0…" formatting |
| Social links | LinkedIn / Facebook / Instagram / WhatsApp | All point to `#` on the original — real URLs needed |
| Team profiles | Harrison Hudson, Kirstin Hagen, Laurel Clark, Hakim Heck | Read like website-theme placeholder profiles (all plastic/cosmetic surgeons at a staffing agency). Confirm these are real staff before go-live |
| Footer credits | "Powered by Horidash Roy · Powered by DigiSurf Agency" | Kept; remove/update per client agreement |
| Specialty tile | "Lab Tests" tile opens "Lab & Diagnostics" panel | Mirrors original data-name mismatch, kept |

## Redesign decisions

- Single-page anchors → real routes (`/about`, `/services/[slug]`, `/markets/[slug]`, …).
- Hero: new interactive 3D globe (Dhaka → London / New York / Toronto arcs). The original flat
  LON→NYC→DHA arc is kept in the Contact section, drawn on scroll.
- Clocks use IANA time zones via `Intl` (DST-safe). The original labeled Dhaka "BST",
  which is ambiguous — we display the zone abbreviation from `Intl` instead.
- Forms: demo mode logs server-side and returns success; set `RESEND_API_KEY` +
  `CONTACT_TO_EMAIL` to deliver email. Original posted to `/submit.php`.
- Demo deploys are `noindex` (NEXT_PUBLIC_DEMO=true) so they don't compete with the live site.
- Logo images are hotlinked from saverhealthcare.com (next.config allows the host).
  For production, download them into `/public` and update `src/content/site.ts`.
