import { Router } from "express";
import { FeedQuery, FeedResponse } from "../../types/index.js";

const router = Router();

// Helper function to generate image URL based on article content
function getArticleImageUrl(article: { category?: string; tags: string[]; aiHeadline: string }): string {
  const category = article.category?.toLowerCase() || "news";
  const topic = article.tags[0]?.toLowerCase() || "business";
  const imageId = Math.abs(article.aiHeadline.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)) % 1000;
  return `https://source.unsplash.com/800x600/?${category},${topic}&sig=${imageId}`;
}

// Mock data for now - will be replaced with database queries
const MOCK_ARTICLES = [
  {
    id: "1",
    sourceId: "1",
    originalHeadline: "Meta Stock Jumps as Earnings Smash Expectations",
    originalUrl: "https://example.com/meta-earnings",
    imageUrl: "https://source.unsplash.com/800x600/?technology,business,stock-market&sig=1",
    aiHeadline: "Meta Exceeds Q4 Earnings Expectations, Stock Surges",
    aiSummary: "Meta Platforms reported stronger-than-expected quarterly earnings, driven by robust advertising revenue and cost-cutting measures. The company's stock price jumped significantly in after-hours trading.",
    tldr: "Meta beats earnings expectations, stock jumps on strong ad revenue.",
    whyItMatters: "This signals a potential recovery in the digital advertising market and demonstrates Meta's ability to adapt to changing market conditions. It could indicate broader tech sector strength.",
    whatHappensNext: "Analysts may revise price targets upward. Other tech stocks could see positive momentum. Regulatory scrutiny may intensify given Meta's market position.",
    importanceScore: 85,
    sentiment: "Positive" as const,
    category: "Markets" as const,
    tags: ["Meta", "Earnings", "Stock Market", "Tech"],
    publishedAt: new Date().toISOString(),
    ingestedAt: new Date().toISOString(),
    source: {
      name: "The Wall Street Journal",
      credibilityScore: 90,
    },
  },
  {
    id: "2",
    sourceId: "2",
    originalHeadline: "Microsoft Unveils New AI Features",
    originalUrl: "https://example.com/microsoft-ai",
    imageUrl: "https://source.unsplash.com/800x600/?technology,ai,artificial-intelligence&sig=2",
    aiHeadline: "Microsoft Announces Major AI Integration Across Products",
    aiSummary: "Microsoft revealed comprehensive AI features across its product suite, including Office, Windows, and Azure. The company is positioning itself as a leader in enterprise AI adoption.",
    tldr: "Microsoft rolls out AI features across all major products.",
    whyItMatters: "This represents a significant shift in how enterprise software integrates AI, potentially setting new industry standards. Competitors will need to respond quickly.",
    whatHappensNext: "Enterprise customers may accelerate AI adoption. Competitors like Google and Amazon will likely announce similar initiatives. Regulatory discussions about AI in business may intensify.",
    importanceScore: 78,
    sentiment: "Positive" as const,
    category: "Tech" as const,
    tags: ["Microsoft", "AI", "Enterprise", "Technology"],
    publishedAt: new Date(Date.now() - 3600000).toISOString(),
    ingestedAt: new Date().toISOString(),
    source: {
      name: "Bloomberg",
      credibilityScore: 88,
    },
  },
  {
    id: "3",
    sourceId: "3",
    originalHeadline: "Tesla Reports Strong Q4 Deliveries",
    originalUrl: "https://example.com/tesla-deliveries",
    imageUrl: "https://source.unsplash.com/800x600/?electric-vehicle,tesla,automotive&sig=3",
    aiHeadline: "Tesla Exceeds Delivery Targets in Q4",
    aiSummary: "Tesla delivered more vehicles than expected in the fourth quarter, beating analyst estimates. The company continues to expand production capacity globally.",
    tldr: "Tesla beats Q4 delivery estimates, production ramps up.",
    whyItMatters: "Strong delivery numbers suggest robust demand despite economic concerns. This could indicate resilience in the EV market and Tesla's competitive position.",
    whatHappensNext: "Stock price may see positive momentum. Other EV manufacturers may report similar trends. Supply chain improvements could benefit the entire sector.",
    importanceScore: 72,
    sentiment: "Positive" as const,
    category: "Markets" as const,
    tags: ["Tesla", "EV", "Deliveries", "Automotive"],
    publishedAt: new Date(Date.now() - 7200000).toISOString(),
    ingestedAt: new Date().toISOString(),
    source: {
      name: "Reuters",
      credibilityScore: 85,
    },
  },
];

router.get("/", async (req, res) => {
  try {
    const query: FeedQuery = {
      q: req.query.q as string,
      category: req.query.category as any,
      cursor: req.query.cursor as string,
      limit: parseInt(req.query.limit as string) || 10,
    };

    let articles = [...MOCK_ARTICLES];

    // Filter by search query
    if (query.q) {
      const searchLower = query.q.toLowerCase();
      articles = articles.filter(
        (article) =>
          article.aiHeadline.toLowerCase().includes(searchLower) ||
          article.aiSummary.toLowerCase().includes(searchLower) ||
          article.tags.some((tag) => tag.toLowerCase().includes(searchLower))
      );
    }

    // Filter by category
    if (query.category && query.category !== ("all" as any)) {
      articles = articles.filter((article) => article.category === query.category);
    }

    // Sort by importance score
    articles.sort((a, b) => b.importanceScore - a.importanceScore);

    // Pagination
    const cursorIndex = query.cursor
      ? articles.findIndex((a) => a.id === query.cursor)
      : 0;
    const startIndex = cursorIndex >= 0 ? cursorIndex + 1 : 0;
    const endIndex = startIndex + query.limit;
    const paginatedArticles = articles.slice(startIndex, endIndex);

    const response: FeedResponse = {
      articles: paginatedArticles,
      hasMore: endIndex < articles.length,
      nextCursor: paginatedArticles.length > 0 ? paginatedArticles[paginatedArticles.length - 1].id : undefined,
    };

    res.json(response);
  } catch (error) {
    console.error("Error fetching feed:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;

