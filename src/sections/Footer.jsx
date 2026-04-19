import { C, CONTACT } from '../constants'

export default function Footer() {
  return (
    <footer className="dark-section" style={{ borderTop:`1px solid ${C.gold}15`, padding:"52px 0 36px" }}>
      <div className="container">
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr", gap:48, marginBottom:44 }}>
          <div>
            <div className="serif" style={{ fontSize:22, fontWeight:600, letterSpacing:"0.04em", color:C.gold, marginBottom:14 }}>Briteline Collective</div>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:13, fontWeight:300, color:"rgba(245,240,232,0.65)", lineHeight:1.8, maxWidth:320, marginBottom:20 }}>
              A multidisciplinary collective of facilitators, peer support professionals, wellness instructors, justice advocates, and trauma-informed practitioners — aligning expertise to drive wellness, equity, and systems transformation.
            </p>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:11, color:"rgba(245,240,232,0.4)" }}>
              Horton Brothers Enterprise d/b/a Briteline Collective<br/>Philadelphia, PA · {CONTACT.domain}
            </p>
          </div>
          <div>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:10, fontWeight:700, letterSpacing:"0.16em", textTransform:"uppercase", color:C.gold, marginBottom:14 }}>Services</p>
            {["WRAP Seminars I, II & III","Mental Health First Aid","Forensic Peer Consulting","Criminal Justice Consulting","DOC / CIT Training","Reentry Program Development"].map(item => (
              <p key={item} style={{ fontFamily:"'Jost',sans-serif", fontSize:12, fontWeight:300, color:"rgba(245,240,232,0.55)", lineHeight:1.9 }}>{item}</p>
            ))}
          </div>
          <div>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:10, fontWeight:700, letterSpacing:"0.16em", textTransform:"uppercase", color:C.gold, marginBottom:14 }}>Contact</p>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              <a href={`mailto:${CONTACT.email}`} style={{ fontFamily:"'Jost',sans-serif", fontSize:12, fontWeight:300, color:"rgba(245,240,232,0.65)", lineHeight:1.5 }}>{CONTACT.email}</a>
              <a href={`tel:${CONTACT.phone.replace(/-/g,"")}`} style={{ fontFamily:"'Jost',sans-serif", fontSize:12, fontWeight:300, color:"rgba(245,240,232,0.65)" }}>{CONTACT.phone}</a>
            </div>
            <div style={{ marginTop:20, padding:"14px 16px", background:`${C.gold}08`, border:`1px solid ${C.gold}15`, borderRadius:4 }}>
              <p style={{ fontFamily:"'Jost',sans-serif", fontSize:11, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:C.gold, marginBottom:4 }}>Upcoming Training</p>
              <p style={{ fontFamily:"'Jost',sans-serif", fontSize:11, fontWeight:300, color:"rgba(245,240,232,0.55)", lineHeight:1.6 }}>WRAP Seminar I — Virtual<br/>May 28–29 & June 4–5<br/>11am – 3pm each day</p>
            </div>
          </div>
        </div>
        <div style={{ borderTop:`1px solid ${C.gold}10`, paddingTop:24, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <p style={{ fontFamily:"'Jost',sans-serif", fontSize:11, color:"rgba(245,240,232,0.3)" }}>
            © 2026 Horton Brothers Enterprise · Briteline Collective · {CONTACT.domain}
          </p>
          <p style={{ fontFamily:"'Jost',sans-serif", fontSize:11, color:"rgba(245,240,232,0.3)" }}>
            Philadelphia, PA
          </p>
        </div>
      </div>
    </footer>
  )
}
