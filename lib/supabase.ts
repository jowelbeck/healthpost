import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ifryrtxioeyipjjroqsz.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmcnlydHhpb2V5aXBqanJvcXN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2MDI5MDQsImV4cCI6MjA5NzE3ODkwNH0.Z3V93CC6x51QjDifGdLXzG-WJEl1UCh9Ybw02b-X8dY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);