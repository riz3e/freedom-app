import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";



// Better put your these secret keys in .env file
export const supabase = createClient("https://edyxrrxfaqktpjggwevz.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkeXhycnhmYXFrdHBqZ2d3ZXZ6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwODAxMDE5NSwiZXhwIjoyMDIzNTg2MTk1fQ.kyCIX4M0MZffATuHDcmQXq6Kj7ZG2w97dIVGK7grP3g", {
  localStorage: AsyncStorage as any,
  detectSessionInUrl: false // Prevents Supabase from evaluating window.location.href, breaking mobile
});
