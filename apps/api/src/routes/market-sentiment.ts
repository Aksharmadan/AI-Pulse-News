import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.json({
    positive: 40,
    negative: 22,
    neutral: 8,
    positiveSources: 40,
    negativeSources: 22,
    lastUpdated: new Date().toISOString(),
  });
});

export default router;

