# Environment Variables Setup Guide

## Current Status: ✅ No env vars required

Your landing page currently runs **without any environment variables**. It's a static frontend with no backend dependencies.

## When You'll Need Environment Variables

As you build out the application, you'll need to configure:

### 1️⃣ **Database** (Priority: High)
For storing user accounts, progress tracking, and practice problems:
- **Recommended:** Supabase (includes auth + database)
- **Alternative:** PlanetScale, Neon, or PostgreSQL on Railway

### 2️⃣ **Authentication** (Priority: High)  
For Student/Professional/Institution accounts:
- **Recommended:** NextAuth.js with Supabase
- **Alternative:** Clerk, Auth0, or Supabase Auth

### 3️⃣ **AI/LLM Service** (Priority: High)
For personalized learning and instant feedback:
- **OpenAI GPT-4** - Best for medical explanations
- **Anthropic Claude** - Strong reasoning for math problems
- **Google Gemini** - Cost-effective alternative

### 4️⃣ **Payment Processing** (Priority: Medium)
For subscription plans ($19/month Student, $39/month Professional):
- **Stripe** - Industry standard, excellent documentation
- Handles recurring billing, invoices, and webhooks

### 5️⃣ **Email Service** (Priority: Medium)
For password resets, progress reports, certificates:
- **Resend** - Modern, developer-friendly
- **SendGrid** - Robust, scalable
- **AWS SES** - Low cost at scale

### 6️⃣ **Analytics** (Priority: Low)
Track user engagement and feature usage:
- **Vercel Analytics** - Built-in, no setup needed
- **Google Analytics** - Industry standard
- **PostHog** - Privacy-focused with feature flags

## Quick Setup (When Ready)

```bash
# 1. Copy the example file
cp .env.example .env.local

# 2. Fill in your API keys (never commit .env.local!)
# Edit .env.local with your actual values

# 3. Restart your dev server
npm run dev
```

## Security Best Practices

✅ **DO:**
- Use `.env.local` for local development (gitignored)
- Use Vercel's environment variables dashboard for production
- Prefix client-side vars with `NEXT_PUBLIC_`
- Rotate API keys regularly

❌ **DON'T:**
- Commit `.env` or `.env.local` to git
- Share API keys in screenshots or documentation
- Use production keys in development
- Hardcode secrets in your code

## Recommended Setup Order

When building out features, configure in this order:

1. **Supabase** (Database + Auth) - Free tier available
2. **OpenAI/Anthropic** (AI features) - Pay per use
3. **Stripe** (Payments) - Test mode is free
4. **Resend** (Email) - 100 emails/day free
5. **Vercel Analytics** - Auto-enabled on deployment

## Need Help?

Each service has excellent documentation:
- [Supabase Docs](https://supabase.com/docs)
- [Next.js Environment Variables](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)
- [Stripe Docs](https://stripe.com/docs)
- [OpenAI API Docs](https://platform.openai.com/docs)

---

**Note:** The `.env.example` file in this repo shows all possible variables. You only need to configure the ones for features you're actively building.
