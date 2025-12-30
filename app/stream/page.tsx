"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const mockNews = [
  {
    id: 1,
    title: "OpenAI rumored GPT-5 safety eval leak",
    source: "Insider AI",
    time: "5 min ago",
    tag: "Models",
    pulse: "HIGH",
  },
  {
    id: 2,
    title: "NVIDIA AI chip demand exceeds forecasts",
    source: "Bloomberg",
    time: "18 min ago",
    tag: "Hardware",
    pulse: "MEDIUM",
  },
  {
    id: 3,
    title: "EU finalizes AI Act enforcement timeline",
    source: "Reuters",
    time: "42 min ago",
    tag: "Regulation",
    pulse: "LOW",
  },
  {
    id: 4,
    title: "Anthropic funding talks cross $5B",
    source: "The Information",
    time: "1 hr ago",
    tag: "Funding",
    pulse: "HIGH",
  },
];

export default function StreamPage() {
  return (
    <main className="page stream-page">
      {/* HEADER */}
      <section className="stream-header">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Live AI News Stream
        </motion.h2>
        <p>Auto-ranked by momentum & credibility</p>
      </section>

      {/* TRENDING TOPICS */}
      <section className="trend-section">
        <h3 className="section-subtitle">🔥 Trending AI Topics</h3>
        <div className="trend-grid">
          {["GPT-5", "NVIDIA AI", "AI Funding", "OpenAI", "AI Regulation", "Startups"].map(
            (t) => (
              <span key={t} className="trend-pill">
                {t}
              </span>
            )
          )}
        </div>
      </section>

      {/* NEWS GRID */}
      <section className="news-grid">
        {mockNews.map((n, i) => (
          <motion.div
            key={n.id}
            className="news-card neon-panel"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="news-top">
              <span className={`pulse ${n.pulse.toLowerCase()}`}>
                ● {n.pulse}
              </span>
              <span className="tag">{n.tag}</span>
            </div>

            <h3>{n.title}</h3>

            <div className="news-meta">
              <span>{n.source}</span>
              <span>•</span>
              <span>{n.time}</span>
            </div>

            <Link href={`/news/${n.id}`} className="read-btn">
              Read full article →
            </Link>
          </motion.div>
        ))}
      </section>

      {/* SIGNALS */}
      <section className="signal-section neon-panel">
        <div className="signal">
          <span>🔥 High Momentum</span>
          <strong>6</strong>
        </div>
        <div className="signal">
          <span>📈 Funding Signals</span>
          <strong>3</strong>
        </div>
        <div className="signal">
          <span>⚖️ Regulation Updates</span>
          <strong>2</strong>
        </div>
        <div className="signal">
          <span>🤖 Model Releases</span>
          <strong>1</strong>
        </div>
      </section>

      {/* INSIGHT */}
      <section className="insight-section neon-panel">
        <h3>🧠 AI Insight of the Day</h3>
        <p>
          Momentum is being driven by upcoming foundation model launches,
          renewed VC funding interest, and strong hardware demand. Regulatory
          clarity in the EU is reducing uncertainty for startups.
        </p>
      </section>

      {/* TIMELINE */}
      <section className="timeline-section">
        <h3 className="section-subtitle">🕒 Today’s AI Timeline</h3>
        <ul className="timeline">
          <li>
            <span>09:40</span> GPT-5 internal safety report surfaces
          </li>
          <li>
            <span>11:10</span> NVIDIA revises AI revenue outlook
          </li>
          <li>
            <span>13:30</span> EU publishes AI Act roadmap
          </li>
          <li>
            <span>15:00</span> Anthropic funding talks reported
          </li>
        </ul>
      </section>
    </main>
  );
}
