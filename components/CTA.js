import Link from "next/link";

export default function CTA(){
  return (
    <section className="section bg-brand text-white">
      <div className="container grid md:grid-cols-2 items-center gap-8">
        <div>
          <h2 className="h2">Ready to design your outdoor space?</h2>
          <p className="mt-3 text-white/90">Book a free measure & quote. We’ll bring samples, discuss options, and confirm a timeline on the spot.</p>
        </div>
        <div className="flex md:justify-end">
          <Link href="/book" className="btn bg-white text-brand font-semibold hover:bg-white/90">Book in 60 seconds</Link>
        </div>
      </div>
    </section>
  );
}
