import { C, IMG } from '../constants'

const PHOTOS = [
  { src:IMG.togetherCap,    label:"State Capitol",   caption:"Lee and Dennis at the Pennsylvania State Capitol — HEAL PA" },
  { src:IMG.togetherTrain1, label:"In the Room",     caption:"Both facilitators in the training room — whiteboard filling with participant-generated tools" },
  { src:IMG.togetherTrain2, label:"Mid-Session",     caption:"Mid-session — the seamless coordination that only comes from decades of shared work" },
]

export default function Together() {
  return (
    <section className="alt-section section-pad">
      <div className="container">
        <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:44 }}>
          <div style={{ width:44, height:1, background:C.gold }}/>
          <p className="eyebrow">The Brothers at Work</p>
          <div style={{ flex:1, height:1, background:C.mist }}/>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:52, alignItems:"start", marginBottom:52 }}>
          <div>
            <h2 className="serif" style={{ fontSize:"clamp(30px,4vw,48px)", fontWeight:300, color:C.ink, lineHeight:1.1, marginBottom:16 }}>
              From the training room<br/>to the State Capitol.<br/>
              <em style={{ color:C.gold }}>Always a unit.</em>
            </h2>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:14, fontWeight:400, color:C.stone, lineHeight:1.85, marginBottom:14 }}>
              The Horton brothers have always worked as a unit. What began as survival behind walls became a methodology, then a credential, then a movement. These are the moments in between.
            </p>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:14, fontWeight:400, color:C.stone, lineHeight:1.85, marginBottom:14 }}>
              BriteLine Collective delivers a specialized tier of Forensic Peer Consulting shaped by more than a decade of Certified Peer Support experience. Lee and Dennis began their work inside the Pennsylvania prison system as part of the first cohort of Certified Peer Specialists ever trained within a correctional facility.
            </p>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:14, fontWeight:400, color:C.stone, lineHeight:1.85 }}>
              Their impact was so significant that the PA Department of Corrections now airs commercials featuring both brothers to build buy-in from the incarcerated population. Today, they bring that same depth of expertise to the community.
            </p>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
            {PHOTOS.map((ph,i) => (
              <div key={i} className="photo-card" style={{ boxShadow:"0 6px 24px rgba(0,0,0,0.15)" }}>
                <img src={ph.src} alt={ph.caption} style={{ width:"100%", height:180, objectFit:"cover", objectPosition:"center 25%" }}/>
                <div className="photo-overlay"/>
                <div className="photo-caption">{ph.caption}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Co-facilitation */}
        <div style={{ padding:"32px 40px", background:C.card, border:`1px solid ${C.mist}`, borderLeft:`3px solid ${C.gold}`, borderRadius:4 }}>
          <p className="eyebrow" style={{ marginBottom:16 }}>Co-Facilitation in WRAP Seminars I, II & III</p>
          <p style={{ fontFamily:"'Jost',sans-serif", fontSize:14, fontWeight:400, color:C.stone, lineHeight:1.85, marginBottom:14 }}>
            Co-facilitation is a core fidelity element of WRAP training at every level. Across Seminar I, Seminar II, and Seminar III, every session is led by two certified facilitators working together in real time — whether delivered in person or virtual.
          </p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:12, marginTop:16 }}>
            {[
              "Both facilitators present and engaged throughout the session",
              "One capturing participant language while the other tracks group energy",
              "One guiding an activity while the other supports pacing and accessibility",
              "A shared rhythm built on trust, experience, and decades of WRAP methodology",
            ].map(item => (
              <div key={item} style={{ display:"flex", gap:10, alignItems:"flex-start" }}>
                <span style={{ color:C.gold, flexShrink:0, marginTop:2 }}>✦</span>
                <p style={{ fontFamily:"'Jost',sans-serif", fontSize:13, fontWeight:400, color:C.stone, lineHeight:1.6 }}>{item}</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:18, fontWeight:300, color:C.ink, lineHeight:1.65, fontStyle:"italic", marginTop:20 }}>
            "This seamless coordination isn't scripted. It's earned. And it's essential to maintaining the safety, integrity, and mutuality that define WRAP."
          </p>
        </div>
      </div>
    </section>
  )
}
