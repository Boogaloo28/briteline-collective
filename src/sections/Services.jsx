import { C } from '../constants'

const SERVICES = [
  { icon:"◎", color:C.gold,   tag:"WRAP Training",       title:"WRAP Seminars I, II & III",
    desc:"Build your personal wellness plan in Seminar I. Earn your facilitator credential in Seminar II. Advance to Lead ALF status in Seminar III. Open to individuals and organizations alike.",
    price:"From $325/person" },
  { icon:"△", color:"#6B7FA3",tag:"Mental Health",        title:"Mental Health First Aid",
    desc:"8-hour nationally certified training to recognize and respond to mental health crises. For individuals, teams, and entire organizations. 10% off for Briteline Collective members.",
    price:"$250/person" },
  { icon:"□", color:C.forest, tag:"Peer Support",         title:"Forensic Peer Consulting",
    desc:"One-on-one and organizational peer support grounded in lived experience. For individuals navigating reentry, recovery, or trauma — and for agencies building peer support capacity.",
    price:"Custom engagement" },
  { icon:"✦", color:C.terra,  tag:"CJ Reform",            title:"Criminal Justice Consulting",
    desc:"Institutional reform consulting for correctional facilities, government agencies, and community organizations. Dignity as the standard. Recovery as a measurable outcome.",
    price:"Custom engagement" },
  { icon:"◇", color:"#8B6FA3",tag:"CIT Training",         title:"Crisis De-escalation & CIT",
    desc:"Trauma and the Prisoner Experience — practical, evidence-based training for corrections staff and law enforcement drawing on 28 years of lived experience inside the system.",
    price:"Custom engagement" },
  { icon:"○", color:"#6B8F71",tag:"Program Design",       title:"Reentry Program Development",
    desc:"End-to-end design of reentry programs addressing housing, employment, mental health, family reunification, and community reintegration — built by people who navigated all of it.",
    price:"Custom engagement" },
]

export default function Services() {
  return (
    <section id="s-services" className="light-section section-pad">
      <div className="container">
        <div style={{ textAlign:"center", marginBottom:52 }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:18, marginBottom:16 }}>
            <div style={{ width:48, height:1, background:`linear-gradient(to right,transparent,${C.gold}50)` }}/>
            <p className="eyebrow">What We Offer</p>
            <div style={{ width:48, height:1, background:`linear-gradient(to left,transparent,${C.gold}50)` }}/>
          </div>
          <h2 className="serif" style={{ fontSize:"clamp(32px,4vw,52px)", fontWeight:300, color:C.ink, lineHeight:1.1, marginBottom:16 }}>
            Services for individuals and organizations —<br/>
            <em style={{ color:C.gold }}>from personal wellness to systems change</em>
          </h2>
          <p style={{ fontFamily:"'Jost',sans-serif", fontSize:15, fontWeight:300, color:C.stone, lineHeight:1.85, maxWidth:620, margin:"0 auto" }}>
            Our multidisciplinary team brings peer support, wellness training, forensic consulting, and criminal justice expertise to every engagement — wherever you are on the journey.
          </p>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16 }}>
          {SERVICES.map(svc => (
            <div key={svc.title} className="card" style={{ overflow:"hidden" }}>
              <div style={{ background:`${svc.color}15`, borderBottom:`1px solid ${svc.color}25`, padding:"18px 22px", display:"flex", alignItems:"center", gap:10 }}>
                <span style={{ fontSize:20, color:svc.color }}>{svc.icon}</span>
                <span style={{ fontFamily:"'Jost',sans-serif", fontSize:10, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:svc.color }}>{svc.tag}</span>
              </div>
              <div style={{ padding:"20px 22px" }}>
                <h4 className="serif" style={{ fontSize:20, fontWeight:500, color:C.ink, marginBottom:10, lineHeight:1.2 }}>{svc.title}</h4>
                <p style={{ fontFamily:"'Jost',sans-serif", fontSize:13, fontWeight:400, color:C.stone, lineHeight:1.7, marginBottom:14 }}>{svc.desc}</p>
                <div style={{ fontFamily:"'Jost',sans-serif", fontSize:12, fontWeight:600, color:svc.color, letterSpacing:"0.06em" }}>{svc.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
