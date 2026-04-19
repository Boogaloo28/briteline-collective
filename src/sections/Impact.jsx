import { C, IMG } from '../constants'

export default function Impact() {
  return (
    <section id="s-impact" className="light-section" style={{ padding:"80px 0" }}>
      <div className="container">
        <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:44 }}>
          <div style={{ width:44, height:1, background:C.gold }}/>
          <p className="eyebrow">Impact</p>
          <div style={{ flex:1, height:1, background:C.mist }}/>
        </div>

        {/* Eric Joseph */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:52, alignItems:"center", marginBottom:52 }}>
          <div className="photo-card" style={{ boxShadow:"0 8px 32px rgba(0,0,0,0.15)" }}>
            <img src={IMG.eric} alt="Eric Joseph — free after 42 years" style={{ width:"100%", height:360, objectFit:"cover", objectPosition:"center 20%" }}/>
            <div className="photo-overlay"/>
            <div style={{ position:"absolute", top:16, left:16, padding:"6px 14px", background:`${C.gold}20`, border:`1.5px solid ${C.gold}50`, borderRadius:4 }}>
              <span style={{ fontFamily:"'Jost',sans-serif", fontSize:10, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:C.gold }}>42 Years · Exonerated</span>
            </div>
            <div className="photo-caption">Eric Joseph — free after 42 years. Lee and Dennis advocated for his exoneration from inside.</div>
          </div>
          <div>
            <h2 className="serif" style={{ fontSize:"clamp(28px,4vw,46px)", fontWeight:300, color:C.ink, lineHeight:1.1, marginBottom:16 }}>
              The work that started<br/><em style={{ color:C.gold }}>inside the walls</em>
            </h2>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:14, fontWeight:400, color:C.stone, lineHeight:1.85, marginBottom:14 }}>
              Before there was a Briteline Collective, there was the work. Lee and Dennis served as jailhouse lawyers, peer specialists, wellness advocates, and program builders — inside the Pennsylvania prison system for 28 years.
            </p>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:14, fontWeight:400, color:C.stone, lineHeight:1.85, marginBottom:20 }}>
              Eric Joseph is the most visible result of that work. After 42 years of wrongful incarceration, Eric walked free — in part because of advocacy that began with two men who refused to let the system have the final word.
            </p>
            <div style={{ padding:"18px 22px", background:C.card, border:`1px solid ${C.mist}`, borderLeft:`3px solid ${C.gold}`, borderRadius:4 }}>
              <p className="serif" style={{ fontSize:17, fontWeight:300, color:C.ink, lineHeight:1.65, fontStyle:"italic" }}>
                "The advocacy that freed Eric Joseph after 42 years started the same way it always starts — with a person who refused to stop believing."
              </p>
            </div>
          </div>
        </div>

        {/* Who We Serve */}
        <div id="s-who-serve" className="forest-section" style={{ padding:"44px 40px", borderRadius:4 }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 2fr", gap:44, alignItems:"center" }}>
            <div>
              <p className="eyebrow" style={{ color:"rgba(196,168,50,0.8)", marginBottom:12 }}>Who We Serve</p>
              <h3 className="serif" style={{ fontSize:"clamp(26px,3.5vw,42px)", fontWeight:300, color:"#FFFFFF", lineHeight:1.1, marginBottom:12 }}>
                Every person <em style={{ color:C.gold }}>has a bright line</em> leading forward.
              </h3>
              <p style={{ fontFamily:"'Jost',sans-serif", fontSize:13, fontWeight:400, color:"rgba(245,240,232,0.82)", lineHeight:1.75 }}>
                Our mission is to help every person flip the switch and illuminate the BriteLine.
              </p>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
              {[
                { label:"Corrections Professionals",     desc:"DOC staff, officers, administrators" },
                { label:"Peer Support Practitioners",    desc:"WRAP facilitators and peer specialists" },
                { label:"Reentry Organizations",         desc:"Programs supporting justice-involved individuals" },
                { label:"Healthcare & Social Services",  desc:"Social workers, counselors, community health" },
                { label:"Community Organizations",       desc:"Nonprofits, faith communities, civic groups" },
                { label:"Individuals Seeking Transformation", desc:"Anyone ready to build their own WRAP" },
              ].map(item => (
                <div key={item.label} style={{ padding:"14px 16px", background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:4 }}>
                  <div style={{ fontFamily:"'Jost',sans-serif", fontSize:13, fontWeight:600, color:"#FFFFFF", marginBottom:3 }}>{item.label}</div>
                  <p style={{ fontFamily:"'Jost',sans-serif", fontSize:12, fontWeight:300, color:"rgba(245,240,232,0.82)", lineHeight:1.55 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
