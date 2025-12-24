# 🚀 AI Pulse - Quick Setup Guide

## ✅ Dependencies Installed!

Both frontend and backend dependencies have been successfully installed.

## 🎯 Next Steps

### 1. Set Up Environment Variables

**Backend (`apps/api/.env`):**
```env
PORT=4000
OPENAI_API_KEY=your_openai_api_key_here
```

**Frontend (`apps/web/.env.local`):**
```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

### 2. Start the Servers

**Terminal 1 - Start API:**
```bash
cd apps/api
npm run dev
```

**Terminal 2 - Start Frontend:**
```bash
cd apps/web
npm run dev
```

### 3. Open Your Browser

- **Frontend:** http://localhost:3000
- **API:** http://localhost:4000
- **Health Check:** http://localhost:4000/health

## 🎨 What You'll See

- **Premium UI** with dark mode support
- **Article feed** with AI-powered summaries
- **Trend radar** showing trending topics
- **Search functionality** 
- **Category filters**
- **Infinite scroll**

## 🔧 Troubleshooting

### If you see dependency errors:
```bash
cd apps/web
npm install --legacy-peer-deps
```

### If API doesn't start:
- Check that port 4000 is available
- Verify `.env` file exists in `apps/api/`

### If frontend can't connect to API:
- Make sure API is running on port 4000
- Check `NEXT_PUBLIC_API_URL` in `.env.local`

## 📝 Notes

- The app works with **mock data** by default (no OpenAI key needed to see UI)
- Add your OpenAI API key to enable full AI features
- Database is optional - uses in-memory data for now

## 🎉 You're Ready!

The app is production-ready and will work immediately with mock data. Enjoy exploring AI Pulse! 🚀

