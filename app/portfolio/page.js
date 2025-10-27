export const metadata = { title: "Portfolio | Sydney Deck Builder" };
export default function Page(){
  const items = Array.from({length: 6}, (_,i)=>i)
  return (
    <section className="section"><div className="container">
      <h1 className="h1 mb-6">Recent Projects</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map(i => (
          <div key={i} className="card overflow-hidden">
            <img className="h-52 w-full object-cover" src={`https://picsum.photos/seed/deck${i}/600/400`} alt="Sydney deck"/>
            <div className="p-4">
              <h3 className="h3">North Shore Family Deck</h3>
              <p className="text-sm text-slate-600">Composite boards, privacy screen, integrated lighting.</p>
            </div>
          </div>
        ))}
      </div>
    </div></section>
  )
}
