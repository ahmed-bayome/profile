import { supabase } from '@/lib/supabase';
import { GetProjectsResponse } from '@/types/api/projects';

export const getProjects = async (): Promise<GetProjectsResponse> => {
  const { data, error } = await supabase.from('projects').select('*');
  if (error) throw new Error(error.message);
  return data as GetProjectsResponse;
};
