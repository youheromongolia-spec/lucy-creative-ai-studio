
import { supabase } from '@/lib/supabase';

export async function getCurrentSessionUser() {
  const { data: { session }, error } = await supabase.auth.getSession();

  if (error || !session?.user) {
    return null;
  }

  return {
    id: session.user.id,
    email: session.user.email,
    // шаардлагатай бол нэмэлт мэдээлэл (role, metadata гэх мэт) энд нэмж болно
  };
}