export const metadata = { title: "About | Sydney Deck Builder" };
export default function Page(){
  return (
    <section className="section"><div className="container">
      <h1 className="h1 mb-6">Built on Craft & Clarity</h1>
      <p className="text-slate-700">We’re a Sydney team focused on quality outdoor living—decks, pergolas and alfresco spaces. Our difference is transparency: fixed quotes, shared files, and proactive communication.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {[
          ["Licensed & Insured", "NSW licensed builders with public liability."],
          ["Quality Materials", "We work with trusted composite and hardwood suppliers."],
          ["Warranty", "10‑year workmanship warranty on new builds."],
        ].map(([t,d]) => (
          <div key={t} className="card p-6"><h3 className="h3">{t}</h3><p className="text-sm mt-2">{d}</p></div>
        ))}
      </div>
    </div></section>
  )
}
