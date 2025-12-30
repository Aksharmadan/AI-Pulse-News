export default function Chart() {
  return (
    <div
      style={{
        marginTop: 60,
    padding: 30,
        borderRadius: 20,
        background: "rgba(255,255,255,0.04)",
      }}
    >
      <h3>AI Trend Score (Last 7 Days)</h3>

      <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
        {[40, 60, 55, 70, 85, 78, 92].map((v, i) => (
          <div
            key={i}
            style={{
              width: 30,
              height: v * 2,
              background: "linear-gradient(180deg,#3b82f6,#60a5fa)",
              borderRadius: 6,
            }}
          />
        ))}
      </div>
    </div>
  );
}
