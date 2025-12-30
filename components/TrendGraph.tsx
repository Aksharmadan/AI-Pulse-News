"use client";

import { motion } from "framer-motion";

const data = [30, 42, 38, 55, 47, 62, 54];

export default function TrendGraph() {
  return (
    <div className="trend-wrap">
      <svg viewBox="0 0 300 120">
        <defs>
          <linearGradient id="lineGlow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4f8cff" />
            <stop offset="100%" stopColor="#00eaff" />
          </linearGradient>
        </defs>

        <motion.polyline
          fill="none"
          stroke="url(#lineGlow)"
          strokeWidth="3"
          points="0,90 40,70 80,75 120,55 160,65 200,45 240,60 280,40"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />

        {data.map((_, i) => (
          <motion.circle
            key={i}
            cx={i * 40}
            cy={120 - data[i]}
            r="4"
            fill="#00eaff"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 + i * 0.1 }}
          />
        ))}
      </svg>
    </div>
  );
}
