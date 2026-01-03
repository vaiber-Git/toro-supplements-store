# Toro Supplements Store

![Netlify](https://img.shields.io/badge/Netlify-Deployed-success)
![Vite](https://img.shields.io/badge/Vite-React-blue)
![Firebase](https://img.shields.io/badge/Firebase-Auth%20%26%20Firestore-orange)

**Live Demo:** [https://toro-supplements-store.netlify.app](https://toro-supplements-store.netlify.app)

A production-style demo e‑commerce supplements store built with **React (Vite)** and **Firebase**, featuring authentication, cart & checkout flow, and an integrated chatbot widget.

---

## ✨ Features

* Product catalog with categories
* Shopping cart & quantity management
* Checkout flow
* Google Sign‑In via Firebase
* Integrated RAG based chatbot widget
* Responsive SASS design
* CI/CD auto‑deploy via Netlify

---

**Primary user flows**

1. Browse products → Add to cart → View cart → Checkout → Order confirmation (simulated)
2. Sign-in / Sign-out via Firebase Google OAuth
3. Open chatbot → Ask question → Receive bot reply (via external API)

### Chatbot message lifecycle (sequence)

```
User types message -> Input component sends message to local message store
  -> UI shows user message immediately
  -> Bot placeholder message is appended (loading state)
  -> Frontend does POST /chat to external API with payload { input: message }
  -> Backend replies with JSON -> Frontend normalizes response -> Update bot message with reply
```

## Tech stack

* Frontend: **React** (Vite)
* Styling: **SCSS** (modular styles)
* Routing: **react-router-dom**
* Backend services used: **Firebase Auth** and **Firestore** (for session/user or product data)
* Chatbot backend: External HTTP endpoint
* Hosting & CI: **Netlify** (auto-deploy on push to `main`)
* Dev tooling: npm, Vite, ESLint

---

### System overview (ASCII)

```
                    ┌──────────────┐
                    │   Browser    │
                    │  (React SPA) │
                    └──────┬───────┘
                           │
     Static assets & SPA   │  Firebase SDK
     served by Netlify     ▼
┌──────────────────────────────────────────┐
│                Netlify CDN               │
│  (serves built SPA files, handles urls)  │
└──────┬───────────────────────┬───────────┘
       │                       │
       ▼                       ▼
Firebase Auth & Firestore   External Chatbot API
(Authentication, product)   (https://integrated-backend-api-prod.deltoro.shop)
```

## 🚀 Quick Start

```bash
git clone https://github.com/vaiber-Git/toro-supplements-store.git
cd toro-supplements-store
npm install
npm run dev
```

Open the URL shown by Vite (default `http://localhost:5173`).

---

## 🔐 Environment Variables

```
API_CHAT_BOT_ENDPOINT
```

---

## 🌐 Deployment

* Hosted on **Netlify**
* Auto‑deploy on push to `main`
* Build: `npm run build` → Publish: `dist`

## 🖼️ Screenshots
```
![Home](https://i.ibb.co/qMJ7Cd0t/Home.png)
![ChatBot](https://i.ibb.co/Fky6Y8c7/Chat-Bot.png)
![Cart](https://i.ibb.co/STsKjfx/Shop-page-Cart.png)
![Auth](https://i.ibb.co/QS6qXwc/Auth.png)
![SignIn](https://i.ibb.co/h1g9ZNDq/Google-Sign-In.png)
![Checkout](https://i.ibb.co/TxZC3xTw/Checkout.png)

```

---

## 🎯 Why this project

This project demonstrates real-world frontend architecture, Firebase authentication, RAG based context aware OpenAI powered Chat Bot, CI/CD deployment, and third‑party API integration.

---

## 👤 Author

**Vaibhav Sharma** — AWS Certified Developer – Associate
![alt text](https://i.ibb.co/BV3Z8vM9/image.png)


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
