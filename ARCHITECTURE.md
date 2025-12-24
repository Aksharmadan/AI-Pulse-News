# AI Pulse - System Architecture

## 🏗️ System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        FRONTEND                              │
│  Next.js 14 (App Router) + React + TypeScript + Tailwind   │
│  Framer Motion + Shadcn/UI + Real-time WebSocket Client     │
└─────────────────────────────────────────────────────────────┘
                            ↕ HTTP/WebSocket
┌─────────────────────────────────────────────────────────────┐
│                        API GATEWAY                           │
│  Express + TypeScript + Rate Limiting + Auth                │
└─────────────────────────────────────────────────────────────┘
                            ↕
┌─────────────────────────────────────────────────────────────┐
│                    CORE SERVICES                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ News         │  │ AI           │  │ User         │      │
│  │ Ingestion    │  │ Processing   │  │ Management   │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                            ↕
┌─────────────────────────────────────────────────────────────┐
│                    DATA LAYER                               │
│  PostgreSQL (Main DB) + Redis (Cache/Queue)                 │
└─────────────────────────────────────────────────────────────┘
                            ↕
┌─────────────────────────────────────────────────────────────┐
│                    EXTERNAL SERVICES                        │
│  OpenAI API + News APIs + RSS Feeds                         │
└─────────────────────────────────────────────────────────────┘
```

## 📊 Database Schema

### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  avatar_url TEXT,
  preferences JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Articles Table
```sql
CREATE TABLE articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source_id UUID REFERENCES sources(id),
  original_headline TEXT NOT NULL,
  original_url TEXT NOT NULL,
  original_content TEXT,
  ai_headline TEXT,
  ai_summary TEXT,
  tldr TEXT,
  why_it_matters TEXT,
  what_happens_next TEXT,
  importance_score INTEGER CHECK (importance_score BETWEEN 1 AND 100),
  sentiment VARCHAR(20),
  category VARCHAR(50),
  tags TEXT[],
  published_at TIMESTAMP,
  ingested_at TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Sources Table
```sql
CREATE TABLE sources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  url TEXT,
  credibility_score INTEGER DEFAULT 50,
  category VARCHAR(50),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### User Interactions Table
```sql
CREATE TABLE user_interactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  article_id UUID REFERENCES articles(id),
  interaction_type VARCHAR(50), -- 'view', 'save', 'share', 'dismiss'
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 🔌 API Design

### REST Endpoints

```
GET    /api/v1/feed              - Get personalized feed
GET    /api/v1/articles/:id      - Get article details
POST   /api/v1/articles/:id/view - Track view
POST   /api/v1/search             - AI-powered search
GET    /api/v1/trends             - Get trending topics
GET    /api/v1/categories         - Get categories
POST   /api/v1/preferences        - Update user preferences
GET    /api/v1/health             - Health check
```

### WebSocket Events

```
connect     - Client connects
breaking    - Breaking news alert
update      - Feed update
trend       - Trend change
```

## 🎨 Frontend Structure

```
apps/web/
├── app/
│   ├── (auth)/
│   ├── (main)/
│   │   ├── feed/
│   │   ├── article/
│   │   ├── search/
│   │   └── settings/
│   ├── api/          # API routes
│   ├── components/   # UI components
│   ├── lib/          # Utilities
│   └── hooks/        # Custom hooks
├── public/
└── styles/
```

## 🔧 Backend Structure

```
apps/api/
├── src/
│   ├── routes/       # API routes
│   ├── services/     # Business logic
│   ├── models/       # Database models
│   ├── ai/           # AI processing
│   ├── jobs/         # Background jobs
│   ├── utils/        # Utilities
│   └── types/        # TypeScript types
├── prisma/           # Database schema
└── scripts/          # Migration scripts
```

