# HasPay — Capstone Project

Hello! I'm Vamsi Krishna a student developer at NST — this is my capstone project called HasPay. It's a front-end prototype demonstrating a simple payments and services UI built with plain HTML, CSS only (JS will me add in future). I built this to practice responsive design, accessible animations, and clean UI structure.

## How to run
- No build tools are required — open `index.html` in your browser.
- All assets are local. If you host the folder on a static server it will work the same.

## Files & structure
- `index.html` — The homepage and main entry point. This is where users first see the brand, services, features, banners and contact info.
- `style.css` — Central stylesheet: layout, responsive breakpoints, and animations. I added tasteful animations (hero gradient, brand shimmer, CTA pulse, card pop-ins) while keeping a `prefers-reduced-motion` fallback.
- `script.js` — (Optional) Placeholder for JavaScript interactivity.
- `icons and images/` — Images used across the site.
- `pages/` — Supporting pages (demo content). Each is a standalone HTML file used by links in the navbar and service cards.

## What each page is for 
- `index.html` — This is the landing page. I tried to make it friendly and clear: a bold hero section to introduce HasPay, a services grid for quick actions (recharge, bills, DTH, loan EMI), a features section explaining why someone might trust the product, promotional banners, and a footer with contact info. Think of this as the homepage you'd see when opening a banking or payments app website.

- `pages/bills.html` — Demo page for bill payments and mobile recharges. In a full app this would include forms, billers list, amount input and confirmation flows.

- `pages/electric.html` — Electricity bill payment demo. Shows how a user might enter consumer numbers, choose providers and pay bills.

- `pages/dth.html` — DTH recharge demo. Similar to mobile recharge but targeting TV service providers.

- `pages/loan emi.html` — Mockup for paying loan EMIs. In a real product this would be connected to loan accounts and schedules.

- `pages/send money.html` — Peer-to-peer transfer demo. This represents the flow where you send money to contacts or new beneficiaries.

- `pages/online services.html` — A page for other supported online services and utilities.

- `pages/signin.html` and `pages/signup.html` — Authentication UI mockups for signing in and creating an account. Right now they are static HTML forms; in a finished app they'd post to a back-end.

- `pages/about.html` — Info about the project/company. I used this page to explain the idea and goals behind HasPay.

- `pages/customer.html` — Customer care and support resources. Put helpful FAQs and contact methods here.

- `pages/contact us.html` — Contact form and support email/phone information. The footer also includes contact details.

- `pages/terms.html` — Terms & Conditions and legal notes. Always important when dealing with payments in a real product.

## Design choices & accessibility notes
- I used responsive CSS (flexbox + CSS grid) so the site looks decent across phones, tablets and desktops.
- Animations are intentionally subtle and don't change layout. There is a `prefers-reduced-motion` rule to disable animations for users who prefer less motion.
- Colors and contrast were chosen to be modern and legible; you may want to verify against accessibility contrast tools for full compliance.

## What this project is not
- It's a static front-end demo. There is no back-end, no real payments, and no user authentication implemented.
- Do not use this as-is for production payment processing — it's only for learning and prototyping.

## To improve / next steps (ideas I was thinking about)
- Add real form validation and JS-driven flows for the payments pages.
- Create a small mock API (or JSON files) to simulate billers, providers and transaction history.
- Convert to a single-page app (React/Vue) for a more dynamic experience.
