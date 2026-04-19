import { C, CONTACT } from '../constants'

export default function PeerCJSection() {
  return (
    <section id="s-peer" className="light-section" style={{ padding:"80px 0" }}>
      <div className="container">
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:48 }}>
          {/* Peer Consulting */}
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:20 }}>
              <div style={{ width:36, height:1, background:C.forest }}/>
              <p className="eyebrow" style={{ color:C.forest }}>Forensic Peer Consulting</p>
            </div>
            <h3 className="serif" style={{ fontSize:"clamp(24px,3vw,38px)", fontWeight:300, color:C.ink, lineHeight:1.15, marginBottom:14 }}>
              A Decade of<br/><em style={{ color:"#C4903A" }}>Certified Excellence</em>
            </h3>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:14, fontWeight:400, color:C.stone, lineHeight:1.85, marginBottom:14 }}>
              BriteLine Collective delivers a specialized tier of Forensic Peer Consulting shaped by more than a decade of Certified Peer Support experience. Lee and Dennis began their work as part of the first cohort of Certified Peer Specialists ever trained within a Pennsylvania correctional facility.
            </p>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:14, fontWeight:400, color:C.stone, lineHeight:1.85, marginBottom:20 }}>
              Lee and Dennis also serve as PA DOC Crisis Intervention Training (CIT) Trainers — delivering trauma-informed instruction on the prisoner experience to corrections staff. Services available for both institutions and individuals.
            </p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:20 }}>
              {["Certified Forensic Peer Specialists since 2013","PA DOC CIT Trainers","First cohort CPS inside PA state prison"].map(tag => (
                <span key={tag} style={{ fontFamily:"'Jost',sans-serif", fontSize:10, fontWeight:600, letterSpacing:"0.07em", textTransform:"uppercase", color:C.forest, background:`${C.forest}10`, border:`1px solid ${C.forest}25`, padding:"3px 10px", borderRadius:20 }}>{tag}</span>
              ))}
            </div>
            <a href={`mailto:${CONTACT.email}?subject=Forensic Peer Consulting Inquiry`} className="btn-forest">Contact Us</a>
          </div>

          {/* Criminal Justice */}
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:20 }}>
              <div style={{ width:36, height:1, background:C.terra }}/>
              <p className="eyebrow" style={{ color:C.terra }}>Criminal Justice Advocacy</p>
            </div>
            <div style={{ display:"inline-flex", alignItems:"center", gap:10, marginBottom:16, padding:"8px 16px", background:`${C.terra}12`, border:`2px solid ${C.terra}`, borderRadius:4 }}>
              <span style={{ fontSize:14, color:C.terra }}>★</span>
              <span style={{ fontFamily:"'Jost',sans-serif", fontSize:11, fontWeight:700, letterSpacing:"0.07em", textTransform:"uppercase", color:C.terra }}>Part of the First Certified Peer Support Specialists Inside a State Prison</span>
            </div>
            <h3 className="serif" style={{ fontSize:"clamp(24px,3vw,38px)", fontWeight:300, color:C.ink, lineHeight:1.15, marginBottom:14 }}>
              Architects of<br/><em style={{ color:C.terra }}>Systemic Justice</em>
            </h3>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:14, fontWeight:400, color:C.stone, lineHeight:1.85, marginBottom:14 }}>
              The foundation of BriteLine's criminal justice work is lived experience — 28 combined years inside the Pennsylvania prison system, wrongfully convicted and steadfastly resistant to the idea that the system had the final word.
            </p>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:14, fontWeight:400, color:C.stone, lineHeight:1.85, marginBottom:20 }}>
              As HEAL PA Co-Chairs, Lee and Dennis co-authored Pennsylvania's blueprint for trauma-informed criminal justice reform. They consult with correctional facilities, courts, government agencies, and community organizations to embed dignity and recovery as measurable outcomes.
            </p>
            <a href={`mailto:${CONTACT.email}?subject=Criminal Justice Consulting Inquiry`} className="btn-forest" style={{ background:C.terra }}>Engage the Experts</a>
          </div>
        </div>
      </div>
    </section>
  )
}
