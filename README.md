# Tiptop Karipop — Next.js Public Website

This is a Next.js App Router project for the public-facing Tiptop Karipop website.

## Included routes

- `/` — public homepage
- `/case-studies/kuala-lumpur-durian-fest-2025`
- `/case-studies/mybolehboleh-retail-experience`
- `/case-studies/mybolehboleh-community-activation`

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Build for production

```bash
npm run build
npm run start
```

## Suggested deploy flow

1. Create a GitHub repository.
2. Push this project to the repository.
3. Import the repo into Vercel.
4. Deploy.
5. Bind your domain in Vercel.

## Assets

All uploaded brand and event images are stored in `public/images` and referenced locally, so you can deploy the project without changing remote asset URLs.

## Contact block currently used on the site

- Event Marketing: `011-6770 0633`
- Content Marketing: `011-3773 7338`
- Email: `alvin.koh@mybolehboleh.com`
