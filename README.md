# Ahmed Portfolio

A professional portfolio built with Next.js 14, React, TypeScript, and Tailwind CSS.

## Features

- Responsive modern design
- Smooth animations
- Hero, About, Skills, Projects, and Contact sections
- Interactive contact form
- SEO-ready application structure
- Fast, customizable codebase

## Technology

- **Framework:** Next.js 14 App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion and CSS animations
- **Icons:** Lucide React
- **Deployment:** Vercel

## Installation

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

Update the component data and copy in `components/`. Store project images in `public/projects/` and the resume at `public/cv.pdf`.

Update theme colors in `tailwind.config.js` and font variables in `app/globals.css`.

## Contact form

The current form uses a local submission simulation. For real submissions, integrate EmailJS or Formspree in `components/Contact.tsx`.

## Production build

```bash
npm run build
npm start
```

## Deployment

Push the repository to GitHub, import it into Vercel, and deploy. See `DEPLOYMENT.md` for the deployment checklist.
