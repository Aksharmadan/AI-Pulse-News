import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  const now = new Date();
  
  // Generate realistic trend data
  const generateTrendData = (base: number, isPositive: boolean) => {
    const data = [];
    let current = base;
    for (let i = 0; i < 7; i++) {
      const change = (Math.random() * 10 - 5) * (isPositive ? 1 : -1);
      current = Math.max(20, Math.min(90, current + change));
      data.push(Math.round(current));
    }
    return data;
  };
  
  res.status(200).json({
    ok: true,
    data: [
      {
        symbol: "META",
        headline: "Meta Stock Jumps as Earnings Smash Expectations",
        source: "The Wall Street Journal",
        timeAgo: "2h ago",
        sentiment: "Positive",
        impactScore: 85,
        trendData: generateTrendData(45, true),
      },
      {
        symbol: "MSFT",
        headline: "Microsoft Unveils New AI Features",
        source: "Bloomberg",
        timeAgo: "3h ago",
        sentiment: "Positive",
        impactScore: 78,
        trendData: generateTrendData(50, true),
      },
      {
        symbol: "TSLA",
        headline: "Tesla Reports Strong Q4 Deliveries",
        source: "Reuters",
        timeAgo: "4h ago",
        sentiment: "Positive",
        impactScore: 72,
        trendData: generateTrendData(40, true),
      },
      {
        symbol: "AAPL",
        headline: "Apple Faces Supply Chain Challenges",
        source: "CNBC",
        timeAgo: "5h ago",
        sentiment: "Negative",
        impactScore: 65,
        trendData: generateTrendData(70, false),
      },
      {
        symbol: "NVDA",
        headline: "NVIDIA Announces Breakthrough in AI Chips",
        source: "TechCrunch",
        timeAgo: "1h ago",
        sentiment: "Positive",
        impactScore: 88,
        trendData: generateTrendData(55, true),
      },
      {
        symbol: "GOOGL",
        headline: "Google Cloud Revenue Surges 25%",
        source: "Financial Times",
        timeAgo: "6h ago",
        sentiment: "Positive",
        impactScore: 75,
        trendData: generateTrendData(60, true),
      },
    ],
  });
});

export default router;
