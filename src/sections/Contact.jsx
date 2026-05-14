import { useState } from 'react'
import { C, CONTACT } from '../constants'

export default function ContactSection() {
  const [form, setForm] = useState({ name:"", org:"", email:"", service:"", message:"" })
  const [sub, setSub] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const encode = (data) => Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email) return
    if (submitting) return
    setSubmitting(true)
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contactform', ...form })
      })
      setSub(true)
    } catch (err) {
      alert("There was a problem sending your message. Please email us directly at " + CONTACT.email)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="s-contact" className="dark-section" style={{ padding:"80px 0 96px" }}>
      <div className="container">
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:64 }}>
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:24 }}>
              <div style={{ width:36, height:1, background:C.terra }}/>
              <p className="eyebrow" style={{ color:C.terra }}>Get In Touch</p>
            </div>
            <h2 className="serif" style={{ fontSize:"clamp(32px,3.5vw,50px)", fontWeight:300, color:"#FFFFFF", lineHeight:1.1, marginBottom:20 }}>
              Let's build something<br/><em style={{ color:C.terra }}>that actually works</em>
            </h2>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:15, fontWeight:300, color:"rgba(245,240,232,0.82)", lineHeight:1.85, marginBottom:32 }}>
              Whether you're an individual ready to build your WRAP, an organization looking to bring training to your team, or a partner seeking to collaborate — reach out. We respond within 2 business days.
            </p>
            <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
              <a href={`mailto:${CONTACT.email}`} style={{ display:"flex", alignItems:"center", gap:14, padding:"16px 20px", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:4, color:"inherit" }}>
                <span style={{ fontSize:20, color:C.gold }}>✉</span>
                <div>
                  <div style={{ fontFamily:"'Jost',sans-serif", fontSize:10, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:C.gold, marginBottom:3 }}>Email</div>
                  <div style={{ fontFamily:"'Jost',sans-serif", fontSize:14, color:"rgba(245,240,232,0.85)" }}>{CONTACT.email}</div>
                </div>
              </a>
              <a href={`tel:${CONTACT.phone.replace(/-/g,"")}`} style={{ display:"flex", alignItems:"center", gap:14, padding:"16px 20px", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:4, color:"inherit" }}>
                <span style={{ fontSize:20, color:C.forest }}>☎</span>
                <div>
                  <div style={{ fontFamily:"'Jost',sans-serif", fontSize:10, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:C.forest, marginBottom:3 }}>Phone</div>
                  <div style={{ fontFamily:"'Jost',sans-serif", fontSize:14, color:"rgba(245,240,232,0.85)" }}>{CONTACT.phone}</div>
                </div>
              </a>
            </div>
          </div>
          <div>
            {sub ? (
              <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", height:"100%", textAlign:"center" }}>
                <div style={{ fontSize:48, color:C.terra, marginBottom:20 }}>✦</div>
                <h4 className="serif" style={{ fontSize:32, fontWeight:300, color:"#FFFFFF", marginBottom:14 }}>Message received.</h4>
                <p style={{ fontFamily:"'Jost',sans-serif", fontSize:14, color:"rgba(245,240,232,0.75)", lineHeight:1.7 }}>
                  We'll be in touch within 2 business days. Thank you for reaching out.
                </p>
              </div>
            ) : (
              <form
                name="contactform"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                style={{ display:"flex", flexDirection:"column", gap:12 }}
              >
                <input type="hidden" name="form-name" value="contactform" />
                <p style={{ display:"none" }}>
                  <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                </p>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
                  <input name="name" className="form-input-dark" placeholder="Your name *" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
                  <input name="org" className="form-input-dark" placeholder="Organization" value={form.org} onChange={e=>setForm({...form,org:e.target.value})}/>
                </div>
                <input name="email" className="form-input-dark" placeholder="Email address *" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
                <select name="service" className="form-input-dark" value={form.service} onChange={e=>setForm({...form,service:e.target.value})}>
                  <option value="">Service of interest...</option>
                  <option>WRAP Seminar I — Build my wellness plan</option>
                  <option>WRAP Seminar II — Become a certified facilitator</option>
                  <option>WRAP Seminar III — Advanced Level Facilitator</option>
                  <option>Mental Health First Aid</option>
                  <option>Peer Support Consulting</option>
                  <option>Criminal Justice Consulting</option>
                  <option>DOC / CIT Training</option>
                  <option>General inquiry</option>
                </select>
                <textarea name="message" className="form-input-dark" placeholder="Tell us about your goals or questions..." rows={4} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} style={{resize:"vertical"}}/>
                <button type="submit" disabled={submitting} className="btn-gold" style={{ padding:"15px", fontSize:13 }}>
                  {submitting ? "Sending..." : "Send Message"}
                </button>
                <p style={{ fontFamily:"'Jost',sans-serif", fontSize:11, color:"rgba(245,240,232,0.35)", textAlign:"center" }}>
                  We respond within 2 business days · * Required fields
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
