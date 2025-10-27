'use client'
import { useState } from 'react'

export default function BookingForm(){
  const [status, setStatus] = useState(null);

  async function onSubmit(e){
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try{
      const res = await fetch('/api/book', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data)});
      if(!res.ok) throw new Error('Failed');
      setStatus('Thanks! We’ll confirm shortly.');
      e.currentTarget.reset();
    } catch {
      setStatus('Something went wrong. Please call us.');
    }
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input className="border rounded-xl p-3" name="name" required placeholder="Full name"/>
        <input className="border rounded-xl p-3" type="tel" name="phone" required placeholder="Phone"/>
        <input className="border rounded-xl p-3 md:col-span-2" type="email" name="email" required placeholder="Email"/>
        <input className="border rounded-xl p-3 md:col-span-2" name="suburb" required placeholder="Suburb"/>
        <textarea className="border rounded-xl p-3 md:col-span-2" name="details" rows="4" placeholder="Tell us about your deck/pergola idea"></textarea>
      </div>
      <button className="btn-primary w-full">Book Free Quote</button>
      {status && <p className="text-sm text-center">{status}</p>}
      <p className="text-xs text-slate-500 text-center">By submitting, you agree to be contacted about your quote.</p>
    </form>
  );
}
