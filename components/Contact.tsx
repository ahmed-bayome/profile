import { SectionHeader } from "./SectionHeader";

type Contact = {
  icon: string;
  label: string;
  value: string;
  href: string;
};

const contacts: Contact[] = [
  {
    icon: '@',
    label: 'EMAIL',
    value: 'ahmed@example.com',
    href: 'mailto:ahmed@example.com',
  },
  {
    icon: 'in',
    label: 'LINKEDIN',
    value: 'linkedin.com/in/ahmedbayome',
    href: 'https://linkedin.com/in/ahmedbayome',
  },
  {
    icon: '{}',
    label: 'GITHUB',
    value: 'github.com/ahmedbayome',
    href: 'https://github.com/ahmedbayome',
  },
  {
    icon: '↗',
    label: 'RESUME',
    value: 'Download PDF',
    href: '#',
  },
];

export const Contact = () => (
  <section id='contact' className='container-x section-y border-b border-border'>
    <SectionHeader
      title='contact'
      subtitle="let's connect"
    />
    {/* Contact grid */}
    <div className='grid grid-cols-2 gap-px bg-border'>
      {contacts.map(({ icon, label, value, href }) => (
        <div
          key={label}
          className='bg-bg px-8 py-7 flex items-center gap-4 transition-colors hover:bg-hover'
        >
          <span className='text-green text-base w-5 text-center shrink-0'>{icon}</span>
          <div>
            <div className='text-muted text-2xs mb-1'>{label}</div>
            <a
              href={href}
              className='text-text text-sm no-underline transition-colors hover:text-green'
            >
              {value}
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);
