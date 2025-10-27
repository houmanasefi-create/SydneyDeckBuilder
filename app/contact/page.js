import BookingForm from "@/components/BookingForm";
export const metadata = { title: "Contact | Sydney Deck Builder" };
export default function Page(){
  return (
    <section className="section"><div className="container">
      <h1 className="h1 mb-6">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <p className="text-slate-700">Call: <a className="text-brand font-semibold" href="tel:0400000000">0400 000 000</a></p>
          <p>Email: <a className="text-brand font-semibold" href="mailto:hello@sydneydeckbuilder.com.au">hello@sydneydeckbuilder.com.au</a></p>
          <p>Service area: Greater Sydney</p>
          <p className="text-sm text-slate-600">Or book a quote and we’ll confirm a time within 24 hours.</p>
        </div>
        <BookingForm/>
      </div>
    </div></section>
  )
}
