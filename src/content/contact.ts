// Verbatim copy from saverhealthcare.com — apply, contact, newsletter, footer.
// Phone numbers are kept EXACTLY as published (see NOTES.md for format issues).

export const apply = {
  eyebrow: "Apply · Start your journey",
  title: { line1: "Begin your next chapter", line2: "in global healthcare." },
  sub: "Join the doctors and nurses building their futures with Saver — ethical, compliant and high-standard workforce mobility, every step of the way.",
  roles: [
    { id: "doctor", n: "01", label: "I'm a doctor", prompt: "Full credentialing, visa coordination and ethical placement across the UK, US and Canada — handled in-house, end to end." },
    { id: "nurse", n: "02", label: "I'm a nurse", prompt: "Competency training, licensing support and international hospital placement — readying you for NHS & world-class care settings." },
    { id: "employer", n: "03", label: "I'm an employer", prompt: "Sustainable staffing pipelines matched to your standards, ethos and rota needs — compliant, ready to deploy." },
  ],
  button: "Start your application",
  trust: ["No fees for candidates", "Confidential & ethical", "Reply within 1 business day"],
  visual: { since: "Since", year: "2020", mono: "SH", stats: ["850+", "98%", "3"] },
} as const;

export type RoleId = (typeof apply.roles)[number]["id"];

export const contactIntro = {
  eyebrow: "Contact us",
  title: "Three offices, one global team.",
  sub: "Reach our placement specialists wherever you are — we're here to help you take the next step.",
} as const;

export const offices = [
  {
    id: "uk", code: "UK", city: "London", tag: "Headquarters", region: "London, United Kingdom", tz: "Europe/London", short: "LON",
    address: ["Level 30, 122 Leadenhall Street", "London · EC3V 4AB"],
    lines: [
      { label: "Main line", value: "+44 (0)207 247 3939" },
      { label: "Direct", value: "+44 (0)207 375 2141" },
      { label: "Office", value: "0231 056 919" },
    ],
    clockLabel: "Headquarters",
    lat: 51.5136, lng: -0.0814,
  },
  {
    id: "us", code: "US", city: "New York", tag: "Americas", region: "New York, United States", tz: "America/New_York", short: "NYC",
    address: ["228 Park Ave S, PMB 763487", "New York · NY 10003-1502"],
    lines: [{ label: "Main line", value: "+1 (212) 796-5880" }],
    clockLabel: "Americas",
    lat: 40.7368, lng: -73.9883,
  },
  {
    id: "bd", code: "BD", city: "Dhaka", tag: "Talent hub", region: "Dhaka, Bangladesh", tz: "Asia/Dhaka", short: "DHA",
    address: ["House #07, Road #124", "Gulshan-1 · Dhaka–1212"],
    lines: [
      { label: "Main line", value: "+88 0222 3311722" },
      { label: "PABX", value: "+44 207 247 3939" },
    ],
    clockLabel: "Talent hub",
    lat: 23.7806, lng: 90.4193,
  },
] as const;

export const contactForm = {
  eyebrow: "Direct line",
  title: "Let's start the conversation.",
  sub: "Tell us a little about you. We typically reply within one business day.",
  fields: { name: "Full name", email: "Email", phone: "Phone", role: "I am a…", message: "Message" },
  roles: ["Doctor seeking placement", "Nurse seeking placement", "Other medical professional", "Employer / hospital"],
  submit: "Submit Enquiry",
  note: "Your details are sent directly to our placement team.",
} as const;

export const newsletter = {
  eyebrow: "Stay in the loop",
  title: "Ready to advance your career or build your workforce? We're listening.",
  meta: "Newsletter · Monthly · No spam",
} as const;

export const footer = {
  liveLabel: "Live · Across our offices",
  description: "Delivering qualified doctors, nurses and healthcare professionals to hospitals and clinics worldwide. Ethical, compliant, end-to-end.",
  columns: [
    { title: "Services", links: [
      { label: "Doctor Deployment", href: "/services/doctor-deployment" },
      { label: "Nurse Staffing", href: "/services/global-nurse-staffing" },
      { label: "Hospital Solutions", href: "/services/hospital-clinic-solutions" },
      { label: "Visa & Immigration", href: "/services/visa-immigration" },
    ] },
    { title: "Company", links: [
      { label: "About", href: "/about" },
      { label: "Markets", href: "/markets" },
      { label: "Team", href: "/team" },
      { label: "Contact", href: "/contact" },
    ] },
  ],
  getInTouch: "Get in touch",
  // Original social links all point to "#" — placeholders kept until client supplies URLs.
  socials: [
    { label: "LinkedIn", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "WhatsApp", href: "#" },
  ],
  wordmark: "SAVER",
  credit: "© 2026 Saver Health Care Limited · Powered by Horidash Roy · Powered by DigiSurf Agency",
  creditUrl: "https://www.digisurfagency.com",
  tagline: "Ethical · Compliant · High-standard workforce mobility",
} as const;
