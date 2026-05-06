# 🚀 Antigravity — Full Product & Business Plan

> **Tagline:** *We lift restaurants off the ground.*
> **Mission:** Help restaurants in India go live on food delivery platforms fast, look great, and grow consistently — without the technical headache.

---

## 1. The Problem (In Depth)

A restaurant owner in Lucknow wants to get on Swiggy and Zomato. Here is what actually happens to them:

- They visit the partner portal, get confused by the document requirements, and either upload the wrong things or give up midway.
- Even if they get listed, their menu has no photos, poor descriptions, and wrong pricing — so the algorithm buries them.
- Ratings drop because they don't know how to respond to negative reviews. In-app ads go wasted because they don't know what to optimize.
- Each update (seasonal menu, price change, new dish) requires logging into 3–4 dashboards separately.

The platforms (Swiggy, Zomato, Blinkit, Instamart, Magicpin) offer zero meaningful hand-holding support for small restaurant owners. **Antigravity is that missing support layer.**

---

## 2. The Solution

Antigravity is a **SaaS + Done-For-You hybrid** platform. It has two sides:

**For Restaurant Owners (Clients):**
A simple web portal where they onboard themselves, upload documents, track their listing status across platforms, and see performance analytics — all in one place. No need to log into 4 different partner portals.

**For You (Admin/Operator):**
A powerful admin dashboard where you manage all client accounts, update listing statuses, communicate with clients, and track revenue. As you grow and hire, team members get their own roles.

This is the right model for India right now: clients want *results*, not software. But the software makes your service scalable, professional, and hard to copy.

---

## 3. Brand Identity — Antigravity

The name is intentional. Restaurants feel *weighed down* by the complexity of going digital. Antigravity *lifts them up*. Everything in your brand should reflect this:

- **Colors:** Deep space black `#0A0A0F` with electric orange `#FF5C00` accent (food energy + tech boldness). White `#F5F5F0` for text.
- **Typography:** A bold geometric display font (e.g., Space Grotesk for headings, Plus Jakarta Sans for body).
- **Tone:** Confident, direct, and warm. Not corporate. Not startup-bro either. Think: *"a smart friend who knows the system"*.
- **Logo concept:** An upward arrow or rocket — lifting the restaurant brand skyward.

---

## 4. Target Audience

### Primary (Start Here)
Small and medium restaurants, dhabas, cloud kitchens, and cafés in **Lucknow** that are either:
- Not listed on any delivery platform yet, OR
- Listed but getting poor results (low orders, bad ratings, inactive listings)

### Secondary (Expand After 6 Months)
- Restaurant chains wanting to expand to new cities via delivery platforms
- Ghost/cloud kitchens (high volume, purely delivery-based)
- Tier-2 cities: Kanpur, Varanasi, Agra, Jaipur

### Who Makes the Decision
The owner, manager, or the person who handles accounts. These are often non-technical people aged 35–55. Your UI must be dead simple for them.

---

## 5. Business Model & Pricing

### Service Packages (What You Sell)

**🟠 Launchpad — ₹2,500 per platform**
One-time fee. You handle everything: document collection, account creation, menu upload with photos guidance, and going live. Ideal for restaurants that just want to get started.

*Bundle offer: Any 2 platforms for ₹4,000 | All 3 major platforms (Swiggy + Zomato + Blinkit) for ₹6,000*

**🚀 Growth Plan — ₹3,500/month**
Monthly retainer. Includes menu updates, review management, monthly analytics report, promotions setup, and platform-specific optimization tips. Up to 2 platforms.

**⚡ Full Stack — ₹8,000/month**
Everything in Growth, plus in-app ad management (Swiggy Ads, Zomato Gold promotions), competitor analysis, pricing strategy, and coverage across all active platforms.

### Revenue Projections (Conservative)

| Month | New Onboardings | Retainer Clients | Approx. Revenue |
|-------|----------------|-----------------|-----------------|
| 1–2   | 5 (discounted/free) | 0 | ₹0 (validation) |
| 3     | 8 | 3 | ₹28,500 |
| 6     | 12 | 15 | ₹75,000 |
| 12    | 20 | 40 | ₹1,85,000 |

At 50 retainer clients (₹4,000 avg), that's **₹2,00,000/month in predictable recurring revenue** — before onboarding fees.

---

## 6. Tech Stack

You're a developer, so here is a precise and modern stack that balances speed of development with long-term scalability.

### Frontend
- **Next.js 14 (App Router)** — Marketing site + client portal + admin panel in one codebase. Server components for performance, client components where interactivity is needed.
- **Tailwind CSS** — Utility-first CSS, fast to build with.
- **shadcn/ui** — For reusable, accessible UI components (tables, modals, forms, etc.).
- **Framer Motion** — For smooth animations on the marketing site.

### Backend
- **Next.js API Routes** — For simple endpoints.
- **Prisma ORM** — Clean database schema management.
- **PostgreSQL** (via **Supabase**) — Managed database, also gives you auth and realtime out of the box.

### Auth
- **NextAuth.js** (with Supabase adapter) OR **Supabase Auth** directly. Use email/OTP login for restaurant owners — they won't remember passwords.

### File Storage (Documents)
- **Cloudflare R2** (S3-compatible, free egress) — For storing client documents like FSSAI certificates, menu PDFs, outlet photos.

### Payments
- **Razorpay** — Best option for India. Supports subscriptions, one-time payments, and UPI.

### Communication
- **WhatsApp Business API (via Interakt or Wati)** — This is critical. Your clients live on WhatsApp, not email. Automated messages for onboarding steps, document reminders, and status updates via WhatsApp will feel magical to them.
- **Resend** — For transactional emails (receipts, reports).

### Analytics & Monitoring
- **PostHog** — Product analytics (free tier is generous). See how clients use your portal.
- **Sentry** — Error tracking.

### Deployment
- **Vercel** — Zero-config Next.js deployment. Start on the free tier, upgrade as needed.

---

## 7. Product — Pages & Features

### 7A. Public Marketing Website

These are the pages your potential clients see before signing up:

**Home Page (`/`)**
Hero section with the tagline, a clear value prop, and a primary CTA ("Get Your Restaurant Listed"). Below the fold: platform logos (Swiggy, Zomato, Blinkit, etc.), the 3 service packages with pricing, a "How It Works" section (3 steps), and client testimonials.

**How It Works (`/how-it-works`)**
A detailed breakdown of your process: submit documents → we create your account → menu is set up → you go live → we manage growth. Use a visual timeline/stepper component.

**Pricing (`/pricing`)**
Clear pricing cards with feature comparison. Add a FAQ section below covering common objections: "Do I need GST?", "How long does it take?", "What if my application gets rejected?", "Can I cancel anytime?".

**Case Studies (`/results`)**
After your first 3–5 clients, add real results here. Even simple ones: "Café X in Gomti Nagar got 120 orders in their first month." This page will do more selling than anything else on your site.

**Contact (`/contact`)**
A simple form + your WhatsApp number + Lucknow city mention. Local trust matters for your first market.

### 7B. Client Portal (After Login)

This is where restaurant owners log in and interact with your service.

**Dashboard (`/dashboard`)**
At a glance: which platforms they're listed on, current status of any pending onboarding, their monthly order volume trend (if you pull this manually or via API), and quick action buttons ("Request Menu Update", "View Report", "Chat with Us").

**Onboarding Tracker (`/dashboard/onboarding`)**
A visual stepper showing exactly where their listing stands. Steps might be: Documents Received → Account Created → Menu Uploaded → Under Review → Live! Clients check this instead of WhatsApping you every hour asking "kab hoga?"

**Document Upload (`/dashboard/documents`)**
A clean file upload interface where clients submit FSSAI certificate, GST, PAN, cancelled cheque, menu PDF, and outlet photos. Show which are approved ✅, pending ⏳, or need resubmission ❌.

**Analytics (`/dashboard/analytics`)**
Monthly report view — order count, rating trend, platform-wise breakdown. Start by manually entering this data from the platforms; later you can explore if any platform API allows fetching this.

**My Plan (`/dashboard/billing`)**
Shows current package, next billing date, payment history, and an upgrade button. Integrated with Razorpay subscriptions.

**Support (`/dashboard/support`)**
A simple ticketing system or a WhatsApp chat widget so clients can message you directly. Keeping this inside the portal makes support trackable.

### 7C. Admin Dashboard (Only You Can Access)

**Client List (`/admin/clients`)**
All clients in a table with: name, city, plan type, platforms they're on, onboarding status, last contacted date, and MRR contribution.

**Onboarding Manager (`/admin/onboarding`)**
For each client: see their uploaded documents, update their onboarding stage, leave internal notes, trigger WhatsApp notifications ("Your account is now live on Swiggy! 🎉").

**Revenue Dashboard (`/admin/revenue`)**
Total MRR, churn rate, new clients this month, upcoming renewals. Built from Razorpay webhook data.

**Task Manager (`/admin/tasks`)**
Simple kanban or checklist of things you need to do for each client this week — menu update for Client A, ad campaign setup for Client B, etc.

---

## 8. Database Schema (Core Tables)

```sql
-- Users (restaurant owners)
users (id, email, phone, name, business_name, city, created_at)

-- Clients (business details)
clients (id, user_id, plan_type, status, razorpay_subscription_id, mrr, created_at)

-- Platforms (which platforms a client is on)
client_platforms (id, client_id, platform_name, status, listed_at, listing_url)
-- platform_name: 'swiggy' | 'zomato' | 'blinkit' | 'instamart' | 'magicpin'
-- status: 'pending' | 'in_progress' | 'live' | 'suspended'

-- Documents
documents (id, client_id, doc_type, file_url, status, uploaded_at, reviewed_at)
-- doc_type: 'fssai' | 'gst' | 'pan' | 'bank' | 'menu' | 'photos'
-- status: 'pending' | 'approved' | 'rejected'

-- Onboarding Steps
onboarding_steps (id, client_id, platform_id, step_name, completed, completed_at)

-- Analytics (manually entered monthly)
analytics (id, client_id, platform_id, month, order_count, rating, revenue_est)

-- Invoices
invoices (id, client_id, amount, status, razorpay_payment_id, created_at)
```

---

## 9. MVP Feature Scope (What to Build First)

The biggest mistake developers make is building everything before getting a single paying client. Here is the strict MVP — build only this first, launch in 4–6 weeks, then iterate based on real feedback.

**MVP includes:**
- Marketing landing page with pricing and contact form
- Client signup + OTP login
- Document upload form (FSSAI, GST, PAN, photos, menu)
- Basic onboarding status tracker (manual update by you via admin)
- Simple admin panel to view all clients and their documents
- Razorpay payment link integration (even manual links are fine at first)
- WhatsApp Business number linked

**Not in MVP (add later):**
- Analytics dashboard (do this manually via PDF reports first)
- In-app support ticketing
- Automated WhatsApp messages
- Subscription billing via Razorpay API (start with manual payment links)
- Multi-city support

---

## 10. Development Roadmap

### Phase 1 — Foundation (Weeks 1–4)
Set up Next.js project with Supabase, Tailwind, and shadcn. Build the marketing website (Home, Pricing, How It Works, Contact). Set up auth (OTP via email or phone). Build the document upload flow for clients. Build the basic admin panel. Deploy to Vercel.

### Phase 2 — Onboarding Engine (Weeks 5–8)
Build the onboarding tracker with manual status updates. Integrate Razorpay for one-time payment links. Set up WhatsApp Business for client communication. Onboard your first 3–5 paying clients. Collect feedback ruthlessly.

### Phase 3 — Growth Features (Weeks 9–16)
Add the analytics dashboard (even if data is manually entered). Build the full admin task manager. Automate WhatsApp notifications via Interakt/Wati API. Add Razorpay subscription billing. Build the case studies page with real results.

### Phase 4 — Scale (Month 5+)
Explore Swiggy/Zomato partner APIs if available. Build multi-city support. Hire a part-time operations person to handle onboarding. Consider a white-label version for other consultants to resell.

---

## 11. Go-To-Market Strategy (Lucknow First)

### Month 1–2: Zero Budget, High Hustle

Walk into restaurants in Gomti Nagar, Hazratganj, Aliganj, and Aminabad that are not on Swiggy/Zomato. Check the app — if you can't find a restaurant on delivery platforms, they're a potential client. Talk to the owner directly, show your website on your phone, and close on the spot.

Your pitch in Hindi is simple: *"Aapko Swiggy aur Zomato pe lana mera kaam hai. Sabse kagaz, account, menu sab main sambhal lunga. Aap sirf khana banao."* (Getting you on Swiggy and Zomato is my job. Documents, account, menu — I'll handle everything. You just cook.)

Offer your first 3 clients free in exchange for a testimonial and a referral to one other restaurant owner.

### Month 2–3: Community Play

Join Lucknow business WhatsApp groups, restaurant association groups, and local Facebook groups. Post a before/after story: "We got [Restaurant Name] live on Swiggy in 6 days and they got 85 orders in their first week." Simple, visual, credible.

### Month 3+: Referral Engine

Every satisfied client knows 5 other restaurant owners. Build a referral program: refer a restaurant, get ₹500 off your next month. This is the lowest-cost acquisition channel you have.

### Digital Presence

Run Google Ads targeting searches like "Swiggy pe register kaise kare", "Zomato partner registration Lucknow", "restaurant listing service". These keywords have high intent and low competition outside metros. Budget: ₹3,000–5,000/month to start.

---

## 12. Competitive Moat — Why You'll Win

There are a few agencies doing this in Delhi and Mumbai, but virtually none in Lucknow with a dedicated platform. Your advantages:

**You've done this before.** You've listed restaurants from your previous job, so you're not learning on the job — you know the rejection reasons, the timelines, and the tricks. Clients can feel this confidence.

**You're local.** Being in Lucknow means you can meet clients in person, build trust faster, and understand local food culture. A Delhi-based agency can't do this.

**You have a product.** A proper client portal with onboarding tracking makes you look 10x more professional than a WhatsApp-only competitor. It also makes the client feel in control, which reduces anxiety and support messages.

**Speed.** Because you're a developer, you can fix the product in hours when clients give feedback. This is a superpower most service businesses don't have.

---

## 13. Key Metrics to Track

Track these numbers every week once you're live. They tell you if the business is healthy:

- **MRR (Monthly Recurring Revenue):** Total retainer revenue. This is your most important number.
- **New clients this month:** Your growth rate.
- **Churn rate:** % of retainer clients who cancel. Keep this below 5%.
- **Avg. time to go live:** How many days from payment to restaurant being live on the platform. Target: under 7 days.
- **NPS (Net Promoter Score):** Ask clients monthly: "How likely are you to recommend us?" This tells you how strong your word-of-mouth will be.

---

## 14. Risks & Mitigation

**Platform policy changes:** Swiggy or Zomato could change their onboarding process overnight. *Mitigation:* Stay subscribed to their partner newsletters, join their partner communities, and build relationships with their support teams.

**Client churn:** A restaurant closes or decides to manage themselves. *Mitigation:* Make switching painful by being deeply embedded in their account management — if you leave, they have to start from scratch.

**Slow client decision-making:** Indian SME owners take time to say yes. *Mitigation:* Create urgency honestly ("Swiggy has a limited-time 0% commission offer for new partners this month") and offer EMI-style payment options.

**Developer temptation:** As a developer, you'll be tempted to keep building features instead of selling. *Mitigation:* Set a hard rule — no new features until you have 10 paying clients.

---

## 15. The 6-Month Vision

By month 6, Antigravity should have:
- 40+ retainer clients generating ₹1.5L+ MRR
- A functional client portal used by all clients
- 3–5 documented case studies with real order numbers
- A referral program bringing in 2–3 new clients per month passively
- One part-time operations hire handling day-to-day onboarding tasks
- A waitlist from other cities (Kanpur, Varanasi) who found you via word of mouth

This is the foundation. After this, Antigravity can either grow as a service business (hiring more ops staff) or pivot to a pure SaaS that lets *other consultants* use your platform to offer the same service in their cities — which is a much bigger business.

---

*Last updated: May 2026 | Built for Lucknow, designed to scale.*
