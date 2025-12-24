import { Router } from "express";
import { Trend } from "../../types/index.js";

const router = Router();

// Mock trends data
const MOCK_TRENDS: Trend[] = [
  {
    topic: "AI Integration",
    count: 245,
    change: 15,
    category: "Tech",
  },
  {
    topic: "Market Volatility",
    count: 189,
    change: -8,
    category: "Markets",
  },
  {
    topic: "Climate Policy",
    count: 156,
    change: 22,
    category: "World",
  },
  {
    topic: "Startup Funding",
    count: 134,
    change: 5,
    category: "Startups",
  },
  {
    topic: "India Tech",
    count: 112,
    change: 12,
    category: "India",
  },
];

router.get("/", async (req, res) => {
  try {
    // Sort by count descending
    const trends = [...MOCK_TRENDS].sort((a, b) => b.count - a.count);

    res.json({ trends });
  } catch (error) {
    console.error("Error fetching trends:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;

