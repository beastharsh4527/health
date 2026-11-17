"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { testimonials, testimonialsIntro } from "@/content/people";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 6500;

/** Light carousel — autoplay 6500ms, pauses on hover/drag. Quote emphasis kept from the original. */
export function Testimonials() {
  const [[idx, dir], setState] = useState<[number, number]>([0, 1]);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const t = testimonials[idx];
  const timer = useRef<number | null>(null);

  const go = useCallback((d: number) => {
    setState(([i]) => [(i + d + testimonials.length) % testimonials.length, d]);
  }, []);

  useEffect(() => {
    if (paused || reduce) return;
    timer.current = window.setInterval(() => go(1), AUTOPLAY_MS);
    return () => { if (timer.current) window.clearInterval(timer.current); };
  }, [paused, reduce, go, idx]);

  const renderQuote = () => {
    const i = t.quote.indexOf(t.em);
    if (i === -1) return t.quote;
    return (
      <>
        {t.quote.slice(0, i)}
        <em className="text-brand">{t.em}</em>
        {t.quote.slice(i + t.em.length)}
      </>
    );
  };

  return (
    <section
      className="relative overflow-hidden bg-cream py-24 md:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-x grid gap-14">
        <SectionHeading eyebrow={testimonialsIntro.eyebrow} title={testimonialsIntro.title} />

        <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:gap-20">
          <div className="flex items-center gap-6 lg:flex-col lg:items-start">
            <span className="font-mono text-sm text-moss">
              <span className="text-brand">{String(idx + 1).padStart(2, "0")}</span> / {String(testimonials.length).padStart(2, "0")}
            </span>
            <div className="flex gap-3">
              <button onClick={() => go(-1)} aria-label="Previous testimonial" className="grid h-12 w-12 place-items-center rounded-full border border-ink/15 transition-colors hover:border-brand hover:text-brand"><ArrowLeft className="h-4 w-4" aria-hidden /></button>
              <button onClick={() => go(1)} aria-label="Next testimonial" className="grid h-12 w-12 place-items-center rounded-full border border-ink/15 transition-colors hover:border-brand hover:text-brand"><ArrowRight className="h-4 w-4" aria-hidden /></button>
            </div>
          </div>

          <div className="relative min-h-[18rem]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.figure
                key={idx}
                custom={dir}
                drag={reduce ? false : "x"}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.25}
                onDragStart={() => setPaused(true)}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -70) go(1);
                  else if (info.offset.x > 70) go(-1);
                }}
                initial={{ x: dir * 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: dir * -40, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="grid cursor-grab gap-8 active:cursor-grabbing"
              >
                <div className="flex items-center gap-3">
                  <span className="chip border-brand/40 text-brand">{t.badge}</span>
                  <span className="chip text-ink/60">{t.code}</span>
                </div>
                <blockquote className="max-w-4xl font-display text-2xl leading-[1.3] font-light md:text-4xl">
                  <span aria-hidden className="mr-2 text-gold">&ldquo;</span>
                  {renderQuote()}
                </blockquote>
                <figcaption className="flex items-center gap-4">
                  <span aria-hidden className="h-px w-10 bg-gold" />
                  <div>
                    <p className="font-medium">{t.name}</p>
                    <p className="text-sm text-moss">{t.role}</p>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex gap-2" role="tablist" aria-label="Testimonials">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={idx === i}
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => setState([i, i > idx ? 1 : -1])}
              className={cn("h-1.5 rounded-full transition-all duration-500", idx === i ? "w-10 bg-brand" : "w-4 bg-ink/15 hover:bg-ink/30")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
