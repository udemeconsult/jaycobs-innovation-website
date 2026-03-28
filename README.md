# Jaycob's Innovation Website

Branded React + Vite website for Jaycob's Innovation.

## Included updates
- Company name updated
- Address updated
- Contact number updated
- WhatsApp linked to company number
- Logo added in `public/logo.png`
- Brand colors updated to match the logo

## Run locally
```bash
npm install
npm run dev
```

## Build for production
```bash
npm run build
```

## Main files
- `src/App.jsx`
- `public/logo.png`

## Email placeholder
Current email is:
`info@jaycobsinnovation.com`

Change it in `src/App.jsx` if you prefer another address.

## Hosting
### Vercel
- Import project
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

### Netlify
- Connect project or upload built `dist`
- Build command: `npm run build`
- Publish directory: `dist`

### cPanel
- Run `npm run build`
- Upload the contents of `dist` into `public_html`