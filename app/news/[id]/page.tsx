"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const MOCK_NEWS = [
  {
    id: "1",
    title: "OpenAI rumored GPT-5 safety eval leak",
    source: "Insider AI",
    content:
      "Sources suggest internal GPT-5 safety evaluations reveal major advances in reasoning, safety alignment, and autonomy.",
  },
  {
    id: "2",
    title: "NVIDIA AI chip demand exceeds forecasts",
    source: "Bloomberg",
    content:
      "NVIDIA reports record demand for AI accelerators driven by hyperscalers and enterprise adoption.",
  },
  {
    id: "3",
    title: "EU finalizes AI Act enforcement timeline",
    source: "Reuters",
    content:
      "The EU has announced final enforcement phases of the AI Act affecting foundation models and startups.",
  },
];

export default function NewsDetailPage() {
  const { id } = useParams();
  const article = MOCK_NEWS.find((n) => n.id === id);

  if (!article) {
    return <div className="page">Article not found</div>;
  }

  return (
    <main className="page">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {article.title}
      </motion.h1>

      <p className="muted">{article.source}</p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {article.content}
      </motion.p>

      <Link href="/stream">
        <button className="secondary">← Back to stream</button>
      </Link>
    </main>
  );
}
