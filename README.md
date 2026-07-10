<div align="center">
  <img src="/public/logo.svg" alt="Kodara Logo" width="120" style="margin-bottom: 20px; border-radius: 20%;" onerror="this.src='https://raw.githubusercontent.com/akshitbhardwajhere/kodara/main/public/logo.svg'; this.onerror=null;" />

  # ⚡️ Kodara

  **Generate, preview, and iteratively improve React sandbox applications live in your browser.**

  *Powered by **DeepSeek-v4 Flash** (OpenCode Free Models) & **@cline/sdk***

  <p align="center">
    <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js" /></a>
    <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" /></a>
    <a href="https://prisma.io"><img src="https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma" alt="Prisma" /></a>
    <a href="https://clerk.com"><img src="https://img.shields.io/badge/Clerk-Auth-6C47FF?style=for-the-badge&logo=clerk" alt="Clerk" /></a>
  </p>
</div>

---

## ✨ Features

- **🚀 Instant Generation**: Build fully-functional React apps (using functional components and Tailwind CSS) in seconds from a single prompt.
- **🖥️ Live Sandpack Preview**: Run and play with your generated application in real-time inside a Sandpack browser environment.
- **🤖 Collaborative AI Agent**: Improve your apps iteratively through the built-in AI agent powered by `@cline/sdk`. The agent writes code, patches files, and hot-reloads the changes live.
- **🧠 Streaming Thoughts**: Watch the AI reason about your requirements in real-time with live thinking status updates and thought extraction.
- **🔌 Zero Key Requirement**: Pre-configured with OpenCode Zen's public API gateway to query the `deepseek-v4-flash-free` model without needing personal API credentials.

---

## 🛠️ Architecture & Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Database / ORM**: [Prisma ORM](https://prisma.io) with PostgreSQL
- **Authentication**: [Clerk Auth](https://clerk.com) (Social & Email login, Protected route middleware)
- **AI Gateway**: [OpenCode Zen API](https://opencode.ai) utilizing `deepseek-v4-flash-free`
- **Agent Framework**: `@cline/sdk` for live preview patching and code editing
- **Sandbox Environment**: `@codesandbox/sandpack-react`

---

## 🚦 Getting Started

### 📋 Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v22 or higher)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)
- A running [PostgreSQL](https://www.postgresql.org/) database

### 🔧 Environment Setup

Create a `.env` file in the root of the project:

```env
# Clerk Authentication Configuration
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Database Connections
DATABASE_URL="postgresql://user:password@localhost:5432/kodara?schema=public"
DIRECT_URL="postgresql://user:password@localhost:5432/kodara?schema=public"

# Arcjet Protection Security Config
ARCJET_KEY=your_arcjet_key
```

### 📦 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/akshitbhardwajhere/kodara.git
   cd kodara
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run Prisma Migrations**:
   Ensure your database is running, then apply migrations to set up the schemas:
   ```bash
   npx prisma migrate dev
   ```

4. **Start the Development Server**:
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🚀 Deployment

The project is ready for deployment on platforms like Vercel:

```bash
# Compile and optimize production build
npm run build

# Start production server
npm run start
```

*Note: For Vercel deployments, a `vercel.json` configuration file with fluid serverless functions enabled is already included in the workspace.*

---

## 📄 License

This project is licensed under the MIT License.
