## What is Next.js?  

Next.js is a **React framework** that enables server-side rendering (SSR) and static site generation (SSG) for building **fast, scalable, and SEO-friendly** web applications. It is developed by **Vercel** and provides powerful features like:  

- **Server-side rendering (SSR)**  
- **Static site generation (SSG)**  
- **Incremental Static Regeneration (ISR)**  
- **API routes** (backend logic within the same project)  
- **Built-in CSS and image optimization**  
- **Middleware for request handling**  
- **File-based routing system** (No need for React Router)  

---

## Why Do We Need Next.js?  

### 1. **Better SEO (Search Engine Optimization)**  
React applications built with **Create React App (CRA)** render everything on the client-side, meaning search engines struggle to index the page properly. Next.js solves this problem by **pre-rendering** pages on the server before sending them to the browser.  

- **SSR** (Server-Side Rendering) generates HTML dynamically on each request, improving SEO.  
- **SSG** (Static Site Generation) creates pre-rendered pages at build time, making them load faster.  

🚀 **Result**: Better search engine rankings and increased organic traffic.  

---

### 2. **Faster Page Load Speed**  
Next.js optimizes performance by **pre-rendering pages** and **lazy loading assets**, which means:  

- Users get the **initial page load faster** (SSR or SSG).  
- Image optimization improves **performance and user experience**.  
- Built-in **code splitting** reduces unnecessary JavaScript loading.  

🚀 **Result**: Faster websites lead to better user engagement and retention.  

---

### 3. **File-Based Routing (No Need for React Router)**  
In a React app, we usually set up routing with `react-router-dom`. However, Next.js simplifies routing with a **file-based system**:  

📂 Example:  
```
pages/
 ├── index.js       → Homepage ("/")
 ├── about.js       → About page ("/about")
 ├── blog/
 │   ├── index.js   → Blog listing ("/blog")
 │   ├── [id].js    → Dynamic route ("/blog/:id")
```

**Key Benefits:**  
✅ No need for `react-router-dom`  
✅ Automatic route creation  
✅ Dynamic routes with `[id].js` (e.g., `/blog/1`, `/blog/2`)  

🚀 **Result**: Simpler, more maintainable routing system.  

---

### 4. **Built-in API Routes (Backend Inside Next.js)**  
Next.js allows us to create **backend APIs** directly within the project under the `pages/api/` directory. This eliminates the need for a separate backend server in many cases.  

📂 Example:  
```
pages/api/
 ├── hello.js       → "/api/hello"
 ├── users.js       → "/api/users"
```

📌 **API Example (pages/api/hello.js)**  
```js
export default function handler(req, res) {
  res.status(200).json({ message: "Hello from Next.js API!" });
}
```

🚀 **Result**: No need for an external backend (Express.js, Node.js) in many cases.  

---

### 5. **Server-Side Rendering (SSR) vs. Static Site Generation (SSG)**  
Next.js provides **two types of pre-rendering**:  

| Feature            | Server-Side Rendering (SSR) | Static Site Generation (SSG) |
|--------------------|---------------------------|-----------------------------|
| When HTML is generated? | On each request | At build time |
| Data is fetched?  | On every request | Once during build |
| Use cases | Real-time data (e.g., user dashboards) | Blogs, marketing pages |

📌 **SSR Example:**  
```js
export async function getServerSideProps() {
  const data = await fetch("https://api.example.com/posts").then(res => res.json());
  return { props: { posts: data } };
}
```

📌 **SSG Example:**  
```js
export async function getStaticProps() {
  const data = await fetch("https://api.example.com/posts").then(res => res.json());
  return { props: { posts: data } };
}
```

🚀 **Result**: We can choose the best rendering strategy based on project requirements.  

---

### 6. **Incremental Static Regeneration (ISR)**
Next.js allows us to update static pages **without rebuilding the entire site**.  

📌 **Example:**  
```js
export async function getStaticProps() {
  return { props: { time: new Date().toISOString() }, revalidate: 10 };
}
```
👆 This will **regenerate the page every 10 seconds**, keeping it up-to-date without affecting performance.  

🚀 **Result**: Perfect for blogs, e-commerce, and frequently updated pages.  

---

### 7. **Automatic Image Optimization**  
Next.js provides an optimized `<Image>` component that automatically resizes and optimizes images.  

📌 **Example:**  
```js
import Image from 'next/image';

export default function Home() {
  return <Image src="/image.jpg" width={500} height={300} alt="Example Image" />;
}
```

🚀 **Result**: Faster image loading and better performance.  

---

### 8. **Middleware for Custom Request Handling**  
Middleware allows us to **run custom logic before a request is completed**.  

📌 **Example:** Redirect users based on authentication:  
```js
import { NextResponse } from "next/server";

export function middleware(req) {
  const loggedIn = checkUserAuth(req); // Custom function
  if (!loggedIn) {
    return NextResponse.redirect("/login");
  }
}
```

🚀 **Result**: More control over authentication, security, and logging.  

---

### 9. **Support for TypeScript & Tailwind CSS**  
Next.js has **built-in TypeScript support**, making it easier to build type-safe applications. It also integrates seamlessly with **Tailwind CSS** for styling.  

📌 **Enable TypeScript:**  
```sh
npx create-next-app@latest my-app --typescript
```

📌 **Tailwind CSS in Next.js:**  
```sh
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

🚀 **Result**: Easier development with TypeScript and Tailwind CSS.  

---

## When to Use Next.js?  
✅ When SEO is important (blogs, e-commerce, marketing websites)  
✅ When performance is a priority (faster page loads)  
✅ When we need SSR, SSG, or ISR  
✅ When we want built-in API routes  
✅ When we want a simpler file-based routing system  
✅ When we need image and performance optimizations  

---

## When NOT to Use Next.js?  
❌ If we are building a **small project** without SEO needs (Create React App may be enough)  
❌ If we need a **backend-heavy** project (better to use Express.js or Nest.js separately)  
❌ If we don't need SSR/SSG and just want a simple React SPA  

---

## Conclusion  
Next.js is a **powerful framework** that enhances React with **server-side rendering, static site generation, API routes, and performance optimizations**. It is ideal for **SEO-friendly, fast, and scalable web applications**.  

### 📂 Folder Structure of a **Basic Next.js 15** App  

When we create a new Next.js 15 app using:  
```sh
npx create-next-app@latest my-next-app
```
or  
```sh
npx create-next-app@latest my-next-app --typescript
```
It generates the following folder structure:  

```
my-next-app/
├── .next/                  # Build output (generated after running `next build`)
├── node_modules/           # Installed npm packages
├── public/                 # Static assets (images, fonts, icons, etc.)
├── src/                    # Main source folder (new in Next.js 13+)
│   ├── app/                # New App Router (Next.js 13+ with React Server Components)
│   │   ├── layout.tsx      # Root layout (persistent layout for all pages)
│   │   ├── page.tsx        # Homepage (`/`)
│   │   ├── about/page.tsx  # About page (`/about`)
│   │   ├── blog/           # Blog route
│   │   │   ├── page.tsx    # Blog listing page (`/blog`)
│   │   │   ├── [id]/page.tsx # Dynamic route for blog (`/blog/:id`)
│   │   ├── api/            # API routes (`/api/*`)
│   │   │   ├── hello.ts    # Example API route (`/api/hello`)
│   │   ├── globals.css     # Global CSS file
│   │   ├── layout.tsx      # Root layout
│   │   ├── loading.tsx     # Loading UI
│   │   ├── error.tsx       # Error handling page
│   ├── components/         # Reusable UI components
│   ├── styles/             # CSS, Tailwind, or SCSS styles
│   ├── lib/                # Utility functions, helpers, services
│   ├── hooks/              # Custom React hooks
│   ├── context/            # React Context API providers
├── .env.local              # Environment variables (API keys, secrets)
├── .gitignore              # Files to ignore in Git
├── next.config.js          # Next.js configuration file
├── package.json            # Project dependencies & scripts
├── tsconfig.json           # TypeScript configuration (if using TS)
└── README.md               # Project documentation
```

---

## 🔍 **Detailed Explanation of Key Folders & Files**

### 1️⃣ **`.next/`** (Generated after build)
- Contains the compiled output of our project.
- Not meant to be modified manually.
- Should be **ignored** in Git (`.gitignore`).

---

### 2️⃣ **`node_modules/`**
- Stores all installed npm dependencies.
- Automatically created when we run `npm install` or `yarn install`.

---

### 3️⃣ **`public/`**
- Contains static assets like images, fonts, and icons.
- Everything in this folder is **served as-is** from the root (`/`).

📌 Example:  
- If we put an image inside `public/images/logo.png`, we can access it in the browser as:
  ```
  /images/logo.png
  ```
- Inside React components, we use it as:
  ```tsx
  import Image from "next/image";

  export default function Logo() {
    return <Image src="/images/logo.png" width={100} height={50} alt="Logo" />;
  }
  ```

---

### 4️⃣ **`src/` (Main Source Folder)**
New in **Next.js 13+**, it contains all source code and the new **App Router (`app/` folder)**.

#### 📂 `app/` (Next.js 13+ App Router)
The **`app/` folder** introduces the new **React Server Components** model with file-based routing.  

📌 Example structure:  
```
app/
├── layout.tsx    # Root layout (applies to all pages)
├── page.tsx      # Homepage (`/`)
├── about/
│   ├── page.tsx  # About page (`/about`)
├── blog/
│   ├── page.tsx  # Blog listing (`/blog`)
│   ├── [id]/
│   │   ├── page.tsx  # Dynamic blog page (`/blog/:id`)
├── api/
│   ├── hello.ts  # API route (`/api/hello`)
├── globals.css   # Global styles
├── loading.tsx   # Loading indicator
├── error.tsx     # Error handling page
```

#### 📂 **`app/api/` (API Routes)**
Next.js allows us to create backend **API routes** inside `app/api/`.  

📌 Example: **API Route (`/api/hello`)**
```ts
export async function GET() {
  return Response.json({ message: "Hello, Next.js API!" });
}
```

---

### 5️⃣ **`components/`**
- Reusable **React components** used across the project.
- Helps keep the codebase clean.

📌 Example: **Button Component (`components/Button.tsx`)**
```tsx
export default function Button({ label }: { label: string }) {
  return <button className="bg-blue-500 text-white p-2">{label}</button>;
}
```

---

### 6️⃣ **`styles/`**
- Contains global CSS, TailwindCSS, or SCSS styles.

📌 Example: **Global CSS (`styles/globals.css`)**
```css
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}
```

---

### 7️⃣ **`lib/`** (Utility Functions & Services)
- Stores **helper functions** or **services** like database connections.

📌 Example: **Helper Function (`lib/fetchData.ts`)**
```ts
export async function fetchData(url: string) {
  const res = await fetch(url);
  return res.json();
}
```

---

### 8️⃣ **`hooks/`** (Custom Hooks)
- Stores **custom React hooks** for state management.

📌 Example: **Custom Hook (`hooks/useTheme.ts`)**
```ts
import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return { theme, setTheme };
}
```

---

### 9️⃣ **`context/`** (React Context API)
- Stores **global state** using React’s Context API.

📌 Example: **Theme Context (`context/ThemeContext.tsx`)**
```tsx
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
```

---

### 🔟 **Configuration & Other Files**
#### ✅ **`.env.local`** (Environment Variables)
- Stores **API keys, database URLs, secrets**.
- Example:
  ```
  DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/mydb
  ```

#### ✅ **`next.config.js`** (Next.js Configuration)
- Customizes Next.js settings.
- Example:
  ```js
  module.exports = {
    reactStrictMode: true,
    images: {
      domains: ["example.com"],
    },
  };
  ```

#### ✅ **`package.json`** (Dependencies & Scripts)
- Stores project dependencies & scripts.
- Example:
  ```json
  {
    "scripts": {
      "dev": "next dev",
      "build": "next build",
      "start": "next start"
    }
  }
  ```

---

## 🚀 **Conclusion**
Next.js 15 follows a **modern folder structure** with the `app/` directory, making it **easier to manage server components, pages, API routes, and reusable logic**.  

# 🔥 **React Server Components (RSC) - In-Depth Guide**

---

## 🚀 **What are React Server Components (RSC)?**
React Server Components (RSC) allow us to **render React components on the server** instead of the client. This helps in **reducing JavaScript bundle size, improving performance, and enabling direct access to databases, APIs, and files** without exposing sensitive logic to the browser.

✅ **Key Features of RSC:**  
- **No Client-Side JavaScript Execution** → Reduces JS sent to the browser.  
- **Direct Database & API Calls** → No need for fetching data on the client.  
- **Automatic Code Splitting** → Only sends required data to the frontend.  
- **SEO-Friendly** → Renders content on the server before sending it to the client.  
- **Improved Performance** → Faster page loads as less JavaScript is processed in the browser.  

---

## 📌 **How RSC Works?**
React now categorizes components into **two types**:  
1️⃣ **Server Components** → Run only on the server (default in Next.js 13+).  
2️⃣ **Client Components** → Run on both the server and browser but require JavaScript.  

---

## 🔍 **Differences Between Server and Client Components**

| Feature                 | Server Components (RSC) 🖥️ | Client Components 🖥️📱 |
|-------------------------|--------------------------|---------------------|
| Runs on                 | Server only              | Server + Client    |
| JavaScript in Browser?  | ❌ No                     | ✅ Yes              |
| Can Fetch Data?         | ✅ Yes (Directly)         | ✅ Yes (Via useEffect) |
| Can Use State (`useState`)? | ❌ No                     | ✅ Yes              |
| Can Use Effects (`useEffect`)? | ❌ No                     | ✅ Yes              |
| Can Use Event Handlers? | ❌ No                     | ✅ Yes (onClick, onChange, etc.) |
| Bundle Size Impact      | 🚀 Smaller (No JS sent)   | 📈 Larger (JS sent) |
| SEO Optimization        | ✅ Better                 | ❌ Worse           |

---

## 🎯 **When to Use Server vs. Client Components?**
✅ **Use Server Components when:**  
✔️ Fetching data from a database or API.  
✔️ Rendering static content (e.g., blog posts, articles, products).  
✔️ Improving SEO (Pre-rendered content).  
✔️ Reducing client-side JavaScript.  

✅ **Use Client Components when:**  
✔️ Using state (`useState`, `useReducer`).  
✔️ Handling user interactions (`onClick`, `onChange`).  
✔️ Using effects (`useEffect`, `useRef`).  
✔️ Implementing animations (e.g., `framer-motion`).  

---

## 📂 **Folder Structure in Next.js 15 with RSC**
Next.js 13+ follows the **App Router (`app/`)** pattern where all components are **Server Components by default**.

```
app/
├── layout.tsx       # Root layout (Server Component)
├── page.tsx         # Home page (Server Component)
├── about/page.tsx   # About page (Server Component)
├── components/
│   ├── Navbar.tsx   # Server Component
│   ├── Button.tsx   # Client Component (interactive)
│   ├── UserList.tsx # Server Component (fetches data)
├── api/
│   ├── hello.ts     # API Route (Server Side)
```

---

## ✅ **Creating Server Components (Default Behavior)**  
- **By default, all components in `app/` are Server Components** in Next.js 13+.
- **Can fetch data directly from a database/API without client-side fetching**.

📌 **Example: Fetching Data in a Server Component**
```tsx
// app/components/Users.tsx (Server Component)
import React from "react";

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

export default async function Users() {
  const users = await fetchUsers();

  return (
    <div>
      <h2>User List (Fetched on Server)</h2>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
```
✅ **No `useEffect` needed** to fetch data.  
✅ **No extra JavaScript sent to the client**.  

---

## ✅ **Creating Client Components (`"use client"`)**
- **Client Components must be explicitly marked** using `"use client"`.
- Used for **interactivity, state, event handlers, and effects**.

📌 **Example: Client Component with State**
```tsx
// app/components/Counter.tsx
"use client"; // 👈 Marks this as a Client Component
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```
✅ Can use `useState`, `useEffect`, and event handlers.  
✅ JavaScript is **sent to the browser**, increasing bundle size.  

---

## 🎯 **Mixing Server & Client Components**
- **Client Components can import Server Components, but NOT vice versa.**  
- This allows **fetching data on the server and passing it to client components**.

📌 **Example: Hybrid Approach**
```tsx
// app/components/UserList.tsx (Server Component)
import React from "react";
import Counter from "./Counter"; // ✅ Importing a Client Component

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

export default async function UserList() {
  const users = await fetchUsers();

  return (
    <div>
      <h2>Users:</h2>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <Counter /> {/* ✅ Client Component for Interactivity */}
    </div>
  );
}
```
✅ **Users fetched on the server** (no client-side fetching).  
✅ **Counter is interactive** (uses `useState`).  

---

## 🚀 **Benefits of RSC in Next.js**
✅ **Smaller Bundle Size:** No unnecessary JavaScript is sent to the browser.  
✅ **Better Performance:** Fetch data on the server without affecting UI.  
✅ **Improved SEO:** Content is rendered before reaching the browser.  
✅ **Security:** Prevents exposing database queries or API calls to the client.  

---

## 🛑 **Limitations of Server Components**
❌ **No Client-Side State (`useState`)** → Must wrap with a Client Component.  
❌ **No Event Handlers (`onClick`, `onChange`)** → Must wrap with a Client Component.  
❌ **No `useEffect`, `useRef`, `useContext`** → Only works in Client Components.  

---

## 🔥 **Summary**
| Feature | Server Component (Default) | Client Component (`"use client"`) |
|---------|---------------------------|------------------------------|
| State (`useState`) | ❌ No | ✅ Yes |
| Event Handlers (`onClick`) | ❌ No | ✅ Yes |
| Fetch Data | ✅ Yes (Directly) | ✅ Yes (`useEffect`) |
| SEO Optimization | ✅ Yes | ❌ No |
| Bundle Size Impact | ✅ Small | 📈 Larger |

---

## 🎯 **Final Thoughts**
- Next.js **defaults to Server Components**, making it easier to **fetch data, optimize performance, and improve SEO**.  
- **Client Components** are only needed for **state, events, and interactivity**.  
- The **best approach is to mix both** → Fetch data on the server, then pass it to a Client Component for interactions.  

# 🚀 **Routing in Next.js 15 (App Router) – A Complete Guide**  

Next.js 15 uses the **App Router (`app/`)**, which is a **file-based routing system**. This makes navigation in Next.js easier and more powerful.  

---

## 🔥 **1. Understanding App Router in Next.js 15**
- The **App Router (`app/`)** replaces the old **Pages Router (`pages/`)**.  
- Routing is based on the **file structure** inside the `app/` directory.  
- Every file named **`page.tsx` or `page.jsx`** automatically becomes a **route**.  
- **Nested directories** create **nested routes**.  

📌 **Example Folder Structure**:
```
app/
├── layout.tsx     # Root Layout (Shared UI)
├── page.tsx       # Home Page → "/"
├── about/
│   ├── page.tsx   # About Page → "/about"
├── blog/
│   ├── page.tsx   # Blog Page → "/blog"
│   ├── [id]/      # Dynamic Route
│   │   ├── page.tsx # Blog Post → "/blog/:id"
├── dashboard/
│   ├── layout.tsx # Dashboard Layout
│   ├── page.tsx   # Dashboard Home → "/dashboard"
│   ├── settings/
│   │   ├── page.tsx # Dashboard Settings → "/dashboard/settings"
```

✅ **Each `page.tsx` represents a route**  
✅ **Folders represent URL structure**  
✅ **Dynamic routing (`[id]`) is supported**  

---

## 🔥 **2. Creating Routes in Next.js 15**
Routes in Next.js 15 are defined using `page.tsx` inside folders.

📌 **Example: Home Page (`/`)**
```tsx
// app/page.tsx
export default function HomePage() {
  return <h1>Welcome to Next.js 15!</h1>;
}
```

📌 **Example: About Page (`/about`)**
```tsx
// app/about/page.tsx
export default function AboutPage() {
  return <h1>About Us</h1>;
}
```
✅ **Simple, file-based routing without extra configuration**  

---

## 🔥 **3. Nested Routes & Layouts**
Next.js 15 allows us to **share layouts** between multiple pages using `layout.tsx`.

📌 **Example: Shared Layout for Dashboard**
```
app/
├── dashboard/
│   ├── layout.tsx  # Shared layout for dashboard
│   ├── page.tsx    # "/dashboard"
│   ├── settings/
│   │   ├── page.tsx # "/dashboard/settings"
```

📌 **dashboard/layout.tsx**
```tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>Dashboard Navbar</nav>
      <main>{children}</main>
    </div>
  );
}
```
📌 **dashboard/page.tsx**
```tsx
export default function DashboardPage() {
  return <h1>Dashboard Home</h1>;
}
```
📌 **dashboard/settings/page.tsx**
```tsx
export default function DashboardSettings() {
  return <h1>Dashboard Settings</h1>;
}
```
✅ **Navbar will persist across all dashboard pages**  
✅ **Shared layouts improve code reuse**  

---

## 🔥 **4. Dynamic Routes (`[id]`)**
We can create **dynamic routes** by wrapping a folder name in **square brackets `[ ]`**.

📌 **Example: Blog Post Route (`/blog/:id`)**
```
app/
├── blog/
│   ├── [id]/  # Dynamic Route
│   │   ├── page.tsx
```
📌 **blog/[id]/page.tsx**
```tsx
export default function BlogPost({ params }: { params: { id: string } }) {
  return <h1>Blog Post ID: {params.id}</h1>;
}
```
✅ Access dynamic **parameters** using `{ params.id }`  
✅ `/blog/1` → Shows "Blog Post ID: 1"  
✅ `/blog/nextjs` → Shows "Blog Post ID: nextjs"  

---

## 🔥 **5. Catch-All Routes (`[[...slug]]`)**
If we need a **route that matches multiple segments**, use `[[...slug]]`.

📌 **Example: Catch-All Route**
```
app/
├── docs/
│   ├── [[...slug]]/
│   │   ├── page.tsx
```
📌 **docs/[[...slug]]/page.tsx**
```tsx
export default function DocsPage({ params }: { params: { slug?: string[] } }) {
  return <h1>Docs: {params.slug ? params.slug.join("/") : "Home"}</h1>;
}
```
✅ `/docs/` → "Docs: Home"  
✅ `/docs/nextjs/15` → "Docs: nextjs/15"  

---

## 🔥 **6. Navigating Between Pages (`next/link`)**
Use **`next/link`** for client-side navigation.

📌 **Example: Navbar with Links**
```tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog/1">Blog Post 1</Link>
    </nav>
  );
}
```
✅ **Fast navigation without page reloads**  

---

## 🔥 **7. API Routes (`app/api/`)**
We can create **API routes** directly inside the `app/api/` folder.

📌 **Example: API Route (`/api/hello`)**
```
app/
├── api/
│   ├── hello/
│   │   ├── route.ts
```
📌 **api/hello/route.ts**
```ts
export async function GET() {
  return new Response(JSON.stringify({ message: "Hello from API!" }), {
    headers: { "Content-Type": "application/json" },
  });
}
```
✅ Visit `/api/hello` to get `{ "message": "Hello from API!" }`  

---

## 🔥 **8. Middleware (`middleware.ts`)**
Middleware allows us to **modify requests before they reach a route**.

📌 **Example: Redirect `/old` to `/new`**
```ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/old") {
    return NextResponse.redirect(new URL("/new", request.url));
  }
}
```
✅ **Used for authentication, redirects, logging, etc.**  

---

## 🎯 **Summary**
| Feature | App Router (Next.js 15) |
|---------|-------------------------|
| **Routing Type** | File-based routing |
| **Nested Routes** | ✅ Yes |
| **Dynamic Routes (`[id]`)** | ✅ Yes |
| **API Routes (`app/api/`)** | ✅ Yes |
| **Middleware** | ✅ Yes |
| **Layouts** | ✅ Yes |
| **Navigation (`next/link`)** | ✅ Yes |

---

## 🚀 **Final Thoughts**
- Next.js 15 **automatically creates routes** based on the `app/` directory.  
- **Layouts** make it easy to **reuse UI** across multiple pages.  
- **Dynamic routes** allow flexible URL handling (`/blog/:id`).  
- **API routes** can handle backend logic without needing a separate server.  
- **Client-side navigation** (`next/link`) ensures fast performance.  

# 🚀 **Catch-All Segments in Next.js 15 (App Router)**
Catch-all segments in Next.js 15 allow us to **capture multiple URL segments** in a **single dynamic route**. This is useful for handling flexible or deeply nested paths without defining each one manually.

---

## 🔥 **1. Syntax: Using `[...]` for Catch-All Segments**
To create a catch-all route, we wrap a folder name inside **square brackets with three dots** (`[...]`).

📌 **Example: Catch-All Route (`/docs/*`)**
```
app/
├── docs/
│   ├── [...slug]/
│   │   ├── page.tsx
```
📌 **app/docs/[...slug]/page.tsx**
```tsx
export default function DocsPage({ params }: { params: { slug?: string[] } }) {
  return <h1>Docs Path: {params.slug ? params.slug.join("/") : "Home"}</h1>;
}
```

✅ **Routes and Their Outputs**  
| URL | `params.slug` | Output |
|-----|-------------|--------|
| `/docs` | `undefined` | Docs Path: Home |
| `/docs/nextjs` | `["nextjs"]` | Docs Path: nextjs |
| `/docs/nextjs/15` | `["nextjs", "15"]` | Docs Path: nextjs/15 |
| `/docs/nextjs/15/features` | `["nextjs", "15", "features"]` | Docs Path: nextjs/15/features |

🔹 **`params.slug` will always be an array of strings**, representing the URL segments.

---

## 🔥 **2. Optional Catch-All Segments (`[[...slug]]`)**
If we want the route to **match even when no segments are provided**, we use **double square brackets** (`[[...slug]]`).

📌 **Example: Handling `/docs` as well**
```
app/
├── docs/
│   ├── [[...slug]]/
│   │   ├── page.tsx
```
📌 **app/docs/[[...slug]]/page.tsx**
```tsx
export default function DocsPage({ params }: { params: { slug?: string[] } }) {
  return <h1>Docs: {params.slug ? params.slug.join("/") : "Home"}</h1>;
}
```

✅ **Difference Between `[...]` and `[[...]]`**
| URL | `[...]` (Required) | `[[...]]` (Optional) |
|-----|--------------------|----------------------|
| `/docs` | ❌ **404 Error** | ✅ "Docs: Home" |
| `/docs/nextjs` | ✅ "Docs: nextjs" | ✅ "Docs: nextjs" |

🔹 Use `[[...slug]]` when the route should work **without extra segments**.

---

## 🔥 **3. Real-World Example: Breadcrumb Navigation**
We can use catch-all segments to generate **breadcrumbs** dynamically.

📌 **Example: Breadcrumb Component**
```tsx
export default function Breadcrumbs({ params }: { params: { slug?: string[] } }) {
  const path = params.slug || [];

  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        {path.map((segment, index) => {
          const href = "/" + path.slice(0, index + 1).join("/");
          return <li key={href}><a href={href}>{segment}</a></li>;
        })}
      </ul>
    </nav>
  );
}
```

✅ **Visiting `/docs/nextjs/15` shows:**
```
Home > docs > nextjs > 15
```

---

## 🎯 **Summary**
| Feature | `[...]` (Required) | `[[...]]` (Optional) |
|---------|--------------------|----------------------|
| Captures multiple segments | ✅ Yes | ✅ Yes |
| Works without segments (`/docs`) | ❌ No (404) | ✅ Yes |
| Returns `params.slug` as an array | ✅ Yes | ✅ Yes |

📌 **Use cases:**
- **Dynamic documentation pages (`/docs/[...slug]`)**
- **E-commerce categories (`/products/[...category]`)**
- **Breadcrumb navigation**
- **URL rewriting and redirection handling**

# 🚀 **Different Ways to Implement a `notFound` Error Page in Next.js 15**  
In Next.js 15 (App Router), we can implement custom **404 Not Found** error pages in different ways, depending on the context. Let's go through each approach in detail.  

---

## 🔥 **1. Global `not-found.tsx` for a Custom 404 Page**  
If a user visits a non-existing route, we can create a global `not-found.tsx` inside the `app` directory.  

📌 **Example: `app/not-found.tsx`**  
```tsx
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg mt-4">Sorry, we couldn’t find the page you’re looking for.</p>
      <a href="/" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded">Go Home</a>
    </div>
  );
}
```
✅ **When is this triggered?**  
- If the user visits a route that **does not exist** (`/random-page` → 404).  
- **Works automatically** when a page is not found.  

---

## 🔥 **2. Programmatically Triggering a 404 Error Inside a Page**  
We can use Next.js’s built-in `notFound()` function inside a route to **conditionally trigger a 404 page**.

📌 **Example: `app/products/[id]/page.tsx`**
```tsx
import { notFound } from "next/navigation";

export default function ProductPage({ params }: { params: { id: string } }) {
  const validProducts = ["101", "102", "103"]; // Fake product list
  if (!validProducts.includes(params.id)) {
    notFound(); // Triggers the 404 page
  }

  return <h1>Product ID: {params.id}</h1>;
}
```
✅ **When is this triggered?**  
- If the user visits `/products/999` (an invalid product), it will **redirect them to the 404 page**.

---

## 🔥 **3. Handling 404 Errors in Fetch Requests (Server Components Only)**  
If we are fetching data from an API, we can **return `notFound()` when no data exists**.

📌 **Example: Fetching user data from an API**
```tsx
import { notFound } from "next/navigation";

async function getUser(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    notFound(); // Redirects to the 404 page if user is not found
  }
  return res.json();
}

export default async function UserPage({ params }: { params: { id: string } }) {
  const user = await getUser(params.id);
  return <h1>User: {user.name}</h1>;
}
```
✅ **When is this triggered?**  
- If we visit `/users/999` and the API **returns a 404**, it will automatically show our **custom 404 page**.

---

## 🔥 **4. Custom 404 Handling in Layouts (Not Recommended)**  
We can also **handle 404 pages inside layouts** by checking the route params, but this is **not recommended** because it might cause unwanted redirects.

📌 **Example: `app/products/layout.tsx`**
```tsx
import { notFound } from "next/navigation";

export default function ProductLayout({ children, params }: { children: React.ReactNode, params: { id: string } }) {
  const validProducts = ["101", "102", "103"];
  if (!validProducts.includes(params.id)) {
    notFound();
  }

  return <>{children}</>;
}
```
✅ **When is this triggered?**  
- If a product is invalid, it **redirects all subpages (`/products/999`) to 404**.

---

## 🎯 **Summary Table**
| Method | Use Case | Example |
|--------|---------|---------|
| **Global `not-found.tsx`** | Shows a global 404 page for non-existing routes | `app/not-found.tsx` |
| **`notFound()` inside a page** | Conditionally show 404 when data is missing | `app/products/[id]/page.tsx` |
| **API-based 404 Handling** | If an API request fails, trigger `notFound()` | Fetching user/product data |
| **404 in Layouts (Not Recommended)** | Handling 404 inside layouts for groups of pages | `app/products/layout.tsx` |

---

### 🚀 **Which One Should You Use?**
✅ **Use `not-found.tsx`** → For a **global 404 page**.  
✅ **Use `notFound()` in pages** → When handling **dynamic routes or data fetching errors**.  
✅ **Use API-based 404 Handling** → When fetching **external data** and the resource is missing.  

# 🔥 **`usePathname` Hook in Next.js 15**  

### 📌 **What is `usePathname`?**  
`usePathname` is a **React Server Component (RSC) hook** in Next.js 15 that lets us access the **current URL path** in a client component. It’s useful when we need to:  
✅ Show active navigation styles  
✅ Conditionally render UI based on the route  
✅ Generate breadcrumbs  
✅ Perform analytics or logging  

📌 **Importing `usePathname`**
```tsx
import { usePathname } from "next/navigation";
```

---

## 🚀 **1. Basic Usage: Display Current Path**  
We can use `usePathname` to **get the current URL path** and display it in our component.

📌 **Example: `components/CurrentPath.tsx`**
```tsx
"use client"; // Required for usePathname

import { usePathname } from "next/navigation";

export default function CurrentPath() {
  const pathname = usePathname();

  return (
    <div>
      <h1>Current Path: {pathname}</h1>
    </div>
  );
}
```
✅ **Visiting `/about` will display:**  
```
Current Path: /about
```

---

## 🚀 **2. Highlight Active Navigation Link**  
We can use `usePathname` to apply **active styles** to the current page link.

📌 **Example: `components/Navbar.tsx`**
```tsx
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex space-x-4">
      {["/", "/about", "/contact"].map((path) => (
        <Link
          key={path}
          href={path}
          className={`px-4 py-2 ${
            pathname === path ? "bg-blue-500 text-white" : "text-gray-700"
          }`}
        >
          {path === "/" ? "Home" : path.replace("/", "").toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
```
✅ **If we visit `/about`, the About link is highlighted.**  
```
[ Home ]  [ ABOUT ]  [ Contact ]
```
🔹 **Only the active link gets the blue background.**

---

## 🚀 **3. Breadcrumb Navigation Using `usePathname`**
We can use `usePathname` to generate **breadcrumb links** dynamically.

📌 **Example: `components/Breadcrumbs.tsx`**
```tsx
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <nav className="mt-4">
      <ul className="flex space-x-2">
        <li><Link href="/">Home</Link></li>
        {pathSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");
          return (
            <li key={href}>
              / <Link href={href} className="text-blue-500">{segment}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
```
✅ **Visiting `/docs/nextjs/hooks` generates:**  
```
Home / docs / nextjs / hooks
```

---

## 🚀 **4. Redirect Users Based on Pathname**  
We can use `usePathname` with `useEffect` to **redirect users** under certain conditions.

📌 **Example: Redirect to login if not authenticated**
```tsx
"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthRedirect() {
  const pathname = usePathname();
  const router = useRouter();
  const isAuthenticated = false; // Assume user is not logged in

  useEffect(() => {
    if (!isAuthenticated && pathname !== "/login") {
      router.push("/login");
    }
  }, [pathname]);

  return null;
}
```
✅ **If the user is not logged in and tries to visit `/dashboard`, they will be redirected to `/login`.**

---

## 🎯 **Summary Table**
| Feature | Use Case | Example |
|---------|---------|---------|
| **Get Current Path** | Show path in UI | `usePathname()` |
| **Highlight Active Link** | Change nav styles | Navbar component |
| **Breadcrumbs** | Generate links from URL | `/docs/nextjs/hooks → docs > nextjs > hooks` |
| **Redirect Users** | Protect routes | Redirect to `/login` if not authenticated |

---

## 🚀 **Final Thoughts**
- ✅ **Use `usePathname` in client components** (`"use client"` is required).  
- ✅ **It works well for UI-based logic** (menus, breadcrumbs, redirects).  
- ❌ **Don’t use it inside Server Components**, since it only works in client-side rendering.

# 📂 **Private Folders & File Colocation in Next.js 15**  

Next.js 15 introduces **private folders** and **file colocation** as best practices for organizing components, utilities, and other project files. These concepts help **improve structure, maintainability, and scalability** in Next.js projects. Let’s explore them in detail.

---

## 🚀 **1. What are Private Folders?**  

**Private folders** are directories that Next.js **does not treat as routes**. They are used to store **reusable components, utilities, styles, or constants** without exposing them as pages or API routes.  

### 📌 **How do Private Folders Work?**  
- Any folder **prefixed with an underscore (`_`) is ignored by Next.js** as a route.  
- Next.js will **not generate a route** for these folders.  
- This is useful for storing **helper functions, components, or shared utilities** inside the `app` directory.  

### 📌 **Example: Private Folder Structure**
```
app
│── _components/   → (Reusable components, ignored as a route)
│    ├── Button.tsx
│    ├── Navbar.tsx
│── _utils/        → (Helper functions, ignored as a route)
│    ├── formatDate.ts
│    ├── fetchData.ts
│── page.tsx       → (Home Page)
│── about/page.tsx → (About Page)
```
✅ **Files inside `_components` and `_utils` will not create pages or routes.**  

### 📌 **Example: Using Private Components in a Page**
```tsx
import Navbar from "../_components/Navbar"; // ✅ Allowed (Not a route)
import { formatDate } from "../_utils/formatDate"; // ✅ Allowed

export default function Home() {
  return (
    <div>
      <Navbar />
      <p>{formatDate(new Date())}</p>
    </div>
  );
}
```

---

## 🚀 **2. What is File Colocation?**  

**File colocation** is the practice of **keeping related files together** inside the same directory. This improves **maintainability** by grouping:  
✅ Components related to a page  
✅ Styles specific to a page  
✅ Utility functions for a page  

### 📌 **Example: File Colocation in Next.js**
```
app
│── blog/                   → (Blog page route)
│    ├── page.tsx           → (Main Blog Page)
│    ├── Post.tsx           → (Post Component)
│    ├── post.module.css    → (CSS specific to blog posts)
│    ├── fetchPosts.ts      → (API function to fetch blog posts)
```

✅ **Everything related to the blog is inside `blog/`** instead of spreading files across different directories.  

### 📌 **Example: Using File Colocation**
```tsx
import Post from "./Post"; // ✅ Colocated Component
import styles from "./post.module.css"; // ✅ Colocated Styles
import { fetchPosts } from "./fetchPosts"; // ✅ Colocated Utility

export default async function BlogPage() {
  const posts = await fetchPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} />
      ))}
    </div>
  );
}
```

---

## 🚀 **Why Use Private Folders & File Colocation?**  

| Feature | Benefit |
|---------|---------|
| **Private Folders (`_folder`)** | Prevents unintended routing & keeps project clean |
| **File Colocation** | Improves maintainability by grouping related files together |
| **Performance** | Keeps imports optimized and reduces unnecessary file lookups |
| **Scalability** | Easier to manage large projects with well-structured folders |

---

## 🎯 **Summary**
- ✅ **Private folders** (`_components`, `_utils`) prevent Next.js from creating unwanted routes.  
- ✅ **File colocation** keeps all relevant files in one place, improving project structure.  
- ✅ Best practice: **Combine both** to create a well-organized Next.js project.  

# 📂 **Route Groups in Next.js 15**  

## 🚀 **What are Route Groups?**  
**Route Groups** in Next.js 15 allow us to **organize routes without affecting the URL structure**. They help in:  
✅ **Structuring large projects**  
✅ **Grouping related pages**  
✅ **Improving code maintainability**  
✅ **Keeping URLs clean** (the group name does not appear in the URL)  

---

## 📌 **How to Create Route Groups?**  
- Route groups are created by wrapping a folder name inside **parentheses `(group-name)`**.  
- Next.js **ignores the group name in the URL**, but the folder structure helps organize the project.  

---

## 🚀 **1. Basic Route Group Example**  
### 📌 **Folder Structure**
```
app
│── (marketing)/      → (Route Group for marketing pages)
│    ├── about/page.tsx  → (Accessible at `/about`)
│    ├── contact/page.tsx → (Accessible at `/contact`)
│── (dashboard)/      → (Route Group for dashboard pages)
│    ├── page.tsx → (Accessible at `/dashboard`)
│    ├── settings/page.tsx → (Accessible at `/dashboard/settings`)
│── page.tsx → (Home Page `/`)
```

✅ Even though **`about` and `contact` are inside `(marketing)`**,  
they are accessible at `/about` and `/contact`, **not** `/marketing/about`.

✅ The **route group name is ignored** in the URL.

---

## 🚀 **2. Using Route Groups for Layouts**  
Each **route group can have its own layout** to wrap pages under it.

### 📌 **Folder Structure**
```
app
│── (dashboard)/ 
│    ├── layout.tsx      → (Layout for dashboard pages)
│    ├── page.tsx        → (Accessible at `/dashboard`)
│    ├── settings/page.tsx  → (Accessible at `/dashboard/settings`)
│── page.tsx → (Home Page `/`)
```

### 📌 **dashboard/layout.tsx**
```tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard-layout">
      <nav>Dashboard Navbar</nav>
      <main>{children}</main>
    </div>
  );
}
```
✅ **All pages inside `(dashboard)` will use this layout.**  
✅ Visiting `/dashboard/settings` **automatically includes the Dashboard layout.**

---

## 🚀 **3. Route Groups for Authentication (Protect Routes)**  
We can separate **protected routes** (dashboard, admin panel) from **public routes** (home, about).

### 📌 **Folder Structure**
```
app
│── (public)/ 
│    ├── page.tsx  → (Accessible at `/`)
│    ├── about/page.tsx  → (Accessible at `/about`)
│── (auth)/ 
│    ├── login/page.tsx  → (Accessible at `/login`)
│    ├── register/page.tsx → (Accessible at `/register`)
│── (dashboard)/ 
│    ├── layout.tsx  → (Protected Layout)
│    ├── page.tsx  → (Accessible at `/dashboard`)
│    ├── settings/page.tsx  → (Accessible at `/dashboard/settings`)
```
### 📌 **Protect Dashboard Pages in `dashboard/layout.tsx`**
```tsx
import { redirect } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const isAuthenticated = false; // Assume user is not logged in

  if (!isAuthenticated) {
    redirect("/login"); // Redirect to login if not authenticated
  }

  return <div className="dashboard-layout">{children}</div>;
}
```
✅ **If the user is not logged in, they are redirected to `/login`.**  
✅ The **public and auth pages remain accessible** to everyone.

---

## 🚀 **4. API Routes with Route Groups**  
Route groups **also work with API routes** inside the `app/api/` directory.

### 📌 **Folder Structure**
```
app
│── (api)/
│    ├── users/route.ts → (API at `/api/users`)
│    ├── posts/route.ts → (API at `/api/posts`)
```

### 📌 **Example: `app/(api)/users/route.ts`**
```tsx
export async function GET() {
  return Response.json([{ id: 1, name: "John Doe" }]);
}
```
✅ **Accessible at `/api/users`**  
✅ The `(api)` group is ignored in the URL.

---

## 🎯 **Key Takeaways**
| Feature | Benefit |
|---------|---------|
| **Route Groups** | Organize files without affecting URLs |
| **Clean URLs** | Folder names in `( )` are ignored in the final route |
| **Scoped Layouts** | Different layouts for different route groups |
| **Auth Separation** | Public, private, and API routes can be structured cleanly |
| **API Routes** | Route groups also work for API endpoints |

---

## 🚀 **Final Thoughts**
- ✅ **Use Route Groups to structure large Next.js apps** without messing up URLs.  
- ✅ **Great for organizing dashboard layouts, public/auth pages, and API routes.**  
- ✅ **Easy to separate concerns** while keeping a **clean URL structure**.  

# 📂 **Everything About `layout.tsx` & Layouts in Next.js 15**  

## 🚀 **What is `layout.tsx` in Next.js 15?**  
In Next.js 15, `layout.tsx` is used to **define persistent UI elements** that wrap around multiple pages.  
Layouts help us **avoid code duplication** and **keep a consistent structure** across multiple pages.  

---

## 📌 **1. How Do Layouts Work in Next.js?**  
- Any `layout.tsx` file inside a folder **automatically wraps all pages** inside that folder.  
- Layouts **can be nested**, meaning child layouts **inherit parent layouts**.  
- Useful for **headers, sidebars, authentication layouts, dashboards, and more**.  

---

## 🚀 **2. Basic Layout Example**  
### 📌 **Folder Structure**
```
app
│── layout.tsx  → (Global Layout for the entire app)
│── page.tsx  → (Home Page)
│── about/page.tsx  → (About Page)
│── dashboard/
│   ├── layout.tsx  → (Dashboard-specific Layout)
│   ├── page.tsx  → (Dashboard Home)
│   ├── settings/page.tsx  → (Dashboard Settings)
```
✅ **`layout.tsx` inside `app/` applies to the entire app.**  
✅ **`layout.tsx` inside `dashboard/` only applies to dashboard pages.**  

---

## 🚀 **3. Creating a Global Layout (`app/layout.tsx`)**  
### 📌 **Example: `app/layout.tsx`**
```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>🌟 My Website Header 🌟</header>
        <main>{children}</main>
        <footer>© 2025 My Website</footer>
      </body>
    </html>
  );
}
```
✅ **Applies to all pages (`page.tsx`) inside `app/`.**  
✅ **Ensures all pages have the same header and footer.**  

---

## 🚀 **4. Nested Layouts (Scoped to a Folder)**  
- A `layout.tsx` inside a folder **only applies to pages within that folder**.  
- **Child layouts inherit parent layouts** automatically.  

### 📌 **Example: `app/dashboard/layout.tsx`**
```tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard-container">
      <nav>📌 Dashboard Sidebar</nav>
      <section>{children}</section>
    </div>
  );
}
```
✅ **This layout wraps all pages in `app/dashboard/`.**  
✅ **Visiting `/dashboard` or `/dashboard/settings` includes this layout.**  

---

## 🚀 **5. Nested Layout Inheritance**  
### 📌 **Folder Structure**
```
app
│── layout.tsx  → (Global Layout)
│── page.tsx  → (Home Page)
│── dashboard/
│   ├── layout.tsx  → (Dashboard Layout)
│   ├── page.tsx  → (Dashboard Home)
│   ├── settings/
│       ├── layout.tsx  → (Settings Layout)
│       ├── page.tsx  → (Settings Page)
```
### 📌 **Layouts Applied**
| Route | Layout Applied |
|-------|---------------|
| `/` | `app/layout.tsx` |
| `/dashboard` | `app/layout.tsx` + `app/dashboard/layout.tsx` |
| `/dashboard/settings` | `app/layout.tsx` + `app/dashboard/layout.tsx` + `app/dashboard/settings/layout.tsx` |

---

## 🚀 **6. Passing Props to Layouts**  
Layouts receive a **`children` prop**, but we can also pass additional props.

### 📌 **Example: Theme Prop in `layout.tsx`**
```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const theme = "dark"; // Example: Theme state
  
  return (
    <html lang="en">
      <body className={theme}>
        {children}
      </body>
    </html>
  );
}
```
✅ **Useful for themes, authentication state, and global context providers.**

---

## 🚀 **7. Using Providers in Layouts**  
- Layouts are **great places** to wrap our app with **context providers** (e.g., Theme, Auth).  
- This ensures **all pages inside the layout have access** to these providers.

### 📌 **Example: Wrapping Layout with Auth Provider**
```tsx
import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children} {/* All pages inside get access to Auth */}
        </AuthProvider>
      </body>
    </html>
  );
}
```
✅ **All pages can now access authentication state from `AuthContext`.**  

---

## 🚀 **8. Handling Metadata in Layouts**  
Layouts can **define metadata for all pages inside them** using `generateMetadata`.  

### 📌 **Example: Adding Metadata in `layout.tsx`**
```tsx
export const metadata = {
  title: "My Next.js App",
  description: "This is an amazing Next.js app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```
✅ **All pages inside this layout automatically get this metadata.**

---

## 🎯 **Key Takeaways**
| Feature | Benefit |
|---------|---------|
| **Global Layout (`app/layout.tsx`)** | Wraps the entire app (header, footer, themes) |
| **Nested Layouts** | Scoped layouts for dashboards, settings, etc. |
| **Layout Inheritance** | Child layouts inherit parent layouts automatically |
| **Context Providers in Layouts** | Manage authentication, themes, state globally |
| **Metadata in Layouts** | Define SEO-friendly metadata for all pages in a layout |

---

## 🚀 **Final Thoughts**
- ✅ **`layout.tsx` helps us structure UI consistently** across multiple pages.  
- ✅ **Nested layouts allow different sections to have unique designs**.  
- ✅ **Great for global providers, authentication, and theming**.  

Absolutely! Let’s deep dive into **Routing Metadata in Next.js 15**, which is an **essential part of modern SEO, social sharing, accessibility, and performance**.

---

## 🧠 What is **Routing Metadata** in Next.js 15?

**Metadata** in Next.js 15 refers to extra information (like title, description, Open Graph data, Twitter cards, theme color, etc.) that gets injected into your HTML `<head>` section **on a per-page or per-route basis**. This is done using either a static `metadata` object or a dynamic `generateMetadata()` function.

It helps search engines, social platforms, and browsers understand and display your pages properly.

---

## 📦 Where Do We Use Metadata?

You can define metadata in:

- `app/layout.tsx` → Applies to all routes.
- `app/page.tsx` → Applies only to a single route/page.
- `app/blog/[slug]/page.tsx` → Dynamically generate metadata per route.
- Nested layouts can also define their own metadata.

---

## ✍️ Basic Example: Static Metadata

### `app/page.tsx`
```tsx
export const metadata = {
  title: "Home | My Awesome App",
  description: "This is the homepage of our cool app.",
};

export default function HomePage() {
  return <h1>Welcome to the Home Page</h1>;
}
```

✅ This will inject:
```html
<title>Home | My Awesome App</title>
<meta name="description" content="This is the homepage of our cool app." />
```

---

## 🔁 Dynamic Metadata using `generateMetadata()`

When you need metadata that depends on dynamic data (like a blog post title from a CMS or DB), you use `generateMetadata()`.

### Example: `app/blog/[slug]/page.tsx`
```tsx
type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
  const post = await getPostData(params.slug);

  return {
    title: `${post.title} | My Blog`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: [post.coverImage],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  return <div>Blog post content for {params.slug}</div>;
}
```

✅ This lets us **dynamically set metadata for each blog post**!

---

## 🌐 Types of Metadata You Can Define

| Metadata Field | Purpose |
|----------------|---------|
| `title` | Sets the HTML `<title>` |
| `description` | Meta description tag |
| `keywords` | SEO keywords (less used today) |
| `robots` | Controls crawling/indexing |
| `themeColor` | Sets browser theme color |
| `viewport` | Controls mobile scaling |
| `openGraph` | Metadata for social sharing (FB, LinkedIn) |
| `twitter` | Twitter-specific metadata |
| `icons` | App icons |
| `appleWebApp`, `manifest`, `archives`, etc. | PWA-related and advanced options |

---

## 🧠 Metadata Inheritance

Just like layouts, **metadata declared in a parent layout is inherited by children**, unless overridden.

Example:

### `app/layout.tsx`
```tsx
export const metadata = {
  title: "My App",
  description: "A universal layout for all routes",
};
```

Now, any `page.tsx` under this layout **inherits this metadata** unless it overrides it.

---

## ⚡ Tip: `generateStaticParams` + `generateMetadata`

These two often work together for **static site generation (SSG)** of dynamic routes.

```tsx
export async function generateStaticParams() {
  const posts = await fetchAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}
```

Then use `generateMetadata()` to define metadata for each slug!

---

## 🛠 Real-World Use Case Example

You're building an eCommerce product page.

### `app/products/[productId]/page.tsx`
```tsx
export async function generateMetadata({ params }) {
  const product = await fetchProductById(params.productId);
  
  return {
    title: `${product.name} - Buy Now!`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.imageUrl],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images: [product.imageUrl],
    }
  };
}
```

✅ This makes your product page **SEO-friendly and social-media-ready** 🎉

---

## 🧪 Pro Tips

- We **cannot use hooks** (like `useState` or `useEffect`) inside `generateMetadata()`, since it runs **on the server**.
- Keep metadata as **lightweight and static as possible** unless you really need dynamic fetching.
- Store reusable metadata templates in a utility file for DRYness.

---

## 🧭 Summary

| Feature | Explanation |
|---------|-------------|
| `metadata` | Static metadata object |
| `generateMetadata()` | Dynamic metadata based on route params or fetched data |
| Layout metadata | Inherited by child routes |
| Dynamic routes | Supported with metadata via `params` |
| SEO & social | Supports OG tags, Twitter cards, canonical tags |

---

Here’s a complete, **ready-to-use template** for handling metadata in a Next.js 15 project — including static and dynamic metadata with Open Graph and Twitter support, ideal for SEO, PWA, and social sharing.

---

## 🧱 Project Structure
Let’s assume the following structure:

```
app/
├── layout.tsx         ← Root layout (with global metadata)
├── page.tsx           ← Homepage
├── about/
│   └── page.tsx       ← Static metadata example
├── blog/
│   └── [slug]/
│       └── page.tsx   ← Dynamic metadata example
```

---

## 1️⃣ **Root Metadata in `layout.tsx`**
This applies globally to all routes unless overridden.

```tsx
// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "MyApp",
    template: "%s | MyApp",
  },
  description: "A modern web app built with Next.js 15",
  keywords: ["Next.js", "Web App", "SEO", "React"],
  authors: [{ name: "Skyy Banerjee", url: "https://skyybbanerjee.dev" }],
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: "#ffffff",
  openGraph: {
    type: "website",
    url: "https://myapp.com",
    title: "MyApp",
    description: "Explore the best modern web experience",
    siteName: "MyApp",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MyApp",
    description: "Explore the best modern web experience",
    images: ["/og-image.png"],
    creator: "@skyybbanerjee",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

---

## 2️⃣ **Static Metadata Example: `about/page.tsx`**

```tsx
// app/about/page.tsx
export const metadata = {
  title: "About Us",
  description: "Learn more about our mission and team.",
};

export default function AboutPage() {
  return <h1>About Us</h1>;
}
```

---

## 3️⃣ **Dynamic Metadata Example: `blog/[slug]/page.tsx`**

```tsx
// app/blog/[slug]/page.tsx

type Props = {
  params: { slug: string };
};

async function getPostData(slug: string) {
  // Simulate DB or CMS call
  return {
    title: `Blog: ${slug.replace("-", " ")}`,
    description: "This is a dynamic blog post.",
    imageUrl: `https://myapp.com/images/${slug}.jpg`,
  };
}

export async function generateMetadata({ params }: Props) {
  const post = await getPostData(params.slug);

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.imageUrl],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.imageUrl],
    },
  };
}

export default function BlogPost({ params }: Props) {
  return <div>This is the blog post for: {params.slug}</div>;
}
```

---

## 🧪 Bonus Tip: Set `robots` Metadata

To control indexing:

```tsx
export const metadata = {
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};
```
---
We can scale this template into anything we need! 🚀

Absolutely Skyy! Let’s dive into the **`Link` component in Next.js 15** — a core feature for client-side navigation in your app. It’s lightweight, fast, and integrated with the new **App Router** system.

---

## 🔗 What is the `Link` Component?

In Next.js 15, the `Link` component (from `next/link`) is used for **navigating between routes**. It enables **client-side navigation**, meaning that clicking a link doesn’t cause a full page reload — just the necessary route is loaded using JavaScript. This leads to **faster page transitions** and **preserves state** like scroll position (if configured).

---

## 📦 Where is it imported from?

```tsx
import Link from 'next/link';
```

---

## 🧱 Basic Usage

```tsx
<Link href="/about">About Us</Link>
```

This will render:
```html
<a href="/about">About Us</a>
```

✅ React handles routing without reloading the browser.

---

## 🧠 Under the Hood

The `Link` component:
- Uses the HTML `<a>` tag under the hood.
- Intercepts clicks and loads pages **via client-side navigation**.
- Automatically **prefetches** the linked page in the background (when visible in viewport).
- Is compatible with **dynamic routes**, **Route Groups**, **Catch-all routes**, and **Layouts** in the App Router.

---

## 💡 Features of `Link`

| Feature            | Description |
|-------------------|-------------|
| `href`            | Required. Route path or URL to navigate to. |
| `prefetch`        | Prefetch the linked page in the background. Enabled by default in production. |
| `replace`         | Replaces history instead of pushing (like `router.replace()`) |
| `scroll`          | Scroll to top on navigation (default: `true`) |
| `as`              | Optional. Used in dynamic routes to mask the URL |
| **Nested elements** | Now allowed! You can wrap complex JSX inside `Link` |

---

## 🧩 Example: Wrapping Elements

You can now do this (allowed in App Router):

```tsx
<Link href="/products/shoes">
  <div className="p-4 rounded hover:bg-gray-100">
    <h2>Shoes</h2>
    <p>See our latest shoes collection.</p>
  </div>
</Link>
```

✅ This was not possible in earlier versions unless you manually wrapped it with `<a>`.

---

## 🚀 Dynamic Routes with `Link`

For a dynamic route like `/blog/[slug]`:

```tsx
<Link href={`/blog/${post.slug}`}>{post.title}</Link>
```

You can also pass an object:

```tsx
<Link href={{ pathname: '/blog/[slug]', query: { slug: post.slug } }}>
  {post.title}
</Link>
```

---

## ⚙️ `replace` vs `push`

By default, navigation pushes to browser history. If you want to **replace** the current route:

```tsx
<Link href="/dashboard" replace>Go to Dashboard</Link>
```

---

## ⏳ Disable Prefetching (Optional)

By default, prefetching is **enabled in production**. You can disable it:

```tsx
<Link href="/contact" prefetch={false}>Contact</Link>
```

✅ This saves bandwidth if the route is unlikely to be visited.

---

## 🔁 Scroll Behavior

If you don’t want to scroll to top on navigation:

```tsx
<Link href="/faq" scroll={false}>FAQ</Link>
```

---

## 🌐 External Links

Use plain `<a>` tags for **external links**:

```tsx
<a href="https://github.com/skyybbanerjee" target="_blank" rel="noopener noreferrer">
  GitHub
</a>
```

🔒 Always use `rel="noopener noreferrer"` for security with `target="_blank"`.

---

## 🔍 Link with Active Styling (Custom Highlighting)

You can highlight the current link manually using `usePathname()`:

```tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={isActive ? "text-blue-600 font-bold" : "text-gray-700"}>
      {children}
    </Link>
  );
}
```

---

## 🧠 Summary

| Prop         | Description |
|--------------|-------------|
| `href`       | Path to navigate to |
| `replace`    | Replaces the current history entry |
| `prefetch`   | Enables/disables preloading the route |
| `scroll`     | Controls scroll-to-top behavior |
| `as`         | Used for masking dynamic URLs |
| `children`   | Can be text, JSX, or elements (like cards) |

---

## 🧠 Understanding `params` and `searchParams` in Next.js 15

Next.js 15, like 13/14 in the App Router, uses **file-based routing** and introduces **React Server Components (RSC)** by default.

When a **page or layout is rendered**, we can access:

### ✅ `params`
- Comes from **dynamic segments** in the file system.
- Example: In `app/articles/[articleId]/page.tsx`, `articleId` is a **param**.

### ✅ `searchParams`
- Comes from the **URL query string**, like `?lang=en`.
- These don’t require any special `[param]` file setup — they’re parsed automatically.

---

## ✅ Usage in Server vs Client Components

### In **Server Components**:
You can use them **directly as props** in your page or layout:

```tsx
export default function Page({ params, searchParams }) {
  console.log(params.articleId);
  console.log(searchParams.lang);
}
```

### In **Client Components**:
Since Next.js doesn’t allow async props by default, we **wrap them in a `Promise` and use the `use()` hook** to resolve them.

---

## 🔎 Let's Understand our Two Files

### ### ✅ 1. `Home.tsx` – Server Component

```tsx
<Link href="/articles/breaking-news-123?lang=en">Read in ENGLISH</Link>
<Link href="/articles/breaking-news-123?lang=fr">Lire en FRANÇAIS</Link>
```

Here:
- We're linking to a **dynamic route** like `/articles/[articleId]`
- `breaking-news-123` → becomes a **param** (`articleId`)
- `?lang=en` → becomes a **search param**

---

### ✅ 2. `NewsArticle.tsx` – Client Component

```tsx
"use client";

import { use } from "react"; // for async props

function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" | "de" }>;
}) {
  const { articleId } = use(params); // resolves to { articleId: "breaking-news-123" }
  const { lang = "en" } = use(searchParams); // resolves to { lang: "fr" } etc.
```

We're correctly:

- Using the `use()` hook to **await** async `params` and `searchParams` props.
- Getting the `articleId` from the route: `/articles/[articleId]`
- Getting the `lang` from query string like `?lang=en`

So:

| URL | `params.articleId` | `searchParams.lang` |
|-----|---------------------|----------------------|
| `/articles/breaking-news-123?lang=en` | `"breaking-news-123"` | `"en"` |
| `/articles/breaking-news-123?lang=fr` | `"breaking-news-123"` | `"fr"` |

---

## 📦 Behind the Scenes: How Next.js Handles It

- In our route folder:  
  `app/articles/[articleId]/page.tsx`  
  or  
  `app/articles/[articleId]/NewsArticle.tsx` (if used as client comp)

Next.js automatically passes:
```ts
params = { articleId: "..." }
searchParams = { lang: "..." }
```

If you're using a client component here, the props are promises. That’s why you use:

```ts
const { articleId } = use(params); 
const { lang } = use(searchParams);
```

---

## 💡 Bonus Tips

### 💬 You could also do:
#### If you don’t need to support all languages:
```tsx
const supportedLangs = ["en", "fr", "es", "de"];
const { lang = "en" } = use(searchParams);

if (!supportedLangs.includes(lang)) {
  // show 404 or redirect
}
```

---

## ✅ Summary

| Concept         | Meaning                                            | Where it comes from           |
|----------------|----------------------------------------------------|-------------------------------|
| `params`        | Values from `[param]` in file structure             | URL path                      |
| `searchParams`  | Values from `?key=value` in URL query              | URL query string              |
| `use()` hook    | Needed in **Client Components** to resolve props   | `params` and `searchParams`   |

---

## 🧭 What is Programmatic Navigation?

Instead of using `<Link href="...">`, **programmatic navigation** lets us navigate between routes using **JavaScript logic**, like:

- After a form submission ✅  
- On button click ✅  
- Based on conditions or auth ✅

---

## ✅ How to Do Programmatic Navigation in Next.js 15

In the **App Router**, we use the **`useRouter()` hook from `next/navigation`** inside **Client Components** to navigate programmatically.

### 1. Import the hook

```ts
"use client"; // must be a client component

import { useRouter } from "next/navigation";
```

---

### 2. Use `router.push()` to navigate

```tsx
"use client";

import { useRouter } from "next/navigation";

export default function MyComponent() {
  const router = useRouter();

  const goToLogin = () => {
    router.push("/login");
  };

  return <button onClick={goToLogin}>Go to Login</button>;
}
```

---

## 🧠 Methods on `router`

| Method              | Description |
|---------------------|-------------|
| `router.push(url)`  | Navigate to a new route (adds to history stack) |
| `router.replace(url)` | Navigate without keeping the previous route in history (used for redirects) |
| `router.refresh()`  | Re-fetches data and re-renders current route |
| `router.back()`     | Same as browser back button |
| `router.forward()`  | Same as browser forward button |

---

### 🔁 Example: Redirect after form submission

```tsx
"use client";

import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Do API call or logic
    await new Promise((r) => setTimeout(r, 1000)); // fake delay

    // Navigate to dashboard after success
    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" />
      <button type="submit">Register</button>
    </form>
  );
}
```

---

### 🔒 Conditional Redirect (like auth)

```tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedPage() {
  const router = useRouter();
  const isLoggedIn = false; // assume from context/store

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/login");
    }
  }, [isLoggedIn]);

  return <div>Welcome to Protected Page</div>;
}
```

---

## 💡 Bonus: Pass searchParams dynamically

```tsx
router.push(`/profile/${userId}?ref=welcome`);
```

---

## 🚫 Note

- **Only use `useRouter()` inside client components.**  
- Make sure to add `"use client"` at the top of the file.

---

## ✅ Summary

| Feature        | Use                       |
|----------------|----------------------------|
| `router.push()` | Navigate forward          |
| `router.replace()` | Replace history entry    |
| `router.back()` | Go back                   |
| `router.refresh()` | Refresh current route    |

In **Next.js 15** (App Router), we have two powerful file types for structuring our UI: **`layout.tsx`** and **`template.tsx`**. While they may look similar, their behavior and purpose are **very different**.

Let’s break this down in full detail. 👇

---

## 🏗️ What is `layout.tsx`?

`layout.tsx` is used to **wrap pages and components with a consistent UI shell**—for example, a navbar, footer, sidebar, etc.

### ✅ Key Characteristics of `layout.tsx`

- It is **shared and persistent** across navigation.
- It does **not remount** when navigating between sibling routes.
- It is ideal for:
  - Headers
  - Sidebars
  - Persistent navigation
  - Keeping state (like dark mode toggle, open sidebar)

### 🧠 Example:

```tsx
// app/dashboard/layout.tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
```

### ✅ Behavior:
- When we navigate from `/dashboard/analytics` to `/dashboard/settings`, the layout **doesn't rerender**. It **persists**.
- Useful for layouts that manage state (like sidebar toggle).

---

## 🆕 What is `template.tsx`?

`template.tsx` is a **new concept** in the App Router that **renders a fresh instance on every navigation** to that segment.

### ✅ Key Characteristics of `template.tsx`

- It **remounts on every navigation**.
- It’s **not shared**, unlike `layout.tsx`.
- Use it when you want a **clean slate** every time the route loads.
- Good for **modals, loading animations, one-time transitions**, etc.

---

### 🧠 Example:

```tsx
// app/shop/@modal/template.tsx
export default function ModalTemplate({ children }: { children: React.ReactNode }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">{children}</div>
    </div>
  );
}
```

### ✅ Behavior:
- Every time you go from one route to another using this `template.tsx`, it will **remount all children**, giving you a **fresh instance**.

---

## 🧬 Comparison Table

| Feature                 | `layout.tsx`                             | `template.tsx`                          |
|--------------------------|-------------------------------------------|------------------------------------------|
| 🧠 Shared Across Routes | ✅ Yes                                     | ❌ No (fresh on each route)              |
| 🔁 Remounts on Nav      | ❌ No                                      | ✅ Yes                                    |
| 💾 Keeps State          | ✅ Yes                                     | ❌ No (resets every time)                |
| 🎯 Use Case             | Persistent UI (navbars, sidebars, etc.)   | Transient UI (modals, animations, etc.)  |
| 🧩 Memory Optimization  | Good for keeping components alive         | Good for short-lived dynamic content     |

---

## 🔥 Real-world Use Cases

| Use Case                        | Use `layout.tsx`? | Use `template.tsx`? |
|----------------------------------|------------------|---------------------|
| Navbar + Sidebar Shell           | ✅ Yes           | ❌ No               |
| Dashboard Tabs with local state  | ✅ Yes           | ❌ No               |
| Modals that open on different routes | ❌ No          | ✅ Yes              |
| Step-by-step multi-page form     | ❌ No            | ✅ Yes (reset state each time) |
| Transitions/Animations between views | ❌ No         | ✅ Yes              |

---

## 💡 Pro Tip:

We can use **both** in the same folder structure!

```bash
app/
 └── dashboard/
     ├── layout.tsx      ✅ Shared layout
     ├── template.tsx    ✅ Fresh template on each visit
     ├── page.tsx
     └── settings/
         └── page.tsx
```

So when you go from `/dashboard` → `/dashboard/settings`, the `layout.tsx` stays, but the `template.tsx` will **re-render**.

---

## ✅ Final Summary

| Aspect        | `layout.tsx`                      | `template.tsx`                     |
|---------------|-----------------------------------|------------------------------------|
| Shared across pages? | ✅ Yes                        | ❌ No                              |
| Remounts on nav?     | ❌ No                        | ✅ Yes                             |
| Keeps state?         | ✅ Yes                        | ❌ No                              |
| Use for?             | Layout shell, persistent UI | Dynamic UIs, modals, animations    |

---

In **Next.js 15**, error handling is **built-in and improved** thanks to the App Router architecture. Here’s a detailed breakdown of **all the ways we can handle errors** in a Next.js 15 project, both **server-side and client-side**.

---

## 🧭 1. **Route-Level `error.tsx` File** (App Router Specific)

### ✅ What it does:
Catches **rendering or async errors** inside the route segment it belongs to.

### ✅ Structure:
```bash
app/
├── dashboard/
│   ├── page.tsx
│   ├── error.tsx 👈
```

### ✅ Example:

```tsx
// app/dashboard/error.tsx
'use client';

export default function ErrorPage({ error, reset }: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong in Dashboard!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
```

- `error`: the caught error.
- `reset()`: re-attempts rendering (good for retry logic).

---

## 🌐 2. **Global Error Handling with `app/error.tsx`**

Catches **unhandled errors in the whole app**.

```tsx
// app/error.tsx
'use client';

export default function GlobalError({ error, reset }: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h1>App crashed 😢</h1>
      <p>{error.message}</p>
      <button onClick={reset}>Retry</button>
    </div>
  );
}
```

---

## 🔁 3. **`try/catch` Blocks in Server Components / Route Handlers**

When using **server functions or API routes**, handle expected errors explicitly.

### ✅ Example in Route Handler:
```ts
// app/api/data/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const data = await fetchData();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 }
    );
  }
}
```

---

## 🚫 4. **404 (Not Found) Handling**

### A. **Static NotFound Page**
```bash
app/
└── not-found.tsx
```

```tsx
// app/not-found.tsx
export default function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}
```

### B. **Programmatic `notFound()` function**
```tsx
import { notFound } from 'next/navigation';

export default function Page({ params }) {
  if (params.id !== 'valid-id') {
    notFound(); // Triggers the 404 page
  }

  return <div>Valid Page</div>;
}
```

---

## 🔄 5. **Client Components: `ErrorBoundary` (React standard)**

For errors in interactive client components.

### ✅ Setup your own ErrorBoundary:
```tsx
// components/ErrorBoundary.tsx
'use client';

import React from 'react';

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h2>Client UI broke 😔</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
```

### ✅ Usage:
```tsx
<ErrorBoundary>
  <SomeClientComponent />
</ErrorBoundary>
```

---

## 🧪 6. **Handling Errors in Actions (`app/actions.ts`)**

When using **form actions or server actions**:

```ts
'use server';

export async function submitData(formData: FormData) {
  try {
    // Do something
  } catch (err) {
    throw new Error("Submission failed!");
  }
}
```

This will bubble up to `error.tsx` or be caught in the calling component.

---

## 🔍 7. **404 + 500 Pages (Static Fallback for Pages Router)**

For hybrid apps using both App Router and Pages Router:

```bash
pages/
├── 404.tsx
├── 500.tsx
```

### ✅ 404:
```tsx
export default function Custom404() {
  return <h1>Oops! This page doesn’t exist.</h1>;
}
```

### ✅ 500:
```tsx
export default function Custom500() {
  return <h1>Server-side error occurred!</h1>;
}
```

---

## 🔐 BONUS: Edge Cases + Tips

| Situation                           | Use This                            |
|------------------------------------|-------------------------------------|
| A component crashes (render error) | `error.tsx` or `ErrorBoundary`      |
| Dynamic route not found            | `notFound()`                        |
| Data fetch fails                   | `try/catch` + `error.tsx`           |
| Invalid user input                 | `throw new Error()` (handled by layout/template or form UI) |
| Programmatic redirection           | `redirect('/some-path')`            |

---

## ✅ Summary

| Method               | Scope               | Usage                                     |
|----------------------|----------------------|--------------------------------------------|
| `error.tsx`         | Route segment        | Catches render errors in that route       |
| `app/error.tsx`     | Global               | Catches all uncaught errors               |
| `notFound()`        | Server components    | Manually trigger 404 page                 |
| `ErrorBoundary`     | Client components    | Catches UI errors only in client parts    |
| `try/catch`         | API / server logic   | Handle and format expected errors         |
| Custom 404/500      | Pages Router         | Fallback UI for pages (hybrid apps)       |

---

## 💡 What Are Parallel Routes?

**Deep into Parallel Routes in Next.js 15:**. This is a **powerful advanced feature** in the **App Router** that helps us **render multiple pages or sections in parallel**—within the same layout—without affecting each other.

Parallel Routes allow us to **display multiple route segments** in the **same layout at the same time**, where **each segment is independent**, like:

- A sidebar and a main content area
- Multiple tabs rendered simultaneously
- Dashboards with multiple panels

---

## 📁 Folder Structure and Concept

In Next.js 15, **named slots** using the `@` symbol are used for **parallel routing**.

### Example folder structure:
```bash
app/
├── layout.tsx
├── @sidebar/
│   └── page.tsx
├── @main/
│   └── page.tsx
```

> Note: `@sidebar` and `@main` are **slot names**. They do **not** define the route, but instead define what content goes into that slot.

---

## 🧠 How It Works

In the layout file (`layout.tsx`), we can accept **named slots** as props:

```tsx
// app/layout.tsx
export default function RootLayout({
  children,
  sidebar,
  main,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  main: React.ReactNode;
}) {
  return (
    <div className="flex">
      <aside className="w-1/4 p-4 border-r">{sidebar}</aside>
      <main className="w-3/4 p-4">{main}</main>
    </div>
  );
}
```

- `sidebar`: will get content from the `@sidebar` route.
- `main`: will get content from the `@main` route.

So, both routes can be rendered **in parallel** under the same layout.

---

## 🧭 How to Navigate Between Parallel Routes

You define a **URL structure like this**:

```
/dashboard?parallelRoute=main
```

But usually, it’s used with **`segment config` and navigation links**, like:

```tsx
<Link href="/dashboard" scroll={false}>
  Dashboard Home
</Link>
```

And behind the scenes, Next.js **renders both @sidebar and @main** in their slots, based on the file structure.

---

## 🧪 Use Case: Dashboard with Tabs

### Folder structure:
```bash
app/
├── dashboard/
│   ├── layout.tsx
│   ├── @overview/
│   │   └── page.tsx
│   ├── @settings/
│   │   └── page.tsx
```

### layout.tsx
```tsx
// app/dashboard/layout.tsx
export default function DashboardLayout({
  overview,
  settings,
}: {
  overview: React.ReactNode;
  settings: React.ReactNode;
}) {
  return (
    <div>
      <nav>
        <Link href="/dashboard">Overview</Link>
        <Link href="/dashboard/settings">Settings</Link>
      </nav>
      <div className="grid grid-cols-2">
        <section>{overview}</section>
        <section>{settings}</section>
      </div>
    </div>
  );
}
```

---

## 🔁 Shared Layouts and Lazy Rendering

Parallel routes help us:

- Reuse layout while keeping each section isolated
- Avoid unmounting components during navigation
- Improve performance by **lazy loading segments independently**

---

## ⚙️ Bonus: Default and Error UI for Parallel Routes

### 🟡 Default UI (`default.tsx`)
If a parallel route is **not loaded**, Next.js will look for:

```bash
app/
├── @main/
│   └── default.tsx
```

This acts like a fallback or placeholder UI until the actual page is rendered.

---

### 🔴 Error Handling

Each slot can have its own:

- `error.tsx`
- `loading.tsx`
- `not-found.tsx`

So if just the sidebar crashes, only it is replaced with its `error.tsx` component—**the rest of the layout stays intact!**

---

## ✅ Benefits of Parallel Routes

| Feature | Benefit |
|--------|---------|
| Named slots | Organize layout clearly |
| Independent rendering | Better performance, less flicker |
| Fallback UIs | Handle partial loading gracefully |
| Error isolation | One section error doesn't crash the whole page |
| Smooth UX | Useful for dashboards, split screens, modals, tabs |

---

## 💬 Summary

- **Parallel Routes = multiple independent route trees rendered inside named slots (`@name`) in the same layout.**
- Perfect for **dashboards, sidebars, tabbed interfaces, modals**, etc.
- Easy to scale, clean layout-based architecture.
- Use `default.tsx`, `loading.tsx`, and `error.tsx` for graceful UX in each segment.
---

## 🧠 What Are Unmatched Routes in Next.js 15?
 **Unmatched Routes** in **Next.js 15**—a lesser-known but **super powerful feature** when working with **Parallel Routes**. It gives us more control when a specific **slot does not have a matched route**.

**Unmatched routes** let us **detect and handle the case when no route is matched** for a given **named slot** (used in [parallel routing](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)).

Think of it like:
- We defined a named slot (e.g., `@modal`)
- But the current route **does not match anything inside** that slot
- So we can **render a fallback UI**, show a default message, or redirect

---

## 🧭 When Do Unmatched Routes Occur?

In layouts with **parallel routes** like this:

```
app/
  └── layout.tsx
  └── @main/
       └── page.tsx
  └── @sidebar/
       └── page.tsx
```

If the current route matches `@main`, but **nothing is matched in `@sidebar`**, then the route is **unmatched for `@sidebar`**.

This is where **`not-found.tsx` or `default.tsx`** (for that slot) kicks in.

---

## ✅ Real Use Case

Let’s say we have:

```
app/
  └── dashboard/
       └── layout.tsx
       └── @notifications/
            └── page.tsx
            └── not-found.tsx
```

And we try to visit:  
```
/dashboard
```

If there’s no matching route for `@notifications`, Next.js checks:
1. Is there a `page.tsx` inside `@notifications`? ✅
2. Is the URL trying to render `@notifications`, but no match is found? ✅
3. → Then it will render `not-found.tsx` in that slot

---

## 📁 Folder Setup Example

```
app/
  └── layout.tsx
  └── @main/
       └── page.tsx
  └── @modal/
       └── not-found.tsx
```

### layout.tsx:
```tsx
export default function RootLayout({ main, modal }: { main: React.ReactNode; modal: React.ReactNode }) {
  return (
    <div>
      <div>{main}</div>
      <div>{modal}</div>
    </div>
  );
}
```

### not-found.tsx (for @modal):
```tsx
export default function ModalNotFound() {
  return <div>No modal route matched.</div>;
}
```

So if the URL is: `/home`, and there’s nothing matched under `@modal`, then `ModalNotFound` is rendered in the `modal` slot.

---

## 🔥 Combine With `default.tsx`

You can optionally define a `default.tsx` too for graceful fallback:

```tsx
// app/@modal/default.tsx
export default function ModalDefault() {
  return <p>No active modal</p>;
}
```

This will be shown **only when there’s no match and no `not-found.tsx`**.

---

## 🧩 Summary: Unmatched Routes in a Nutshell

| Concept            | Explanation |
|-------------------|-------------|
| 🔍 **What is it?** | A route slot that **didn't match any route** |
| 🧠 **Used In?**    | **Parallel Routes** using `@slotName` |
| 📦 **Handled By**  | `not-found.tsx` or `default.tsx` inside that slot |
| 🔄 **Fallback**    | Useful to show default UIs or errors |
| ✅ **Benefit**     | Prevent blank slots, show UI when something is missing |

---

### 🚦 What are Intercepting Routes in Next.js?

Intercepting routes allow us to **load a different route in a specific part of the page**—without replacing the whole route view. Let's break down **intercepting routes in Next.js**—a feature introduced in **Next.js 13+** with the **App Router**. It’s super useful when we want to show something like a **modal** or **drawer** on top of an existing page without navigating away from it.

👉 Think:  
We're on `/products` and click a product to see `/products/1`. Instead of navigating fully to `/products/1`, we want a **modal** to open with product details—still on `/products`.

---

### ✅ Use Case Example

Let’s say we have a list of users at `/users`, and when we click on one, we want to show `/users/123` as a **modal**.

### Without Interception:
- User clicks → navigates to `/users/123`
- Whole page reloads and changes.

### With Interception:
- User clicks → modal shows on `/users`, but content from `/users/123` is loaded inside it.

---

### 📁 Folder Structure for Intercepting

Suppose you're on route `/users`, and want to intercept `/users/[id]`.

```bash
app/
├── users/
│   ├── page.tsx                 # /users
│   ├── [id]/
│   │   └── page.tsx             # /users/123 (full page)
│   ├── (modals)/               # Special folder for intercept
│   │   └── users/
│   │       └── [id]/
│   │           └── page.tsx     # Intercepted modal content
```

### 🪄 How it Works:
- The route `(modals)/users/[id]/page.tsx` **intercepts** `/users/[id]` when we’re **already on `/users`**.
- Instead of full navigation, the intercepted page can show in a modal component in `/users/page.tsx`.

---

### 💡 Key Concept

📌 `(modals)` is just a **parallel route segment**—you can name it anything like `(intercept)` or `(drawer)`—it’s conventionally wrapped in `()`.

You then **render** the intercepted route with the `Modal` logic inside `/users/page.tsx`.

---

### ⚙️ Code Example

**`/users/page.tsx`**
```tsx
import { useRouter } from 'next/navigation'
import Modal from '@/components/Modal'
import UserDetails from './(modals)/users/[id]/page'

export default function UsersPage() {
  const router = useRouter()

  const handleClick = (id: string) => {
    router.push(`/users/${id}`)
  }

  return (
    <>
      <div>
        <h1>All Users</h1>
        <button onClick={() => handleClick('123')}>View User 123</button>
      </div>

      {/* Show modal if intercepted */}
      {/* You can conditionally show based on route or state */}
      <Modal>
        <UserDetails />
      </Modal>
    </>
  )
}
```

---

### ✨ Summary

| Feature               | Purpose                                               |
|-----------------------|-------------------------------------------------------|
| Intercepting Route    | Load route content (like modal) **without full nav**  |
| Parallel Routes       | Needed for intercepting; wrapped in `()`              |
| Practical Use         | Modals, drawers, side-panels, etc.                    |

---

## 🌐 What Are Parallel Intercepting Routes in Next.js 15?

### In short:
> **Parallel Intercepting Routes** let us **show different routes side-by-side** in **specific UI areas** (like modals, drawers, or side panels) *without losing the original route context*.
Let’s dive into **parallel intercepting routes** in **Next.js 15**, especially as it builds on the App Router architecture that started with v13 and is now more powerful and flexible.

---

## 🔍 Real-World Analogy

Imagine a dashboard where:
- The **main content** shows the user's dashboard (`/dashboard`)
- A **side panel** opens to show user settings (`/settings`) *while staying on* `/dashboard`

✅ We want:
- `/dashboard` to remain visible
- `/settings` to load in a side panel
- Browser URL to reflect `/settings`, but without full navigation

This is what **parallel routes + intercepting** enable.

---

## 🧠 Core Concepts

| Concept                | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| **Parallel Routes**    | Multiple UI areas (slots) that render independently                         |
| **Intercepting Routes**| Route loaded into a slot *instead* of full navigation                       |
| **Named Slots**        | You define slots with keys like `@modal`, `@drawer`, etc.                   |
| **(group)** folders     | Group routes without affecting URL structure                               |

---

## 🛠️ Folder Structure Example

Let’s build this example:
- Main route: `/dashboard`
- Intercepted side panel: `/settings`
- Show `/settings` in a `@panel` slot while keeping `/dashboard` visible

```bash
app/
├── layout.tsx                  # Defines all slots (@main, @panel)
├── page.tsx                    # Default home route
├── dashboard/
│   ├── page.tsx                # /dashboard
├── settings/
│   └── page.tsx                # /settings (full route if direct nav)
├── (panel)/
│   └── settings/
│       └── page.tsx            # Intercepted view for @panel
```

---

## 🧩 `layout.tsx` with Parallel Slots

```tsx
export default function RootLayout({ children, panel }: {
  children: React.ReactNode
  panel: React.ReactNode
}) {
  return (
    <div className="flex">
      <main className="flex-1">
        {children} {/* Default content */}
      </main>
      <aside className="w-96 border-l">
        {panel} {/* Intercepted content */}
      </aside>
    </div>
  )
}
```

We’ve created two **parallel routes**:
- `@main` → shows `children`
- `@panel` → shows `panel` (intercepted)

> Behind the scenes, Next.js maps these using file conventions like `(panel)` folders.

---

## 🔄 How Interception Works

- When we navigate from `/dashboard` to `/settings`, if the **current route has a `@panel` slot** defined, Next.js **renders `/settings` into the slot**.
- If we go directly to `/settings`, it loads as a full page (like normal).

---

## ✅ Benefits

- ✨ Seamless modals/drawers without full page reloads
- 🔄 Preserves scroll, state, context
- 🔗 Shareable URLs (since `/settings` is real)
- 🧱 Clean architecture via named slots

---

## 🧪 Optional Tip: Named Slots via Route Grouping

To declare a specific route to a slot, use the `route.js` config in the folder:

```js
// app/(panel)/settings/route.js
export const route = {
  slot: 'panel'
}
```

This makes it explicit that this route should be loaded into the `@panel` slot.

---

## 🎯 Summary

| Feature                   | Use                                                                 |
|---------------------------|----------------------------------------------------------------------|
| `layout.tsx` with slots   | Define multiple UI zones like `main`, `modal`, `panel`, etc.         |
| `(group)` folders         | Organize routes without URL impact                                   |
| Intercepting routes       | Load new routes *into a slot* instead of full navigation             |
| Great for                 | Modals, side drawers, detail previews, split screens                 |

---

In **Next.js 15**, **Route Handlers** are how we define **custom backend logic** (like APIs) *within the App Router*. They allow us to handle HTTP requests (GET, POST, PUT, DELETE, etc.) directly inside our app directory, similar to traditional API routes but **fully aligned with the App Router’s conventions**.

---

## 🧩 What are Route Handlers?

They are special files (typically named `route.ts` or `route.js`) placed **inside a specific folder** (usually under `/app/api/...`) that export functions corresponding to HTTP methods — like `GET`, `POST`, etc.

> ✅ **Route Handlers replace `pages/api` from the old Pages Router.**

---

## 🗂 Folder Structure

```
app/
└── api/
    └── hello/
        └── route.ts  ← Route Handler
```

This defines an API endpoint at:

```
/api/hello
```

---

## 🔧 Example: Simple GET Handler

**`app/api/hello/route.ts`**
```ts
export async function GET() {
  return new Response("Hello from API Route!");
}
```

📌 Now hitting `http://localhost:3000/api/hello` with a GET request will return:  
```
Hello from API Route!
```

---

## 🔧 Example: Handling Different Methods (GET + POST)

```ts
export async function GET(request: Request) {
  return new Response("GET Request Success");
}

export async function POST(request: Request) {
  const data = await request.json();
  return new Response(`Received name: ${data.name}`);
}
```

### To test:
```bash
curl -X POST http://localhost:3000/api/hello -H "Content-Type: application/json" -d '{"name":"Skyy"}'
```

---

## ⚙️ Supported HTTP Methods

You can export functions like:

- `GET`
- `POST`
- `PUT`
- `DELETE`
- `PATCH`
- `HEAD`
- `OPTIONS`

Example:
```ts
export async function DELETE() {
  return new Response("Deleted something!");
}
```

---

## 📥 Accessing Request Data

You can use the `Request` object to access:

### ✅ Query params (in `GET`)
```ts
export async function GET(req: Request) {
  const url = new URL(req.url);
  const search = url.searchParams.get("name");
  return new Response(`Hi ${search}`);
}
```

### ✅ JSON body (in `POST`)
```ts
export async function POST(req: Request) {
  const body = await req.json();
  return new Response(`Received ${body.name}`);
}
```

---

## ✅ Dynamic Route Handlers

You can use dynamic segments like this:

### `/app/api/user/[id]/route.ts`

```ts
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  return new Response(`User ID: ${params.id}`);
}
```

> Now accessing `/api/user/123` will return:  
> `"User ID: 123"`

---

## 🧠 Middleware & Edge Support

- Route handlers **can run on Edge or Node.js** (your choice).
- To run on Edge, use:
  ```ts
  export const runtime = "edge";
  ```

---

## 📁 Common Use Cases

- Custom API routes (fetching/updating DB)
- Webhooks
- Auth endpoints
- File uploads
- Payment handlers (Stripe/Razorpay)
- Server Actions support (in the future)

---

## 🧪 Bonus: Returning JSON

```ts
export async function GET() {
  const data = { message: "Hello JSON" };
  return Response.json(data); // Shortcut for JSON responses
}
```

---

## 📌 Summary

| Feature                  | Supported ✅ |
|--------------------------|--------------|
| GET/POST/PUT/DELETE      | ✅           |
| JSON body parsing        | ✅           |
| Query/Search Params      | ✅           |
| Dynamic Params (`[id]`)  | ✅           |
| Edge Runtime Option      | ✅           |
| Typed via TypeScript     | ✅           |

---

## 🍪 1. **Cookies in Route Handlers**

In **Next.js 15**, Route Handlers give us direct access to **cookies and caching controls**, which are super important for things like **authentication, personalization, performance,** and **session handling**.
Next.js provides **`cookies()`** utility from `next/headers` for **reading and setting cookies** on the server.

### 🔹 Importing:
```ts
import { cookies } from "next/headers";
```

### ✅ Reading a Cookie:
```ts
export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get("auth-token");

  return new Response(`Cookie value: ${token?.value ?? "not found"}`);
}
```

### ✅ Setting a Cookie:
```ts
export async function POST() {
  const cookieStore = cookies();

  cookieStore.set("auth-token", "12345", {
    httpOnly: true,
    path: "/",
    secure: true,
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });

  return new Response("Cookie set!");
}
```

### ✅ Deleting a Cookie:
```ts
export async function DELETE() {
  const cookieStore = cookies();
  cookieStore.delete("auth-token");

  return new Response("Cookie deleted!");
}
```

> ☝️ Cookies set with `httpOnly: true` can’t be accessed from JavaScript in the browser — great for securing tokens like JWTs.

---

## ⚠️ `cookies()` only works **inside Route Handlers**, Server Components, and Server Actions — not in Client Components.

---

## 📦 2. **Caching in Route Handlers**

Caching is used to control how responses are **stored and reused** by the browser or a CDN. In Route Handlers, we can manage caching behavior using **`Response` headers**.

---

### ✅ Setting Cache Headers Manually

```ts
export async function GET() {
  const data = { name: "Skyy", role: "Dev" };

  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600", // Cache for 1 hour
    },
  });
}
```

---

### 🔹 Common `Cache-Control` Options:

| Directive                | Meaning |
|--------------------------|---------|
| `no-store`               | Don’t store in cache at all |
| `no-cache`               | Must revalidate every time |
| `public`                 | Cacheable by any cache (CDN, browser) |
| `private`                | Only cache in user's browser |
| `max-age=seconds`        | Time in seconds before stale |

---

### 🔹 Example: Disable Caching (for dynamic/private data)
```ts
export async function GET() {
  return new Response("Private data", {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
```

---

## 🧠 Bonus: Dynamic vs Static Caching

In Next.js 15:

- **Static cache (default)** is used when response can be cached and reused.
- **Dynamic responses** (e.g., with cookies or user-specific data) are **opted out** of static cache.
- Use:
  ```ts
  export const dynamic = "force-dynamic";
  ```
  to force dynamic behavior even when no dynamic data is present.

Example:
```ts
export const dynamic = "force-dynamic"; // or "force-static"
```

---

## ✅ Summary

| Feature            | Method / Tool             | Notes |
|--------------------|---------------------------|-------|
| Read Cookie         | `cookies().get()`         | Server only |
| Set Cookie          | `cookies().set()`         | Secure, customizable |
| Delete Cookie       | `cookies().delete()`      | Easy removal |
| Cache Response      | `Response.headers`        | Fully customizable |
| Control dynamic/static | `export const dynamic` | Static or dynamic behavior |

---

## 🚪 What is Middleware in Next.js?

In **Next.js 15**, **Middleware** is a special function that runs **before a request is completed**, and **before rendering** a route. It allows us to **intercept requests**, perform logic, and optionally **redirect, rewrite, or modify responses**.

Think of it as a **gatekeeper** between the user and the page.

---

## 🧠 Why Use Middleware?

Middleware is perfect for:

- 🔐 Authentication & Authorization (e.g., redirect if not logged in)
- 🌐 Localization (e.g., detect browser language)
- 🚀 A/B testing or feature flags
- 🔄 Rewrites and redirects
- 🧪 Logging, analytics, etc.

---

## 📁 Where Do We Define Middleware?

In the **root of the `app/` or project directory**, we create:

```
/middleware.ts
```

or

```
/middleware.js
```

This file runs **for every request** unless we filter it.

---

## ⚙️ Basic Structure of Middleware

```ts
// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Perform something with the request

  return NextResponse.next(); // allow request
}
```

---

## 🔄 Common Operations

### ✅ 1. **Redirect**

```ts
export function middleware(request: NextRequest) {
  const isLoggedIn = false;

  if (!isLoggedIn && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
```

### ✅ 2. **Rewrite**

```ts
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/old") {
    return NextResponse.rewrite(new URL("/new", request.url));
  }

  return NextResponse.next();
}
```

### ✅ 3. **Set Headers**

```ts
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set("x-powered-by", "Skyy");
  return response;
}
```

---

## 🧪 Example: Auth Check for Private Routes

```ts
export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth-token")?.value;

  const isAuthRoute = request.nextUrl.pathname.startsWith("/dashboard");

  if (isAuthRoute && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
```

---

## 📍 Matching Routes with `matcher`

To restrict middleware only to specific routes, use `config.matcher`.

```ts
export const config = {
  matcher: ["/dashboard/:path*", "/profile", "/settings"],
};
```

> 📝 `:path*` means include all nested routes too.

---

## 📦 `NextRequest` and `NextResponse`

- **`NextRequest`** gives access to:
  - `request.nextUrl.pathname` → URL info
  - `request.cookies` → read cookies
  - `request.headers` → get headers

- **`NextResponse`** gives methods to:
  - `.redirect()`
  - `.rewrite()`
  - `.next()` (allow to continue)
  - `.headers.set()`

---

## 🔐 Example Use Cases

| Use Case                  | Middleware Logic Example |
|---------------------------|--------------------------|
| Protect dashboard         | Check cookie or session and redirect |
| Auto locale redirect      | Check `Accept-Language` and rewrite |
| Block bots or IPs         | Check IP/headers and return 403 |
| Beta route gating         | Check cookie/flag and redirect |
| Analytics logging         | Log request info before serving |

---

## 🚨 Limitations of Middleware

- ❌ Can’t access `use client` components
- ❌ Cannot render components
- ✅ Runs at **Edge** (very fast)
- ✅ Can only use Web APIs and Next APIs

---

## 🔚 Summary

| Feature           | Description |
|-------------------|-------------|
| Location          | `/middleware.ts` at project root |
| Execution         | Before the route is rendered |
| Key Tools         | `NextRequest`, `NextResponse` |
| Common Usage      | Auth, redirects, rewrites, headers |
| Matcher           | Filters what routes middleware applies to |

---

## BASIC CRUD
```js
// app/api/todos/[id]/route.ts
import { NextResponse } from "next/server";
import { todos } from "@/lib/data";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const todo = todos.find((t) => t.id === params.id);
  return todo
    ? NextResponse.json(todo)
    : NextResponse.json({ error: "Not found" }, { status: 404 });
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const { task, done } = await request.json();
  const index = todos.findIndex((t) => t.id === params.id);

  if (index === -1) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }

  todos[index] = { ...todos[index], task, done };
  return NextResponse.json(todos[index]);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const index = todos.findIndex((t) => t.id === params.id);
  if (index === -1) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  const deleted = todos.splice(index, 1)[0];
  return NextResponse.json(deleted);
}
```
---

## 🔍 What are Headers in Route Handlers?

Let’s explore **headers in Route Handlers** in **Next.js 15** in depth — how to **read**, **set**, and **use them** within `route.ts` files inside the `app/api` directory.

In Next.js 15 Route Handlers (App Router), **headers** can be used:

- To **read incoming** request metadata (e.g., auth tokens, content-type, etc.)
- To **set outgoing** custom response headers (e.g., caching, CORS, custom info)

---

## 📥 Reading Request Headers

In any `route.ts` handler, use the `Request` object’s `.headers` property.

### ✅ Example – Reading a custom or auth header

```ts
// app/api/headers-example/route.ts
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const authToken = request.headers.get("authorization");
  const userAgent = request.headers.get("user-agent");

  return NextResponse.json({
    message: "Headers received",
    authToken,
    userAgent,
  });
}
```

> ✅ Use this when you want to validate API keys, check user-agents, etc.

---

## 📤 Setting Response Headers

Use the `NextResponse` object’s `.headers.set()` method.

### ✅ Example – Set custom response headers

```ts
// app/api/set-headers/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const res = NextResponse.json({ message: "Response with custom headers" });

  res.headers.set("X-Custom-Header", "HelloFromNextJS15");
  res.headers.set("Cache-Control", "no-store");

  return res;
}
```

> You can use this for:
> - **Security** headers (CSP, CORS, etc.)
> - **Performance** tuning (Cache-Control)
> - **Metadata** (debugging, tracking)

---

## 💥 Full Example: Auth Check with Header

```ts
// app/api/secure/route.ts
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const token = request.headers.get("authorization");

  if (token !== "Bearer mysecrettoken123") {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  return NextResponse.json({ message: "Welcome, authorized user" });
}
```

---

## ⚠️ Case Sensitivity of Headers

- Headers are **case-insensitive**.
- Always prefer `get("authorization")`, not `"Authorization"`.

---

## 🧪 Bonus: Looping Through Headers

```ts
export async function GET(request: Request) {
  const headers = Object.fromEntries(request.headers.entries());
  return NextResponse.json({ allHeaders: headers });
}
```

---

## ✅ Summary Table

| Task                           | Code Snippet                                      |
|--------------------------------|---------------------------------------------------|
| **Read header**                | `request.headers.get("authorization")`            |
| **Set response header**        | `res.headers.set("X-My-Header", "Value")`         |
| **Multiple headers**           | Loop: `Object.fromEntries(request.headers.entries())` |
| **Security header**            | `res.headers.set("X-Frame-Options", "DENY")`      |
| **Cache-Control**              | `res.headers.set("Cache-Control", "no-store")`    |

---
Let’s break down the **different types of HTTP headers** — especially in the context of **Next.js 15** route handlers — and how they’re typically used.
---

## 🧠 What Are HTTP Headers?

HTTP headers are **key-value pairs** sent between the **client and server** to provide context about the request/response.

Headers are categorized into:

### ✅ 1. **Request Headers**
Sent **from the client** (browser or frontend) to the server.

| Header Name        | Purpose |
|--------------------|---------|
| `Authorization`    | Carries access tokens or API keys.  
| `Content-Type`     | Describes the format of the body (`application/json`, `multipart/form-data`, etc.)  
| `Accept`           | Tells the server what content types the client can handle (`application/json`, etc.)  
| `User-Agent`       | Identifies the client app/browser and OS.  
| `Cookie`           | Sends cookies to the server.  
| `Referer`          | Tells the server which page the request came from.  
| `Accept-Language`  | Preferred language of the client (`en`, `fr`, etc.)

---

### ✅ 2. **Response Headers**
Sent **by the server** to the client, alongside the body.

| Header Name        | Purpose |
|--------------------|---------|
| `Content-Type`     | Tells the browser how to interpret the response (`text/html`, `application/json`, etc.)  
| `Set-Cookie`       | Sends cookies to be stored in the browser.  
| `Cache-Control`    | Caching instructions for browsers/CDNs (`no-store`, `max-age=3600`, etc.)  
| `Location`         | Used in redirects.  
| `Access-Control-Allow-Origin` | For CORS. Specifies allowed origins.  
| `X-Custom-*`       | Custom headers for debugging or tracking.

---

### ✅ 3. **Entity Headers**  
Apply to the body/content of the request or response.

| Header Name     | Purpose |
|------------------|---------|
| `Content-Length` | Size of the body.  
| `Content-Encoding` | How content is encoded (e.g., gzip).  
| `ETag`           | Used for caching validation.  
| `Last-Modified`  | When the resource was last changed.

---

### ✅ 4. **Security Headers**
Added to protect the app and browser.

| Header Name                  | Purpose |
|------------------------------|---------|
| `X-Frame-Options`            | Prevent clickjacking (e.g., `DENY`, `SAMEORIGIN`)  
| `Strict-Transport-Security` | Enforce HTTPS (`max-age=...`)  
| `Content-Security-Policy`   | Restrict resources (images, scripts, etc.)  
| `X-XSS-Protection`          | Browser XSS protection  
| `Referrer-Policy`           | Controls `Referer` header behavior

---

### ✅ 5. **CORS Headers**
Control cross-origin requests.

| Header Name                      | Purpose |
|----------------------------------|---------|
| `Access-Control-Allow-Origin`    | Whitelisted origin(s)  
| `Access-Control-Allow-Methods`   | Allowed HTTP methods  
| `Access-Control-Allow-Headers`   | Allowed custom headers  
| `Access-Control-Allow-Credentials` | Allow cookies/credentials

---

## 🔧 How to Use These in Next.js 15

### Reading Request Headers

```ts
export async function GET(request: Request) {
  const lang = request.headers.get("accept-language");
  const auth = request.headers.get("authorization");
  return Response.json({ lang, auth });
}
```

### Setting Response Headers

```ts
import { NextResponse } from "next/server";

export async function GET() {
  const res = NextResponse.json({ status: "ok" });

  res.headers.set("Cache-Control", "no-store");
  res.headers.set("X-My-App", "Zumfass");
  res.headers.set("Content-Security-Policy", "default-src 'self'");

  return res;
}
```

---

## 🧪 Bonus: Viewing Headers in DevTools

In Chrome → Right-click → Inspect → Network tab → Select a request → **Headers tab**

---

## 📌 Summary Table

| Type            | Examples                           | Usage In Next.js       |
|------------------|------------------------------------|--------------------------|
| Request Headers  | `authorization`, `user-agent`      | `request.headers.get()` |
| Response Headers | `set-cookie`, `cache-control`      | `response.headers.set()`|
| Security         | `X-Frame-Options`, `CSP`           | Custom security headers |
| CORS             | `access-control-allow-origin`      | Set via middleware/handler|

---