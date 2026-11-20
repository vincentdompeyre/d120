import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

type AnimatedNumberProps = {
  value: number;
  duration?: number;
};

export function AnimatedNumber({ value, duration = 1400 }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  // La valeur finale est dans le HTML pré-rendu (lue par les robots) ; l'animation repart de 0 côté navigateur.
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!reduce) setDisplay(0);
  }, [reduce]);

  useEffect(() => {
    if (!inView || reduce) return;
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(value * easeOutExpo(progress)));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, value, duration]);

  return <span ref={ref}>{display.toLocaleString("fr-FR")}</span>;
}
