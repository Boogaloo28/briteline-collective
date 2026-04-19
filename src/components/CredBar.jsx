const CREDS = [
  'Lead ALF Credential Holders',
  '400+ WRAP Seminars Facilitated',
  '100+ Facilitators Trained',
  'First WRAP Center of Distinction',
  'NAMI Ask the Expert',
  'Emmy Award Winners',
  'Forensic Peer Specialists',
  'HEAL PA Report Co-Authors',
  'PA DOC Training Academy',
  'Exoneration After 42 Years',
  'Criminal Justice Reform Leaders',
  'HEAL PA Co-Chairs',
  'Political Consultants & Senior Advisors',
]

export default function CredBar() {
  const items = [...CREDS, ...CREDS] // duplicate for seamless loop
  return (
    <div className="cred-bar">
      <div className="cred-track">
        {items.map((c, i) => (
          <div key={i} className="cred-item">
            <span>{c}</span>
            <span className="cred-dot"/>
          </div>
        ))}
      </div>
    </div>
  )
}
