import { NextRequest } from 'next/server';
import { createClient } from '@/lib/supabase';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export async function POST(req: NextRequest) {
  const body = await req.json();

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  // QPay-с ирсэн мэдээллээр захиалгын status-г шинэчил
  const { order_id, status } = body;

  if (status === 'PAID') {
    await supabase
      .from('orders')
      .update({ status: 'confirmed' })
      .eq('id', order_id);
  }

  return Response.json({ success: true });
}
