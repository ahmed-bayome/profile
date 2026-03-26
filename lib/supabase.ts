import { createClient } from '@supabase/supabase-js';


const NEXT_PUBLIC_SUPABASE_URL = "https://mxjsqsthwteicvuqvisg.supabase.co";
const SUPABASE_SECRET_KEY = "sb_publishable_L3wEugAFgJEXbkskWlluOw_xO9C3_a0";


export const supabase = createClient(
  NEXT_PUBLIC_SUPABASE_URL,
  SUPABASE_SECRET_KEY,
);
