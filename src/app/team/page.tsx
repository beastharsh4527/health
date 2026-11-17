import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { teamIntro } from "@/content/people";

export const metadata: Metadata = {
  title: "Team",
  description: teamIntro.title,
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow={teamIntro.eyebrow}
        title={<>Clinical <em className="text-brand">leadership</em> behind every placement.</>}
        crumbs={[{ label: "Team" }]}
      />
      <Team />
      <Testimonials />
    </>
  );
}
