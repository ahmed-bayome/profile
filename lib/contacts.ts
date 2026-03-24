import { supabase } from '@/lib/supabase';
import { GetContactsResponse } from '@/types/api/contacts';

export const getContacts = async (): Promise<GetContactsResponse> => {
  const { data, error } = await supabase.from('contacts').select('*');
  if (error) throw new Error(error.message);
  return data as GetContactsResponse;
};
