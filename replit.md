# Minister-XMD Session Server

WhatsApp session server (Baileys) with pair-code and QR login flows. Express/Node.js backend serving static HTML pages from `public/`.

## Project Structure
- `index.js` — Express entry point
- `config.js` — Loads env vars (PORT, DATABASE_URL, etc.)
- `routes/` — `/qr` and `/code` route handlers
- `gift/` — Session store / helpers
- `public/` — Static HTML (index, pair, qr)

## Replit Setup
- Workflow: `Start application` runs `PORT=5000 node index.js` on port 5000 (webview).
- Server binds to `0.0.0.0:5000` (Express default trusts all hosts; no extra config needed).
- Deployment: VM target, run command `node index.js`.

## Optional Env Vars
- `DATABASE_URL` — Postgres URL for persistent session storage. Without it, sessions use inline-zlib mode.
- `SESSION_PREFIX`, `GC_JID`, `GC_JID2`, `BOT_REPO`, `WA_CHANNEL`, `MSG_FOOTER` — see `config.js` for defaults.
