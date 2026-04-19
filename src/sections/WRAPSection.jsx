import { useState } from 'react'
import { C } from '../constants'

const SEMINARS = [
  { num:"I",   tag:"Foundation",  format:"Virtual & In-Person", price:"$325 virtual / $350 in-person", dur:"2 days", seats:"Up to 20", color:C.gold,
    desc:"The foundational WRAP experience — and the required prerequisite for all further WRAP training. Individuals build their own personalized Wellness Recovery Action Plan in a supportive peer group. Also available for organizations seeking employee wellness programming.",
    outcomes:["A completed, personalized WRAP document you own and keep","Your own wellness toolbox, daily plan, and crisis plan","Tools to identify triggers and early warning signs","Connection to a peer community that understands the journey","Your foundation for Seminar II facilitator training"],
    note:"Participation and sharing are always voluntary. Every WRAP is unique — because every life is unique." },
  { num:"II",  tag:"Facilitator", format:"In-Person",            price:"$1,000",                       dur:"3 days", seats:"Up to 16", color:"#C4903A",
    desc:"Open to individuals and organizations alike. If you want to become a certified WRAP Facilitator — whether you work for an agency or are pursuing it independently — Seminar II is your pathway. In-person training with direct practice, observation, and feedback. Prerequisite: Seminar I.",
    outcomes:["Skills and confidence to facilitate WRAP Seminar I","Direct practice with observation and feedback","Understanding of AHP facilitator credentialing requirements","Co-facilitation strategies for peer-led groups","Pathway toward Advanced Level Facilitator (ALF) status"],
    note:"Prerequisite: Completion of WRAP Seminar I. In-person format allows the depth of practice this training requires." },
  { num:"III", tag:"Advanced",    format:"Contact for Information", price:"Contact Us",                dur:"4 days", seats:"By eligibility", color:C.forest,
    desc:"The highest level of WRAP facilitation training available. Open to any certified WRAP Facilitator — individuals or organizational staff — pursuing Advanced Level Facilitator (ALF) status. Contact us to discuss eligibility, availability, and pricing.",
    outcomes:["Advanced facilitation skills for complex and institutional settings","Pathway to Advanced Level Facilitator (ALF) credential through AHP","Capacity to train and mentor other WRAP facilitators","Recognition by Advocates for Human Potential (AHP)","Contact us to discuss eligibility and next steps"],
    note:"Contact us for information on eligibility, scheduling, and pricing for Seminar III." },
]

const FOUR_PARTS = [
  { num:"01", color:C.gold,    title:"Key Concepts of Recovery",         desc:"Five principles that guide the entire WRAP process:", bullets:["Hope","Personal Responsibility","Education","Self-Advocacy","Support"], note:"These remind us that recovery is possible and that each person has the power to shape their own path." },
  { num:"02", color:"#C4903A", title:"The Wellness Toolbox",              desc:"A personalized collection of tools, strategies, practices, people, and resources that help you stay well.", bullets:["Daily habits and grounding techniques","Community supports","Personal wellness strategies","Coping resources"], note:"Participants explore what works for them — because no two toolboxes look alike." },
  { num:"03", color:C.forest,  title:"The Wellness Recovery Action Plan", desc:"The structured plan you create for yourself. Six key sections:", bullets:["Daily Plan","Triggers & Action Steps","Early Warning Signs & Action Steps","When Things Are Breaking Down","Crisis Plan","Post-Crisis Plan"], note:"These sections help you understand your wellness, notice changes early, and know exactly what to do." },
  { num:"04", color:C.terra,   title:"Recovery Topics",                   desc:"Discussions and learning areas that deepen understanding and support growth:", bullets:["Building support & healthy boundaries","Motivation & coping skills","Lifestyle choices & community connection","Self-advocacy & managing stress"], note:"Recovery Topics help participants explore ideas, share experiences, and strengthen long-term wellness skills." },
]

export default function WRAPSection() {
  const [tab, setTab] = useState(0)
  const s = SEMINARS[tab]

  return (
    <section id="s-wrap" className="light-section" style={{ padding:"80px 0" }}>
      <div className="container">
        <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:48 }}>
          <div style={{ width:44, height:1, background:C.gold }}/>
          <p className="eyebrow">WRAP Training</p>
          <div style={{ flex:1, height:1, background:C.mist }}/>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, marginBottom:64 }}>
          <div>
            <h2 className="serif" style={{ fontSize:"clamp(30px,4vw,50px)", fontWeight:300, color:C.ink, lineHeight:1.08, marginBottom:16 }}>
              Wellness Recovery<br/><em style={{ color:C.gold }}>Action Plan</em>
            </h2>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:14, fontWeight:400, color:C.stone, lineHeight:1.85, marginBottom:14 }}>
              WRAP is a practical, evidence-based tool that helps people understand what supports their wellness, what challenges it, and how they want others to show up for them — especially during tough moments.
            </p>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:14, fontWeight:400, color:C.stone, lineHeight:1.85, marginBottom:14 }}>
              It is a personal plan you create for yourself, often alongside peers, that guides how you care for your wellbeing every day and how you want to be supported when life feels overwhelming. Every WRAP looks different because every person's life, culture, and experiences are different.
            </p>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:14, fontWeight:400, color:C.stone, lineHeight:1.85 }}>
              WRAP began in the mental health community, but people now use it for many reasons — managing health conditions, navigating substance use recovery, healing from trauma, living with chronic pain, moving through major life changes, or simply wanting a more intentional approach to wellness. At Briteline, <strong style={{ color:C.forest }}>WRAP is referred to as a GPS to find and live your best life every day.</strong>
            </p>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:C.stone, marginBottom:8 }}>The Four Core Parts of WRAP</p>
            {FOUR_PARTS.map(part => (
              <div key={part.num} style={{ background:C.card, border:`1px solid ${C.mist}`, borderLeft:`4px solid ${part.color}`, borderRadius:4, padding:"16px 20px" }}>
                <div style={{ display:"flex", gap:14, alignItems:"flex-start" }}>
                  <div className="serif" style={{ fontSize:28, fontWeight:300, color:part.color, lineHeight:1, opacity:0.4, flexShrink:0, minWidth:36 }}>{part.num}</div>
                  <div>
                    <h4 className="serif" style={{ fontSize:17, fontWeight:500, color:C.ink, marginBottom:4 }}>{part.title}</h4>
                    <p style={{ fontFamily:"'Jost',sans-serif", fontSize:12, fontWeight:400, color:C.stone, lineHeight:1.6 }}>{part.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Training Ladder */}
        <div style={{ borderTop:`1px solid ${C.mist}`, paddingTop:48 }}>
          <p className="eyebrow" style={{ textAlign:"center", marginBottom:20 }}>The Training Ladder</p>
          <div style={{ display:"flex", gap:10, justifyContent:"center", marginBottom:32 }}>
            {SEMINARS.map((sem,i) => (
              <button key={i} onClick={() => setTab(i)}
                style={{ padding:"12px 28px", borderRadius:2, border:`1.5px solid ${tab===i?sem.color:C.mist}`, background:tab===i?`${sem.color}15`:"transparent", color:tab===i?sem.color:C.stone, fontFamily:"'Jost',sans-serif", fontSize:12, fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", cursor:"pointer", transition:"all 0.25s" }}>
                <div>Seminar {sem.num} — {sem.tag}</div>
                <div style={{ fontSize:10, fontWeight:400, opacity:0.75, marginTop:3 }}>{sem.format}</div>
              </button>
            ))}
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:36 }}>
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:14 }}>
                <div className="serif" style={{ width:42, height:42, borderRadius:"50%", background:`${s.color}20`, border:`1.5px solid ${s.color}45`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:19, fontWeight:500, color:s.color }}>{s.num}</div>
                <div>
                  <div className="serif" style={{ fontSize:21, fontWeight:500, color:C.ink }}>Seminar {s.num} — {s.tag}</div>
                  <div style={{ fontFamily:"'Jost',sans-serif", fontSize:11, color:s.color, fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", marginTop:2 }}>{s.format} · {s.dur} · {s.price}</div>
                </div>
              </div>
              <p style={{ fontFamily:"'Jost',sans-serif", fontSize:14, fontWeight:400, color:C.stone, lineHeight:1.85, marginBottom:16 }}>{s.desc}</p>
              <p style={{ fontFamily:"'Jost',sans-serif", fontSize:12, fontWeight:400, color:C.stone, lineHeight:1.65, fontStyle:"italic", padding:"12px 16px", background:`${s.color}08`, borderLeft:`2px solid ${s.color}40`, borderRadius:2 }}>{s.note}</p>
            </div>
            <div style={{ background:C.card, border:`1px solid ${C.mist}`, borderRadius:4, overflow:"hidden" }}>
              <div style={{ background:`${s.color}15`, borderBottom:`1px solid ${s.color}25`, padding:"11px 18px" }}>
                <span style={{ fontFamily:"'Jost',sans-serif", fontSize:11, fontWeight:600, letterSpacing:"0.12em", textTransform:"uppercase", color:s.color }}>What You'll Leave With</span>
              </div>
              <div style={{ padding:"14px 18px" }}>
                {s.outcomes.map((o,i) => (
                  <div key={i} style={{ display:"flex", gap:10, alignItems:"flex-start", padding:"8px 0", borderBottom:i<s.outcomes.length-1?`1px solid ${C.mist}`:"none" }}>
                    <span style={{ color:s.color, flexShrink:0, fontSize:10, marginTop:3 }}>✓</span>
                    <p style={{ fontFamily:"'Jost',sans-serif", fontSize:13, fontWeight:400, color:C.stone, lineHeight:1.6 }}>{o}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
