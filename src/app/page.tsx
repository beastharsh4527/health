import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Solutions } from "@/components/sections/Solutions";
import { Philosophy } from "@/components/sections/Philosophy";
import { Specialties } from "@/components/sections/Specialties";
import { Markets } from "@/components/sections/Markets";
import { Process } from "@/components/sections/Process";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { Apply } from "@/components/sections/Apply";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <About />
      <Services />
      <Solutions />
      <Philosophy />
      <Specialties />
      <Markets />
      <Process />
      <Team />
      <Testimonials />
      <Apply />
      <Contact />
    </>
  );
}
