# PrimeProX

A React front-end for a multi-asset forex/CFD trading brokerage, featuring live market widgets, an AI-branded trading product page, and investor-facing informational pages (account types, deposits/withdrawals, platforms, promotions).

## Tech Stack

- **React 19** with **React Router 7** for routing
- **Vite 6** as the build tool / dev server
- **Tailwind CSS 4** for styling
- **Framer Motion** / **@react-spring/web** for animations
- **Swiper**, **react-select**, **react-countup**, **@headlessui/react** for UI widgets
- **Yup** for form validation

## Getting Started

```bash
npm install
npm run dev
```

Other available scripts:

```bash
npm run build     # production build
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

## Project Structure

```
src/
├── assets/            # images, logos, platform screenshots
├── components/
│   ├── layout/        # Header, Footer
│   ├── ui/            # buttons, spotlight, text effects, animated content
│   ├── MiniChart.jsx / MiniChartRow.jsx   # market data widgets
│   ├── TickerTape.jsx                     # scrolling ticker widget
│   ├── AICommunityReport.jsx              # AI trading report component
│   └── WhatsAppButton.jsx
├── layouts/
│   └── MainLayout.jsx  # shared page shell (Header/Footer + outlet)
├── lib/
│   └── utils.js
├── pages/
│   ├── Home.jsx
│   ├── QuantumAI.jsx
│   ├── Markets.jsx
│   ├── NotFound.jsx
│   ├── investing/       # AccountTypes, DepositsWithdrawals, Platforms, Promotions
│   └── company/         # AboutUs, FAQ, ContactUs
├── App.jsx              # route definitions
└── main.jsx             # app entry point
```

## Routes

| Path                              | Page                   |
| --------------------------------- | ---------------------- |
| `/`                               | Home                   |
| `/quantum-ai`                     | Quantum AI             |
| `/markets`                        | Markets                |
| `/investing/account-types`        | Account Types          |
| `/investing/deposits-withdrawals` | Deposits & Withdrawals |
| `/investing/platforms`            | Platforms              |
| `/investing/promotions`           | Promotions             |
| `/company/about-us`               | About Us               |
| `/company/faq`                    | FAQ                    |
| `/company/contact-us`             | Contact Us             |
| `*`                               | 404 Not Found          |
