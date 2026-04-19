import { useState } from 'react'
import { C, IMG } from '../constants'

const LEE_PHOTOS = [
  { src:IMG.leeSenate,   label:"US Senate",      caption:"Lee Horton at the United States Senate Chambers",                        context:"The room where national policy is debated. Lee has been in it." },
  { src:IMG.leeDoc,      label:"PA DOC Academy", caption:"Lee outside the PA DOC Training Academy",                               context:"Formerly incarcerated — now training the officers." },
  { src:IMG.leeAdvisory, label:"Advisory Board", caption:"Lee with a fellow member of the Eastern Prison Education Advisory Board", context:"Peer to peer. Colleague to colleague." },
  { src:IMG.leeCampaign, label:"Campaign",       caption:"Lee at a Fetterman Senate campaign event",                              context:"From clemency recipient to campaign surrogate." },
  { src:IMG.leeVermont,  label:"Vermont",        caption:"Lee at Mary Ellen Copeland's son's maple syrup building — Vermont",     context:"A man enjoying the day, free." },
]

const DENNIS_PHOTOS = [
  { src:IMG.dennisPortrait, label:"Facilitating",  caption:'Dennis "Freedom" Horton — WRAP Seminar, mid-session' },
  { src:IMG.dennisFett,     label:"With Fetterman",caption:"Dennis with then-Lieutenant Governor John Fetterman — the man who championed their clemency" },
  { src:IMG.dennisCanvass,  label:"Canvassing",    caption:"Dennis canvassing — advocacy doesn't stop at the training room" },
  { src:IMG.dennisEveryday, label:"Everyday Lives",caption:"Dennis at the Everyday Lives: Values in Action conference" },
  { src:IMG.dennisTrain3,   label:"Mid-Session",   caption:"Dennis mid-thought — 400+ seminars. Not a lecture, a conversation." },
]

function FounderCard({ name, color, photos, credentials, bio, dimensions }) {
  const [active, setActive] = useState(0)
  const photo = photos[active]

  return (
    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:48, alignItems:"start" }}>
      {/* Photos */}
      <div>
        <div className="photo-card" style={{ marginBottom:10, boxShadow:"0 20px 60px rgba(0,0,0,0.55)", aspectRatio:"3/4", position:"relative" }}
          onClick={() => setActive(a => (a+1) % photos.length)}>
          <img key={active} src={photo.src} alt={photo.caption}
            style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 15%", animation:"fadeIn 0.4s ease" }}/>
          <div className="photo-overlay"/>
          {photo.context && (
            <div style={{ position:"absolute", top:14, right:14, maxWidth:200, padding:"7px 12px", background:"rgba(17,26,15,0.78)", backdropFilter:"blur(8px)", borderRadius:4, border:`1px solid ${color}22` }}>
              <p style={{ fontFamily:"'Jost',sans-serif", fontSize:11, fontWeight:300, color:"rgba(245,240,232,0.7)", lineHeight:1.5, fontStyle:"italic" }}>{photo.context}</p>
            </div>
          )}
          <div className="photo-caption">{photo.caption}</div>
        </div>
        {/* Thumbnails */}
        <div style={{ display:"grid", gridTemplateColumns:`repeat(${photos.length},1fr)`, gap:5, marginBottom:7 }}>
          {photos.map((ph,i) => (
            <div key={i} onClick={() => setActive(i)}
              style={{ height:50, border:`2px solid ${active===i?color:`${color}12`}`, borderRadius:3, overflow:"hidden", cursor:"pointer", opacity:active===i?1:0.5, transition:"all 0.25s" }}>
              <img src={ph.src} alt="" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 20%" }}/>
            </div>
          ))}
        </div>
        <div style={{ display:"flex", gap:4, flexWrap:"wrap" }}>
          {photos.map((ph,i) => (
            <button key={i} onClick={() => setActive(i)}
              style={{ padding:"4px 9px", borderRadius:20, background:active===i?`${color}20`:"transparent", border:`1px solid ${active===i?color:`${color}15`}`, color:active===i?color:"#6B7B5A", fontFamily:"'Jost',sans-serif", fontSize:9, fontWeight:700, letterSpacing:"0.07em", textTransform:"uppercase", cursor:"pointer" }}>
              {ph.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bio */}
      <div>
        <p style={{ fontFamily:"'Jost',sans-serif", fontSize:11, fontWeight:500, letterSpacing:"0.18em", textTransform:"uppercase", color, marginBottom:9 }}>Co-Founder</p>
        <h2 className="serif" style={{ fontSize:"clamp(32px,4.5vw,52px)", fontWeight:300, color:"#FFFFFF", lineHeight:1.08, marginBottom:14 }}>{name}</h2>
        <div style={{ width:44, height:2, background:color, marginBottom:20 }}/>
        <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:22 }}>
          {credentials.map(tag => (
            <span key={tag} style={{ fontFamily:"'Jost',sans-serif", fontSize:10, fontWeight:600, letterSpacing:"0.07em", textTransform:"uppercase", color, background:`${color}20`, border:`1px solid ${color}40`, padding:"3px 10px", borderRadius:20 }}>{tag}</span>
          ))}
        </div>
        {bio.map((para,i) => (
          <p key={i} style={{ fontFamily:"'Jost',sans-serif", fontSize:14, fontWeight:400, color:"rgba(245,240,232,0.85)", lineHeight:1.9, marginBottom:14 }}>{para}</p>
        ))}
        <div style={{ display:"flex", flexDirection:"column", gap:9, marginTop:8 }}>
          {dimensions.map(item => (
            <div key={item.label} style={{ display:"flex", gap:13, padding:"12px 16px", background:"rgba(45,90,61,0.15)", border:`1px solid ${item.color}25`, borderLeft:`3px solid ${item.color}50`, borderRadius:4 }}>
              <span style={{ fontSize:14, color:item.color, flexShrink:0, marginTop:1 }}>{item.icon}</span>
              <div>
                <div style={{ fontFamily:"'Jost',sans-serif", fontSize:10, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:item.color, marginBottom:2 }}>{item.label}</div>
                <p style={{ fontFamily:"'Jost',sans-serif", fontSize:12, fontWeight:400, color:"rgba(245,240,232,0.75)", lineHeight:1.6 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Founders() {
  return (
    <section id="s-founders" className="dark-section" style={{ padding:"88px 0 100px", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0, background:`radial-gradient(ellipse at 80% 20%,${C.forest}18 0%,transparent 50%)`, pointerEvents:"none" }}/>
      <div className="container" style={{ position:"relative", zIndex:1 }}>
        <div style={{ textAlign:"center", marginBottom:68 }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:20, marginBottom:20 }}>
            <div style={{ width:48, height:1, background:`linear-gradient(to right,transparent,${C.gold}50)` }}/>
            <p className="eyebrow">Meet the Founders</p>
            <div style={{ width:48, height:1, background:`linear-gradient(to left,transparent,${C.gold}50)` }}/>
          </div>
          <h2 className="serif" style={{ fontSize:"clamp(34px,5vw,60px)", fontWeight:300, color:"#FFFFFF", lineHeight:1.08 }}>
            Thirty years in the making.<br/><em style={{ color:C.gold }}>One mission between them.</em>
          </h2>
        </div>

        <FounderCard
          name="Lee Horton"
          color={C.gold}
          photos={LEE_PHOTOS}
          credentials={["Lead Advanced Level Facilitator","HEAL PA Co-Chair","Eastern Prison Education Advisory Board","Board Member — Shining Light, Inc."]}
          bio={[
            "Lee Horton is a co-founder of Briteline Collective and a Lead Advanced Level WRAP Facilitator. Following 28 years of wrongful incarceration, he has built a national platform at the intersection of wellness, criminal justice, and policy — grounded in the belief that transformation is always possible.",
            "Lee has facilitated over 400 WRAP seminars across corrections, healthcare, and community settings. He has stood at a United States Senate podium, trained DOC staff at the Pennsylvania Department of Corrections Training Academy, served on the Eastern Prison Education Advisory Board, and co-authored the HEAL PA Report.",
          ]}
          dimensions={[
            { icon:"◎", label:"The Policy Architect", color:C.gold,   desc:"US Senate. HEAL PA. Eastern Prison Education Advisory Board. The policy rooms know his name." },
            { icon:"△", label:"The Facilitator",      color:C.forest, desc:"Part of a small group of Lead ALF credential holders nationally. PA DOC Training Academy. 400+ seminars." },
            { icon:"✦", label:"The Advocate",         color:"#C4903A",desc:"Criminal justice reform. Exoneration work. The advocacy that brought Eric Joseph home after 42 years." },
          ]}
        />

        <div style={{ margin:"72px 0", display:"flex", alignItems:"center", gap:22 }}>
          <div style={{ flex:1, height:1, background:`${C.gold}15` }}/>
          <div style={{ width:7, height:7, borderRadius:"50%", background:`${C.gold}40` }}/>
          <div style={{ flex:1, height:1, background:`${C.gold}15` }}/>
        </div>

        <FounderCard
          name={'Dennis "Freedom" Horton'}
          color="#C4903A"
          photos={DENNIS_PHOTOS}
          credentials={["Lead Advanced Level Facilitator","Certified Forensic Peer Specialist","HEAL PA Co-Chair","PA DOC CIT Trainer","Certified Peer Support Specialist"]}
          bio={[
            'Dennis "Freedom" Horton is a co-founder of Briteline Collective, Lead Advanced Level WRAP Facilitator, and Certified Forensic Peer Support Specialist since 2013. Following 28 years of wrongful incarceration, he has become one of the most credentialed peer wellness and criminal justice advocates in the country.',
            "Dennis has facilitated over 400 WRAP seminars across corrections, healthcare, and community settings. He made history as one of the first formerly incarcerated individuals hired as subcontractors at the Pennsylvania Department of Corrections Training Academy — returning to a system he once navigated as a prisoner, this time as its teacher.",
            "As Co-Chair of the Governor's HEAL PA Corrections Committee, Dennis co-authored the definitive blueprint for trauma-informed criminal justice in Pennsylvania. He also serves as a PA DOC Crisis Intervention Training (CIT) Trainer, delivering education on trauma and the prisoner experience to corrections staff statewide.",
          ]}
          dimensions={[
            { icon:"◎", label:"The Facilitator",  color:"#C4903A", desc:"Part of a small group of Lead ALF credential holders nationally. 400+ seminars. The Facilitator Training Manual on every table." },
            { icon:"✦", label:"The Advocate",     color:C.terra,   desc:"Jailhouse lawyer. HEAL PA Co-Chair. PA DOC CIT Trainer. The advocacy that freed Eric Joseph after 42 years." },
            { icon:"△", label:"The Organizer",    color:C.forest,  desc:"Door to door. Thumbs up. Coalition to coalition. The work doesn\'t stop when the seminar ends." },
          ]}
        />

        <div style={{ marginTop:72, textAlign:"center", maxWidth:660, margin:"72px auto 0" }}>
          <div style={{ width:1, height:44, background:`linear-gradient(to bottom,${C.gold}45,transparent)`, margin:"0 auto 24px" }}/>
          <p className="serif" style={{ fontSize:"clamp(18px,2.8vw,28px)", fontWeight:300, color:"#FFFFFF", lineHeight:1.65, fontStyle:"italic", marginBottom:16 }}>
            "Together, they are part of a small group of Lead ALF credential holders nationally — and the living proof that the brightest line forward is the one you illuminate for someone else."
          </p>
          <p style={{ fontFamily:"'Jost',sans-serif", fontSize:11, fontWeight:600, letterSpacing:"0.14em", textTransform:"uppercase", color:C.gold }}>
            Briteline Collective · Philadelphia, PA
          </p>
        </div>
      </div>
    </section>
  )
}
