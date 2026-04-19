import { C, IMG } from '../constants'

const TL = [
  { year:"1993",         label:"Wrongfully Convicted",          color:"#8B7040", summary:"Sentenced to life without parole for a crime they steadfastly maintained they did not commit — entering the system with no prior record." },
  { year:"1993–2021",    label:"Scholars, Advocates & Innovators", color:"#6B8F71", summary:"Built programs, ran an informal legal clinic, became Certified Peer Support Specialists, co-founded the Life Enhancement Senior Center, and integrated WRAP, yoga, and creative arts into daily life." },
  { year:"Feb 12, 2021", label:"Clemency & Release",            color:C.gold,    summary:"With clemency championed by then–Lieutenant Governor John Fetterman, Governor Tom Wolf granted their release — a defining moment in Pennsylvania's conversation on life sentences and second chances." },
  { year:"2021–Present", label:"Pioneering Wellness Leadership", color:"#C4903A", summary:"Became Lead Advanced Level WRAP Facilitators. Made history at the PA DOC Training Academy. Co-launched the nation's first WRAP Center of Distinction, recognized by AHP." },
  { year:"The Name",     label:"The Origin of BriteLine",       color:C.forest,  summary:"A bright path cast both behind them and before them — a spiritual GPS pointing toward purpose, freedom, and fulfillment. Everyone has a BriteLine leading forward; for many it is too dim to see clearly." },
]

export default function Journey() {
  return (
    <section id="s-journey" className="dark-section" style={{ padding:"78px 0", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0, background:`radial-gradient(ellipse at 15% 50%,${C.forest}18 0%,transparent 50%)`, pointerEvents:"none" }}/>
      <div className="container" style={{ position:"relative", zIndex:1 }}>
        <div style={{ textAlign:"center", marginBottom:52 }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:18, marginBottom:18 }}>
            <div style={{ width:48, height:1, background:`linear-gradient(to right,transparent,${C.gold}50)` }}/>
            <p className="eyebrow">Following the BriteLine</p>
            <div style={{ width:48, height:1, background:`linear-gradient(to left,transparent,${C.gold}50)` }}/>
          </div>
          <h2 className="serif" style={{ fontSize:"clamp(32px,5vw,56px)", fontWeight:300, color:"#FFFFFF", lineHeight:1.08, marginBottom:14 }}>
            Where the line behind us<br/><em style={{ color:C.gold }}>illuminates the path ahead</em>
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ position:"relative", maxWidth:820, margin:"0 auto 52px" }}>
          <div style={{ position:"absolute", left:16, top:0, bottom:0, width:1, background:`linear-gradient(to bottom,transparent,${C.gold}40,transparent)` }}/>
          <div style={{ display:"flex", flexDirection:"column", gap:20, paddingLeft:52 }}>
            {TL.map((item,i) => (
              <div key={i} style={{ position:"relative" }}>
                <div style={{ position:"absolute", left:-44, top:6, width:12, height:12, borderRadius:"50%", background:item.color, border:`2px solid ${item.color}`, boxShadow:`0 0 12px ${item.color}50` }}/>
                <div style={{ padding:"20px 26px", background:"rgba(255,255,255,0.04)", border:`1px solid ${item.color}25`, borderLeft:`3px solid ${item.color}`, borderRadius:4 }}>
                  <p style={{ fontFamily:"'Jost',sans-serif", fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:`${item.color}`, marginBottom:6 }}>{item.year}</p>
                  <h4 className="serif" style={{ fontSize:22, fontWeight:500, color:"#FFFFFF", marginBottom:8, lineHeight:1.2 }}>{item.label}</h4>
                  <p style={{ fontFamily:"'Jost',sans-serif", fontSize:13, fontWeight:400, color:"rgba(245,240,232,0.82)", lineHeight:1.7 }}>{item.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vermont / MEC section */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:44, maxWidth:900, margin:"0 auto" }}>
          <div className="photo-card" style={{ boxShadow:"0 8px 32px rgba(0,0,0,0.4)" }}>
            <img src={IMG.vermont} alt="Lee and Dennis in Vermont with Mary Ellen Copeland" style={{ width:"100%", height:300, objectFit:"cover", objectPosition:"center 30%" }}/>
            <div className="photo-overlay"/>
            <div className="photo-caption">Vermont — visiting Mary Ellen Copeland, originator of WRAP</div>
          </div>
          <div style={{ display:"flex", flexDirection:"column", justifyContent:"center" }}>
            <h3 className="serif" style={{ fontSize:"clamp(22px,3vw,34px)", fontWeight:300, color:"#FFFFFF", lineHeight:1.2, marginBottom:14 }}>
              The relationship<br/><em style={{ color:C.gold }}>that changed WRAP</em>
            </h3>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:14, fontWeight:400, color:"rgba(245,240,232,0.85)", lineHeight:1.85, marginBottom:14 }}>
              Lee and Dennis visited Mary Ellen Copeland — the originator of WRAP — in Vermont. That relationship led to their recognition as the architects of the first WRAP Center of Distinction and the first Licensed Partner in the new era of WRAP.
            </p>
            <div style={{ padding:"16px 20px", background:`${C.gold}10`, border:`1px solid ${C.gold}20`, borderLeft:`3px solid ${C.gold}`, borderRadius:4 }}>
              <p className="serif" style={{ fontSize:17, fontWeight:300, color:"#F5F0E8", lineHeight:1.65, fontStyle:"italic" }}>
                "Two people on opposite sides of the same door — and they found their way to the same room."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
