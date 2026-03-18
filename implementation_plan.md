# Infinity Realtors — Project Folder Structure

Set up a scalable, production-ready folder structure for the Next.js 16 app that supports both frontend pages and backend API routes.

## Proposed Structure

```
infinity-realtors/
├── app/
│   ├── (site)/                  # Route group — public-facing pages
│   │   ├── layout.tsx           # Site-wide layout (navbar + footer)
│   │   ├── page.tsx             # Homepage
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── properties/
│   │   │   ├── page.tsx         # Property listing page
│   │   │   └── [id]/
│   │   │       └── page.tsx     # Single property detail
│   │   ├── services/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   │
│   ├── (dashboard)/             # Route group — authenticated dashboard
│   │   ├── layout.tsx           # Dashboard layout (sidebar etc.)
│   │   └── dashboard/
│   │       ├── page.tsx         # Dashboard home
│   │       ├── listings/
│   │       │   └── page.tsx     # Manage listings
│   │       └── inquiries/
│   │           └── page.tsx     # View inquiries
│   │
│   ├── api/                     # API route handlers
│   │   ├── properties/
│   │   │   ├── route.ts         # GET all / POST new property
│   │   │   └── [id]/
│   │   │       └── route.ts     # GET / PUT / DELETE single property
│   │   ├── inquiries/
│   │   │   └── route.ts         # POST inquiry / GET all
│   │   ├── auth/
│   │   │   └── route.ts        # Auth endpoints
│   │   └── health/
│   │       └── route.ts         # Health check
│   │
│   ├── layout.tsx               # Root layout (fonts, global providers)
│   ├── globals.css
│   └── favicon.ico
│
├── components/                  # Shared React components
│   ├── ui/                      # Generic UI primitives (Button, Card, Input…)
│   ├── layout/                  # Navbar, Footer, Sidebar
│   └── properties/              # Property-specific components (PropertyCard…)
│
├── lib/                         # Shared utilities & helpers
│   ├── db.ts                    # Database connection (future)
│   ├── utils.ts                 # General utilities
│   └── constants.ts             # App-wide constants
│
├── types/                       # TypeScript type definitions
│   └── index.ts
│
├── hooks/                       # Custom React hooks
│   └── index.ts
│
├── public/                      # Static assets
│   └── images/
│
└── config files…
```

## Key Decisions

| Decision | Rationale |
|---|---|
| **Route groups [(site)](file:///Users/sankalpsid/my/coding/infinity-realtors/app/page.tsx#3-10) / [(dashboard)](file:///Users/sankalpsid/my/coding/infinity-realtors/app/page.tsx#3-10)** | Lets public pages and dashboard have independent layouts without affecting URL paths |
| **`api/` inside `app/`** | Next.js App Router convention — uses `route.ts` files for API handlers |
| **`components/` at root** | Keeps components separate from routing; organized by domain |
| **`lib/`** | Central place for DB connections, utilities, and constants |
| **`types/`** | Dedicated folder for shared TypeScript interfaces/types |
| **`hooks/`** | Custom hooks separated for reusability |

## What Each API Route Stub Will Contain

Each `route.ts` will export minimal handler stubs (`GET`, `POST`, etc.) that return a `NextResponse.json()` placeholder so the API skeleton is immediately runnable.

## Verification Plan

### Automated
- Run `npm run build` to confirm all routes and layouts compile without errors.

### Manual
- Run `npm run dev` → verify the dev server starts.
- Visit `/` and `/about`, `/properties`, `/contact`, `/services` — should render placeholder pages.
- Hit `/api/health` — should return `{ status: "ok" }`.
