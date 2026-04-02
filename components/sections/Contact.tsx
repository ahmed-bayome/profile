import { SectionHeader } from '../common/SectionHeader';
import { supabaseProvider } from '@/lib/supabase';

export const Contact = async () => {
  const contacts = await supabaseProvider.get('contacts');
  return (
    <section id='contact' className='container-x section-y scroll-mt-section'>
      <SectionHeader
        title='contact'
        subtitle="let's connect"
      />
      {/* Contact grid */}
      <div className='flex gap-4 flex-wrap'>
        {contacts.map(({ icon, url, label }) => (
          <a target='blank' className='border border-border hover:border-green  p-3 flex items-center gap-2' key={label} href={url}>
            <img
              src={icon}
              className='h-8'
            />
            <p className='text-sm'>{label}</p>
            {/* create a live red dot */}
          </a>
        ))}
      </div>
    </section>
  );
};
