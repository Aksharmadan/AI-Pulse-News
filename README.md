# 🚀 AI Pulse - News Intelligence Platform

A production-grade, premium AI-powered news intelligence platform that delivers instant understanding of what matters.

## ✨ Features

- **⚡ Instant Understanding** - Get 5-10 second insights per story
- **🎯 Signal > Noise** - AI filters and prioritizes what matters
- **🧼 Premium UI** - Apple-level design, Bloomberg-level data
- **🧠 AI-First** - TL;DR, Why It Matters, What Happens Next
- **🌙 Dark Mode** - Beautiful dark theme support
- **📊 Trend Radar** - Real-time trending topics
- **🔍 Smart Search** - AI-powered search
- **📱 Responsive** - Mobile-first, desktop-perfect

## 🏗️ Architecture

```
apps/
├── web/          # Next.js frontend (App Router)
└── api/          # Express backend API
```

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- PostgreSQL (optional, uses mock data by default)
- OpenAI API key (for AI features)

### Installation

1. **Clone and install dependencies:**

```bash
# Install frontend dependencies
cd apps/web
npm install

# Install backend dependencies
cd ../api
npm install
```

2. **Set up environment variables:**

Create `apps/api/.env`:
```env
PORT=4000
OPENAI_API_KEY=your_openai_api_key_here
DATABASE_URL=postgresql://user:password@localhost:5432/aipulse
```

Create `apps/web/.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

3. **Start the servers:**

```bash
# Terminal 1 - Start API
cd apps/api
npm run dev

# Terminal 2 - Start Frontend
cd apps/web
npm run dev
```

4. **Open your browser:**

- Frontend: http://localhost:3000
- API: http://localhost:4000

## 📁 Project Structure

### Frontend (`apps/web/`)

```
app/
├── components/
│   └── ui/           # Reusable UI components
├── lib/              # Utilities and types
├── hooks/            # Custom React hooks
├── store/            # State management (Zustand)
└── page.tsx          # Main feed page
```

### Backend (`apps/api/`)

```
src/
├── routes/
│   └── v1/           # API v1 routes
├── services/
│   └── aiService.ts  # AI processing
├── types/            # TypeScript types
└── server.ts         # Express server
```

## 🎨 Design Principles

- **Minimal & Clean** - No clutter, premium feel
- **Fast** - Optimized for speed
- **Accessible** - WCAG compliant
- **Responsive** - Works on all devices
- **Dark Mode** - Beautiful dark theme

## 🔧 Tech Stack

### Frontend
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Zustand
- Radix UI

### Backend
- Node.js
- Express
- TypeScript
- OpenAI API
- Prisma (for database)

## 📊 API Endpoints

### v1 API

- `GET /api/v1/feed` - Get personalized feed
- `GET /api/v1/trends` - Get trending topics
- `GET /api/v1/articles/:id` - Get article details
- `POST /api/v1/articles/:id/view` - Track article view

## 🤖 AI Features

- **Headline Rewriting** - Clear, factual headlines
- **Summarization** - 2-3 sentence summaries
- **TL;DR** - One-line essence
- **Why It Matters** - Contextual insights
- **What Happens Next** - Predictive analysis
- **Importance Scoring** - 1-100 importance rating
- **Sentiment Analysis** - Positive/Negative/Neutral
- **Categorization** - Auto-categorize articles
- **Tag Extraction** - Extract relevant tags

## 🚧 Roadmap

- [ ] Database integration (PostgreSQL)
- [ ] User authentication
- [ ] Real-time WebSocket updates
- [ ] News ingestion from multiple sources
- [ ] Personalized feed algorithm
- [ ] Saved articles
- [ ] Email digest
- [ ] Mobile app

## 📝 License

MIT

## 🙏 Credits

Built with ❤️ for busy professionals who need instant understanding.

