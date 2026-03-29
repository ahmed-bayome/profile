'use client';

import { useEffect, useRef } from 'react';

type StepType =
  | { type: 'cmd'; prompt?: string; text: string; delay: number; }
  | { type: 'out'; text: string; delay: number; status?: 'ok' | 'warn' | 'done' | null; }
  | { type: 'bar'; delay: number; }
  | { type: 'cursor'; delay: number; };

type TerminalLoaderProps = {
  title?: string;
  steps?: StepType[];
};

const defaultSteps: StepType[] = [
  { type: 'cmd', prompt: '~$', text: 'node portfolio.js', delay: 300 },
  { type: 'out', text: 'initializing environment...', delay: 700, status: null },
  { type: 'cmd', prompt: '→', text: 'loading components', delay: 1100 },
  { type: 'bar', delay: 1300 },
  { type: 'out', text: 'compiling routes', delay: 2600, status: 'ok' },
  { type: 'out', text: 'fetching project data', delay: 3000, status: 'ok' },
  { type: 'out', text: 'hydrating client', delay: 3400, status: 'warn' },
  { type: 'out', text: 'building static assets', delay: 4200, status: 'ok' },
  { type: 'cmd', prompt: '→', text: 'starting dev server', delay: 4700 },
  { type: 'out', text: 'ready on localhost:3000', delay: 5100, status: 'done' },
  { type: 'cursor', delay: 5500 },
];

export const TerminalLoader = ({
  title = 'ahmed_bayome — portfolio',
  steps = defaultSteps,
}: TerminalLoaderProps) => {
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const body = bodyRef.current;
    if (!body) return;

    const timeouts: ReturnType<typeof setTimeout>[] = [];

    // find the last step delay to know when we're done
    const lastDelay = Math.max(...steps.map((s) => s.delay));

    steps.forEach((step) => {
      const t = setTimeout(() => {
        if (!body) return;

        if (step.type === 'cmd') {
          const el = document.createElement('div');
          el.className = 'flex items-center gap-2 text-xs';
          el.innerHTML = `
            <span class="text-green shrink-0">${step.prompt ?? '~$'}</span>
            <span class="text-text">${step.text}</span>
          `;
          body.appendChild(el);

        } else if (step.type === 'out') {
          const statusMap = {
            ok: '<span class="text-green text-[10px] ml-auto shrink-0">✓ done</span>',
            warn: '<span class="text-red-400 text-[10px] ml-auto shrink-0">⚠ warn</span>',
            done: '<span class="text-green text-[10px] font-bold ml-auto shrink-0">✓ ready</span>',
          };
          const statusHtml = step.status ? statusMap[step.status] ?? '' : '';
          const el = document.createElement('div');
          el.className = 'flex items-center gap-2 text-xs';
          el.innerHTML = `
            <span class="text-border ml-4 shrink-0">›</span>
            <span class="text-muted">${step.text}</span>
            ${statusHtml}
          `;
          body.appendChild(el);

        } else if (step.type === 'bar') {
          const el = document.createElement('div');
          el.className = 'flex items-center gap-3 text-[10px] ml-4';
          el.innerHTML = `
            <span class="text-muted">loading</span>
            <div class="flex-1 h-px bg-border relative overflow-hidden">
              <div id="bar-fill" class="absolute left-0 top-0 h-full bg-green transition-all duration-75" style="width:0%"></div>
            </div>
            <span class="text-green min-w-8 text-right" id="bar-pct">0%</span>
          `;
          body.appendChild(el);

          const fill = el.querySelector<HTMLDivElement>('#bar-fill');
          const pct = el.querySelector<HTMLSpanElement>('#bar-pct');
          let current = 0;

          const interval = setInterval(() => {
            current += Math.floor(Math.random() * 8 + 4);
            if (current >= 100) { current = 100; clearInterval(interval); }
            if (fill) fill.style.width = `${current}%`;
            if (pct) pct.textContent = `${current}%`;
          }, 80);

        } else if (step.type === 'cursor') {
          const el = document.createElement('div');
          el.className = 'flex items-center gap-2 text-xs';
          el.innerHTML = `
            <span class="text-green">~$</span>
            <div class="w-2 h-3.5 bg-green animate-[blink_1s_step-end_infinite]"></div>
          `;
          body.appendChild(el);
        }

        body.scrollTop = body.scrollHeight;
      }, step.delay);

      timeouts.push(t);
    });

    // trigger done after last step + small buffer
    return () => timeouts.forEach(clearTimeout);
  }, [steps]);

  return (
    <div className='scrollbar-none bg-surface border border-border flex flex-col'>
      <div className='flex items-center gap-1.5 px-3 py-2 bg-bg-2 border-b border-border'>
        <div className='w-2.5 h-2.5 rounded-full bg-[#ff5f57]' />
        <div className='w-2.5 h-2.5 rounded-full bg-[#febc2e]' />
        <div className='w-2.5 h-2.5 rounded-full bg-[#28c840]' />
        <span className='text-[10px] text-muted ml-2 tracking-wide'>{title}</span>
      </div>
      <div
        ref={bodyRef}
        className='overflow-y-auto [&::-webkit-scrollbar]:hidden p-5 flex flex-col gap-1.5 aspect-square h-75'
      />
    </div>
  );
};
