import BookingForm from "@/components/BookingForm";
export const metadata = { title: "Book a Free Quote | Sydney Deck Builder" };
export default function Page(){
  return (
    <section className="section bg-slate-50"><div className="container">
      <h1 className="h1 mb-4">Book a Free Quote</h1>
      <p className="text-slate-700 mb-6">Enter your details and preferred time. We’ll confirm asap.</p>
      <BookingForm/>
      <p className="text-xs text-slate-500 mt-3">This form posts to /api/book which you can connect to email or CRM in Vercel.</p>
    </div></section>
  )
}
