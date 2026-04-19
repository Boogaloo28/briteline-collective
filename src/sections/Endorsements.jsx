import { useState } from 'react'
import { C, IMG } from '../constants'

const ENDORSERS = [
  {
    name:"Hon. Caroline Turner", title:"Judge, Court of Common Pleas",
    org:"First Judicial District of Pennsylvania · Philadelphia, PA",
    date:"April 26, 2025", color:"#8B6FA3",
    quote:"Lee and Dennis's service to the WRAP program has been recognized in Pennsylvania and 10 other states — Montana, New York, Vermont, South Carolina, North Carolina, Iowa, North Dakota, Ohio, Massachusetts, and California. The National Alliance of Mental Illness (NAMI) has recognized both Lee and Dennis as experts in WRAP.",
    stat:"10+ States", statLabel:"where their WRAP work is formally recognized by a sitting judge",
  },
  {
    name:"Hon. Stephanie M. Sawyer", title:"Judge, Court of Common Pleas",
    org:"First Judicial District of Pennsylvania · Philadelphia, PA",
    date:"May 1, 2025", color:C.gold,
    quote:"For the past three years the Horton Brothers have been resources I have used on my most difficult to reach defendants. Specifically, Marvin McMichael comes to mind as a gentleman who was transformed from an argumentative, non-productive person to an enlightened community leader working with troubled youth as a sports coach. I fully credit this transformation to the work of the Horton Brothers.",
    stat:"3 Years", statLabel:"Judge Sawyer has relied on the Hortons for her most difficult-to-reach defendants",
  },
  {
    name:"Jeffrey L. Bohn", title:"Executive Director",
    org:"Shining Light, Inc. · Annville, PA",
    date:"May 23, 2025", color:C.forest,
    quote:"In my 45 years of professional experience, I have rarely met individuals as principled, generous, and impactful as Dennis and Lee. Their impact resulted in measurable outcomes — including a 25% reduction in violent incidents among participants. They returned to prison not as residents, but as mentors and role models.",
    stat:"25%", statLabel:"Reduction in violent incidents at Shining Light Academy attributed to Lee and Dennis",
  },
]

export default function Endorsements() {
  const [active, setActive] = useState(0)
  const e = ENDORSERS[active]

  return (
    <section id="s-endorsements" className="alt-section" style={{ padding:"80px 0" }}>
      <div className="container">
        <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:44 }}>
          <div style={{ width:44, height:1, background:C.gold }}/>
          <p className="eyebrow">Letters of Endorsement</p>
          <div style={{ flex:1, height:1, background:C.mist }}/>
        </div>

        <div style={{ textAlign:"center", marginBottom:36 }}>
          <h2 className="serif" style={{ fontSize:"clamp(30px,4vw,50px)", fontWeight:300, color:C.ink, lineHeight:1.08, marginBottom:14 }}>
            What the people who know the work<br/><em style={{ color:C.gold }}>best have to say</em>
          </h2>
          <p style={{ fontFamily:"'Jost',sans-serif", fontSize:14, fontWeight:400, color:C.stone, lineHeight:1.8, maxWidth:580, margin:"0 auto" }}>
            Two sitting judges and a nonprofit executive with 45 years of experience — all writing to the Pennsylvania Board of Pardons within weeks of each other. All arriving at the same conclusion.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display:"flex", gap:10, justifyContent:"center", marginBottom:36, flexWrap:"wrap" }}>
          {ENDORSERS.map((en,i) => (
            <button key={i} onClick={() => setActive(i)}
              style={{ padding:"10px 20px", borderRadius:2, border:`1.5px solid ${active===i?en.color:C.mist}`, background:active===i?`${en.color}12`:C.card, fontFamily:"'Jost',sans-serif", fontSize:11, fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", color:active===i?en.color:C.stone, cursor:"pointer", transition:"all 0.25s" }}>
              {en.name.replace("Hon. ","")}
            </button>
          ))}
        </div>

        {/* Active endorsement */}
        <div key={active} style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:44 }}>
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:16, padding:"16px 20px", background:`${e.color}08`, border:`1px solid ${e.color}20`, borderRadius:4 }}>
              <div style={{ width:48, height:48, borderRadius:"50%", background:`${e.color}20`, border:`1px solid ${e.color}40`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <span className="serif" style={{ fontSize:22, color:e.color }}>⚖</span>
              </div>
              <div>
                <div className="serif" style={{ fontSize:18, fontWeight:500, color:C.ink, lineHeight:1.1 }}>{e.name}</div>
                <div style={{ fontFamily:"'Jost',sans-serif", fontSize:11, color:e.color, fontWeight:500, marginTop:2 }}>{e.title}</div>
                <div style={{ fontFamily:"'Jost',sans-serif", fontSize:11, color:C.stone }}>{e.date}</div>
              </div>
            </div>
            <div style={{ padding:"22px 26px", background:`${e.color}06`, border:`1px solid ${e.color}15`, borderRadius:4, marginBottom:14 }}>
              <div className="serif" style={{ fontSize:36, color:e.color, lineHeight:0.8, marginBottom:10, opacity:0.4 }}>"</div>
              <p className="serif" style={{ fontSize:17, fontWeight:300, color:C.ink, lineHeight:1.7, fontStyle:"italic" }}>{e.quote}</p>
            </div>
            <div style={{ fontFamily:"'Jost',sans-serif", fontSize:11, fontWeight:300, color:C.stone }}>{e.org}</div>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
            <div style={{ padding:"28px 24px", background:C.card, border:`1px solid ${C.mist}`, borderTop:`3px solid ${e.color}`, borderRadius:4, textAlign:"center" }}>
              <div className="serif" style={{ fontSize:52, fontWeight:300, color:e.color, lineHeight:1, marginBottom:8 }}>{e.stat}</div>
              <p style={{ fontFamily:"'Jost',sans-serif", fontSize:13, fontWeight:400, color:C.stone, lineHeight:1.65 }}>{e.statLabel}</p>
            </div>
            <div style={{ padding:"20px 24px", background:C.card, border:`1px solid ${C.mist}`, borderRadius:4 }}>
              <p style={{ fontFamily:"'Jost',sans-serif", fontSize:11, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:C.gold, marginBottom:12 }}>All Three Endorsers Confirm</p>
              {[
                "Part of the first cohort of Certified Peer Specialists trained inside a PA state prison",
                "WRAP recognized across 10+ states — documented on official judicial letterhead",
                "25% reduction in violent incidents at Shining Light Academy",
                "Trusted by two sitting judges for their most difficult-to-reach defendants",
                "Emmy Award — documentary of their story earned television's highest honor",
              ].map(item => (
                <div key={item} style={{ display:"flex", gap:9, alignItems:"flex-start", marginBottom:9 }}>
                  <span style={{ color:C.gold, flexShrink:0, fontSize:10, marginTop:2 }}>✦</span>
                  <p style={{ fontFamily:"'Jost',sans-serif", fontSize:12, fontWeight:400, color:C.stone, lineHeight:1.6 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
