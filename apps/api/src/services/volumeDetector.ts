type VolumeSnapshot = {
  symbol: string;
  currentVolume: number;
  avgVolume: number;
};

export type VolumeSignal = {
  symbol: string;
  spikeRatio: number;
  severity: "LOW" | "MEDIUM" | "HIGH";
};

export function detectVolumeSpike(
  snapshot: VolumeSnapshot
): VolumeSignal | null {
  const { symbol, currentVolume, avgVolume } = snapshot;

  if (avgVolume === 0) return null;

  const spikeRatio = currentVolume / avgVolume;

  if (spikeRatio < 1.5) return null;

  let severity: VolumeSignal["severity"] = "LOW";
  if (spikeRatio >= 2.5) severity = "HIGH";
  else if (spikeRatio >= 2.0) severity = "MEDIUM";

  return {
    symbol,
    spikeRatio: Number(spikeRatio.toFixed(2)),
    severity,
  };
}
