import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://esmjtpehaeeiyiaefuxj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzbWp0cGVoYWVlaXlpYWVmdXhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4Njg5MzcsImV4cCI6MjA2NjQ0NDkzN30.9ZN1L9OqMDXlBo4bAnsSyXtbEPhVtyzYvANgoyyGIMQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
