This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## folder structure

📁src
├── 📁app
│   ├── 📁(user)
│   ├── 📁(web)
        ├── 📁home    
│   │   │   ├── 📁(components)
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── FeaturedProducts.tsx
│   │   │   │   ├── Banner.tsx
│   │   │   │   └── index.ts
│   │   │   └── page.tsx
│   │   ├── 📁about
│   │   │   ├── 📁(components)
│   │   │   ├── page.tsx
│   │   ├── 📁contact
│   │   ├── 📁products
│   │   │   ├── 📁[slug]
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── 📁store
│   │   ├── 📁cart
│   │   └── layout.tsx   ← Layout for web pages
│   ├── 📁api
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx       ← Root layout (theme, context providers, etc.)
│   └── page.tsx
│
├── 📁components
│   ├── 📁common          ← Common shared UI (navbar, footer, etc.)
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Topbar.tsx
│   │   └── index.ts
│   ├── 📁ui              ← Low-level reusable UI components
│   │   ├── Button.tsx
│   │   ├── Modal.tsx
│   │   ├── Tooltip.tsx
│   │   ├── Toaster.tsx
│   │   ├── ColorModeToggle.tsx
│   │   └── index.ts
│   ├── 📁product         ← Product cards, grids, etc.
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   └── index.ts
│   ├── 📁cart
│   │   ├── CartItem.tsx
│   │   ├── CartSummary.tsx
│   │   └── index.ts
│   └── index.ts         ← Export all components
│
├── 📁hooks
│   ├── useCart.ts
│   ├── useAuth.ts
│   ├── useProduct.ts
│   ├── useToast.ts
│   └── index.ts
│
├── 📁contexts
│   ├── AuthContext.tsx
│   ├── CartContext.tsx
│   └── index.ts
│
├── 📁types
│   ├── product.ts
│   ├── user.ts
│   ├── cart.ts
│   └── index.ts
│
├── 📁services           ← API handlers
│   ├── product.service.ts
│   ├── auth.service.ts
│   ├── cart.service.ts
│   └── index.ts
│
├── 📁lib                ← Utility functions, constants, config
│   ├── fetcher.ts
│   ├── formatter.ts
│   ├── constants.ts
│   ├── validators.ts
│   └── index.ts
│
└── 📁assets             ← Images, icons, svgs
    ├── 📁images
    ├── 📁icons
    └── logo.svg
