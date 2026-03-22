import { supabase } from '@/lib/supabase';
import { GetSkillsResponse } from '@/types/api/skills';

export const getSkills = async (): Promise<GetSkillsResponse> => {
  const { data, error } = await supabase.from('skills').select('*');
  if (error) {
    throw new Error(error.message);
  }
  return data as GetSkillsResponse;
};
