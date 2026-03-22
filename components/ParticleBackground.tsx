'use client';

import { useEffect, useRef } from 'react';

const GREENS = ['#4ade80', '#22c55e', '#86efac', '#16a34a'];
const CHARS = ['<', '/>', '{', '}', '//', '=', '()', '[]', '&&', '!=', '++', '01', '10'];

type ParticleType = {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  color: string;
  type: 'char' | 'dot';
  char: string;
  fontSize: number;
  vx: number;
  vy: number;
};

const createParticle = (W: number, H: number, init: boolean): ParticleType => {
  return {
    x: Math.random() * W,
    y: init ? Math.random() * H : H + 20,
    size: Math.random() * 2 + 0.5,
    speedY: -(Math.random() * 0.6 + 0.2),
    speedX: (Math.random() - 0.5) * 0.3,
    opacity: Math.random() * 0.5 + 0.1,
    color: GREENS[Math.floor(Math.random() * GREENS.length)],
    type: Math.random() > 0.7 ? 'char' : 'dot',
    char: CHARS[Math.floor(Math.random() * CHARS.length)],
    fontSize: Math.floor(Math.random() * 8 + 8),
    vx: 0,
    vy: 0,
  };
};

export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let particles: ParticleType[] = [];
    const mouse = { x: -999, y: -999 };
    let animId: number;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };

    const init = () => {
      particles = [];
      for (let i = 0; i < 120; i++) particles.push(createParticle(W, H, true));
    };

    const onResize = () => {
      resize();
      init();
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      mouse.x = -999;
      mouse.y = -999;
    };

    const updateParticle = (p: ParticleType) => {
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const repel = 120;
      if (dist < repel && dist > 0) {
        const force = (repel - dist) / repel;
        p.vx += (dx / dist) * force * 3;
        p.vy += (dy / dist) * force * 3;
      }
      p.vx *= 0.88;
      p.vy *= 0.88;
      p.x += p.speedX + p.vx;
      p.y += p.speedY + p.vy;
      if (p.y < -20 || p.x < -40 || p.x > W + 40) {
        const fresh = createParticle(W, H, false);
        Object.assign(p, fresh);
      }
    };

    const drawParticle = (p: ParticleType) => {
      ctx.globalAlpha = p.opacity;
      if (p.type === 'char') {
        ctx.fillStyle = p.color;
        ctx.font = `${p.fontSize}px 'JetBrains Mono', monospace`;
        ctx.fillText(p.char, p.x, p.y);
      } else {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = '#1a1a1a';
      ctx.fillRect(0, 0, W, H);

      for (const p of particles) {
        updateParticle(p);
        drawParticle(p);
      }

      // Proximity lines
      ctx.strokeStyle = '#4ade8022';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 80) {
            ctx.globalAlpha = (1 - d / 80) * 0.25;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      animId = requestAnimationFrame(loop);
    };

    resize();
    init();
    loop();

    window.addEventListener('resize', onResize);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className='absolute inset-0 w-full h-full z-0'
    />
  );
};
