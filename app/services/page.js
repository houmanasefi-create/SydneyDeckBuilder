export const metadata = { title: "Services | Sydney Deck Builder" };
export default function Page(){
  const services = [
    ["Timber Decks", "Spotted Gum, Blackbutt, Merbau and more."],
    ["Composite Decks", "ModWood, Trex, Ekodeck: low‑maintenance, long‑lasting."],
    ["Pergolas & Roofs", "Insulated panels, timber pergolas, privacy screens."],
    ["Stairs & Balustrades", "Glass, stainless, hardwood, and composite options."],
    ["Repairs & Resurfacing", "Deck replacement boards, sanding, staining, and upgrades."],
  ];
  return (
    <section className="section"><div className="container">
      <h1 className="h1 mb-6">Deck & Outdoor Services</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map(([t,d]) => (
          <div key={t} className="card p-6">
            <h3 className="h3">{t}</h3><p className="mt-2 text-slate-600">{d}</p>
          </div>
        ))}
      </div>
    </div></section>
  )
}
