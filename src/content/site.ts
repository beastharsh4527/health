// Source: https://saverhealthcare.com/ — copied verbatim (Nov 2026). Do not edit copy here without client sign-off.

export const site = {
  name: "Saver Health Care Limited",
  shortName: "Saver",
  logoAlt: "Saver — Health for Everyone",
  logo: "https://saverhealthcare.com/assets/saver-logo.png",
  logoFooter: "https://saverhealthcare.com/assets/saver-logo-footer.png",
  url: "https://saverhealthcare.com",
  title: "Saver Health Care Limited — Global Healthcare Staffing & Medical Recruitment",
  description:
    "Saver Health Care Limited delivers qualified doctors, nurses and healthcare professionals to hospitals and clinics across the UK, US and Canada. Ethical, compliant, end-to-end workforce mobility.",
  email: "info@saverhealthcare.com",
  phoneUk: "+44 (0)207 247 3939",
  phoneUs: "+1 (212) 796-5880",
  twitter: "@saverhealthcare",
  locations: "London · New York · Dhaka",
  support: "24/7 Placement Support",
  founded: 2020,
} as const;

export const nav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Specialties", href: "/specialties" },
  { label: "Markets", href: "/markets" },
  { label: "Process", href: "/process" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
] as const;

export const applyCta = { label: "Apply Now", href: "/apply" } as const;

/** tel: href from a display number — keeps the display string verbatim. */
export const tel = (display: string) => "tel:" + display.replace(/\(0\)/g, "").replace(/[^\d+]/g, "");
