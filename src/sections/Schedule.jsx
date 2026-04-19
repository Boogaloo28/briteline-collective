import { useState } from 'react'
import { C, CONTACT } from '../constants'

const W1 = [
  { dates:"May 28–29 & June 4–5",  time:"11am – 3pm" },
  { dates:"June 25–26 & July 2–3", time:"11am – 3pm" },
  { dates:"July 18–19 & 25–26",    time:"11am – 3pm" },
]
const W2 = [
  { dates:"June 15–17",    time:"8am – 4pm" },
  { dates:"August 24–26",  time:"8am – 4pm" },
  { dates:"October 19–21", time:"8am – 4pm" },
]

export default function Schedule() {
  const [sub, setSub] = useState(false)
  const [form, setForm] = useState({ name:"", org:"", email:"", seminar:"", headcount:"", message:"" })

  return (
    <section id="s-schedule" className="alt-section" style={{ padding:"80px 0 88px" }}>
      <div className="container">
        <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:14 }}>
          <div style={{ width:44, height:1, background:C.gold }}/>
          <p className="eyebrow">Training Schedule & Pricing</p>
          <div style={{ flex:1, height:1, background:C.mist }}/>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:52, alignItems:"end", marginBottom:40 }}>
          <h2 className="serif" style={{ fontSize:"clamp(30px,4.5vw,52px)", fontWeight:300, lineHeight:1.08, color:C.ink }}>
            Upcoming sessions —<br/><em style={{ color:C.gold }}>register today.</em>
          </h2>
          <div>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:14, fontWeight:400, color:C.stone, lineHeight:1.8, marginBottom:14 }}>
              All sessions facilitated by Lee and Dennis "Freedom" Horton. Registration closes 72 hours before each session or when seats are filled.
            </p>
            <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
              <a href={`mailto:${CONTACT.email}`} className="btn-gold" style={{ fontSize:11 }}>✉ {CONTACT.email}</a>
              <a href={`tel:${CONTACT.phone.replace(/-/g,"")}`} className="btn-forest" style={{ fontSize:11 }}>☎ {CONTACT.phone}</a>
            </div>
          </div>
        </div>

        {/* Pricing cards */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:10, marginBottom:36 }}>
          {[
            { label:"WRAP Seminar I · Virtual",    price:"$325",    unit:"per participant", color:C.gold,   note:"4 days · 2 weekends · 11am–3pm" },
            { label:"WRAP Seminar I · In-Person",  price:"$350",    unit:"per participant", color:C.forest, note:"At your site · Contact to schedule" },
            { label:"WRAP Seminar II",             price:"$1,000",  unit:"per participant", color:C.terra,  note:"3 days · In-Person · Prereq: Seminar I" },
            { label:"Briteline Members",           price:"10% Off", unit:"all seminars",    color:"#8B6FA3",note:"Join Briteline Collective to save 10% on all trainings" },
          ].map(item => (
            <div key={item.label} className="card" style={{ borderTop:`3px solid ${item.color}`, padding:"18px 16px" }}>
              <div style={{ fontFamily:"'Jost',sans-serif", fontSize:10, fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", color:item.color, marginBottom:5 }}>{item.label}</div>
              <div className="serif" style={{ fontSize:28, fontWeight:300, color:item.color, lineHeight:1, marginBottom:3 }}>{item.price}</div>
              <div style={{ fontFamily:"'Jost',sans-serif", fontSize:10, fontWeight:500, color:C.stone, marginBottom:6 }}>{item.unit}</div>
              <p style={{ fontFamily:"'Jost',sans-serif", fontSize:11, fontWeight:400, color:C.stone, lineHeight:1.55 }}>{item.note}</p>
            </div>
          ))}
        </div>

        {/* Sessions */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20, marginBottom:20 }}>
          {/* WRAP I Virtual */}
          <div className="card" style={{ borderTop:`3px solid ${C.gold}`, overflow:"hidden" }}>
            <div style={{ background:`${C.gold}10`, borderBottom:`1px solid ${C.gold}18`, padding:"14px 20px" }}>
              <div style={{ fontFamily:"'Jost',sans-serif", fontSize:11, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:C.gold }}>WRAP Seminar I — Virtual · $325/person</div>
            </div>
            {W1.map((s,i) => (
              <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 20px", borderBottom:i<W1.length-1?`1px solid ${C.mist}`:"none", background:i%2===0?"transparent":"rgba(245,240,232,0.4)" }}>
                <div>
                  <div className="serif" style={{ fontSize:17, fontWeight:500, color:C.ink, marginBottom:1 }}>{s.dates}</div>
                  <div style={{ fontFamily:"'Jost',sans-serif", fontSize:12, color:C.stone }}>{s.time} each day</div>
                </div>
                <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:4, padding:"4px 10px", background:`${C.forest}12`, border:`1px solid ${C.forest}25`, borderRadius:20 }}>
                    <div style={{ width:5, height:5, borderRadius:"50%", background:C.forest, animation:"pulse 2s ease-in-out infinite" }}/>
                    <span style={{ fontFamily:"'Jost',sans-serif", fontSize:9, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:C.forest }}>Open</span>
                  </div>
                  <a href={`mailto:${CONTACT.email}?subject=Registration: WRAP Seminar I — ${s.dates}`} className="btn-gold" style={{ fontSize:10, padding:"6px 12px" }}>Register</a>
                </div>
              </div>
            ))}
          </div>

          {/* WRAP II */}
          <div className="card" style={{ borderTop:`3px solid ${C.terra}`, overflow:"hidden" }}>
            <div style={{ background:`${C.terra}10`, borderBottom:`1px solid ${C.terra}18`, padding:"14px 20px" }}>
              <div style={{ fontFamily:"'Jost',sans-serif", fontSize:11, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:C.terra }}>WRAP Seminar II — Facilitator Training · $1,000/person</div>
            </div>
            {W2.map((s,i) => (
              <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 20px", borderBottom:i<W2.length-1?`1px solid ${C.mist}`:"none", background:i%2===0?"transparent":"rgba(245,240,232,0.4)" }}>
                <div>
                  <div className="serif" style={{ fontSize:17, fontWeight:500, color:C.ink, marginBottom:1 }}>{s.dates}</div>
                  <div style={{ fontFamily:"'Jost',sans-serif", fontSize:12, color:C.stone }}>{s.time} each day</div>
                </div>
                <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:4, padding:"4px 10px", background:`${C.forest}12`, border:`1px solid ${C.forest}25`, borderRadius:20 }}>
                    <div style={{ width:5, height:5, borderRadius:"50%", background:C.forest, animation:"pulse 2s ease-in-out infinite" }}/>
                    <span style={{ fontFamily:"'Jost',sans-serif", fontSize:9, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:C.forest }}>Open</span>
                  </div>
                  <a href={`mailto:${CONTACT.email}?subject=Registration: WRAP Seminar II — ${s.dates}`} className="btn-gold" style={{ fontSize:10, padding:"6px 12px" }}>Register</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* In-person request */}
        <div className="card" style={{ marginBottom:36, padding:"20px 24px", borderLeft:`3px solid ${C.forest}`, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:14 }}>
          <div>
            <div style={{ fontFamily:"'Jost',sans-serif", fontSize:11, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:C.forest, marginBottom:3 }}>WRAP Seminar I — In-Person · $350 per participant</div>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:13, fontWeight:400, color:C.stone, lineHeight:1.6 }}>We come to you. Available at your facility, organization, or community space.</p>
          </div>
          <div style={{ display:"flex", gap:10 }}>
            <a href={`mailto:${CONTACT.email}?subject=Request: In-Person WRAP Seminar I`} className="btn-forest" style={{ fontSize:11 }}>Request a Date</a>
            <a href={`tel:${CONTACT.phone.replace(/-/g,"")}`} className="btn-forest" style={{ fontSize:11, background:`${C.forest}15`, color:C.forest, border:`1px solid ${C.forest}30` }}>Call Us</a>
          </div>
        </div>

        {/* Registration form */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:44, background:`${C.gold}06`, border:`1px solid ${C.gold}18`, borderRadius:4, padding:"36px 40px" }}>
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:14 }}>
              <div style={{ width:36, height:1, background:C.gold }}/>
              <p className="eyebrow">Register or Request</p>
            </div>
            <h3 className="serif" style={{ fontSize:"clamp(22px,3vw,34px)", fontWeight:300, color:C.ink, lineHeight:1.15, marginBottom:12 }}>
              Ready to begin?<br/><em style={{ color:C.gold }}>Let's get you registered.</em>
            </h3>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:14, fontWeight:400, color:C.stone, lineHeight:1.8, marginBottom:16 }}>
              Use this form to register for an upcoming session, request an in-person date, or ask a question. We respond within 2 business days.
            </p>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              <div style={{ display:"flex", alignItems:"center", gap:10 }}><span style={{ fontSize:15, color:C.gold }}>✉</span><a href={`mailto:${CONTACT.email}`} style={{ fontFamily:"'Jost',sans-serif", fontSize:14, fontWeight:400, color:C.ink }}>{CONTACT.email}</a></div>
              <div style={{ display:"flex", alignItems:"center", gap:10 }}><span style={{ fontSize:15, color:C.forest }}>☎</span><a href={`tel:${CONTACT.phone.replace(/-/g,"")}`} style={{ fontFamily:"'Jost',sans-serif", fontSize:14, fontWeight:400, color:C.ink }}>{CONTACT.phone}</a></div>
              <div style={{ padding:"11px 14px", background:`${C.gold}10`, border:`1px solid ${C.gold}20`, borderRadius:4 }}>
                <p style={{ fontFamily:"'Jost',sans-serif", fontSize:12, fontWeight:400, color:C.stone, lineHeight:1.6 }}>Payment plans available — 2 or 3 installments, or custom for organizations. Briteline Collective members receive 10% off. Ask us when you reach out.</p>
              </div>
            </div>
          </div>
          <div>
            {sub ? (
              <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", height:"100%", textAlign:"center" }}>
                <div style={{ fontSize:32, color:C.gold, marginBottom:12 }}>✦</div>
                <h4 className="serif" style={{ fontSize:24, fontWeight:300, color:C.ink, marginBottom:9 }}>Thank you, {form.name.split(" ")[0]||"friend"}.</h4>
                <p style={{ fontFamily:"'Jost',sans-serif", fontSize:13, fontWeight:400, color:C.stone, lineHeight:1.6 }}>We'll be in touch within 2 business days to confirm your registration.</p>
              </div>
            ) : (
              <div style={{ display:"flex", flexDirection:"column", gap:9 }}>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:9 }}>
                  <input className="form-input" placeholder="Your name *" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
                  <input className="form-input" placeholder="Organization (optional)" value={form.org} onChange={e=>setForm({...form,org:e.target.value})}/>
                </div>
                <input className="form-input" placeholder="Email address *" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
                <select className="form-input" value={form.seminar} onChange={e=>setForm({...form,seminar:e.target.value})}>
                  <option value="">I'm registering for / interested in...</option>
                  <optgroup label="WRAP Seminar I — Virtual ($325/person)">
                    <option>Seminar I Virtual — May 28–29 & June 4–5</option>
                    <option>Seminar I Virtual — June 25–26 & July 2–3</option>
                    <option>Seminar I Virtual — July 18–19 & 25–26</option>
                  </optgroup>
                  <optgroup label="WRAP Seminar I — In-Person ($350/person)">
                    <option>Seminar I In-Person — Request a date at my site</option>
                  </optgroup>
                  <optgroup label="WRAP Seminar II ($1,000/person)">
                    <option>Seminar II — June 15–17</option>
                    <option>Seminar II — August 24–26</option>
                    <option>Seminar II — October 19–21</option>
                  </optgroup>
                  <option>WRAP Seminar III — Contact for information</option>
                  <option>Mental Health First Aid</option>
                  <option>General inquiry</option>
                </select>
                <input className="form-input" placeholder="Number of participants (if group)" value={form.headcount} onChange={e=>setForm({...form,headcount:e.target.value})}/>
                <textarea className="form-input" placeholder="Questions, payment plan requests, or anything else..." rows={3} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} style={{resize:"vertical"}}/>
                <button className="btn-gold" onClick={()=>{ if(form.name&&form.email) setSub(true) }} style={{ padding:"14px", fontSize:13 }}>Submit Registration</button>
                <p style={{ fontFamily:"'Jost',sans-serif", fontSize:11, color:C.stone, textAlign:"center" }}>We respond within 2 business days · * Required fields</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
