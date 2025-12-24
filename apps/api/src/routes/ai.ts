import { Router } from "express";
import { generateWhyItMatters } from "../services/aiWhyItMatters";

const router = Router();

router.post("/why-it-matters", async (req, res) => {
  const { symbol, headline, impactScore, strength } = req.body;

  // 🔒 GATING — VERY IMPORTANT
  if (strength !== "STRONG") {
    return res.json({
      explanation:
        "AI analysis runs only for strong market-moving signals.",
    });
  }

  try {
    const explanation = await generateWhyItMatters({
      symbol,
      headline,
      impactScore,
    });

    res.json({ explanation });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      explanation: "AI analysis temporarily unavailable.",
    });
  }
});

export default router;
