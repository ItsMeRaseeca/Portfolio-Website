import { useEffect, useRef } from 'react';

/**
 * HeroWave — full-screen animated canvas background.
 * Colour palette tuned to match the deep-purple / violet / indigo
 * aesthetic from the design inspiration images.
 *
 * Palette target:
 *   Background deep: #06000F  (near-black purple)
 *   Wave mid tone:   #1a0533  (dark violet)
 *   Accent bright:   #7c3aed  (vivid violet)
 *   Accent glow:     #a855f7  (purple)
 *   Blue tint:       #4f46e5  (indigo)
 */
const HeroWave = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width, height, imageData, data;
    const SCALE = 2; // render at half res, upscale for perf

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      width = Math.floor(canvas.width / SCALE);
      height = Math.floor(canvas.height / SCALE);
      imageData = ctx.createImageData(width, height);
      data = imageData.data;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const startTime = Date.now();

    // Lookup tables for performance
    const SIN_TABLE = new Float32Array(1024);
    const COS_TABLE = new Float32Array(1024);
    for (let i = 0; i < 1024; i++) {
      const angle = (i / 1024) * Math.PI * 2;
      SIN_TABLE[i] = Math.sin(angle);
      COS_TABLE[i] = Math.cos(angle);
    }

    const fastSin = (x) => {
      const raw = ((x % (Math.PI * 2)) / (Math.PI * 2)) * 1024;
      const index = (Math.floor(raw) + 1024) & 1023;
      return SIN_TABLE[index];
    };

    const fastCos = (x) => {
      const raw = ((x % (Math.PI * 2)) / (Math.PI * 2)) * 1024;
      const index = (Math.floor(raw) + 1024) & 1023;
      return COS_TABLE[index];
    };

    let animationId;

    const render = () => {
      const time = (Date.now() - startTime) * 0.001;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const u_x = (2 * x - width) / height;
          const u_y = (2 * y - height) / height;

          let a = 0;
          let d = 0;

          for (let i = 0; i < 4; i++) {
            a += fastCos(i - d + time * 0.5 - a * u_x);
            d += fastSin(i * u_y + a);
          }

          const wave = (fastSin(a) + fastCos(d)) * 0.5;
          // intensity range 0.25–0.65 — slightly brighter than default
          const intensity = 0.25 + 0.4 * wave;

          // Deep violet base — maps to ~#06000F at low, ~#1a0533 at high
          const baseVal = 0.04 + 0.12 * fastCos(u_x + u_y + time * 0.3);

          // Violet / purple accent (dominant)
          const violetAccent = 0.28 * fastSin(a * 1.5 + time * 0.18);
          // Indigo / blue accent (secondary)
          const indigoAccent = 0.18 * fastCos(d * 2 + time * 0.1);
          // Subtle pink rim
          const pinkRim = 0.08 * fastSin(a * 0.8 - time * 0.12);

          // RGB mapped to deep purple palette:
          //   R: violet contribution + tiny pink
          //   G: almost nothing (keeps it dark)
          //   B: indigo + violet blend
          const r = Math.max(0, Math.min(1, baseVal + violetAccent * 0.55 + pinkRim)) * intensity;
          const g = Math.max(0, Math.min(1, baseVal * 0.4 + indigoAccent * 0.15)) * intensity;
          const b = Math.max(0, Math.min(1, baseVal + indigoAccent * 1.1 + violetAccent * 0.65)) * intensity;

          const idx = (y * width + x) * 4;
          data[idx]     = r * 255;
          data[idx + 1] = g * 255;
          data[idx + 2] = b * 255;
          data[idx + 3] = 255;
        }
      }

      ctx.putImageData(imageData, 0, 0);

      // Upscale the low-res buffer to fill the canvas
      if (SCALE > 1) {
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'low';
        ctx.drawImage(canvas, 0, 0, width, height, 0, 0, canvas.width, canvas.height);
      }

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
};

export default HeroWave;
