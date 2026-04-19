import { C, IMG, CONTACT } from '../constants'

export default function MediaPress() {
  return (
    <section id="s-media" className="dark-section" style={{ padding:"80px 0 88px", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0, background:`radial-gradient(ellipse at 70% 30%,${C.gold}07 0%,transparent 55%)`, pointerEvents:"none" }}/>
      <div className="container" style={{ position:"relative", zIndex:1 }}>
        <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:56 }}>
          <div style={{ width:44, height:1, background:C.gold }}/>
          <p className="eyebrow">Press & Media</p>
          <div style={{ flex:1, height:1, background:`${C.gold}15` }}/>
        </div>

        {/* Emmy Award */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:48, alignItems:"center", marginBottom:56 }}>
          <div className="photo-card" style={{ boxShadow:"0 12px 44px rgba(0,0,0,0.55)", border:`1px solid ${C.gold}35` }}>
            <img src={IMG.emmy} alt="Lee and Dennis Horton at the Emmy Awards" style={{ width:"100%", height:420, objectFit:"cover", objectPosition:"center 20%" }}/>
            <div className="photo-overlay"/>
            <div style={{ position:"absolute", top:14, left:14, display:"flex", alignItems:"center", gap:8, padding:"6px 14px", background:`${C.gold}20`, border:`1.5px solid ${C.gold}60`, borderRadius:4 }}>
              <span style={{ fontSize:16 }}>🏆</span>
              <span style={{ fontFamily:"'Jost',sans-serif", fontSize:11, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:C.gold }}>Emmy Award Winner</span>
            </div>
            <div className="photo-caption">Lee and Dennis Horton with the director of their Emmy Award-winning documentary</div>
          </div>
          <div>
            <div style={{ display:"inline-flex", alignItems:"center", gap:10, marginBottom:18, padding:"8px 16px", background:`${C.gold}12`, border:`2px solid ${C.gold}40`, borderRadius:4 }}>
              <span style={{ fontSize:18 }}>🏆</span>
              <span style={{ fontFamily:"'Jost',sans-serif", fontSize:11, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:C.gold }}>Emmy Award — Outstanding Documentary</span>
            </div>
            <h3 className="serif" style={{ fontSize:"clamp(26px,3.5vw,44px)", fontWeight:300, color:"#FFFFFF", lineHeight:1.15, marginBottom:14 }}>
              Their story<br/><em style={{ color:C.gold }}>won an Emmy.</em>
            </h3>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:14, fontWeight:400, color:"rgba(245,240,232,0.85)", lineHeight:1.85, marginBottom:14 }}>
              The documentary featuring Lee and Dennis Horton's story — their wrongful conviction, 28 years of transformation behind bars, and their emergence as national leaders in peer wellness and criminal justice reform — won an Emmy Award.
            </p>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:14, fontWeight:400, color:"rgba(245,240,232,0.85)", lineHeight:1.85, marginBottom:20 }}>
              This recognition places their work not just within the wellness and criminal justice fields, but in the broader cultural conversation about justice, redemption, and what it means to transform adversity into purpose.
            </p>
          </div>
        </div>

        <div style={{ margin:"44px 0", display:"flex", alignItems:"center", gap:20 }}>
          <div style={{ flex:1, height:1, background:`${C.gold}15` }}/>
          <div style={{ width:5, height:5, borderRadius:"50%", background:`${C.gold}35` }}/>
          <div style={{ flex:1, height:1, background:`${C.gold}15` }}/>
        </div>

        {/* NAMI */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:44, alignItems:"center", marginBottom:52 }}>
          <div>
            <p className="eyebrow" style={{ marginBottom:16 }}>NAMI Ask the Expert</p>
            <h3 className="serif" style={{ fontSize:"clamp(24px,3vw,38px)", fontWeight:300, color:"#FFFFFF", lineHeight:1.15, marginBottom:14 }}>
              The Future of WRAP<br/><em style={{ color:C.gold }}>on the national stage</em>
            </h3>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:14, fontWeight:400, color:"rgba(245,240,232,0.85)", lineHeight:1.85, marginBottom:14 }}>
              Lee and Dennis Horton were featured on NAMI's Ask the Expert series alongside Lynn Miller, Director of WRAP at Advocates for Human Potential (AHP). The episode focused on the future of WRAP and the role of peer-led facilitation in expanding access to recovery-based frameworks.
            </p>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:14, fontWeight:400, color:"rgba(245,240,232,0.85)", lineHeight:1.85 }}>
              Being featured alongside AHP leadership on NAMI's platform represents national recognition at the highest level of the peer wellness field. They are architects of the first WRAP Center of Distinction, and the first Licensed Partner in the new era of WRAP.
            </p>
          </div>
          <div style={{ borderRadius:4, overflow:"hidden", boxShadow:"0 8px 32px rgba(0,0,0,0.5)", border:`1px solid ${C.gold}18` }}>
            <img src={IMG.nami} alt="NAMI Ask the Expert — Lee and Dennis Horton with Lynn Miller" style={{ width:"100%", display:"block" }}/>
          </div>
        </div>

        {/* Expert Profile */}
        <div style={{ background:`${C.gold}06`, border:`1px solid ${C.gold}18`, borderRadius:4, padding:"36px 44px" }}>
          <p className="eyebrow" style={{ marginBottom:18 }}>Expert Profile</p>
          <h3 className="serif" style={{ fontSize:"clamp(22px,3vw,36px)", fontWeight:300, color:"#FFFFFF", lineHeight:1.15, marginBottom:20 }}>
            Lee and Dennis Horton —<br/><em style={{ color:C.gold }}>WRAP Experts, Practitioners & Thought Leaders</em>
          </h3>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:28, marginBottom:22 }}>
            <div>
              <p style={{ fontFamily:"'Jost',sans-serif", fontSize:10, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:`${C.gold}70`, marginBottom:10 }}>Credentials & Roles</p>
              {["Certified Peer Support Specialists & Lead Advanced Level WRAP Facilitators","Part of the first cohort of CPS trained inside a PA state prison","PA DOC Crisis Intervention Training (CIT) Trainers","HEAL PA Co-Chairs — Corrections Committee","Emmy Award — documentary of their story recognized nationally"].map(item => (
                <div key={item} style={{ display:"flex", gap:9, alignItems:"flex-start", marginBottom:8 }}>
                  <span style={{ color:C.gold, flexShrink:0, marginTop:2, fontSize:10 }}>✦</span>
                  <p style={{ fontFamily:"'Jost',sans-serif", fontSize:13, fontWeight:400, color:"rgba(245,240,232,0.82)", lineHeight:1.6 }}>{item}</p>
                </div>
              ))}
            </div>
            <div>
              <p style={{ fontFamily:"'Jost',sans-serif", fontSize:10, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:`${C.gold}70`, marginBottom:10 }}>Facilitation Track Record</p>
              {[["400+","Total WRAP seminars across correctional, community, and clinical settings"],["100+","In-person WRAP Seminar I sessions inside correctional facilities"],["First","WRAP Center of Distinction — first Licensed Partner in the new era of WRAP"],["Dozens","WRAP II and III workshops for advanced peer support and implementation"]].map(([n,l]) => (
                <div key={n} style={{ display:"flex", gap:12, alignItems:"flex-start", marginBottom:10 }}>
                  <div className="serif" style={{ fontSize:28, fontWeight:300, color:C.gold, lineHeight:1, flexShrink:0, minWidth:52 }}>{n}</div>
                  <p style={{ fontFamily:"'Jost',sans-serif", fontSize:12, fontWeight:400, color:"rgba(245,240,232,0.82)", lineHeight:1.6, marginTop:4 }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding:"16px 20px", background:`${C.forest}12`, border:`1px solid ${C.forest}22`, borderRadius:4 }}>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:13, fontWeight:400, color:"rgba(245,240,232,0.85)", lineHeight:1.75 }}>
              Their expertise is rare: it pairs authentic lived experience with formal training, proven facilitation at scale, and institutional leadership. <strong style={{ color:"#FFFFFF", fontWeight:600 }}>Book them for WRAP facilitation, advanced peer support training, conference keynotes, or program development.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
