"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ParticlesBG from "../components/ParticlesBG";

/* ------------------ REVEAL ------------------ */
function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------ LIVE TREND ------------------ */
function useLiveTrend(initial: number[]) {
  const [data, setData] = useState(initial);

  useEffect(() => {
    const i = setInterval(() => {
      setData((prev) =>
        [...prev.slice(1), prev[prev.length - 1] + (Math.random() * 6 - 3)].map(
          (v) => Math.max(30, Math.min(75, v))
        )
      );
    }, 4000);

    return () => clearInterval(i);
  }, []);

  return data;
}

/* ------------------ GRAPH ------------------ */
function TrendGraph() {
  const values = useLiveTrend([52, 55, 54, 58, 56, 60, 59, 63]);
  const points = values.map((v, i) => `${i * 40},${v}`).join(" ");

  return (
    <div className="graph-wrap">
      <svg viewBox="0 0 280 100" preserveAspectRatio="none">
        <motion.polyline
          fill="none"
          stroke="url(#grad)"
          strokeWidth="3.5"
          points={points}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5 }}
        />
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00eaff" />
            <stop offset="100%" stopColor="#4f8cff" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/* ------------------ STAT ------------------ */
function Stat({ label, value }: { label: string; value: string }) {
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!value.includes(",")) return;
    const i = setInterval(() => {
      const base = parseInt(value.replace(/,/g, ""));
      setDisplay((base + Math.floor(Math.random() * 5 - 2)).toLocaleString());
    }, 1600);
    return () => clearInterval(i);
  }, [value]);

  return (
    <motion.div
      className="stat"
      animate={{ opacity: [1, 0.9, 1] }}
      transition={{ duration: 1.8, repeat: Infinity }}
    >
      <span className="value">{display}</span>
      <span className="label">{label}</span>
    </motion.div>
  );
}

/* ------------------ HOME ------------------ */
export default function Home() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const t = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000
    );
    return () => clearInterval(t);
  }, []);

  return (
    <main className="page">
      <ParticlesBG />

      <div className="container">
        {/* CLOCK */}
        <motion.div
          className="clock"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {time}
        </motion.div>

        {/* HERO */}
        <section className="hero center">
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
            AI Pulse News
          </motion.h1>

          <p className="hero-sub">
            Real-time AI, tech & startup intelligence — ranked by momentum,
            credibility and impact.
          </p>

          <div className="cta">
            <Link href="/stream">
              <button className="primary">🚀 Explore News</button>
            </Link>
            <Link href="/about">
              <button className="secondary">⚙️ How it works</button>
            </Link>
          </div>
        </section>

        {/* STATS */}
        <Reveal>
          <section className="stats">
            <div className="stats-card neon-panel">
              <Stat label="Articles Analyzed" value="12,842" />
              <Stat label="AI Rankings Today" value="1,092" />
              <Stat label="Live Sources" value="48" />
            </div>
          </section>
        </Reveal>

        {/* DASHBOARD */}
       {/* DASHBOARD */}
<section className="dashboard">
  {/* BREAKING – FULL WIDTH */}
  <Reveal>
    <div className="dash-full neon-panel breaking">
      <h4>🔴 Breaking AI Signals</h4>
      <div className="ticker">
        GPT-5 safety eval leak · NVIDIA demand surge · EU AI Act · Anthropic $5B talks
      </div>
    </div>
  </Reveal>

  {/* GRID ROW */}
  <div className="dash-grid">
    {/* MOMENTUM */}
    <Reveal>
      <div className="dash-card neon-panel">
        <h3>🔥 AI Momentum Heat</h3>

        {[
          { name: "Models", value: 82 },
          { name: "Hardware", value: 74 },
          { name: "Funding", value: 67 },
          { name: "Regulation", value: 41 },
        ].map((item) => (
          <div key={item.name} className="heat-row">
            <span>{item.name}</span>
            <div className="heat-bar">
              <motion.div
                className="heat-fill"
                initial={{ width: 0 }}
                animate={{ width: `${item.value}%` }}
                transition={{ duration: 1.2 }}
              />
            </div>
            <span>{item.value}%</span>
          </div>
        ))}
      </div>
    </Reveal>

    {/* TIMELINE */}
    <Reveal delay={0.1}>
      <div className="dash-card neon-panel">
        <h3>🕒 Today’s AI Timeline</h3>
        <ul className="timeline">
          <li><span>09:40</span> GPT-5 safety review surfaces</li>
          <li><span>11:10</span> NVIDIA revises AI outlook</li>
          <li><span>13:30</span> EU publishes AI Act roadmap</li>
          <li><span>15:00</span> Anthropic funding talks</li>
        </ul>
      </div>
    </Reveal>
  </div>

  {/* TREND – FULL WIDTH */}
  <Reveal>
    <div className="dash-full neon-panel">
      <div className="chart-header">
        <h3>📈 AI Trend Index</h3>
        <span>Last 7 days · AI-ranked</span>
      </div>
      <TrendGraph />
    </div>
  </Reveal>
</section>

      </div>
    </main>
  );
}
