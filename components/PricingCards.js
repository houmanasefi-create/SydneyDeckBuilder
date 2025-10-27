export default function PricingCards(){
  const tiers = [
    { name: "Starter Deck", price: "From $8k", features: ["Up to 10m²", "Pine framing", "Composite or treated pine boards", "Basic steps & balustrade", "2‑week build"]},
    { name: "Family Entertainer", price: "From $18k", features: ["20–30m²", "Hardwood/ModWood options", "Integrated lighting", "Permits & drawings included", "3–4 week build"]},
    { name: "Premium Alfresco", price: "From $35k", features: ["Large custom deck", "Pergola/roofing integration", "Privacy screens & stairs", "Premium hardwood/composite", "Full project management"]},
  ];
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {tiers.map(t => (
        <div key={t.name} className="card p-6">
          <h3 className="h3">{t.name}</h3>
          <p className="mt-2 text-2xl font-bold">{t.price}</p>
          <ul className="mt-4 space-y-2 text-sm">
            {t.features.map(f => <li key={f}>• {f}</li>)}
          </ul>
        </div>
      ))}
    </div>
  )
}
