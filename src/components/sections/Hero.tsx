"use client";

import { Check, Mail, Phone } from "lucide-react";
import { useRef } from "react";
import { hero } from "@/content/home";
import { site, tel } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Globe } from "@/components/globe/Globe";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

/** Light hero (client feedback). One gentle entrance timeline; globe card stays deep green as the accent. */
export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const tl = gsap.timeline({ delay: 0.1 });
      tl.from(".hero-h1", { y: 40, duration: 1.1, ease: "expo.out" }, 0)
        .from(".hero-stagger", { y: 24, autoAlpha: 0, duration: 0.9, stagger: 0.08, ease: "expo.out" }, 0.2)
        .from(".hero-visual", { y: 30, autoAlpha: 0, duration: 1, ease: "expo.out" }, 0.3);
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-paper text-ink">
      <div aria-hidden className="pointer-events-none absolute -top-48 -left-32 h-[42rem] w-[42rem] rounded-full bg-mint-soft/40 blur-[160px]" />
      <div aria-hidden className="pointer-events-none absolute -right-40 bottom-0 h-[34rem] w-[34rem] rounded-full bg-gold-soft/30 blur-[140px]" />

      <div className="container-x relative z-[2] grid gap-12 pt-40 pb-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-6 lg:pt-44 lg:pb-24">
        <div className="grid max-w-2xl content-center gap-7">
          <div className="hero-stagger flex items-center gap-3 self-start rounded-full border border-ink/10 bg-white py-2 pr-5 pl-3 shadow-sm">
            <span className="pulse-dot h-2 w-2 rounded-full bg-brand" aria-hidden />
            <span className="font-mono text-[0.68rem] tracking-[0.2em] text-moss uppercase">{hero.pill.label}</span>
            <span className="text-sm"><em className="font-display text-brand not-italic">{hero.pill.value}</em> {hero.pill.text}</span>
          </div>

          <span className="hero-stagger eyebrow text-brand">{hero.eyebrow}</span>

          <div className="overflow-hidden">
            <h1 className="hero-h1 display-xl">
              {hero.title.before} <em className="text-brand">{hero.title.em}</em> {hero.title.after}
            </h1>
          </div>

          <p className="hero-stagger max-w-xl text-lg leading-relaxed text-moss">{hero.lede}</p>

          <div className="hero-stagger flex flex-wrap items-center gap-4">
            <ButtonLink href={hero.primary.href} variant="primary" size="lg">{hero.primary.label}</ButtonLink>
            <ButtonLink href={hero.secondary.href} variant="ghost" size="lg">{hero.secondary.label}</ButtonLink>
          </div>

          <ul className="hero-stagger grid gap-2.5 pt-2">
            {hero.points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-[0.95rem] text-ink/80">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-brand/12 text-brand"><Check className="h-3 w-3" aria-hidden /></span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="hero-visual relative aspect-square max-h-[560px] w-full overflow-hidden rounded-[32px] border border-ink/10 bg-ink shadow-xl">
            <Globe />
            <span className="absolute top-5 left-5 chip border-white/25 text-paper/90">{hero.sticker.top} · {hero.sticker.bottom}</span>
          </div>

          <div className="hero-stagger absolute right-4 -bottom-6 left-4 grid gap-3 rounded-2xl border border-ink/10 bg-white p-5 shadow-lg md:-bottom-8 md:left-auto md:w-[21rem]">
            <span className="font-mono text-[0.65rem] tracking-[0.22em] text-brand uppercase">{hero.card.tag}</span>
            <p className="font-display text-xl leading-snug">{hero.card.title}</p>
            <div className="grid gap-2 text-sm">
              <a href={tel(site.phoneUk)} className="flex items-center justify-between gap-2 hover:text-brand">
                <span className="flex items-center gap-2 text-moss"><Phone className="h-3.5 w-3.5" aria-hidden />{hero.card.ukLabel}</span>
                {site.phoneUk}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center justify-between gap-2 hover:text-brand">
                <span className="flex items-center gap-2 text-moss"><Mail className="h-3.5 w-3.5" aria-hidden />{hero.card.emailLabel}</span>
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
