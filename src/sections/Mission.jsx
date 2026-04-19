import { C } from '../constants'

export default function Mission() {
  return (
    <section className="alt-section section-pad">
      <div className="container">
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"center" }}>
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:20 }}>
              <div style={{ width:36, height:1, background:C.gold }}/>
              <p className="eyebrow">Our Mission</p>
            </div>
            <h2 className="serif" style={{ fontSize:"clamp(32px,4vw,52px)", fontWeight:300, color:C.ink, lineHeight:1.08, marginBottom:20 }}>
              flip the switch and<br/><em style={{ color:C.gold }}>illuminate the BriteLine.</em>
            </h2>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:15, fontWeight:400, color:C.stone, lineHeight:1.85, marginBottom:14 }}>
              At Briteline Collective, we meet people exactly where they are — with respect, curiosity, and faith in the wisdom their lives have already taught them. We support people in shaping the tools for their own healing, growth, and transformation.
            </p>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:15, fontWeight:400, color:C.stone, lineHeight:1.85, marginBottom:14 }}>
              We believe every person has a bright line leading them forward — toward purpose, freedom, and fulfillment. For many, that line is too dim to see clearly. Briteline Collective exists to help people find it, follow it, and live it.
            </p>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:15, fontWeight:400, color:C.stone, lineHeight:1.85 }}>
              Because people come first. Always.
            </p>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
            {[
              { n:"400+", label:"WRAP seminars facilitated across corrections, healthcare, and community settings", color:C.gold },
              { n:"100+", label:"Facilitators and peer specialists trained and credentialed through our programs", color:C.forest },
              { n:"28",   label:"Years of combined lived experience inside the Pennsylvania prison system", color:C.terra },
              { n:"10+",  label:"States where their WRAP work is formally recognized on judicial letterhead", color:"#8B6FA3" },
            ].map(item => (
              <div key={item.n} style={{ display:"flex", gap:20, alignItems:"center", padding:"18px 22px", background:"#FFFFFF", border:`1px solid ${C.mist}`, borderLeft:`3px solid ${item.color}`, borderRadius:4 }}>
                <div className="serif" style={{ fontSize:36, fontWeight:300, color:item.color, minWidth:64, lineHeight:1 }}>{item.n}</div>
                <p style={{ fontFamily:"'Jost',sans-serif", fontSize:13, fontWeight:400, color:C.stone, lineHeight:1.55 }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
