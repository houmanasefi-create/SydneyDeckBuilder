import Link from "next/link";

export default function Footer(){
  return (
    <footer className="border-t mt-20">
      <div className="container section-sm grid md:grid-cols-3 gap-8">
        <div>
          <img src="/logo.svg" alt="logo" className="h-8 mb-3"/>
          <p className="text-sm text-slate-600">Sydney's #1 authority for decks, pergolas & outdoor living. Licensed, insured, and proudly local.</p>
        </div>
        <div>
          <h4 className="h3 mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/process">Our Process</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="h3 mb-3">Get a Quote</h4>
          <p className="text-sm mb-3">Fast 60‑second booking. Transparent pricing. Project timeline & files provided.</p>
          <Link href="/book" className="btn-primary">Book a Free Site Visit</Link>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Sydney Deck Builder. All rights reserved.
      </div>
    </footer>
  );
}
