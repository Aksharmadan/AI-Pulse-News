export type ImportanceLevel = "Low" | "Medium" | "High" | "Critical";

export type Category = "Markets" | "Tech" | "World" | "Startups" | "AI" | "India" | "Politics" | "Finance";

export type Sentiment = "Positive" | "Negative" | "Neutral";

export interface Article {
  id: string;
  sourceId: string;
  originalHeadline: string;
  originalUrl: string;
  originalContent?: string;
  imageUrl?: string;
  aiHeadline: string;
  aiSummary: string;
  tldr: string;
  whyItMatters?: string;
  whatHappensNext?: string;
  importanceScore: number;
  sentiment?: Sentiment;
  category?: Category;
  tags: string[];
  publishedAt: string;
  ingestedAt: string;
  source?: {
    name: string;
    credibilityScore: number;
  };
}

export interface FeedQuery {
  q?: string;
  category?: Category;
  cursor?: string;
  limit?: number;
}

export interface FeedResponse {
  articles: Article[];
  hasMore: boolean;
  nextCursor?: string;
}

export interface Trend {
  topic: string;
  count: number;
  change: number;
  category: Category;
}

