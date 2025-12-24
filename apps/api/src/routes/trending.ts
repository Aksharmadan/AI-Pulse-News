import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.json([
    {
      ticker: "MSFT",
      description: "Microsoft Unveils New AI Features",
      change: 2.3,
      changePercent: 2.3,
      price: 385.50,
    },
    {
      ticker: "AUTOS",
      description: "EV Stocks Decline as Tesla Slides",
      change: -1.8,
      changePercent: -1.8,
      price: 245.20,
    },
    {
      ticker: "INFL",
      description: "CPI Report Points to Cooling Inflation",
      change: 1.5,
      changePercent: 1.5,
      price: 102.30,
    },
    {
      ticker: "AMZN",
      description: "Amazon Announces Stock Buyback",
      change: 1.5,
      changePercent: 1.5,
      price: 152.80,
    },
    {
      ticker: "NVDA",
      description: "AI Chip Demand Drives Record Sales",
      change: 3.2,
      changePercent: 3.2,
      price: 485.30,
    },
    {
      ticker: "META",
      description: "Reality Labs Revenue Exceeds Expectations",
      change: 2.8,
      changePercent: 2.8,
      price: 425.60,
    },
  ]);
});

export default router;

