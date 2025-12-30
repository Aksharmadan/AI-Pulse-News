import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=artificial intelligence&sortBy=publishedAt&language=en&pageSize=10&apiKey=${process.env.NEWS_API_KEY}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  return NextResponse.json(data.articles);
}
