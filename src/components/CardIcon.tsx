import type { ReactNode } from 'react';

type IconName = 'frontend' | 'enterprise' | 'integration' | 'ai' | 'delivery' | 'stack' | 'award' | 'certificate' | 'publication' | 'languages';

const artwork: Record<IconName, ReactNode> = {
  frontend: <><rect x="5" y="7" width="38" height="32" rx="4" /><path d="M5 16h38M11 12h1m5 0h1m5 0h1M19 23l-5 5 5 5m10-10 5 5-5 5" /></>,
  enterprise: <><rect x="13" y="5" width="22" height="37" rx="3" /><path d="M19 12h3m4 0h3m-10 7h3m4 0h3m-10 7h3m4 0h3M21 42v-9h6v9M6 42h36" /></>,
  integration: <><rect x="4" y="17" width="12" height="14" rx="3" /><rect x="32" y="17" width="12" height="14" rx="3" /><path d="M16 21h16m-5-5 5 5-5 5M32 28H16m5-5-5 5 5 5" /></>,
  ai: <><rect x="13" y="13" width="22" height="22" rx="5" /><path d="M19 13V6m10 7V6M19 42v-7m10 7v-7M13 19H6m7 10H6m36-10h-7m7 10h-7" /><circle cx="24" cy="24" r="5" /></>,
  delivery: <><circle cx="12" cy="10" r="4" /><circle cx="12" cy="38" r="4" /><circle cx="36" cy="14" r="4" /><path d="M12 14v20m4-5h8c8 0 12-4 12-11M29 29l-5-5m5 5-5 5" /></>,
  stack: <><path d="m24 5 19 10-19 10L5 15 24 5Zm-19 20 19 10 19-10M5 35l19 10 19-10" /></>,
  award: <><path d="M15 7h18v12c0 7-4 11-9 11s-9-4-9-11V7Zm0 4H7v6c0 6 4 9 10 9m16-15h8v6c0 6-4 9-10 9M24 30v10m-9 2h18" /></>,
  certificate: <><path d="M27 39H8V6h32v20M15 14h18m-18 7h12" /><circle cx="34" cy="32" r="7" /><path d="m29 37-2 8 7-3 7 3-2-8" /></>,
  publication: <><path d="M24 12c-5-4-12-5-19-3v29c7-2 14-1 19 3 5-4 12-5 19-3V9c-7-2-14-1-19 3Zm0 0v29M11 17l7 2m-7 5 7 2m12-7 7-2m-7 9 7-2" /></>,
  languages: <><path d="M5 7h27v21H16l-8 7v-7H5V7Zm27 10h11v22h-6l-7 5v-5H20v-7" /><path d="M12 14h13m-7-3v3m-3 0c0 6 4 10 9 11m0-11c-1 5-5 9-11 11" /></>,
};

const skillIcons: Record<string, IconName> = {
  Frontend: 'frontend',
  'Enterprise apps': 'enterprise',
  'API & integration': 'integration',
  'AI & prototyping': 'ai',
  'Delivery & collaboration': 'delivery',
  'Core stack': 'stack',
};

export function CardIcon({ name }: { name: IconName }) {
  return (
    <span className={`card-icon card-icon-${name}`} aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable="false">
        {artwork[name]}
      </svg>
    </span>
  );
}

export function SkillIcon({ title }: { title: string }) {
  return <CardIcon name={skillIcons[title] ?? 'stack'} />;
}
