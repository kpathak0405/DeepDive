import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

const DOT_COLOR = '5, 150, 105'; // #059669
const PARTICLE_DENSITY = 3500;
const MAX_PARTICLES = 600;

export function HomeParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animId: number;

    const init = () => {
      particles = [];
      const count = Math.min((canvas.width * canvas.height) / PARTICLE_DENSITY, MAX_PARTICLES);
      for (let i = 0; i < count; i++) {
        const speed = Math.random() * 0.4 + 0.1;
        const angle = Math.random() * Math.PI * 2;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 2.5 + 1.5,
          opacity: 0.15 + Math.random() * 0.2, // 15% to 35% opacity — subtle
        });
      }
    };

    const drawDot = (p: Particle) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${DOT_COLOR}, ${p.opacity})`;
      ctx.fill();
    };

    const updateParticle = (p: Particle) => {
      if (p.x > canvas.width || p.x < 0) p.vx = -p.vx;
      if (p.y > canvas.height || p.y < 0) p.vy = -p.vy;

      p.x += p.vx;
      p.y += p.vy;

      drawDot(p);
    };

    const animate = () => {
      animId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        updateParticle(particles[i]);
      }
    };

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
      }}
    />
  );
}
