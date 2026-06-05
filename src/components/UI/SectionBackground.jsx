import { useEffect, useRef } from 'react';

/**
 * PageWaveBackground — unified full-page animated wave canvas.
 *
 * Same algorithm as HeroWave, fixed position so it covers the hero
 * AND every section below. The hero's local HeroWave is no longer needed.
 *
 * Colour palette: deep purple-black base (#06000F) with violet (#7c3aed)
 * and indigo (#4f46e5) wave accents — matches the design inspiration images.
 */
export default function PageWaveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const SCALE = 2; // Same as HeroWave — crisp but fast via upscale
    let width, height, imageData, data;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      width = Math.floor(canvas.width / SCALE);
      height = Math.floor(canvas.height / SCALE);
      imageData = ctx.createImageData(width, height);
      data = imageData.data;
    };

    window.addEventListener('resize', resize);
    resize();

    const startTime = Date.now();

    // Pre-baked trig lookup tables for performance
    const SIN_TABLE = new Float32Array(1024);
    const COS_TABLE = new Float32Array(1024);
    for (let i = 0; i < 1024; i++) {
      const angle = (i / 1024) * Math.PI * 2;
      SIN_TABLE[i] = Math.sin(angle);
      COS_TABLE[i] = Math.cos(angle);
    }

    const fastSin = (x) => {
      const raw = ((x % (Math.PI * 2)) / (Math.PI * 2)) * 1024;
      return SIN_TABLE[(Math.floor(raw) + 1024) & 1023];
    };

    const fastCos = (x) => {
      const raw = ((x % (Math.PI * 2)) / (Math.PI * 2)) * 1024;
      return COS_TABLE[(Math.floor(raw) + 1024) & 1023];
    };

    let animId;

    const render = () => {
      const time = (Date.now() - startTime) * 0.001;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const u_x = (2 * x - width) / height;
          const u_y = (2 * y - height) / height;

          // 4 iterations — same depth as HeroWave
          let a = 0;
          let d = 0;
          for (let i = 0; i < 4; i++) {
            a += fastCos(i - d + time * 0.5 - a * u_x);
            d += fastSin(i * u_y + a);
          }

          const wave = (fastSin(a) + fastCos(d)) * 0.5;
          // Intensity range same as HeroWave: 0.25–0.65
          const intensity = 0.25 + 0.4 * wave;

          // Deep violet base
          const baseVal = 0.04 + 0.12 * fastCos(u_x + u_y + time * 0.3);
          const violetAccent = 0.28 * fastSin(a * 1.5 + time * 0.18);
          const indigoAccent = 0.18 * fastCos(d * 2 + time * 0.1);
          const pinkRim = 0.08 * fastSin(a * 0.8 - time * 0.12);

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
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'low';
      ctx.drawImage(canvas, 0, 0, width, height, 0, 0, canvas.width, canvas.height);

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
