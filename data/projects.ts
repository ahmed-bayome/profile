export type MetaItem = {
  label: string;
  value: string;
};

export type StackItem = {
  cat: string;
  name: string;
  desc: string;
};

export type ChallengeItem = {
  icon: string;
  title: string;
  desc: string;
};

export type Project = {
  slug: string;
  num: string;
  title: string;
  subtitle: string;
  meta: MetaItem[];
  url: string;
  mockupType: 'mobile' | 'web';
  stack: StackItem[];
  challenges: ChallengeItem[];
  tags: string[];
  nextSlug: string;
};

export const projects: Project[] = [
  {
    slug: 'mobile-app',
    num: '// 01',
    title: 'Mobile App\n— iOS & Android',
    subtitle: 'A production mobile application shipped to both the App Store and Google Play. Handles user auth, real-time data sync, push notifications, and offline-first support across both platforms.',
    meta: [
      { label: 'ROLE', value: 'Full-stack Developer' },
      { label: 'YEAR', value: '2024' },
      { label: 'PLATFORM', value: 'iOS & Android' },
      { label: 'STATUS', value: '✓ Live on stores' },
    ],
    url: 'apps.apple.com / play.google.com',
    mockupType: 'mobile',
    tags: ['React Native', 'Expo', 'Firebase'],
    stack: [
      { cat: 'FRAMEWORK', name: 'React Native', desc: 'Cross-platform UI' },
      { cat: 'TOOLING', name: 'Expo', desc: 'Build & OTA updates' },
      { cat: 'BACKEND', name: 'Firebase', desc: 'Auth, Firestore, Storage' },
      { cat: 'STATE', name: 'Zustand', desc: 'Global state management' },
      { cat: 'OFFLINE', name: 'MMKV', desc: 'Fast local storage' },
      { cat: 'DEPLOY', name: 'EAS Build', desc: 'CI/CD for both stores' },
    ],
    challenges: [
      {
        icon: '⚡',
        title: 'Offline-first architecture',
        desc: 'Designed a sync queue that holds mutations locally and replays them once connectivity is restored — no data loss on flaky networks.',
      },
      {
        icon: '🔔',
        title: 'Push notifications cross-platform',
        desc: 'Unified FCM and APNs behind a single Expo Notifications layer, handling permission flows differently per OS.',
      },
      {
        icon: '📦',
        title: 'App store submission',
        desc: "Navigated Apple's review process, certificate management, and provisioning profiles — shipped first submission successfully.",
      },
      {
        icon: '🌍',
        title: 'What I learned',
        desc: 'Native modules behave very differently in dev vs production builds. Testing on real devices early saves hours of debugging later.',
      },
    ],
    nextSlug: 'bilingual-ssr',
  },
  {
    slug: 'bilingual-ssr',
    num: '// 02',
    title: 'Bilingual SSR\nWeb Platform',
    subtitle:
      'A server-side rendered web platform supporting Arabic and English, with full i18n routing, RTL layout switching, and a REST API powering dynamic content.',
    meta: [
      { label: 'ROLE', value: 'Frontend Lead' },
      { label: 'YEAR', value: '2023' },
      { label: 'PLATFORM', value: 'Web' },
      { label: 'STATUS', value: '✓ In production' },
    ],
    url: 'yourplatform.com',
    mockupType: 'web',
    tags: ['Next.js', 'i18n', 'REST API'],
    stack: [
      { cat: 'FRAMEWORK', name: 'Next.js 14', desc: 'SSR & App Router' },
      { cat: 'I18N', name: 'next-intl', desc: 'Routing + translations' },
      { cat: 'STYLING', name: 'Tailwind CSS', desc: 'RTL-aware utility classes' },
      { cat: 'API', name: 'REST / Axios', desc: 'Data fetching layer' },
      { cat: 'CMS', name: 'Sanity.io', desc: 'Bilingual content model' },
      { cat: 'DEPLOY', name: 'Vercel', desc: 'Edge + ISR caching' },
    ],
    challenges: [
      {
        icon: '🔄',
        title: 'RTL layout switching',
        desc: 'Built a seamless direction toggle using CSS logical properties and a custom hook that swaps the HTML dir attribute without a full page reload.',
      },
      {
        icon: '🚀',
        title: 'SSR performance',
        desc: 'Moved expensive data fetching to server components, reducing client JS bundle by 40% and improving LCP across both language variants.',
      },
      {
        icon: '📝',
        title: 'Bilingual CMS content model',
        desc: 'Designed a Sanity schema where every document has parallel Arabic/English fields, enabling editors to manage both languages from one interface.',
      },
      {
        icon: '🌍',
        title: 'What I learned',
        desc: 'RTL is not just mirroring — typography, whitespace, and icon direction all need cultural consideration beyond just flipping a layout.',
      },
    ],
    nextSlug: 'mobile-app',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
