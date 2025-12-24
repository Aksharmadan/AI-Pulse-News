import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.json([
    {
      symbol: "TATA POWER",
      headline: "Govt renewable push announced",
      impactScore: 78,
      horizon: "short",
      updatedAt: new Date().toISOString(),
    },
    {
      symbol: "IRFC",
      headline: "Strong quarterly earnings",
      impactScore: 72,
      horizon: "short",
      updatedAt: new Date().toISOString(),
    },
    {
      symbol: "ADANI PORTS",
      headline: "Global trade volume surge",
      impactScore: 61,
      horizon: "medium",
      updatedAt: new Date().toISOString(),
    },
  ]);
});

export default router;
