import Link from "next/link";

export default function Hero(){
  return (
    <section className="section bg-brand-light/60">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="h1">Sydney’s Most Trusted Deck & Pergola Specialists</h1>
          <p className="mt-4 text-lg text-slate-700">
            Fixed-scope quotes. Clear timelines. Professional project management with shared files and weekly updates.
          </p>
          <div className="mt-6 flex gap-3">
            <Link className="btn-primary" href="/book">Book a Free Quote</Link>
            <Link className="btn-secondary" href="/pricing">See Pricing</Link>
          </div>
          <ul className="mt-6 grid md:grid-cols-2 gap-2 text-sm">
            <li>✔ Licensed & insured</li>
            <li>✔ Council-ready plans</li>
            <li>✔ Transparent pricing</li>
            <li>✔ 10‑year workmanship warranty</li>
          </ul>
        </div>
        <div className="card overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1615876234886-fd9a39fda3e4?q=80&w=1600&auto=format&fit=crop"
            alt="Beautiful timber deck in Sydney"
            className="w-full h-80 object-cover"/>
        </div>
      </div>
    </section>
  );
}
