const contacts = [
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
  <section id='contact' className='px-12 py-[60px] border-b border-border'>
    {/* Section header */}
    <div className='flex items-center gap-4 mb-10'>
      <span className='font-syne text-[22px] font-bold'>
        <span className='text-green'>./</span>contact
      </span>
      <div className='flex-1 h-px bg-border' />
      <span className='text-muted text-[11px]'>{"let's connect"}</span>
    </div>

    {/* Contact grid */}
    <div className='grid grid-cols-2 gap-px bg-border'>
      {contacts.map(({ icon, label, value, href }) => (
        <div
          key={label}
          className='bg-bg px-8 py-7 flex items-center gap-4 transition-colors hover:bg-hover'
        >
          <span className='text-green text-base w-5 text-center shrink-0'>{icon}</span>
          <div>
            <div className='text-muted text-[11px] mb-1'>{label}</div>
            <a
              href={href}
              className='text-text text-[13px] no-underline transition-colors hover:text-green'
            >
              {value}
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);
