// This file is NOT wired up yet — it's here so the wiring, when you're
// ready, is a five-minute job instead of a from-scratch integration.
//
// To activate it:
//   1. Create a Supabase project (supabase.com), copy the Project URL and
//      anon public key from Settings → API.
//   2. Create a `.env.local` file in the project root (never commit this
//      file — it's already in .gitignore) with:
//        NEXT_PUBLIC_SUPABASE_URL=https://<project-ref>.supabase.co
//        NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
//   3. Uncomment the code below.
//   4. In lib/photos.ts, replace the mock arrays with real queries, e.g.
//        const { data, error } = await supabase.from('photos').select('*');
//
// import { createClient } from '@supabase/supabase-js';
//
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
//
// export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export {};
