"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --forest: #1a3d2b;
          --forest-mid: #2d6b47;
          --green: #3a8f5f;
          --green-light: #5ab57a;
          --cream: #f7f5f0;
          --white: #ffffff;
          --slate: #334155;
          --slate-light: #64748b;
          --slate-lighter: #94a3b8;
          --border: #e2e8f0;
          --gold: #c9a84c;
          --red: #dc2626;
          --amber: #d97706;
        }

        body {
          font-family: 'Inter', system-ui, sans-serif;
          background: var(--white);
          color: var(--slate);
          line-height: 1.6;
          font-size: 15px;
        }

        /* ── Nav ── */
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--border);
          padding: 0 5%;
          height: 64px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .nav-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
        .nav-logo-mark {
          width: 36px; height: 36px; background: var(--forest);
          border-radius: 9px; display: flex; align-items: center;
          justify-content: center; font-size: 18px;
        }
        .nav-logo-text { font-size: 18px; font-weight: 700; color: var(--forest); letter-spacing: -0.3px; }
        .nav-links { display: flex; align-items: center; gap: 28px; }
        .nav-links a { text-decoration: none; color: var(--slate-light); font-size: 14px; font-weight: 500; transition: color 0.15s; }
        .nav-links a:hover { color: var(--forest); }
        .nav-cta {
          background: var(--forest); color: var(--white) !important;
          padding: 8px 20px; border-radius: 8px; font-size: 14px !important;
          font-weight: 600 !important; transition: background 0.15s !important;
        }
        .nav-cta:hover { background: var(--forest-mid) !important; color: var(--white) !important; }

        /* ── Hero ── */
        .hero {
          padding: 140px 5% 100px;
          background: linear-gradient(160deg, var(--forest) 0%, var(--forest-mid) 60%, var(--green) 100%);
          color: var(--white);
          position: relative;
          overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute; inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .hero-inner { max-width: 860px; margin: 0 auto; position: relative; }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2);
          padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: 500;
          margin-bottom: 28px; color: rgba(255,255,255,0.9);
        }
        .hero h1 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(36px, 6vw, 64px);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -1px;
          margin-bottom: 24px;
          color: var(--white);
        }
        .hero h1 em { font-style: italic; color: rgba(255,255,255,0.75); }
        .hero-sub {
          font-size: clamp(16px, 2vw, 20px);
          color: rgba(255,255,255,0.8);
          max-width: 600px;
          margin-bottom: 40px;
          line-height: 1.6;
          font-weight: 300;
        }
        .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; }
        .btn-hero-primary {
          background: var(--white); color: var(--forest);
          padding: 14px 28px; border-radius: 10px;
          font-size: 15px; font-weight: 700;
          text-decoration: none; transition: all 0.15s;
          display: inline-flex; align-items: center; gap: 8px;
        }
        .btn-hero-primary:hover { background: var(--cream); transform: translateY(-1px); }
        .btn-hero-secondary {
          color: rgba(255,255,255,0.85); font-size: 14px; font-weight: 500;
          text-decoration: none; display: inline-flex; align-items: center; gap: 6px;
          border-bottom: 1px solid rgba(255,255,255,0.3); padding-bottom: 2px;
          transition: all 0.15s;
        }
        .btn-hero-secondary:hover { color: var(--white); border-color: var(--white); }
        .hero-note { margin-top: 20px; font-size: 13px; color: rgba(255,255,255,0.5); }

        /* ── Stats bar ── */
        .stats-bar {
          background: var(--cream);
          border-bottom: 1px solid var(--border);
          padding: 24px 5%;
        }
        .stats-inner {
          max-width: 860px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 24px;
        }
        .stat { text-align: center; }
        .stat-num { font-size: 28px; font-weight: 700; color: var(--forest); letter-spacing: -1px; }
        .stat-label { font-size: 12px; color: var(--slate-light); margin-top: 2px; }

        /* ── Section ── */
        section { padding: 80px 5%; }
        .section-inner { max-width: 860px; margin: 0 auto; }
        .eyebrow {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 1.5px; color: var(--green); margin-bottom: 12px;
        }
        .section-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 700; color: var(--forest);
          letter-spacing: -0.5px; margin-bottom: 16px; line-height: 1.2;
        }
        .section-sub { font-size: 17px; color: var(--slate-light); max-width: 540px; line-height: 1.6; }

        /* ── Features ── */
        .features-bg { background: var(--white); }
        .features-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px; margin-top: 48px;
        }
        .feature-card {
          background: var(--cream); border: 1px solid var(--border);
          border-radius: 14px; padding: 24px;
          transition: box-shadow 0.15s, transform 0.15s;
        }
        .feature-card:hover { box-shadow: 0 8px 24px rgba(26,61,43,0.08); transform: translateY(-2px); }
        .feature-icon {
          width: 44px; height: 44px; background: var(--forest);
          border-radius: 10px; display: flex; align-items: center;
          justify-content: center; font-size: 20px; margin-bottom: 16px;
        }
        .feature-title { font-size: 15px; font-weight: 600; color: var(--forest); margin-bottom: 8px; }
        .feature-desc { font-size: 13px; color: var(--slate-light); line-height: 1.6; }

        /* ── How it works ── */
        .how-bg { background: var(--forest); color: var(--white); }
        .how-bg .eyebrow { color: var(--green-light); }
        .how-bg .section-title { color: var(--white); }
        .how-bg .section-sub { color: rgba(255,255,255,0.7); }
        .steps { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 32px; margin-top: 48px; }
        .step { position: relative; }
        .step-num {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 48px; font-weight: 700;
          color: rgba(255,255,255,0.1); line-height: 1;
          margin-bottom: 12px;
        }
        .step-title { font-size: 16px; font-weight: 600; color: var(--white); margin-bottom: 8px; }
        .step-desc { font-size: 13px; color: rgba(255,255,255,0.6); line-height: 1.6; }

        /* ── Urgency demo ── */
        .demo-bg { background: var(--cream); }
        .urgency-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 40px; }
        .urgency-card { border-radius: 12px; padding: 20px; border: 1px solid; }
        .urgency-high { background: #fef2f2; border-color: #fecaca; }
        .urgency-medium { background: #fffbeb; border-color: #fde68a; }
        .urgency-low { background: #f0faf4; border-color: #bbf7d0; }
        .urgency-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 8px; }
        .urgency-high .urgency-label { color: var(--red); }
        .urgency-medium .urgency-label { color: var(--amber); }
        .urgency-low .urgency-label { color: var(--green); }
        .urgency-title { font-size: 14px; font-weight: 600; color: var(--slate); margin-bottom: 6px; }
        .urgency-examples { font-size: 12px; color: var(--slate-light); line-height: 1.6; }

        /* ── Pricing ── */
        .pricing-bg { background: var(--white); }
        .pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; margin-top: 48px; }
        .pricing-card {
          border: 1px solid var(--border); border-radius: 16px;
          padding: 28px 24px; position: relative;
          transition: box-shadow 0.15s;
        }
        .pricing-card:hover { box-shadow: 0 8px 24px rgba(26,61,43,0.08); }
        .pricing-card.featured {
          background: var(--forest); color: var(--white);
          border-color: var(--forest);
        }
        .pricing-popular {
          position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
          background: var(--gold); color: var(--white);
          font-size: 11px; font-weight: 700; padding: 4px 14px;
          border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px;
          white-space: nowrap;
        }
        .pricing-name { font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px; color: var(--slate-light); }
        .pricing-card.featured .pricing-name { color: rgba(255,255,255,0.6); }
        .pricing-price { font-size: 36px; font-weight: 700; letter-spacing: -1px; color: var(--forest); margin-bottom: 4px; }
        .pricing-card.featured .pricing-price { color: var(--white); }
        .pricing-period { font-size: 13px; color: var(--slate-light); margin-bottom: 20px; }
        .pricing-card.featured .pricing-period { color: rgba(255,255,255,0.6); }
        .pricing-features { list-style: none; padding: 0; margin-bottom: 24px; }
        .pricing-features li { font-size: 13px; color: var(--slate); padding: 5px 0; display: flex; gap: 8px; align-items: flex-start; border-bottom: 1px solid var(--border); }
        .pricing-card.featured .pricing-features li { color: rgba(255,255,255,0.85); border-color: rgba(255,255,255,0.1); }
        .pricing-features li:last-child { border-bottom: none; }
        .pricing-features li::before { content: "✓"; color: var(--green); font-weight: 700; flex-shrink: 0; }
        .pricing-card.featured .pricing-features li::before { color: var(--green-light); }
        .btn-pricing {
          display: block; text-align: center; padding: 11px;
          border-radius: 8px; font-size: 14px; font-weight: 600;
          text-decoration: none; transition: all 0.15s;
          border: 1.5px solid var(--forest); color: var(--forest);
        }
        .btn-pricing:hover { background: var(--forest); color: var(--white); }
        .pricing-card.featured .btn-pricing {
          background: var(--white); color: var(--forest); border-color: var(--white);
        }
        .pricing-card.featured .btn-pricing:hover { background: var(--cream); }

        /* ── CTA ── */
        .cta-bg {
          background: linear-gradient(135deg, var(--forest) 0%, var(--green) 100%);
          text-align: center; color: var(--white);
        }
        .cta-bg .section-title { color: var(--white); }
        .cta-sub { font-size: 18px; color: rgba(255,255,255,0.8); margin-bottom: 36px; }
        .cta-actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }

        /* ── Footer ── */
        footer {
          background: var(--forest); color: rgba(255,255,255,0.6);
          padding: 40px 5%; text-align: center; font-size: 13px;
        }
        footer a { color: rgba(255,255,255,0.6); text-decoration: none; }
        footer a:hover { color: var(--white); }

        @media (max-width: 600px) {
          .nav-links { display: none; }
          .urgency-cards { grid-template-columns: 1fr; }
          .hero { padding: 120px 5% 60px; }
        }
      `}</style>

      {/* ── Nav ── */}
      <nav>
        <a href="/" className="nav-logo">
          <div className="nav-logo-mark">🐾</div>
          <span className="nav-logo-text">VetsAI</span>
        </a>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="/app" className="nav-cta">Try free →</a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badge">
            🔬 Powered by the Merck Veterinary Manual — 3,367 pages
          </div>
          <h1>
            Clinical decisions,<br />
            <em>faster than ever.</em>
          </h1>
          <p className="hero-sub">
            VetsAI is an AI-powered clinical decision support tool for veterinary professionals.
            Triage cases, get differential diagnoses, drug dosage notes, and SOAP notes — in under 60 seconds.
          </p>
          <div className="hero-actions">
            <a href="/app" className="btn-hero-primary">
              Start free trial →
            </a>
            <a href="#how-it-works" className="btn-hero-secondary">
              See how it works
            </a>
          </div>
          <p className="hero-note">No credit card required · First 3 months free for clinics</p>
        </div>
      </section>

      {/* ── Stats ── */}
      <div className="stats-bar">
        <div className="stats-inner">
          <div className="stat">
            <div className="stat-num">3,367</div>
            <div className="stat-label">Pages of Merck Vet Manual</div>
          </div>
          <div className="stat">
            <div className="stat-num">&lt;60s</div>
            <div className="stat-label">Time to full assessment</div>
          </div>
          <div className="stat">
            <div className="stat-num">15+</div>
            <div className="stat-label">Animal species supported</div>
          </div>
          <div className="stat">
            <div className="stat-num">$0</div>
            <div className="stat-label">To get started today</div>
          </div>
        </div>
      </div>

      {/* ── Features ── */}
      <section className="features-bg" id="features">
        <div className="section-inner">
          <div className="eyebrow">What VetsAI does</div>
          <h2 className="section-title">Everything a vet needs,<br />in one place</h2>
          <p className="section-sub">Built for busy veterinary professionals who need fast, reliable clinical support.</p>

          <div className="features-grid">
            {[
              { icon: "🚨", title: "Urgency triage", desc: "Instantly flags high-urgency emergencies — collapse, seizures, severe bleeding — so you never miss a critical case." },
              { icon: "🧠", title: "Differential diagnoses", desc: "AI-powered reasoning across symptoms, breed, age, and weight to generate the most likely causes." },
              { icon: "💊", title: "Drug & dosage notes", desc: "Safe dosage ranges by species and weight, plus interaction warnings for common veterinary medications." },
              { icon: "📋", title: "SOAP note drafts", desc: "Auto-generates Subjective, Objective, Assessment, and Plan notes for you to review and edit." },
              { icon: "📚", title: "Merck Manual powered", desc: "Every response is grounded in 3,367 pages of the Merck Veterinary Manual — the gold standard in vet medicine." },
              { icon: "🖨️", title: "Printable reports", desc: "One-click printable case reports to share with pet owners or keep on file for your records." },
            ].map((f) => (
              <div className="feature-card" key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <div className="feature-title">{f.title}</div>
                <div className="feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="how-bg" id="how-it-works">
        <div className="section-inner">
          <div className="eyebrow">How it works</div>
          <h2 className="section-title">From symptoms to assessment in 3 steps</h2>
          <p className="section-sub" style={{ color: "rgba(255,255,255,0.65)" }}>No training required. Start analyzing cases immediately.</p>

          <div className="steps">
            {[
              { num: "01", title: "Enter the case", desc: "Input the animal type, breed, age, weight, and symptoms. The more detail, the better the assessment." },
              { num: "02", title: "AI analyzes", desc: "VetsAI searches the Merck Manual, checks drug interactions, runs urgency triage, and reasons across all inputs." },
              { num: "03", title: "Get your assessment", desc: "Receive differential diagnoses, drug notes, a SOAP note draft, and a printable report — all in under 60 seconds." },
            ].map((s) => (
              <div className="step" key={s.num}>
                <div className="step-num">{s.num}</div>
                <div className="step-title">{s.title}</div>
                <div className="step-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Urgency demo ── */}
      <section className="demo-bg">
        <div className="section-inner">
          <div className="eyebrow">Urgency detection</div>
          <h2 className="section-title">Never miss a critical case</h2>
          <p className="section-sub">VetsAI automatically flags every case by urgency level so you can prioritise correctly.</p>

          <div className="urgency-cards">
            <div className="urgency-card urgency-high">
              <div className="urgency-label">🔴 High urgency</div>
              <div className="urgency-title">Immediate care required</div>
              <div className="urgency-examples">Collapse · Seizures · Cannot breathe · Severe bleeding · Unconsciousness · Blue/pale gums</div>
            </div>
            <div className="urgency-card urgency-medium">
              <div className="urgency-label">🟠 Medium urgency</div>
              <div className="urgency-title">See vet within 24 hours</div>
              <div className="urgency-examples">Limping · Vomiting · Diarrhea · Swelling · Infection signs · Reduced appetite</div>
            </div>
            <div className="urgency-card urgency-low">
              <div className="urgency-label">🟢 Low urgency</div>
              <div className="urgency-title">Monitor and schedule</div>
              <div className="urgency-examples">Mild symptoms · No distress · No warning signs · Routine checkup needed</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="pricing-bg" id="pricing">
        <div className="section-inner">
          <div className="eyebrow">Pricing</div>
          <h2 className="section-title">Simple, transparent pricing</h2>
          <p className="section-sub">Start free for 3 months. No credit card required. Cancel anytime.</p>

          <div className="pricing-grid">
            {[
              {
                name: "Starter", price: "$49", period: "per month",
                features: ["1 vet account", "Up to 50 cases/month", "Full AI diagnostics", "Drug dosage notes", "SOAP note drafts", "Email support"],
                featured: false,
              },
              {
                name: "Professional", price: "$99", period: "per month",
                features: ["3 vet accounts", "Unlimited cases", "Full AI diagnostics", "Drug dosage notes", "SOAP note drafts", "Case history & export", "Priority support"],
                featured: true,
                popular: true,
              },
              {
                name: "Clinic", price: "$199", period: "per month",
                features: ["10 vet accounts", "Unlimited cases", "Full AI diagnostics", "Drug dosage notes", "SOAP note drafts", "Advanced analytics", "Dedicated support"],
                featured: false,
              },
            ].map((p) => (
              <div className={`pricing-card ${p.featured ? "featured" : ""}`} key={p.name}>
                {p.popular && <div className="pricing-popular">Most popular</div>}
                <div className="pricing-name">{p.name}</div>
                <div className="pricing-price">{p.price}</div>
                <div className="pricing-period">{p.period}</div>
                <ul className="pricing-features">
                  {p.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <a href="/app" className="btn-pricing">Start free trial</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-bg">
        <div className="section-inner" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>Get started today</div>
          <h2 className="section-title">Ready to transform your clinic?</h2>
          <p className="cta-sub">Join veterinary professionals across Africa using VetsAI to deliver faster, smarter clinical care.</p>
          <div className="cta-actions">
            <a href="/app" className="btn-hero-primary">Start free trial →</a>
            <a href="mailto:hi@vetsai.app" className="btn-hero-secondary">Contact us</a>
          </div>
          <p style={{ marginTop: 20, fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
            First 10 clinics get 3 months completely free
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer>
        <div style={{ marginBottom: 12 }}>
          <span style={{ color: "rgba(255,255,255,0.9)", fontWeight: 600 }}>🐾 VetsAI</span>
          &nbsp;·&nbsp; AI-powered clinical decision support for veterinary professionals
        </div>
        <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap", marginBottom: 16 }}>
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="/app">Try free</a>
          <a href="mailto:hi@vetsai.app">Contact</a>
        </div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
          © {new Date().getFullYear()} VetsAI. Built for veterinary professionals across Africa and beyond.
        </div>
      </footer>
    </>
  );
}