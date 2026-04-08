import { createClient } from '@supabase/supabase-js';
import { NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SECRET_KEY } from '@/constants/api';
import type { TableTypes, TablesWithSlug } from '@/types/tables';
import { toCamelCase } from '@/utils/objects';

const supabaseClient = createClient(
  NEXT_PUBLIC_SUPABASE_URL,
  SUPABASE_SECRET_KEY,
);

class Supabase {
  get = async <T extends keyof TableTypes>(table: T) => {
    const { data, error } = await supabaseClient.from(table).select('*');
    if (error) throw error;
    return toCamelCase(data as TableTypes[T]);
  };

  getSingle = async <T extends keyof TableTypes>(table: T) => {
    const { data, error } = await supabaseClient.from(table).select('*').single();
    if (error) throw error;
    return toCamelCase(data as TableTypes[T][number]);
  };

  getBySlug = async <T extends TablesWithSlug>(table: T, slug: string) => {
    const { data, error } = await supabaseClient
      .from(table)
      .select('*')
      .eq('slug', slug)
      .single();
    if (error) throw error;
    return toCamelCase(data as TableTypes[T][number]);
  };
}

export const supabase = new Supabase();
