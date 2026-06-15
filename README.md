# BizMsg — WhatsApp Messaging API Landing Page

Marketing landing page for **BizMsg**, an affordable WhatsApp messaging API for
Pakistani labs, hospitals, pharmacies and businesses. Built to generate leads:
every CTA opens WhatsApp with a pre-filled message — **no backend required**.

> Live target domain: **bizmsg.pro** · WhatsApp: **+92 325 1411 320**

---

## ✨ Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **Tailwind CSS v4**
- **Framer Motion** — scroll reveals, flip cards, floating & water-wave buttons
- **TypeScript**
- Deploys free on **Vercel**

## 📑 Sections

1. **Hero** — animated gradient + floating WhatsApp chat mockup + "Get Quote" CTA
2. **Features** — 6 **flip cards** (WhatsApp Integration, API, PDF, Uptime, Pricing, Made in Pakistan)
3. **How It Works** — 3 animated steps (Sign up → Scan QR → Start messaging)
4. **Pricing** — Basic / **Pro (Most Popular)** / Enterprise, each CTA → WhatsApp
5. **Use Cases** — Labs, Hospitals, Pharmacies, Coaching Centers
6. **Get Quote Form** — opens WhatsApp with details pre-filled
7. **Footer** + floating sticky WhatsApp button

---

## 🚀 Run Locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

Other commands:

```bash
npm run build   # production build
npm start       # serve the production build
npm run lint    # eslint
```

---

## ⚙️ Edit Your Details (one place)

All business info lives in **[`lib/site.ts`](lib/site.ts)** — phone, email, owner
name, social links. Pricing is in [`components/Pricing.tsx`](components/Pricing.tsx).

```ts
phoneDisplay: "+92 325 1411 320",
phoneIntl:    "923251411320",   // used for wa.me links (no +, no spaces)
email:        "veltrixtechnologiesinfo@gmail.com",
ownerName:    "Adeel",
```

### How "Get Quote" works
The form concatenates fields into a WhatsApp deep link:

```
https://wa.me/923251411320?text=<url-encoded-message>
```

Message format sent:

```
Salam Adeel,
I'd like to discuss BizMsg services.
Name: [name]
Business: [business]
Phone: [phone]
Interested in: [service]
Please share details.
```

---

## 📦 Push to GitHub

This repo is wired to: `https://github.com/veltrixtechnologiesinfo-sketch/bizmsg.git`

```bash
git add -A
git commit -m "Initial BizMsg landing page"
git branch -M main
git push -u origin main
```

If prompted for credentials, use a **GitHub Personal Access Token** as the password
(GitHub → Settings → Developer settings → Personal access tokens → generate, scope `repo`).

---

## ▲ Deploy to Vercel (Free Tier)

### Option A — Dashboard (recommended)
1. Go to <https://vercel.com> and sign in with GitHub.
2. **Add New → Project** → import `veltrixtechnologiesinfo-sketch/bizmsg`.
3. Vercel auto-detects Next.js. Leave defaults (Build: `next build`).
4. Click **Deploy**. You'll get a free `*.vercel.app` URL in ~1 minute.

### Option B — CLI
```bash
npm i -g vercel
vercel          # follow prompts → preview deploy
vercel --prod   # production deploy
```

### Connect your domain (bizmsg.pro)
After buying the domain:
1. Vercel → Project → **Settings → Domains → Add** → `bizmsg.pro`.
2. At your domain registrar, point DNS to Vercel:
   - **A record** `@` → `76.76.21.21`, **or**
   - **CNAME** `www` → `cname.vercel-dns.com`
3. Vercel issues a free SSL certificate automatically.

---

## 📁 Structure

```
app/
  layout.tsx        # fonts, SEO metadata, viewport
  page.tsx          # assembles all sections
  globals.css       # theme colors + custom animations (float, wave, flip, shake)
components/
  Navbar, Hero, Features, HowItWorks, Pricing,
  UseCases, QuoteForm, Footer, FloatingWhatsApp,
  WaButton, Reveal, SectionHeading
lib/
  site.ts           # ← edit business details here
```

## 🎨 Brand

| Token | Color |
|-------|-------|
| Navy  | `#1E3A8A` |
| WhatsApp Green | `#25D366` |
| White | `#FFFFFF` |

---

Built with ❤️ in Pakistan 🇵🇰
