import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Contact } from "@/components/sections/Contact";
import { contactIntro } from "@/content/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: contactIntro.sub,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={contactIntro.eyebrow}
        title={<>Three offices, one <em className="text-brand">global team</em>.</>}
        sub={contactIntro.sub}
        crumbs={[{ label: "Contact" }]}
      />
      <Contact />
    </>
  );
}
