"use client";

function CircularScore({ value = 92 }: { value?: number }) {
  const r = 26;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - value / 100);
  return (
    <div className="relative inline-flex items-center justify-center w-[66px] h-[66px]">
      <svg className="absolute inset-0" width="66" height="66" viewBox="0 0 66 66">
        <circle cx="33" cy="33" r={r} fill="none" stroke="#1e3a5f" strokeWidth="5" />
        <circle
          cx="33" cy="33" r={r}
          fill="none"
          stroke="#10b981"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          transform="rotate(-90 33 33)"
        />
      </svg>
      <span className="relative text-white text-sm font-bold">{value}%</span>
    </div>
  );
}

function MiniTrendChart() {
  const data = [22, 35, 50, 63, 76, 90];
  const months = ["Dec", "Jan", "Feb", "Mar", "Apr", "May"];
  const W = 180, H = 88, PX = 18, PY = 8;
  const usableH = H - PY * 2 - 10;

  const x = (i: number) => PX + (i / (data.length - 1)) * (W - 2 * PX);
  const y = (v: number) => PY + usableH - (v / 100) * usableH;

  const pts = data.map((v, i) => `${x(i)},${y(v)}`).join(" ");
  const bottom = y(0);
  const areaPts = `${x(0)},${bottom} ${pts} ${x(data.length - 1)},${bottom}`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto overflow-visible">
      <defs>
        <linearGradient id="trendGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0, 25, 50, 75, 100].map((v) => (
        <g key={v}>
          <line x1={PX} y1={y(v)} x2={W - PX} y2={y(v)} stroke="#1e2d45" strokeWidth="0.5" />
          <text x={PX - 2} y={y(v) + 3} textAnchor="end" fontSize="5.5" fill="#334155">{v}</text>
        </g>
      ))}
      <polygon points={areaPts} fill="url(#trendGrad)" />
      <polyline points={pts} fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {data.map((v, i) => (
        <circle key={i} cx={x(i)} cy={y(v)} r="2.5" fill="#10b981" stroke="#0d1424" strokeWidth="1" />
      ))}
      {months.map((m, i) => (
        <text key={m} x={x(i)} y={H - 1} textAnchor="middle" fontSize="5.5" fill="#334155">{m}</text>
      ))}
    </svg>
  );
}

const ShieldIcon = () => (
  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 12c0 2.77.95 5.322 2.526 7.338A11.955 11.955 0 0012 21.75c2.5 0 4.82-.756 6.748-2.049A11.955 11.955 0 0021 12a11.955 11.955 0 00-.598-3.736A11.959 11.959 0 0012 2.25z" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
  </svg>
);

const CheckCircle = ({ color = "#10b981" }: { color?: string }) => (
  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: color }}>
    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  </div>
);

const WarnCircle = ({ color = "#f59e0b" }: { color?: string }) => (
  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: color }}>
    <span className="text-white text-[10px] font-black leading-none">!</span>
  </div>
);

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: "#06090f" }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(148,163,184,0.055) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Bottom blue glow */}
      <div
        className="absolute bottom-0 inset-x-0 h-[55vh] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(37,99,235,0.38) 0%, rgba(29,78,216,0.12) 50%, transparent 100%)",
        }}
      />
      {/* Left ambient glow */}
      <div
        className="absolute top-1/3 -left-32 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
          filter: "blur(48px)",
        }}
      />

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 flex-1 flex items-center pt-20 pb-6">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[42%_58%] gap-10 xl:gap-14 items-center">

            {/* ══════════ LEFT ══════════ */}
            <div className="space-y-7">

              {/* Pill badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm text-slate-400">
                  Serving businesses across{" "}
                  <span className="text-emerald-400 font-semibold">Tricity</span>
                </span>
              </div>

              {/* Headline */}
              <div>
                <h1 className="text-[3.25rem] xl:text-[3.75rem] font-extrabold leading-[1.07] tracking-tight text-white">
                  Your Dedicated<br />CA Team,
                </h1>
                <h1
                  className="text-[3.25rem] xl:text-[3.75rem] font-extrabold leading-[1.07] tracking-tight mt-1"
                  style={{
                    background: "linear-gradient(135deg, #10b981 0%, #34d399 60%, #6ee7b7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Powered by AI
                </h1>
              </div>

              {/* Subheadline */}
              <p className="text-slate-400 text-[1.05rem] leading-relaxed max-w-[400px]">
                Never miss GST, ROC, TDS, or tax deadlines again.{" "}
                <span className="text-slate-300">Save time, avoid penalties,</span>{" "}
                and stay compliant effortlessly.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3">
                {[
                  {
                    icon: (
                      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 12c0 2.77.95 5.322 2.526 7.338A11.955 11.955 0 0012 21.75z" />
                      </svg>
                    ),
                    label: "ICAI", sub: "Certified",
                  },
                  {
                    icon: (
                      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    ),
                    label: "ERI", sub: "Partner",
                  },
                  {
                    icon: (
                      <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    label: "On-Time", sub: "Filing",
                  },
                ].map((b) => (
                  <div
                    key={b.label}
                    className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5"
                  >
                    {b.icon}
                    <div>
                      <p className="text-white text-sm font-semibold leading-none">{b.label}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{b.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-emerald-500/20"
                >
                  Get Free Compliance Audit
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200 inline-block">→</span>
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 border border-white/15 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-all duration-200"
                >
                  View Plans
                </a>
              </div>
            </div>

            {/* ══════════ RIGHT: DASHBOARD ══════════ */}
            <div className="relative hidden lg:block">
              {/* Outer glow behind card */}
              <div
                className="absolute -inset-8 pointer-events-none rounded-3xl"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(59,130,246,0.12) 0%, transparent 70%)",
                  filter: "blur(24px)",
                }}
              />

              {/* Browser chrome */}
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  background: "#0b1121",
                  border: "1px solid #1e2d45",
                  boxShadow:
                    "0 0 0 1px rgba(255,255,255,0.04), 0 30px 60px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                {/* Top bar */}
                <div
                  className="flex items-center gap-3 px-4 py-3 border-b border-white/5"
                  style={{ background: "#080e1c" }}
                >
                  <div className="flex gap-1.5 shrink-0">
                    <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
                    <div className="w-3 h-3 rounded-full" style={{ background: "#ffbd2e" }} />
                    <div className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
                  </div>
                  <div
                    className="flex-1 mx-4 flex items-center justify-center gap-1.5 rounded-md py-1.5 px-3"
                    style={{ background: "#0d1830" }}
                  >
                    <svg className="w-3 h-3 text-slate-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                    <span className="text-slate-500 text-xs font-mono">compliace.com/dashboard</span>
                  </div>
                  <div className="w-14 shrink-0" />
                </div>

                {/* Dashboard body */}
                <div className="p-4">
                  <div className="grid grid-cols-[1fr_186px] gap-3">

                    {/* ── LEFT main column ── */}
                    <div className="space-y-3 min-w-0">

                      {/* Welcome */}
                      <div>
                        <p className="text-slate-500 text-[11px]">Welcome back,</p>
                        <p className="text-white text-sm font-bold leading-tight">Vanshika 👋</p>
                        <p className="text-slate-600 text-[10px]">Here&apos;s your compliance overview</p>
                      </div>

                      {/* 3 metric cards */}
                      <div className="grid grid-cols-3 gap-2">

                        {/* Compliance Score */}
                        <div
                          className="rounded-xl p-3 flex flex-col items-center"
                          style={{ background: "#0d1830", border: "1px solid #1e2d45" }}
                        >
                          <p className="text-slate-500 text-[10px] font-medium self-start mb-2">Compliance Score</p>
                          <CircularScore value={92} />
                          <p className="text-emerald-400 text-[10px] font-semibold mt-1.5">Excellent</p>
                        </div>

                        {/* Penalty Risk */}
                        <div
                          className="rounded-xl p-3"
                          style={{ background: "#0d1830", border: "1px solid #1e2d45" }}
                        >
                          <p className="text-slate-500 text-[10px] font-medium mb-2">Penalty Risk</p>
                          <ShieldIcon />
                          <p className="text-white text-base font-bold mt-1">Low</p>
                          <p className="text-slate-600 text-[10px]">You&apos;re all good!</p>
                        </div>

                        {/* Active Entities */}
                        <div
                          className="rounded-xl p-3"
                          style={{ background: "#0d1830", border: "1px solid #1e2d45" }}
                        >
                          <p className="text-slate-500 text-[10px] font-medium mb-2">Active Entities</p>
                          <BriefcaseIcon />
                          <p className="text-white text-base font-bold mt-1">3</p>
                          <p className="text-slate-600 text-[10px]">Businesses</p>
                        </div>
                      </div>

                      {/* Compliance Overview */}
                      <div
                        className="rounded-xl p-3"
                        style={{ background: "#0d1830", border: "1px solid #1e2d45" }}
                      >
                        <p className="text-slate-400 text-[11px] font-semibold mb-2.5">Compliance Overview</p>
                        <div className="space-y-1.5">

                          {/* GST - Completed */}
                          <div
                            className="flex items-center gap-2.5 rounded-lg px-2.5 py-2"
                            style={{ background: "#080e1c" }}
                          >
                            <div
                              className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                              style={{ background: "#0a2a1a" }}
                            >
                              <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-white text-xs font-medium">GST Filing</p>
                              <p className="text-slate-600 text-[10px]">GSTR-1 for Apr 2025</p>
                            </div>
                            <div className="text-right mr-1.5">
                              <p className="text-emerald-400 text-[11px] font-semibold">Completed</p>
                              <p className="text-slate-600 text-[10px]">Filed on 25 Apr 2025</p>
                            </div>
                            <CheckCircle color="#10b981" />
                          </div>

                          {/* ROC - Due in 3 days */}
                          <div
                            className="flex items-center gap-2.5 rounded-lg px-2.5 py-2"
                            style={{ background: "#080e1c" }}
                          >
                            <div
                              className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                              style={{ background: "#2a1e00" }}
                            >
                              <svg className="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-white text-xs font-medium">ROC Filing</p>
                              <p className="text-slate-600 text-[10px]">AOC-4 for FY 2024-25</p>
                            </div>
                            <div className="text-right mr-1.5">
                              <p className="text-amber-400 text-[11px] font-semibold">Due in 3 days</p>
                              <p className="text-slate-600 text-[10px]">Due on 10 May 2025</p>
                            </div>
                            <WarnCircle color="#f59e0b" />
                          </div>

                          {/* TDS - Pending */}
                          <div
                            className="flex items-center gap-2.5 rounded-lg px-2.5 py-2"
                            style={{ background: "#080e1c" }}
                          >
                            <div
                              className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                              style={{ background: "#2a0a0a" }}
                            >
                              <svg className="w-3.5 h-3.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-white text-xs font-medium">TDS Filing</p>
                              <p className="text-slate-600 text-[10px]">TDS Return for Apr 2025</p>
                            </div>
                            <div className="text-right mr-1.5">
                              <p className="text-red-400 text-[11px] font-semibold">Pending</p>
                              <p className="text-slate-600 text-[10px]">Due on 15 May 2025</p>
                            </div>
                            <WarnCircle color="#ef4444" />
                          </div>
                        </div>
                      </div>

                      {/* Success banner */}
                      <div
                        className="rounded-xl px-4 py-3 flex items-center justify-between"
                        style={{
                          background: "linear-gradient(135deg, #0a2a1a 0%, #0c231a 100%)",
                          border: "1px solid #1a4a2e",
                          boxShadow: "0 0 24px rgba(16,185,129,0.07)",
                        }}
                      >
                        <div>
                          <p className="text-emerald-300 text-xs font-bold">All good! You&apos;re compliant 🎉</p>
                          <p className="text-emerald-700 text-[10px] mt-0.5">Keep it up! We&apos;ll handle the rest.</p>
                        </div>
                        <div className="text-xl opacity-80">📋✅</div>
                      </div>
                    </div>

                    {/* ── RIGHT sidebar ── */}
                    <div className="flex flex-col gap-3">

                      {/* Trend chart */}
                      <div
                        className="rounded-xl p-3"
                        style={{ background: "#0d1830", border: "1px solid #1e2d45" }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-slate-300 text-[10px] font-semibold">Compliance Trend</p>
                          <div
                            className="text-[9px] text-slate-600 border border-slate-800 rounded px-1.5 py-0.5 flex items-center gap-0.5"
                          >
                            Last 6 months <span className="text-slate-700">▾</span>
                          </div>
                        </div>
                        <MiniTrendChart />
                      </div>

                      {/* Recent Activity */}
                      <div
                        className="rounded-xl p-3 flex-1"
                        style={{ background: "#0d1830", border: "1px solid #1e2d45" }}
                      >
                        <p className="text-slate-300 text-[10px] font-semibold mb-3">Recent Activity</p>
                        <div className="space-y-3">
                          {[
                            {
                              dot: "#10b981",
                              title: "GST Filed Successfully",
                              sub: "GSTR-1 for Apr 2025",
                              time: "2h ago",
                            },
                            {
                              dot: "#f59e0b",
                              title: "ROC Reminder Sent",
                              sub: "AOC-4 for FY 2024-25",
                              time: "1d ago",
                            },
                            {
                              dot: "#ef4444",
                              title: "TDS Return Pending",
                              sub: "TDS for Apr 2025",
                              time: "2d ago",
                            },
                          ].map((a) => (
                            <div key={a.title} className="flex items-start gap-2">
                              <div
                                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                                style={{ background: `${a.dot}20`, border: `1px solid ${a.dot}40` }}
                              >
                                <div className="w-1.5 h-1.5 rounded-full" style={{ background: a.dot }} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-slate-300 text-[10px] font-medium leading-tight">{a.title}</p>
                                <p className="text-slate-600 text-[9px]">{a.sub}</p>
                              </div>
                              <span className="text-slate-700 text-[9px] shrink-0">{a.time}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 pt-2.5 border-t border-white/5">
                          <button className="text-emerald-400 text-[10px] hover:text-emerald-300 transition-colors">
                            View all activity →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════ STATS BAR ══════════ */}
      <div
        className="relative z-10 border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(6,9,15,0.95)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                ),
                value: "500+", label: "Businesses Served",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                  </svg>
                ),
                value: "10,000+", label: "Returns Filed",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                value: "99.5%", label: "On-Time Filing",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                  </svg>
                ),
                value: "24/7", label: "Expert Support",
              },
            ].map((s, i) => (
              <div
                key={s.label}
                className={`flex items-center gap-4 py-7 px-6 ${i > 0 ? "border-l border-white/5" : ""}`}
              >
                <div className="text-blue-400 opacity-75">{s.icon}</div>
                <div>
                  <p className="text-white font-bold text-xl tracking-tight">{s.value}</p>
                  <p className="text-slate-500 text-sm">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
