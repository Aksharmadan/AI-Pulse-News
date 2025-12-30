export default function Stats() {
  return (
    <div style={{ display: "flex", gap: 40, marginTop: 60 }}>
      {[
        { label: "Articles Analyzed", value: "12,842" },
        { label: "AI Rankings Today", value: "1,092" },
        { label: "Live Sources", value: "48" },
      ].map((s) => (
        <div
          key={s.label}
          style={{
            padding: 24,
            borderRadius: 16,
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(10px)",
            minWidth: 180,
            textAlign: "center",
          }}
        >
          <h2>{s.value}</h2>
          <p style={{ opacity: 0.6 }}>{s.label}</p>
        </div>
      ))}
    </div>
  );
}
