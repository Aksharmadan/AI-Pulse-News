type NewsItem = {
  symbol: string;
  impactScore: number;
};

type VolumeSignal = {
  symbol: string;
  spikeRatio: number;
  severity: "LOW" | "MEDIUM" | "HIGH";
};

export type CompositeSignal = {
  symbol: string;
  strength: "WATCH" | "MEDIUM" | "STRONG";
  reason: string;
};

export function buildCompositeSignals(
  news: NewsItem[],
  volumes: VolumeSignal[]
): CompositeSignal[] {
  const volumeMap = new Map(
    volumes.map(v => [v.symbol, v])
  );

  const signals: CompositeSignal[] = [];

  for (const item of news) {
    const volume = volumeMap.get(item.symbol);

    if (!volume) continue;

    if (item.impactScore >= 70) {
      signals.push({
        symbol: item.symbol,
        strength: "STRONG",
        reason: "High-impact news with strong volume confirmation",
      });
    } else if (item.impactScore >= 60) {
      signals.push({
        symbol: item.symbol,
        strength: "MEDIUM",
        reason: "Moderate news with volume spike",
      });
    }
  }

  return signals;
}
