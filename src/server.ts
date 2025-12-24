import express from "express";
import cors from "cors";
import newsRoutes from "./routes/news";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "newspulse-api" });
});

app.use("/news", newsRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 API running on http://localhost:${PORT}`);
});
