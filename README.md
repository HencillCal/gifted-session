# Minister-Session-Generator

> WhatsApp session generator for **Minister-Xmd** and any Baileys-based bot.  
> Supports **pair code** and **QR code** login, with optional **short session IDs** stored in MongoDB or PostgreSQL.

<a href='https://github.com/emkay416/gifted-session/fork' target="_blank">
  <img alt='FORK REPO' src='https://img.shields.io/badge/-FORK REPO-black?style=for-the-badge&logo=github&logoColor=red'/>
</a>

---

## Features

- 🔗 **Pair Code login** — no phone needed, enter code in WhatsApp → Linked Devices
- 📷 **QR Code login** — traditional QR scan
- 🗜️ **Long session** — full zlib/base64 inline string (works anywhere, no DB needed)
- 🗃️ **Short session** — compact ID stored in MongoDB or PostgreSQL (auto-falls back to long if no DB)
- ⚡ Auto-detects database type from `DATABASE_URL` (`mongodb://` or `postgres://`)


### Example `.env` for Your Bot

```env
SESSION_ID=Minister~abc123xyz   # short session
# or
SESSION_ID=Minister~H4sIAAAAA...  # long session (full zlib string)
```

---

## Deployment

<a href='https://dashboard.heroku.com/new?template=https://github.com/emkay416/gifted-session' target="_blank">
  <img alt='HEROKU DEPLOY' src='https://img.shields.io/badge/-HEROKU DEPLOY-black?style=for-the-badge&logo=heroku&logoColor=white'/>
</a>
<br>
<a href='https://dashboard.render.com' target="_blank">
  <img alt='DEPLOY TO RENDER' src='https://img.shields.io/badge/-DEPLOY TO RENDER-black?style=for-the-badge&logo=render&logoColor=white'/>
</a>
<br>
<a href='https://app.koyeb.com' target="_blank">
  <img alt='DEPLOY TO KOYEB' src='https://img.shields.io/badge/-DEPLOY TO KOYEB-black?style=for-the-badge&logo=koyeb&logoColor=white'/>
</a>

---

---

## Owner

<a href="https://github.com/emkay416">
</a>

[`ℹ️ Contact Owner`](https://wa.me/254769365617)



