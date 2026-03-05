"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { testimonials } from "@/lib/content";

/**
 * Mobile testimonial section — simple card carousel (auto-rotate).
 * Lightweight: no GSAP, no parallax. Pure CSS transition + interval.
 */
export default function MobileTestimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((p) => (p + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[active];

  return (
    <section id="testimonials" className="bg-background py-14 px-5">
      <h2 className="text-2xl font-display font-semibold text-foreground">
        Ce que nos utilisateurs racontent
      </h2>

      {/* Card */}
      <div className="mt-8 relative rounded-2xl bg-primary/5 p-6 min-h-65">
        {/* Quote */}
        <p className="text-base leading-7 text-muted-foreground italic">
          &ldquo;{t.quote}&rdquo;
        </p>

        {/* Author */}
        <div className="mt-6 flex items-center gap-3">
          <Image
            src={t.image}
            alt={t.name}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-foreground">{t.name}</p>
            <p className="text-xs text-muted-foreground">{t.role}</p>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="mt-5 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"
            }`}
            aria-label={`Témoignage ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
