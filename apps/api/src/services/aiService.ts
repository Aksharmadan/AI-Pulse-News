import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface ArticleContent {
  headline: string;
  content: string;
  source: string;
}

export class AIService {
  async generateHeadline(article: ArticleContent): Promise<string> {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4-turbo-preview",
        messages: [
          {
            role: "system",
            content: "You are a news editor. Rewrite headlines to be clear, factual, and concise. Maximum 80 characters. No clickbait.",
          },
          {
            role: "user",
            content: `Rewrite this headline: "${article.headline}"`,
          },
        ],
        temperature: 0.3,
        max_tokens: 100,
      });

      return response.choices[0]?.message?.content?.trim() || article.headline;
    } catch (error) {
      console.error("Error generating headline:", error);
      return article.headline;
    }
  }

  async generateSummary(article: ArticleContent): Promise<string> {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4-turbo-preview",
        messages: [
          {
            role: "system",
            content: "You are a news summarizer. Provide a clear, factual 2-3 sentence summary. No opinions, just facts.",
          },
          {
            role: "user",
            content: `Summarize this article in 2-3 sentences:\n\nHeadline: ${article.headline}\n\nContent: ${article.content.substring(0, 2000)}`,
          },
        ],
        temperature: 0.3,
        max_tokens: 200,
      });

      return response.choices[0]?.message?.content?.trim() || "";
    } catch (error) {
      console.error("Error generating summary:", error);
      return "";
    }
  }

  async generateTLDR(article: ArticleContent): Promise<string> {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4-turbo-preview",
        messages: [
          {
            role: "system",
            content: "You are a news editor. Provide a one-line TL;DR that captures the essence. Maximum 100 characters.",
          },
          {
            role: "user",
            content: `TL;DR for: "${article.headline}"\n\nContent: ${article.content.substring(0, 1500)}`,
          },
        ],
        temperature: 0.3,
        max_tokens: 50,
      });

      return response.choices[0]?.message?.content?.trim() || "";
    } catch (error) {
      console.error("Error generating TLDR:", error);
      return "";
    }
  }

  async generateWhyItMatters(article: ArticleContent): Promise<string> {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4-turbo-preview",
        messages: [
          {
            role: "system",
            content: "You are a news analyst. Explain why this story matters in 2-3 sentences. Focus on impact and context.",
          },
          {
            role: "user",
            content: `Why does this matter?\n\nHeadline: ${article.headline}\n\nContent: ${article.content.substring(0, 2000)}`,
          },
        ],
        temperature: 0.4,
        max_tokens: 150,
      });

      return response.choices[0]?.message?.content?.trim() || "";
    } catch (error) {
      console.error("Error generating why it matters:", error);
      return "";
    }
  }

  async generateWhatHappensNext(article: ArticleContent): Promise<string> {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4-turbo-preview",
        messages: [
          {
            role: "system",
            content: "You are a news analyst. Predict what might happen next based on this story. Be factual and cautious. 2-3 sentences.",
          },
          {
            role: "user",
            content: `What happens next?\n\nHeadline: ${article.headline}\n\nContent: ${article.content.substring(0, 2000)}`,
          },
        ],
        temperature: 0.5,
        max_tokens: 150,
      });

      return response.choices[0]?.message?.content?.trim() || "";
    } catch (error) {
      console.error("Error generating what happens next:", error);
      return "";
    }
  }

  async calculateImportanceScore(article: ArticleContent): Promise<number> {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4-turbo-preview",
        messages: [
          {
            role: "system",
            content: "You are a news editor. Rate the importance of this story from 1-100. Consider: impact, relevance, timeliness, source credibility. Respond with only the number.",
          },
          {
            role: "user",
            content: `Headline: ${article.headline}\n\nSource: ${article.source}\n\nContent: ${article.content.substring(0, 1500)}`,
          },
        ],
        temperature: 0.2,
        max_tokens: 10,
      });

      const score = parseInt(response.choices[0]?.message?.content?.trim() || "50");
      return Math.max(1, Math.min(100, score));
    } catch (error) {
      console.error("Error calculating importance:", error);
      return 50;
    }
  }

  async detectSentiment(article: ArticleContent): Promise<"Positive" | "Negative" | "Neutral"> {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4-turbo-preview",
        messages: [
          {
            role: "system",
            content: "You are a sentiment analyzer. Analyze the sentiment of this news article. Respond with only one word: Positive, Negative, or Neutral.",
          },
          {
            role: "user",
            content: `Headline: ${article.headline}\n\nContent: ${article.content.substring(0, 1500)}`,
          },
        ],
        temperature: 0.2,
        max_tokens: 10,
      });

      const sentiment = response.choices[0]?.message?.content?.trim() || "Neutral";
      if (sentiment.includes("Positive")) return "Positive";
      if (sentiment.includes("Negative")) return "Negative";
      return "Neutral";
    } catch (error) {
      console.error("Error detecting sentiment:", error);
      return "Neutral";
    }
  }

  async categorizeArticle(article: ArticleContent): Promise<string> {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4-turbo-preview",
        messages: [
          {
            role: "system",
            content: "You are a news categorizer. Categorize this article into one of: Markets, Tech, World, Startups, AI, India, Politics, Finance. Respond with only the category name.",
          },
          {
            role: "user",
            content: `Headline: ${article.headline}\n\nContent: ${article.content.substring(0, 1500)}`,
          },
        ],
        temperature: 0.2,
        max_tokens: 20,
      });

      return response.choices[0]?.message?.content?.trim() || "World";
    } catch (error) {
      console.error("Error categorizing article:", error);
      return "World";
    }
  }

  async extractTags(article: ArticleContent): Promise<string[]> {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4-turbo-preview",
        messages: [
          {
            role: "system",
            content: "You are a tag extractor. Extract 3-5 relevant tags from this article. Respond with comma-separated tags, no other text.",
          },
          {
            role: "user",
            content: `Headline: ${article.headline}\n\nContent: ${article.content.substring(0, 1500)}`,
          },
        ],
        temperature: 0.3,
        max_tokens: 50,
      });

      const tags = response.choices[0]?.message?.content?.trim() || "";
      return tags.split(",").map((tag) => tag.trim()).filter(Boolean).slice(0, 5);
    } catch (error) {
      console.error("Error extracting tags:", error);
      return [];
    }
  }
}

export const aiService = new AIService();

