export async function POST(request){
  const body = await request.json();
  // TODO: Integrate with an email provider, Google Sheet, or CRM.
  console.log("Booking request:", body);
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
