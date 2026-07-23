import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let x = 0,
      y = 0,
      cx = 0,
      cy = 0,
      raf = 0;
    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };
    const tick = () => {
      cx += (x - cx) * 0.12;
      cy += (y - cy) * 0.12;
      if (ref.current) {
        ref.current.style.transform = `translate(${cx - 200}px, ${cy - 200}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden h-[400px] w-[400px] rounded-full opacity-60 mix-blend-screen md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(139,92,246,0.18), rgba(59,130,246,0.08) 40%, transparent 70%)",
      }}
    />
  );
}
