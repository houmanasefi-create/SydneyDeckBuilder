import ProcessTimeline from "@/components/ProcessTimeline";
export const metadata = { title: "Our Process | Sydney Deck Builder" };
export default function Page(){
  return (
    <section className="section"><div className="container">
      <h1 className="h1 mb-6">A Clear, Managed Process</h1>
      <p className="text-slate-700 mb-6">From first call to final handover, we give you complete visibility—timeline, files, and updates—so you’re never guessing.</p>
      <ProcessTimeline/>
    </div></section>
  )
}
