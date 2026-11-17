// Verbatim copy from saverhealthcare.com — specialties, markets, process.

const u = (id: string) => `https://images.unsplash.com/${id}`;

export const specialtiesIntro = {
  eyebrow: "Clinical coverage",
  title: "Specialties we recruit & deploy across.",
  sub: "From critical care to advanced diagnostics — we place experienced talent across the disciplines hospitals need most.",
  spotlightLabel: "Spotlight · Live demand",
  openingsLabel: "Openings now",
  marketsLabel: "Top markets",
} as const;

// `label` = tile text on the original grid; `name` = spotlight panel title (original data-name).
export const specialties = [
  { label: "General Medical", name: "General Medical", openings: 42, markets: "UK · US · Canada", bio: "Generalist physicians placed across NHS trusts, US hospitals and Canadian clinics — the backbone of every care system.", photo: u("photo-1559757175-5700dde675bc") },
  { label: "Family Physician", name: "Family Physician", openings: 28, markets: "UK · Canada", bio: "Family practitioners building long-term patient relationships in primary care across UK and Canada.", photo: u("photo-1576091160399-112ba8d25d1d") },
  { label: "Eye Surgery", name: "Eye Surgery", openings: 9, markets: "UK · US", bio: "Ophthalmic surgeons placed in specialist eye hospitals and teaching centres — refractive, cataract and retina.", photo: u("photo-1631815587646-b85a1bb027e1") },
  { label: "Intensive Care", name: "Intensive Care", openings: 34, markets: "UK · US · Canada", bio: "ICU consultants and registrars deployed where capacity is most strained — high-stakes critical care.", photo: u("photo-1551601651-2a8555f1a136") },
  { label: "Lab Tests", name: "Lab & Diagnostics", openings: 17, markets: "UK · Canada", bio: "Pathology, microbiology and biochemistry — placing diagnostic scientists across reference labs and hospitals.", photo: u("photo-1579165466741-7f35e4755660") },
  { label: "Emergency Care", name: "Emergency Care", openings: 51, markets: "UK · US", bio: "ED consultants, ACPs and triage specialists for hospital emergency departments — UK and US frontline.", photo: u("photo-1587351177026-1ef39ef13447") },
  { label: "Professional Staff", name: "Professional Staff", openings: 38, markets: "UK · US · Canada", bio: "Allied health professionals, physiotherapists, radiographers and clinical scientists across three continents.", photo: u("photo-1582750433449-648ed127bb54") },
  { label: "Advanced Diagnostic", name: "Advanced Diagnostic", openings: 22, markets: "UK · US", bio: "Radiologists and imaging specialists — MRI, CT, PET — for tertiary centres and teaching hospitals.", photo: u("photo-1530026405186-ed1f139313f8") },
  { label: "Online Medicine", name: "Online Medicine", openings: 14, markets: "UK · US · Canada", bio: "Telehealth physicians for digital-first clinics — flexible, remote, with full credentialing support.", photo: u("photo-1576091160550-2173dba999ef") },
  { label: "Ambulance Service", name: "Ambulance Service", openings: 19, markets: "UK · US", bio: "Paramedics and pre-hospital practitioners — placed with major UK ambulance trusts and US EMS networks.", photo: u("photo-1583912267550-d6c2ac3196c0") },
] as const;

export const marketsIntro = {
  eyebrow: "Where we place",
  title: "Trusted routes into three leading healthcare systems.",
  sub: "We focus placements where demand is highest and standards are world-class.",
} as const;

export const markets = [
  {
    slug: "uk", code: "UK", country: "United Kingdom", n: "01", badge: "Headquarters market",
    title: "NHS & private practice",
    desc: "Routes into hospitals, clinics and care institutions with full licensing and immigration support — from GMC to NMC.",
    stats: [
      { value: 300, prefix: "", suffix: "+", label: "NHS trusts" },
      { value: 6, prefix: "", suffix: "mo", label: "Avg route" },
      { value: 62, prefix: "£", suffix: "k", label: "Avg salary" },
    ],
    tags: ["ICU", "A&E", "Nursing", "+12"],
    cta: "Explore UK route",
    office: "London",
    photo: u("photo-1551076805-e1869033e561"),
  },
  {
    slug: "us", code: "US", country: "United States", n: "02", badge: "High demand",
    title: "Hospitals & health centres",
    desc: "Credentialing and placement for nurses and physicians across the US healthcare network — coast to coast.",
    stats: [
      { value: 5000, prefix: "", suffix: "+", label: "Partner hospitals" },
      { value: 9, prefix: "", suffix: "mo", label: "Avg route" },
      { value: 98, prefix: "$", suffix: "k", label: "Avg salary" },
    ],
    tags: ["Cardiology", "Oncology", "ER", "+18"],
    cta: "Explore US route",
    office: "New York",
    photo: u("photo-1587351177026-1ef39ef13447"),
  },
  {
    slug: "canada", code: "CA", country: "Canada", n: "03", badge: "Growing demand",
    title: "Clinics & care settings",
    desc: "Ethical, sustainable placements aligned with Canadian employer standards and expectations across all provinces.",
    stats: [
      { value: 120, prefix: "", suffix: "+", label: "Health authorities" },
      { value: 8, prefix: "", suffix: "mo", label: "Avg route" },
      { value: 95, prefix: "C$", suffix: "k", label: "Avg salary" },
    ],
    tags: ["Family Med", "Pediatrics", "Nursing", "+9"],
    cta: "Explore CA route",
    office: null,
    photo: u("photo-1576091160399-112ba8d25d1d"),
  },
] as const;

export const processIntro = {
  eyebrow: "How it works",
  title: "One source, from first conversation to first shift.",
  sub: "We provide a single-source solution: assessment, competency training, licensing support and ethical international placement — with support that runs from career counselling through to post-deployment assistance.",
  journeyLabel: "Total journey",
  journeyValue: "6—9",
  journeyUnit: "months",
  costLabel: "Average cost to candidate",
  costValue: "£0",
  costUnit: "upfront",
  cta: { label: "Begin Your Journey", href: "/apply" },
} as const;

export const processSteps = [
  { n: "01", tag: "Step one", title: "Assessment & counselling", desc: "We review your qualifications and goals, then map a realistic route abroad — tailored to your destination market.", meta: "~ 2 weeks · 1-to-1 consultations", photo: u("photo-1573497019940-1c28c88b4f3e") },
  { n: "02", tag: "Step two", title: "Competency training", desc: "Clinical training and standards preparation aligned to your destination market — IELTS / OET / OSCE / NCLEX as needed.", meta: "~ 8—12 weeks · in-house tutors", photo: u("photo-1576091160550-2173dba999ef") },
  { n: "03", tag: "Step three", title: "Licensing & visa support", desc: "Credentialing specialists and immigration coordinators handle the paperwork — GMC, NMC, ECFMG, IRCC, Tier 2.", meta: "~ 12—20 weeks · end-to-end paperwork", photo: u("photo-1450101499163-c8848c66ca85") },
  { n: "04", tag: "Step four", title: "Placement & aftercare", desc: "Ethical placement with employers, plus ongoing post-deployment assistance — housing, onboarding, pastoral support.", meta: "~ 4 weeks + 6 months aftercare", photo: u("photo-1551076805-e1869033e561") },
] as const;
