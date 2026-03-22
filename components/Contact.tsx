import { SectionHeader } from './SectionHeader';
import { get } from '@/utils/api';
import { GetContactsResponse } from '@/types/api/contacts';
import { API_ENDPOINTS } from '@/constants/api';
import { toCamelCase } from '@/utils/objects';

export const getContacts = async () => {
  const data = await get<GetContactsResponse>(API_ENDPOINTS.CONTACTS);
  return data;
};

export const Contact = async () => {
  const data = await getContacts();
  const contacts = toCamelCase(data);
  return (
    <section id='contact' className='container-x section-y border-b border-border'>
      <SectionHeader
        title='contact'
        subtitle="let's connect"
      />
      {/* Contact grid */}
      <div className='flex gap-4'>
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
