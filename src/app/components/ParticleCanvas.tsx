import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseVx: number;
  baseVy: number;
  size: number;
  opacity: number;
}

// ── Dark green to match the accent text (#059669) ───────────
const DOT_COLOR = '5, 150, 105'; // rgb of #059669

const PARTICLE_OPACITY = 0.5;
const ATTRACT_RADIUS = 250;
const ATTRACT_STRENGTH = 3.2;
const PARTICLE_DENSITY = 1800;  // lower = more particles
const MAX_PARTICLES = 900;
const GLOW_BLUR = 6;

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animId: number;

    const mouse = { x: null as number | null, y: null as number | null };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseout', onMouseOut);

    // ── Initialise particles ──────────────────────────────
    const init = () => {
      particles = [];
      const count = Math.min(
        (canvas.width * canvas.height) / PARTICLE_DENSITY,
        MAX_PARTICLES,
      );
      for (let i = 0; i < count; i++) {
        const speed = Math.random() * 0.5 + 0.1;
        const angle = Math.random() * Math.PI * 2;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          baseVx: Math.cos(angle) * speed,
          baseVy: Math.sin(angle) * speed,
          size: Math.random() * 2.2 + 0.6,
          opacity: PARTICLE_OPACITY * (0.5 + Math.random() * 0.5),
        });
      }
    };

    // ── Draw a single dot ─────────────────────────────────
    const drawDot = (p: Particle) => {
      ctx.shadowColor = `rgba(${DOT_COLOR}, 0.8)`;
      ctx.shadowBlur = GLOW_BLUR;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${DOT_COLOR}, ${p.opacity})`;
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    // ── Update position + gravity ─────────────────────────
    const updateParticle = (p: Particle) => {
      // Bounce off edges
      if (p.x > canvas.width || p.x < 0) p.vx = -p.vx;
      if (p.y > canvas.height || p.y < 0) p.vy = -p.vy;

      // Attract toward cursor
      if (mouse.x != null && mouse.y != null) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < ATTRACT_RADIUS && dist > 0) {
          const force =
            ((ATTRACT_RADIUS - dist) / ATTRACT_RADIUS) * ATTRACT_STRENGTH;
          p.vx += (dx / dist) * force * 0.02;
          p.vy += (dy / dist) * force * 0.02;
        }
      }

      // Dampen so they don't fly off
      p.vx *= 0.98;
      p.vy *= 0.98;

      // Ensure minimum drift
      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (speed < 0.08) {
        p.vx = p.baseVx;
        p.vy = p.baseVy;
      }

      p.x += p.vx;
      p.y += p.vy;

      // Clamp inside canvas
      p.x = Math.max(0, Math.min(canvas.width, p.x));
      p.y = Math.max(0, Math.min(canvas.height, p.y));

      drawDot(p);
    };

    // ── Animation loop ────────────────────────────────────
    const animate = () => {
      animId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        updateParticle(particles[i]);
      }
    };

    // ── Resize handler ────────────────────────────────────
    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
    animate();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseout', onMouseOut);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        background: '#0B0B0B',
      }}
    />
  );
}
