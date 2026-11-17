// Verbatim copy from saverhealthcare.com — services + solutions.

const u = (id: string) => `https://images.unsplash.com/${id}`;

export const servicesIntro = {
  eyebrow: "What we do",
  title: "End-to-end workforce mobility for global healthcare.",
  sub: "From career counselling through to post-deployment assistance, every step is handled in-house — one source, one standard.",
} as const;

export type Service = {
  n: string;
  slug: string;
  title: string;
  desc: string;
  tags: readonly string[];
  photo: string;
  icon: "stethoscope" | "heart-pulse" | "building" | "graduation" | "plane" | "user-check" | "users";
  audience: "candidates" | "employers" | "both";
};

export const services: readonly Service[] = [
  { n: "01", slug: "doctor-deployment", title: "Doctor Deployment", desc: "Specialised and general physicians placed across a full range of medical fields and care settings.", tags: ["Cardiology", "Surgery", "General Med"], photo: u("photo-1612531386530-97286d97c2d2"), icon: "stethoscope", audience: "employers" },
  { n: "02", slug: "global-nurse-staffing", title: "Global Nurse Staffing", desc: "International nurse recruitment with assessment, competency training and licensing support throughout.", tags: ["ICU", "A&E", "Pediatrics"], photo: u("photo-1582750433449-648ed127bb54"), icon: "heart-pulse", audience: "both" },
  { n: "03", slug: "hospital-clinic-solutions", title: "Hospital & Clinic Solutions", desc: "Comprehensive staffing for healthcare facilities — matched to your standards, ethos and rota needs.", tags: ["NHS Trusts", "Private practice"], photo: u("photo-1551076805-e1869033e561"), icon: "building", audience: "employers" },
  { n: "04", slug: "training-compliance", title: "Training & Compliance", desc: "Clinical competency training and standards assurance, readying candidates for international practice.", tags: ["IELTS / OET", "OSCE", "NCLEX"], photo: u("photo-1576091160550-2173dba999ef"), icon: "graduation", audience: "candidates" },
  { n: "05", slug: "visa-immigration", title: "Visa & Immigration", desc: "Hands-on immigration coordination so your move abroad is smooth, lawful and well-documented.", tags: ["Tier 2", "H-1B", "IRCC"], photo: u("photo-1450101499163-c8848c66ca85"), icon: "plane", audience: "candidates" },
  { n: "06", slug: "candidate-placement", title: "Candidate Placement", desc: "Ethical placement of nurses and medical staff, with end-to-end support and post-deployment care.", tags: ["End-to-end", "Pastoral care"], photo: u("photo-1559839734-2b71ea197ec2"), icon: "user-check", audience: "candidates" },
  { n: "07", slug: "employer-staff-solutions", title: "Employer Staff Solutions", desc: "Employer-relations managers build sustainable pipelines aligned to your clinical workforce plan.", tags: ["Workforce planning", "Pipeline building"], photo: u("photo-1530026405186-ed1f139313f8"), icon: "users", audience: "employers" },
];

export const servicesCta = {
  eyebrow: "Talk to us",
  title: "Looking for talent — or a placement abroad?",
  text: "Tell us a little about your goals. We'll map the right route in your first conversation.",
  button: { label: "Start a conversation", href: "/contact" },
  call: "or call",
} as const;

export const solutionsIntro = {
  eyebrow: "Our solutions",
  title: "Tailored solutions for candidates and employers.",
  sub: "A single-source partner — whether you're a professional seeking your next role abroad, or a healthcare provider building your workforce.",
} as const;

export const solutions = [
  {
    id: "candidates",
    tab: "For candidates",
    n: "01",
    title: "Doctors, nurses & medical staff",
    text: "From your first conversation to your first shift overseas, we guide and support you the whole way — ethically and transparently.",
    bullets: [
      "Candidate placement for nurses & medical staff",
      "Competency training & compliance",
      "Licensing, visa & immigration support",
      "Career counselling & post-deployment care",
    ],
    stats: [
      { value: "850+", label: "Professionals placed" },
      { value: "0£", label: "Candidate fees" },
    ],
    cta: { label: "Apply as a Professional", href: "/apply" },
    photo: u("photo-1594824476967-48c8b964273f"),
  },
  {
    id: "employers",
    tab: "For employers",
    n: "02",
    title: "Hospitals, clinics & care institutions",
    text: "We build sustainable staffing pipelines matched to your standards, ethos and rota needs — sound, compliant and ready to deploy.",
    bullets: [
      "Employer staff solutions & workforce planning",
      "Doctor deployment across medical fields",
      "Global nurse staffing services",
      "Hospital & clinic staffing solutions",
    ],
    stats: [
      { value: "60+", label: "Partner hospitals" },
      { value: "98%", label: "Employer satisfaction" },
    ],
    cta: { label: "Hire with us", href: "/apply?role=employer" },
    photo: u("photo-1551076805-e1869033e561"),
  },
] as const;
