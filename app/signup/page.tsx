"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function SignupPage() {
  const clinicRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setError(null);
  }, []);

  const handleSignup = async () => {
    const clinicName = clinicRef.current?.value ?? "";
    const email = emailRef.current?.value ?? "";
    const password = passwordRef.current?.value ?? "";

    if (!clinicName.trim() || !email.trim() || !password.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signUp({
      email: email.trim(),
      password: password.trim(),
      options: { data: { clinic_name: clinicName.trim() } },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    // Send welcome email
    fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "welcome",
        to: email.trim(),
        data: { clinicName: clinicName.trim() }
      })
    }).catch(console.error);

    setSuccess(true);
    setTimeout(() => router.push("/onboarding"), 1500);
    setLoading(false);
  };

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: system-ui, -apple-system, sans-serif; background: #f1f5f9; color: #1e293b; }
        .page { min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 24px; }
        .logo { display: flex; align-items: center; gap: 10px; text-decoration: none; margin-bottom: 32px; }
        .logo-mark { width: 40px; height: 40px; background: #1a3d2b; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 20px; }
        .logo-text { font-size: 20px; font-weight: 700; color: #1a3d2b; }
        .card { background: #fff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 32px; width: 100%; max-width: 420px; box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
        .card-title { font-size: 22px; font-weight: 700; color: #1a3d2b; margin-bottom: 6px; }
        .card-sub { font-size: 14px; color: #64748b; margin-bottom: 24px; }
        .field { display: flex; flex-direction: column; gap: 5px; margin-bottom: 14px; }
        .field label { font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.4px; }
        .field input { padding: 10px 14px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 14px; color: #1e293b; background: #f8fafc; outline: none; font-family: inherit; transition: border-color 0.15s; }
        .field input:focus { border-color: #1a3d2b; box-shadow: 0 0 0 3px rgba(26,61,43,0.1); background: #fff; }
        .btn-signup { width: 100%; background: #1a3d2b; color: #fff; padding: 12px; border-radius: 8px; border: none; font-size: 15px; font-weight: 600; cursor: pointer; font-family: inherit; margin-top: 6px; transition: background 0.15s; }
        .btn-signup:hover { background: #2d6b47; }
        .btn-signup:disabled { opacity: 0.5; cursor: not-allowed; }
        .error { background: #fef2f2; border: 1px solid #fecaca; color: #dc2626; padding: 10px 14px; border-radius: 8px; font-size: 13px; margin-bottom: 14px; }
        .success { background: #f0faf4; border: 1px solid #d4f0e0; color: #1a3d2b; padding: 16px; border-radius: 8px; font-size: 14px; text-align: center; }
        .divider { text-align: center; font-size: 13px; color: #94a3b8; margin: 16px 0; }
        .link { color: #1a3d2b; font-weight: 600; text-decoration: none; }
        .free-badge { background: #f0faf4; border: 1px solid #d4f0e0; color: #1a3d2b; font-size: 12px; font-weight: 600; padding: 4px 12px; border-radius: 20px; display: inline-block; margin-bottom: 20px; }
      `}</style>

      <div className="page">
        <a href="/" className="logo">
          <div className="logo-mark">🐾</div>
          <span className="logo-text">VetsAI</span>
        </a>

        <div className="card">
          <div className="free-badge">✓ 3 months free — no credit card required</div>
          <div className="card-title">Create your clinic account</div>
          <div className="card-sub">Start your free trial and run a smarter clinic today.</div>

          {success ? (
            <div className="success">
              <p>✓ Account created! Setting up your clinic…</p>
            </div>
          ) : (
            <>
              {error !== null && <div className="error">⚠ {error}</div>}
              <div className="field">
                <label>Clinic name</label>
                <input ref={clinicRef} placeholder="Accra Vet Clinic" autoComplete="organization" />
              </div>
              <div className="field">
                <label>Email address</label>
                <input ref={emailRef} type="email" placeholder="you@clinic.com" autoComplete="email" />
              </div>
              <div className="field">
                <label>Password</label>
                <input ref={passwordRef} type="password" placeholder="Min. 6 characters" autoComplete="new-password" />
              </div>
              <button className="btn-signup" onClick={handleSignup} disabled={loading}>
                {loading ? "Creating account…" : "Start free trial →"}
              </button>
              <div className="divider">
                Already have an account?{" "}
                <a href="/login" className="link">Log in</a>
              </div>
            </>
          )}
        </div>

        <div style={{ marginTop: 24, fontSize: 13, color: "#94a3b8" }}>
          Want to see it first?{" "}
          <a href="/demo" style={{ color: "#1a3d2b", fontWeight: 600, textDecoration: "none" }}>
            Try the demo →
          </a>
        </div>
      </div>
    </>
  );
}
