import { C, IMG, CONTACT } from '../constants'

export default function DOCTraining() {
  return (
    <section id="s-doc" className="dark-section" style={{ padding:"80px 0" }}>
      <div className="container">
        <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:44 }}>
          <div style={{ width:44, height:1, background:C.gold }}/>
          <p className="eyebrow">PA DOC Training Academy</p>
          <div style={{ flex:1, height:1, background:`${C.gold}20` }}/>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:52, alignItems:"center" }}>
          <div style={{ position:"relative" }}>
            <div className="photo-card" style={{ boxShadow:"0 16px 56px rgba(0,0,0,0.6)" }}>
              <img src={IMG.docGroup} alt="Lee and Dennis with PA DOC Crisis Intervention Training Team" style={{ width:"100%", height:420, objectFit:"cover", objectPosition:"center 25%" }}/>
              <div className="photo-overlay"/>
              <div style={{ position:"absolute", top:16, left:16, padding:"8px 16px", background:`${C.gold}20`, border:`1.5px solid ${C.gold}50`, borderRadius:4 }}>
                <span style={{ fontFamily:"'Jost',sans-serif", fontSize:11, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:C.gold }}>Historic First</span>
              </div>
              <div className="photo-caption">Lee and Dennis — the first formerly incarcerated individuals hired as subcontractors to train at the PA DOC Training Academy — with the Department's Crisis Intervention Team</div>
            </div>
          </div>
          <div>
            <h2 className="serif" style={{ fontSize:"clamp(28px,4vw,46px)", fontWeight:300, color:"#FFFFFF", lineHeight:1.1, marginBottom:14 }}>
              From the cell block<br/><em style={{ color:C.gold }}>to the Training Academy</em>
            </h2>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:14, fontWeight:400, color:"rgba(245,240,232,0.85)", lineHeight:1.85, marginBottom:14 }}>
              Lee and Dennis Horton made history as the first formerly incarcerated individuals hired as subcontractors to train at the Pennsylvania Department of Corrections Training Academy. Once on the other side of the system, they now stand before the people who operate it.
            </p>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:14, fontWeight:400, color:"rgba(245,240,232,0.85)", lineHeight:1.85, marginBottom:20 }}>
              Their instruction reframes authority into opportunity, turning firsthand knowledge of incarceration into tools that improve safety for staff and incarcerated people alike.
            </p>
            <div style={{ marginBottom:20, padding:"18px 22px", background:`${C.gold}08`, border:`1px solid ${C.gold}18`, borderRadius:4 }}>
              <p style={{ fontFamily:"'Jost',sans-serif", fontSize:11, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:C.gold, marginBottom:8 }}>The Workshop</p>
              <h4 className="serif" style={{ fontSize:18, fontWeight:500, color:"#F5F0E8", lineHeight:1.3, marginBottom:8 }}>
                <em>Trauma and the Prisoner Experience: A Common Sense Blueprint to Creating a Safer Environment for Staff and Inmates</em>
              </h4>
              <p style={{ fontFamily:"'Jost',sans-serif", fontSize:13, fontWeight:400, color:"rgba(245,240,232,0.75)", lineHeight:1.7 }}>
                Combining lived experience with evidence-based practice to improve safety, de-escalation, and mutual understanding across facilities.
              </p>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:9, marginBottom:20 }}>
              {[
                { label:"Trauma Recognition",      desc:"How trauma shows up in behavior and how to respond without escalating harm" },
                { label:"De-escalation",           desc:"Practical, repeatable steps officers can use in high-pressure moments" },
                { label:"Bystander Intervention",  desc:"How to safely intervene, document, and escalate when colleagues cross the line" },
                { label:"Staff Wellness",          desc:"Strategies to manage stress and decision-making under pressure" },
              ].map(item => (
                <div key={item.label} style={{ padding:"11px 14px", background:"rgba(255,255,255,0.05)", border:`1px solid ${C.gold}12`, borderLeft:`3px solid ${C.gold}30`, borderRadius:4 }}>
                  <div style={{ fontFamily:"'Jost',sans-serif", fontSize:11, fontWeight:700, color:"#F5F0E8", marginBottom:3 }}>{item.label}</div>
                  <p style={{ fontFamily:"'Jost',sans-serif", fontSize:11, fontWeight:400, color:"rgba(245,240,232,0.65)", lineHeight:1.55 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <a href={`mailto:${CONTACT.email}?subject=DOC Training Inquiry`} className="btn-gold">Book This Training</a>
          </div>
        </div>
      </div>
    </section>
  )
}
