import "dotenv/config";
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import feedRoutes from "./routes/v1/feed.js";
import trendsRoutes from "./routes/v1/trends.js";
import articlesRoutes from "./routes/v1/articles.js";

// Legacy routes (keeping for backward compatibility)
import newsRoutes from "./routes/news.js";
import signalRoutes from "./routes/signals.js";
import compositeRoutes from "./routes/composite.js";
import aiRoutes from "./routes/ai.js";
import marketSentimentRoutes from "./routes/market-sentiment.js";
import trendingRoutes from "./routes/trending.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use("/api/", limiter);

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({ ok: true, timestamp: new Date().toISOString() });
});

// API v1 routes
app.use("/api/v1/feed", feedRoutes);
app.use("/api/v1/trends", trendsRoutes);
app.use("/api/v1/articles", articlesRoutes);

// Legacy routes (backward compatibility)
app.use("/news", newsRoutes);
app.use("/signals", signalRoutes);
app.use("/composite-signals", compositeRoutes);
app.use("/ai", aiRoutes);
app.use("/market-sentiment", marketSentimentRoutes);
app.use("/trending", trendingRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 AI Pulse API listening on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`📰 Feed: http://localhost:${PORT}/api/v1/feed`);
});
