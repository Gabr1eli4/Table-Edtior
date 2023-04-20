import { createClient } from "@supabase/supabase-js";
import { Database } from "../types/schema";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

await supabase.auth.signInWithPassword({
	email: import.meta.env.VITE_AUTH_EMAIL,
	password: import.meta.env.VITE_AUTH_PASSWORD,
});

export default supabase;
