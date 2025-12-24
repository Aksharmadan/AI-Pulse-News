import OpenAI from "openai";

let client: OpenAI | null = null;

function getClient() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY not configured");
  }

  if (!client) {
    client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  return client;
}

type AIInput = {
  symbol: string;
  headline: string;
  impactScore: number;
};

export async function generateWhyItMatters(
  input: AIInput
): Promise<string> {
  const prompt = `
You are a buy-side equity analyst.

Stock: ${input.symbol}
News: ${input.headline}
Impact Score: ${input.impactScore}

Task:
Explain WHY this news can impact stock price.

Rules:
- No price prediction
- No buy/sell advice
- Focus on business impact, revenue, sentiment, or policy
- Max 70 words
- Professional, factual tone
`;

  const response = await getClient().chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.2,
  });

  return response.choices[0].message.content ?? "";
}
