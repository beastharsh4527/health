// Verbatim copy from saverhealthcare.com — hero, marquee, stats, about, philosophy.

export const hero = {
  pill: { label: "Now placing", value: "847", text: "professionals · 2026 YTD" },
  eyebrow: "Ethical · Compliant · Worldwide",
  title: { before: "Qualified clinicians,", em: "delivered", after: "to the world's hospitals." },
  lede:
    "Saver Health Care Limited recruits, trains and deploys certified doctors, nurses and medical professionals to hospitals and clinics across the United Kingdom, United States and Canada.",
  primary: { label: "Apply as a Professional", href: "/apply" },
  secondary: { label: "Explore Our Services", href: "/services" },
  points: [
    "Full credentialing & licensing support",
    "Visa & immigration assistance",
    "End-to-end placement & aftercare",
  ],
  sticker: { top: "Since 2020", bottom: "Health for Everyone" },
  card: {
    tag: "Speak with a specialist",
    title: "Map your route to international practice.",
    ukLabel: "UK Office",
    emailLabel: "Email",
  },
} as const;

export const marquee = [
  "Doctor Deployment",
  "Global Nurse Staffing",
  "Licensing & Credentialing",
  "Visa & Immigration",
  "Competency Training",
  "Ethical Placement",
] as const;

export const stats = {
  eyebrow: "By the numbers · 2026",
  title: "A snapshot of Saver — six years on, three continents in.",
  items: [
    { n: "01", value: 1200, suffix: "+", prefix: "", label: "Professionals supported", sub: "since founding · 2020" },
    { n: "02", value: 98, suffix: "%", prefix: "", label: "Client satisfaction", sub: "across 60+ partner hospitals" },
    { n: "03", value: 3, suffix: "", prefix: "", label: "Nations", sub: "UK · US · Canada" },
    { n: "04", value: 850, suffix: "+", prefix: "", label: "Successful placements", sub: "average 8-month route" },
  ],
} as const;

export const about = {
  badges: { est: "Est.", year: "2020", trust: "Trusted & compliant", bridge: "Bridging talent & need", continents: "3", continentsLabel: "Continents covered" },
  eyebrow: "About Saver Health Care",
  title: "Founded to bridge the gap between skilled professionals and the hospitals that need them.",
  p1: "Saver Health Care Limited is an international healthcare support organisation committed to strengthening medical systems across the world. We specialise in recruiting, training and deploying certified medical professionals to hospitals, clinics, health centres and care institutions in any country.",
  quote: "A single-source solution — from first conversation to first shift overseas.",
  p2: "The company was founded to bridge gaps between qualified healthcare professionals in Bangladesh and the international hospitals that urgently need them. By combining years of recruitment expertise with clinical training capabilities, we offer a single-source solution that encompasses assessment, competency training, licensing support and ethical international placement.",
  stats: [
    { value: 850, suffix: "+", label: "Placements" },
    { value: 60, suffix: "+", label: "Partner hospitals" },
    { value: 98, suffix: "%", label: "Satisfaction" },
  ],
  pillars: [
    { title: "Ethical & compliant", text: "Placements aligned to employer standards and candidate expectations, every step of the way." },
    { title: "Specialist team", text: "Nurse educators, credentialing specialists & immigration coordinators in one in-house team." },
  ],
  link: { label: "Meet our specialists", href: "/team" },
  photos: [
    "https://images.unsplash.com/photo-1612531386530-97286d97c2d2",
    "https://images.unsplash.com/photo-1582750433449-648ed127bb54",
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
  ],
} as const;

export const philosophy = {
  eyebrow: "Our philosophy",
  quote:
    "We are committed to ethical, compliant and high-standard workforce mobility — supporting healthcare professionals' international career advancement while bridging global medical staffing demand.",
  name: "Saver Health Care Limited",
  meta: "Founded 2020 · London · New York · Dhaka",
} as const;
