import { supabase } from '@/lib/supabase';
import { GetBlogsResponse } from '@/types/api/blogs';

export const getBlogs = async (): Promise<GetBlogsResponse> => {
  const { data, error } = await supabase.from('blogs').select('*');
  if (error) throw new Error(error.message);
  return data as GetBlogsResponse;
};
