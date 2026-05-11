"use client";

import { useEffect, useRef, useCallback } from "react";
import { useTheme } from "@/components/theme-provider";

/**
 * Interactive dot grid background — inspired by Linear's website.
 * Dots glow and ripple near the cursor position. Performant via Canvas.
 */
export function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef<number>(0);
  const { theme } = useTheme();

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const gap = 40;
    const radius = 1.2;
    const mouseRadius = 180;
    const { x: mx, y: my } = mouseRef.current;

    const isDark = theme === "dark";
    const baseAlpha = isDark ? 0.08 : 0.06;
    const hoverAlpha = isDark ? 0.5 : 0.35;
    const baseColor = isDark ? "255,92,0" : "255,92,0"; // primary orange

    for (let x = gap; x < w; x += gap) {
      for (let y = gap; y < h; y += gap) {
        const dx = x - mx;
        const dy = y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let alpha = baseAlpha;
        let r = radius;

        if (dist < mouseRadius) {
          const proximity = 1 - dist / mouseRadius;
          const eased = proximity * proximity; // quadratic ease
          alpha = baseAlpha + (hoverAlpha - baseAlpha) * eased;
          r = radius + 1.5 * eased;
        }

        ctx.beginPath();
        ctx.arc(x * dpr, y * dpr, r * dpr, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${baseColor},${alpha})`;
        ctx.fill();
      }
    }

    rafRef.current = requestAnimationFrame(draw);
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouse);

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(rafRef.current);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}

/**
 * Ambient gradient glow — slowly moving color blobs behind the hero.
 * Pure CSS + Framer Motion, no canvas needed.
 */
export function AmbientGlow() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Primary orange glow — top right */}
      <div
        className="absolute -top-[30%] -right-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full animate-glow-drift"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(255,92,0,0.08) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(255,92,0,0.05) 0%, transparent 70%)",
        }}
      />
      {/* Secondary cool glow — bottom left */}
      <div
        className="absolute -bottom-[20%] -left-[15%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full animate-glow-drift-reverse"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
