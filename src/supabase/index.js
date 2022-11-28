import { createClient } from '@supabase/supabase-js';

const SupaBase = createClient(process.env.NEXT_PUBLIC_PROJECT_URL, process.env.NEXT_PUBLIC_API_KEY);

export {SupaBase};