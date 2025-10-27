import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import PricingCards from "@/components/PricingCards";
import ProcessTimeline from "@/components/ProcessTimeline";
import Link from "next/link";

export default function Page(){
  return (
    <>
      <Hero/>
      <section className="section">
        <div className="container">
          <h2 className="h2 mb-6">Why Sydney Deck Builder?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["Authority & Craft", "Licensed builders with 15+ years in Sydney outdoor projects."],
              ["Transparent Pricing", "Clear line‑items, no surprises, options to fit your budget."],
              ["Project Management", "Shared files, timeline, weekly updates, and a single point of contact."],
            ].map(([t,d]) => (
              <div key={t} className="card p-6">
                <h3 className="h3">{t}</h3>
                <p className="mt-2 text-slate-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container">
          <h2 className="h2 mb-6">Our Process</h2>
          <ProcessTimeline/>
          <div className="mt-8">
            <Link href="/process" className="btn-primary">See Full Process</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="h2 mb-6">Guide Pricing</h2>
          <PricingCards/>
          <p className="text-sm text-slate-600 mt-4">Final pricing depends on site conditions, materials, and complexity. We always confirm a fixed quote before work begins.</p>
          <div className="mt-6">
            <Link href="/pricing" className="btn-secondary">Detailed Pricing</Link>
          </div>
        </div>
      </section>

      <CTA/>
    </>
  )
}
