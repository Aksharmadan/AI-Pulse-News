"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="page about-page">
      {/* HERO */}
      <section className="about-hero">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          How AI Pulse News Works
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          A real-time intelligence layer for AI, tech & startup ecosystems —
          powered by momentum, credibility and signals.
        </motion.p>
      </section>

      {/* STEPS */}
      <section className="about-steps">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            className="step-card neon-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="step-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* FLOW */}
      <section className="about-flow neon-panel">
        <h3>🧠 Intelligence Flow</h3>
        <ul className="flow-list">
          <li>🗞️ News ingestion from trusted sources</li>
          <li>📊 AI scoring based on momentum & impact</li>
          <li>⚡ Signal detection (funding, models, regulation)</li>
          <li>🧩 Ranking + clustering by topic</li>
          <li>🚀 Real-time updates to dashboard</li>
        </ul>
      </section>

      {/* TECH */}
      <section className="about-tech">
        <h3 className="section-subtitle">Tech Stack</h3>
        <div className="tech-grid">
          <span>Next.js</span>
          <span>Framer Motion</span>
          <span>Node.js</span>
          <span>AI Ranking Logic</span>
          <span>Live APIs</span>
          <span>Glassmorphism UI</span>
        </div>
      </section>

      {/* VISION */}
      <section className="about-vision neon-panel">
        <h3>🚀 Vision</h3>
        <p>
          AI Pulse News aims to become the Bloomberg Terminal for AI —
          surfacing not just news, but *signals* that matter before they go
          mainstream.
        </p>
      </section>
    </main>
  );
}

/* ---------------- DATA ---------------- */

const steps = [
  {
    icon: "🧠",
    title: "Aggregate",
    desc: "Collects AI & tech news from trusted global sources.",
  },
  {
    icon: "📈",
    title: "Score",
    desc: "Articles are ranked by momentum, credibility and impact.",
  },
  {
    icon: "⚡",
    title: "Detect",
    desc: "Funding spikes, model releases and regulation changes are flagged.",
  },
  {
    icon: "🔍",
    title: "Explore",
    desc: "Users drill into trends, timelines and full articles.",
  },
];
