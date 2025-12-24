import { Router } from "express";
import { getMockVolumeData } from "../services/mockVolumeFeed";
import { detectVolumeSpike } from "../services/volumeDetector";

const router = Router();

router.get("/", (_req, res) => {
  const snapshots = getMockVolumeData();

  const signals = snapshots
    .map(detectVolumeSpike)
    .filter(Boolean);

  res.json(signals);
});

export default router;
