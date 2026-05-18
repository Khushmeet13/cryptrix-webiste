// src/components/FeesAndEconomics.tsx
import { useState } from "react";

const fees = [
  {
    id: "swap",
    label: "Swap Fee",
    value: 0.30,
    display: "0.30%",
    recipient: "Total per trade",
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.2)",
    border: "rgba(6,182,212,0.35)",
    bg: "rgba(6,182,212,0.07)",
    desc: "Applied to every trade executed on Cryptix DEX, distributed across the protocol.",
  },
  {
    id: "lp",
    label: "LP Share",
    value: 0.25,
    display: "0.25%",
    recipient: "Liquidity providers",
    color: "#10b981",
    glow: "rgba(16,185,129,0.2)",
    border: "rgba(16,185,129,0.35)",
    bg: "rgba(16,185,129,0.07)",
    desc: "83% of the swap fee flows directly to liquidity providers proportional to their pool share.",
  },
  {
    id: "protocol",
    label: "Protocol Fee",
    value: 0.05,
    display: "0.05%",
    recipient: "Treasury & dev",
    color: "#818cf8",
    glow: "rgba(129,140,248,0.2)",
    border: "rgba(129,140,248,0.35)",
    bg: "rgba(129,140,248,0.07)",
    desc: "17% funds ongoing protocol development, audits, and the Cryptix ecosystem treasury.",
  },
];

const TOTAL = 0.30;

export default function FeesAndEconomics() {
  const [active, setActive] = useState(null);

  return (
    <section
      className="relative py-22 overflow-hidden bg-[#01021f]"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=JetBrains+Mono:wght@300;400;500&display=swap');
        .fe-syne { font-family:'Syne',sans-serif; }
        .fe-mono { font-family:'JetBrains Mono',monospace; }
        @keyframes fe-fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fe-scan { 0%{transform:translateX(-100%)} 100%{transform:translateX(400%)} }
        @keyframes fe-barIn { from{width:0} to{width:var(--bar-w)} }
        .fe-anim { animation: fe-fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both; }
        .fe-row { transition: background 0.25s, border-color 0.25s, transform 0.25s; }
        .fe-row:hover { transform: translateX(6px); }
        .fe-pip { transition: transform 0.3s, box-shadow 0.3s; }
        .fe-row:hover .fe-pip { transform: scale(1.3); }
      `}</style>

      {/* Grid bg */}
      <svg style={{ position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.04,pointerEvents:"none" }}>
        <defs>
          <pattern id="fg" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M 56 0 L 0 0 0 56" fill="none" stroke="#4fc3f7" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#fg)"/>
      </svg>

      {/* Orbs */}
      <div style={{ position:"absolute",right:"5%",top:"20%",width:500,height:500,borderRadius:"50%",background:"#06b6d4",opacity:0.08,filter:"blur(110px)",pointerEvents:"none" }}/>
      <div style={{ position:"absolute",left:"8%",bottom:"15%",width:400,height:400,borderRadius:"50%",background:"#818cf8",opacity:0.1,filter:"blur(100px)",pointerEvents:"none" }}/>

      {/* Scanline */}
      <div style={{ position:"absolute",top:0,left:0,right:0,height:1,overflow:"hidden" }}>
        <div style={{ height:"100%",width:"30%",background:"linear-gradient(90deg,transparent,#06b6d4,transparent)",animation:"fe-scan 4s linear infinite" }}/>
      </div>

      <div style={{ position:"relative",zIndex:2,maxWidth:900,margin:"0 auto",padding:"0 24px" }}>

        {/* Header */}
        <div className="fe-anim" style={{ textAlign:"center",marginBottom:56,animationDelay:"0s" }}>
          
          <h2 className="text-5xl font-medium text-white mb-2" >
            Fees &{" "}
            <span style={{ background:"linear-gradient(135deg,#06b6d4,#818cf8)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent" }}>
              Economics
            </span>
          </h2>
          <p className="fe-mono" style={{ fontSize:13,color:"rgba(255,255,255,0.35)",fontWeight:300,letterSpacing:"0.04em",maxWidth:420,margin:"0 auto" }}>
            Clear, low, and fully on-chain — designed for traders and liquidity providers.
          </p>
        </div>

        {/* Layout: visual donut left + rows right */}
        <div className="fe-anim" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:40,alignItems:"center",marginBottom:48,animationDelay:"0.1s" }}>

          {/* Left — donut + center stat */}
          <div style={{ display:"flex",flexDirection:"column",alignItems:"center",gap:24 }}>
            <div style={{ position:"relative",width:220,height:220 }}>
              <svg viewBox="0 0 220 220" width="220" height="220" style={{ transform:"rotate(-90deg)" }}>
                {/* bg ring */}
                <circle cx="110" cy="110" r="80" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="28"/>
                {/* LP slice — 83.3% of 502.65 = 419 */}
                <circle cx="110" cy="110" r="80" fill="none"
                  stroke={active === "lp" || active === null ? "#10b981" : "rgba(16,185,129,0.3)"}
                  strokeWidth="28" strokeDasharray="419 503"
                  strokeDashoffset="0"
                  style={{ transition:"stroke 0.3s",filter: active==="lp"?"drop-shadow(0 0 8px rgba(16,185,129,0.7))":"none" }}
                />
                {/* protocol slice — 16.7% = 84 */}
                <circle cx="110" cy="110" r="80" fill="none"
                  stroke={active === "protocol" || active === null ? "#818cf8" : "rgba(129,140,248,0.3)"}
                  strokeWidth="28" strokeDasharray="83 503"
                  strokeDashoffset="-419"
                  style={{ transition:"stroke 0.3s",filter: active==="protocol"?"drop-shadow(0 0 8px rgba(129,140,248,0.7))":"none" }}
                />
              </svg>
              {/* center label */}
              <div style={{ position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:2 }}>
                <span className="fe-syne" style={{ fontSize:36,fontWeight:900,color:"#fff",lineHeight:1 }}>0.30%</span>
                <span className="fe-mono" style={{ fontSize:10,letterSpacing:"0.2em",textTransform:"uppercase",color:"rgba(255,255,255,0.35)" }}>total fee</span>
              </div>
            </div>

            {/* Donut legend */}
            <div style={{ display:"flex",flexDirection:"column",gap:10,width:"100%",maxWidth:200 }}>
              {fees.slice(1).map(f => (
                <div key={f.id} style={{ display:"flex",alignItems:"center",gap:10 }}>
                  <div style={{ width:10,height:10,borderRadius:2,background:f.color,flexShrink:0 }}/>
                  <span className="fe-mono" style={{ fontSize:11,color:"rgba(255,255,255,0.45)",flex:1 }}>{f.label}</span>
                  <span className="fe-mono" style={{ fontSize:11,color:f.color,fontWeight:500 }}>{f.display}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — fee rows */}
          <div style={{ display:"flex",flexDirection:"column",gap:12 }}>
            {fees.map((fee, i) => {
              const isActive = active === fee.id;
              const barPct = (fee.value / TOTAL) * 100;
              return (
                <div
                  key={fee.id}
                  className="fe-row fe-anim"
                  style={{
                    padding:"20px 22px",
                    borderRadius:16,
                    border:`1px solid ${isActive ? fee.border : "rgba(255,255,255,0.07)"}`,
                    background: isActive ? fee.bg : "rgba(255,255,255,0.025)",
                    cursor:"default",
                    animationDelay:`${0.2+i*0.08}s`,
                    boxShadow: isActive ? `0 0 40px -10px ${fee.glow}` : "none",
                  }}
                  onMouseEnter={() => setActive(fee.id)}
                  onMouseLeave={() => setActive(null)}
                >
                  <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10 }}>
                    <div style={{ display:"flex",alignItems:"center",gap:10 }}>
                      <div className="fe-pip" style={{ width:8,height:8,borderRadius:"50%",background:fee.color,boxShadow:`0 0 0 3px ${fee.bg}`,flexShrink:0 }}/>
                      <span className="fe-syne" style={{ fontSize:15,fontWeight:700,color:"rgba(255,255,255,0.85)" }}>{fee.label}</span>
                    </div>
                    <span className="fe-syne" style={{ fontSize:22,fontWeight:900,color:fee.color,letterSpacing:"-0.02em" }}>{fee.display}</span>
                  </div>

                  {/* Progress bar */}
                  <div style={{ height:3,borderRadius:2,background:"rgba(255,255,255,0.06)",marginBottom:10,overflow:"hidden" }}>
                    <div style={{
                      height:"100%",
                      width:`${barPct}%`,
                      borderRadius:2,
                      background:fee.color,
                      transition:"width 0.4s cubic-bezier(0.22,1,0.36,1)",
                      boxShadow: isActive ? `0 0 8px ${fee.color}` : "none",
                    }}/>
                  </div>

                  <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center" }}>
                    <span className="fe-mono" style={{ fontSize:11,color:"rgba(255,255,255,0.35)",fontWeight:300 }}>{fee.recipient}</span>
                    <span className="fe-mono" style={{ fontSize:10,color:isActive ? fee.color : "rgba(255,255,255,0.2)",letterSpacing:"0.1em" }}>
                      {barPct.toFixed(0)}% of total
                    </span>
                  </div>

                  {/* Expanded desc on hover */}
                  <div style={{
                    maxHeight: isActive ? 48 : 0,
                    overflow:"hidden",
                    transition:"max-height 0.35s cubic-bezier(0.22,1,0.36,1), opacity 0.3s",
                    opacity: isActive ? 1 : 0,
                    marginTop: isActive ? 10 : 0,
                  }}>
                    <div style={{ borderTop:`1px solid ${fee.border}`,paddingTop:10 }}>
                      <p className="fe-mono" style={{ fontSize:11,lineHeight:1.65,color:"rgba(255,255,255,0.4)",fontWeight:300,margin:0 }}>{fee.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom trust strip */}
        <div className="fe-anim" style={{ animationDelay:"0.45s",borderTop:"1px solid rgba(255,255,255,0.06)",paddingTop:28,display:"flex",justifyContent:"center",gap:32,flexWrap:"wrap" }}>
          {["No hidden charges","On-chain verifiable","Zero slippage fees"].map(item => (
            <div key={item} style={{ display:"flex",alignItems:"center",gap:8 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.2" strokeLinecap="round">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              <span className="fe-mono" style={{ fontSize:11,letterSpacing:"0.08em",color:"rgba(255,255,255,0.35)",textTransform:"uppercase" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}