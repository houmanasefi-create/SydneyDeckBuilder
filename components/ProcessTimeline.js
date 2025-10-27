export default function ProcessTimeline(){
  const steps = [
    ["1. Fast Booking", "Pick a time online—no back‑and‑forth."],
    ["2. Site Measure", "We confirm scope, materials & council needs."],
    ["3. Fixed Quote", "Transparent line‑item pricing & inclusions."],
    ["4. Project Files", "You get a shared folder: plans, timeline, approvals, updates."],
    ["5. Build & Updates", "Weekly photo updates and milestone check‑ins."],
    ["6. Handover & Warranty", "Quality walkthrough, care guide, and 10‑year workmanship warranty."],
  ];
  return (
    <ol className="relative border-s border-slate-200 pl-6 space-y-6">
      {steps.map(([title, desc], i) => (
        <li key={i}>
          <div className="absolute -left-2.5 w-5 h-5 rounded-full bg-brand"></div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-sm text-slate-600">{desc}</p>
        </li>
      ))}
    </ol>
  );
}
