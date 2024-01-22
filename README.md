# Test `index` dynamic route

Minimal example project to demonstrate issue when deploying routes containing `index` to Vercel.

**Work around solution**
Uses a directory such as `[index]/` with [dynamic route params](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes) and returns 404 if anything other than `index` is used.

- [👀 Page source](https://github.com/aldosch/test-index-dynamic-route/blob/main/src/app/project/%5BprojectId%5D/%5Bindex%5D/page.tsx)
- [✅ Example deployment](https://test-index-dynamic-route.vercel.app/)

**Error replication**
Uses a directory such as `index/` and has the same functionality as above when run locally but always returns 404 when deployed.

- [👀 Page source](https://github.com/aldosch/test-index-dynamic-route/blob/replicate-error/src/app/project/%5BprojectId%5D/index/page.tsx)
- [❌ Example deployment](https://test-index-dynamic-route-git-replicate-error-aldovercel.vercel.app/)

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
