# Geekstab

Marketing and lead-generation website for **Geekstab** — enterprise Salesforce delivery, architecture, AI, and release-governance consulting.



## Run locally

**Prerequisites:** Node.js 18+

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and fill in your SMTP mailbox details (host, port, user, password). Without these, the contact form runs in simulated mode and no email is sent.
3. Start the dev server:
   ```bash
   npm run dev
   ```
   The site runs at http://localhost:3000.

## Build & deploy

```bash
npm run build   # builds the client to dist/ and bundles the server to dist/server.cjs
npm start       # runs the production server (set NODE_ENV=production)
```

For production, provide the SMTP variables as environment variables rather than committing a `.env` file.
