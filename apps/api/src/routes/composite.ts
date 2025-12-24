import { Router } from "express";
import { buildCompositeSignals } from "../services/compositeSignal";
import newsRoutes from "./news";
import { getMockVolumeData } from "../services/mockVolumeFeed";
import { detectVolumeSpike } from "../services/volumeDetector";

const router = Router();

router.get("/", (_req, res) => {
  // Reuse mock news directly
  const news = [
    { symbol: "TATA POWER", impactScore: 78 },
    { symbol: "IRFC", impactScore: 72 },
    { symbol: "ADANI PORTS", impactScore: 61 },
  ];

  const volumeSignals = getMockVolumeData()
    .map(detectVolumeSpike)
    .filter(Boolean);

  const composite = buildCompositeSignals(
    news,
    volumeSignals as any
  );

  res.json(composite);
});

export default router;
