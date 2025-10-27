import PricingCards from "@/components/PricingCards";
export const metadata = { title: "Pricing | Sydney Deck Builder" };
export default function Page(){
  return (
    <section className="section"><div className="container">
      <h1 className="h1 mb-6">Transparent Pricing</h1>
      <p className="text-slate-700">We provide line-item quotes with clear inclusions and exclusions. Below are guide packages—every quote includes a scope, timeline, and payment schedule.</p>
      <div className="mt-8"><PricingCards/></div>
      <div className="mt-8 card p-6">
        <h3 className="h3">What’s included</h3>
        <ul className="list-disc ml-6 text-sm mt-2 space-y-1">
          <li>Detailed scope, plans and materials list</li>
          <li>Shared project folder with timeline & weekly updates</li>
          <li>Workmanship warranty and care guide</li>
        </ul>
      </div>
    </div></section>
  )
}
