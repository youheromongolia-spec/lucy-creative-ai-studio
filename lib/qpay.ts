const QPAY_API = 'https://merchant.qpay.mn/v2';

export async function createQPayInvoice(orderId: string, amount: number, description: string) {
  const response = await fetch(`${QPAY_API}/invoice`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.QPAY_SECRET_KEY}`,
    },
    body: JSON.stringify({
      invoice_code: process.env.QPAY_INVOICE_CODE,
      sender_invoice_no: orderId,
      amount,
      description: description || 'Lucy Gray R захиалга',
      callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/qpay/callback`,
    }),
  });

  if (!response.ok) throw new Error('QPay invoice үүсгэхэд алдаа гарлаа');
  return response.json();
}
