import Link from "next/link";
import { motion } from "framer-motion";

export default function NewsCard({ article }: any) {
  return (
    <motion.div
      className="news-card neon-panel"
      whileHover={{ scale: 1.02 }}
    >
      <h4>{article.title}</h4>
      <p>{article.description}</p>

      <div className="news-footer">
        <span>{article.source.name}</span>
        <Link href={`/article/${encodeURIComponent(article.title)}`}>
          Read →
        </Link>
      </div>
    </motion.div>
  );
}
