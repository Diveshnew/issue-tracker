# Issue Tracker

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

A modern issue tracking application built with Next.js, TypeScript, and a robust tech stack to handle everything from creating and viewing issues to advanced features like user authentication and dashboard analytics.

## Table of Contents

- [Tech Stack](#tech-stack)
- [What You Should Know](#what-you-should-know)
- [Project Roadmap](#project-roadmap)
- [Development Environment Setup](#development-environment-setup)
- [How I Created Project Creation & Installation](#How-I-Created-Project-Creation--Installation)
- [Database Engines](#database-engines)
- [Additional Tools & Integrations](#additional-tools--integrations)
- [NextAuth.js Configuration](#nextauthjs-configuration)
- [Useful Commands](#useful-commands)
- [Bug & Error Tracking](#bug--error-tracking)
- [Getting Started](#getting-started)
- [Learn More](#learn-more)
- [Deploy on Vercel](#deploy-on-vercel)
- [License](#license)

## Tech Stack

- **Next.js** – React framework for server-side rendering and static site generation.
- **TypeScript** – Adds static typing to JavaScript.
- **Tailwind CSS** – Utility-first CSS framework for rapid UI development.
- **Radix UI** – Unstyled, accessible UI primitives for building high-quality design systems.
- **Prisma** – Next-generation ORM for database integration.
- **NextAuth.js** – Authentication for Next.js applications.

## What You Should Know

Before getting started, make sure you are familiar with:

- **Client and Server Components:** How to build both client and server components in Next.js.
- **Routing:** Understanding how to navigate and build pages in Next.js.
- **Building APIs:** Creating API routes within Next.js.
- **Database Integration:** Using Prisma to manage your data.
- **Authentication:** Implementing secure authentication with NextAuth.js.
- **Tailwind CSS:** Styling your application efficiently.

## Project Roadmap

The project roadmap is divided into core and advanced features:

### Core Features
- Creating an issue
- Viewing issues
- Updating an issue
- Deleting an issue

### Advanced Features
- User authentication
- Assigning issues to team members
- Sorting issues
- Filtering issues
- Pagination
- Dashboard for analytics and status overview

## Development Environment Setup

We recommend using [Visual Studio Code](https://code.visualstudio.com/) with the following extensions to boost your productivity:
- ES7 React/Redux/React-Native snippets
- TypeScript support
- Tailwind CSS IntelliSense
- Prisma extension

## How I Created Project Creation & Installation

### Creating the Project

Run the following commands to bootstrap your project:

```bash
npx create-next-app@latest
cd issue-tracker
code .
```

### Installing Dependencies

Install the necessary packages:

```bash
npm install react-icons
npm install classnames
npm install prisma @prisma/client
npx prisma init
npx prisma migrate dev
npm install zod
```

### Additional Tools & Libraries

- **Radix UI:** To build the new issue page.
  ```bash
  npm install @radix-ui/themes
  ```
  Import the Radix UI themes in your project:
  ```js
  import "@radix-ui/themes/styles.css";
  ```
  > *"Chase the butterfly and it will run, build a beautiful garden and the butterflies will come; and even if they don’t, you still have a beautiful garden. Think about it."*

- **React SimpleMDE Editor:** For markdown editing.
  ```bash
  npm install --save react-simplemde-editor easymde
  ```

- **React Hook Form:** For form submission, tracking changes, and validation errors.
  ```bash
  npm install react-hook-form
  npm install @hookform/resolvers
  ```

- **Axios:** For API calls.
  ```bash
  npm install axios
  ```

- **Skeleton Loading:** For placeholder loading states.
  ```bash
  npm install react-loading-skeleton
  npm install delay
  ```

- **React Markdown:** For rendering markdown content.
  ```bash
  npm install react-markdown
  ```

- **Tailwind CSS Typography Plugin:**
  ```bash
  npm install -D @tailwindcss/typography
  ```

- **NextAuth.js:** For authentication.
  ```bash
  npm install next-auth
  npm install @next-auth/prisma-adapter
  ```

- **React Query:** For efficient data fetching.
  ```bash
  npm install @tanstack/react-query
  ```

- **React Hot Toast:** For toast notifications.
  ```bash
  npm install react-hot-toast
  ```

- **Recharts:** For rendering charts.
  ```bash
  npm install recharts
  ```

## Database Engines

There are multiple database engines: But i used MySQL later i shifted to PostgreSQL
- MySQL
- PostgreSQL
- MongoDB

## NextAuth.js Configuration

To set up authentication, create a `.env` file with the following variables (update values as needed):

```env
DATABASE_URL="mysql://root:password@localhost:3306/issue-tracker"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-ssl-rand-value"
```

Generate your secret using:

```bash
openssl rand -base64 32
```

Run migrations after configuring NextAuth:

```bash
npx prisma migrate dev
```

For configuring a Google provider, visit the [Google Cloud Console](https://console.cloud.google.com/) to set up your credentials.

## Useful Commands

- **Erase file history from Git:**
  1. Download the file from Git-filter-repo repository.
  2. Use [git-filter-repo](https://github.com/newren/git-filter-repo) by running:
     ```bash
     git-filter-repo --path .env --invert-paths --force
     ```
  3. Alternatively, consider using [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/).

## Bug & Error Tracking

To track bugs and errors effectively, consider integrating:
- [Sentry](https://sentry.io/)
- [Bugsnag](https://www.bugsnag.com/)
- [Lockrocker](https://lockrocker.com/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) – learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) – an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) – your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to Contact me regarding any sections or commands based on this project Mail: workwithdivesh@gmail.com. Happy coding!
