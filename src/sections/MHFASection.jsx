import { C, CONTACT } from '../constants'

const ALGEE = [
  { step:"A", full:"Assess",    short:"Assess for risk of suicide or harm",   desc:"MHFA teaches you to ask directly, calmly, and without judgment whether the person may be at risk of harming themselves or others." },
  { step:"L", full:"Listen",    short:"Listen nonjudgmentally",                desc:"Create space. Be present. Let the person feel heard without offering unsolicited advice or minimizing their experience." },
  { step:"G", full:"Give",      short:"Give reassurance and information",      desc:"Provide hope and accurate information about mental health. Reassure the person that help is available and recovery is possible." },
  { step:"E", full:"Encourage", short:"Encourage appropriate professional help",desc:"Support the person in seeking help from a mental health professional, primary care provider, or crisis service." },
  { step:"E", full:"Encourage", short:"Encourage self-help and support strategies",desc:"Encourage connection with support networks, peer specialists, and evidence-based self-help strategies like WRAP." },
]

export default function MHFASection() {
  return (
    <section id="s-mhfa" className="light-section" style={{ padding:"80px 0" }}>
      <div className="container">
        <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:44 }}>
          <div style={{ width:44, height:1, background:C.gold }}/>
          <p className="eyebrow">Mental Health First Aid</p>
          <div style={{ flex:1, height:1, background:C.mist }}/>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:52, alignItems:"start" }}>
          <div>
            <h2 className="serif" style={{ fontSize:"clamp(28px,4vw,46px)", fontWeight:300, color:C.ink, lineHeight:1.1, marginBottom:16 }}>
              When someone you know<br/><em style={{ color:C.gold }}>is struggling</em>
            </h2>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:14, fontWeight:400, color:C.stone, lineHeight:1.85, marginBottom:14 }}>
              Mental Health First Aid is an 8-hour nationally certified training that teaches you how to recognize signs of mental health challenges and substance use disorders, and how to respond with compassion and confidence.
            </p>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:14, fontWeight:400, color:C.stone, lineHeight:1.85, marginBottom:20 }}>
              Delivered by certified MHFA instructors, this training is available to individuals, organizations, and entire teams.
            </p>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10, marginBottom:24 }}>
              {[
                { label:"Investment", value:"$250", sub:"per seat · 10% off for members" },
                { label:"Duration",   value:"8",    sub:"hours · 1 day" },
                { label:"Capacity",   value:"30",   sub:"max participants per session" },
              ].map(stat => (
                <div key={stat.label} style={{ padding:"16px", background:C.card, border:`1px solid ${C.mist}`, borderRadius:4, textAlign:"center" }}>
                  <div className="serif" style={{ fontSize:28, fontWeight:300, color:C.gold, lineHeight:1, marginBottom:4 }}>{stat.value}</div>
                  <div style={{ fontFamily:"'Jost',sans-serif", fontSize:10, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:C.stone, marginBottom:3 }}>{stat.label}</div>
                  <div style={{ fontFamily:"'Jost',sans-serif", fontSize:11, color:C.stone }}>{stat.sub}</div>
                </div>
              ))}
            </div>
            <div style={{ marginBottom:14, padding:"12px 16px", background:`${C.forest}10`, border:`1px solid ${C.forest}25`, borderRadius:4 }}>
              <p style={{ fontFamily:"'Jost',sans-serif", fontSize:12, fontWeight:500, color:C.forest }}>Briteline Collective members save 10% on Mental Health First Aid. Payment plans available — 2 or 3 installments. Ask us when you register.</p>
            </div>
            <a href={`mailto:${CONTACT.email}?subject=MHFA Registration Request`} className="btn-gold">Register / Request Info</a>
          </div>
          <div>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:C.stone, marginBottom:16 }}>The ALGEE Action Plan</p>
            <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
              {ALGEE.map((a,i) => (
                <div key={i} style={{ display:"flex", gap:0, background:C.card, border:`1px solid ${C.mist}`, borderRadius:4, overflow:"hidden" }}>
                  <div style={{ width:56, background:`${C.forest}15`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <div className="serif" style={{ fontSize:22, fontWeight:500, color:C.forest }}>{a.step}</div>
                  </div>
                  <div style={{ padding:"14px 18px" }}>
                    <div style={{ fontFamily:"'Jost',sans-serif", fontSize:11, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:C.forest, marginBottom:3 }}>{a.full}</div>
                    <p style={{ fontFamily:"'Jost',sans-serif", fontSize:13, fontWeight:400, color:C.stone, lineHeight:1.6 }}>{a.short}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
