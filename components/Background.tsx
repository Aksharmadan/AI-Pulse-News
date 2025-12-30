export default function Background() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        background:
          "radial-gradient(circle at 50% 20%, rgba(59,130,246,0.15), transparent 60%)",
        animation: "pulse 6s ease-in-out infinite",
      }}
    />
  );
}
