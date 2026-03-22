import { supabase } from '@/lib/supabase';
import { GetHeroResponse } from '@/types/api/hero';

export const getHero = async (): Promise<GetHeroResponse> => {
  const { data, error } = await supabase.from('hero').select('*').single();
  if (error) {
    throw new Error(error.message);
  }
  return data as GetHeroResponse;
};
