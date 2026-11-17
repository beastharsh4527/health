// Verbatim copy from saverhealthcare.com — team + testimonials.
// NOTE: see NOTES.md — team profiles may be theme placeholders; confirm with client.

const u = (id: string) => `https://images.unsplash.com/${id}`;

export const teamIntro = {
  eyebrow: "Our specialists",
  title: "Clinical leadership behind every placement.",
} as const;

export const team = [
  {
    id: "M-01", years: 18, first: "Harrison", last: "Hudson", short: "Plastic Surgeon",
    role: "Plastic Surgeon · Reconstructive",
    bio: "Internationally accredited reconstructive surgeon. Has led cross-border practice across London & New York for nearly two decades — mentoring the next generation of clinicians as he goes.",
    specialties: ["Reconstructive", "Aesthetic", "Burn care"], languages: ["English", "French"], placed: ["London", "New York"],
    credentials: "FRCS · MRCS · GMC", photo: u("photo-1612349317150-e413f6a5b16d"),
  },
  {
    id: "M-02", years: 14, first: "Kirstin", last: "Hagen", short: "Plastic Surgeon",
    role: "Plastic Surgeon · Microsurgery",
    bio: "Pioneering microsurgical and hand-reconstruction practice. Has trained surgical residents across three continents and lectures on pediatric reconstruction.",
    specialties: ["Microsurgery", "Hand surgery", "Pediatric"], languages: ["English", "German", "Swedish"], placed: ["London", "Toronto"],
    credentials: "FRCS (Plast) · MRCS · EBOPRAS", photo: u("photo-1594824476967-48c8b964273f"),
  },
  {
    id: "M-03", years: 20, first: "Laurel", last: "Clark", short: "Cosmetic Surgeon",
    role: "Cosmetic Surgeon · Aesthetic Lead",
    bio: "Globally recognised for aesthetic excellence and a patient-first practice. Speaks regularly at international conferences on facial reconstruction and ethical aesthetic care.",
    specialties: ["Aesthetic", "Facial", "Body contouring"], languages: ["English", "Spanish"], placed: ["New York", "Los Angeles"],
    credentials: "FRCS · ABPS · ISAPS", photo: u("photo-1559839734-2b71ea197ec2"),
  },
  {
    id: "M-04", years: 12, first: "Hakim", last: "Heck", short: "Plastic Surgeon",
    role: "Plastic Surgeon · Trauma & Humanitarian",
    bio: "Bridging clinical innovation with humanitarian medicine. Active in international training programmes — most recently leading trauma reconstruction workshops in Bangladesh.",
    specialties: ["Reconstructive", "Trauma", "Pediatric"], languages: ["English", "Arabic", "French"], placed: ["London", "Dhaka"],
    credentials: "FRCS · MRCS · IRCMR", photo: u("photo-1622253692010-333f2da6031d"),
  },
] as const;

export const testimonialsIntro = {
  eyebrow: "Voices from the field",
  title: "What clinicians & employers say about working with Saver.",
} as const;

// `em` = the phrase the original site emphasises inside each quote.
export const testimonials = [
  { badge: "Placed in NHS", code: "UK", quote: "From licensing to my first shift in London, Saver handled every step. The training prepared me for UK clinical standards and I felt supported the whole way.", em: "supported the whole way", name: "Dr. Anika Rahman", role: "Family Physician · Placed in NHS, London" },
  { badge: "Hiring partner", code: "US", quote: "Saver Health Care has been an exceptional partner in building our nursing workforce. Their candidates arrive ready, trained, and aligned with our standards.", em: "ready, trained, and aligned", name: "Marcus Holloway", role: "HR Director · NY Health Network" },
  { badge: "Placed in Canada", code: "CA", quote: "I never thought I'd practice medicine in Canada. Saver's immigration team made the impossible feel routine. They genuinely care about every clinician.", em: "impossible feel routine", name: "Dr. Samir Patel", role: "Family Physician · Toronto" },
  { badge: "ICU Nurse · UK", code: "UK", quote: "The competency training was rigorous but worth it. Saver's team checked in after every milestone — I never felt like just a number.", em: "after every milestone", name: "Sarah O'Connor", role: "ICU Nurse · Royal London Hospital" },
  { badge: "Cardiologist · US", code: "US", quote: "From Dhaka to Boston in nine months. Credentialing, visa, housing — every step was orchestrated with precision. A truly world-class agency.", em: "orchestrated with precision", name: "Dr. Mei-Lin Chen", role: "Cardiologist · Boston Medical Center" },
] as const;
