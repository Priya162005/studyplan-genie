
# **StudyPlan Genie: AI-Powered Learning Management Platform**

**StudyPlan Genie** is a next-generation AI-driven learning assistant that transforms personal education into structured, actionable, and adaptive study journeys. By intelligently mapping learning goals to time-bound plans, it empowers students to maximize efficiency, overcome procrastination, and optimize cognitive retention.


## 🌟 Key Features

* **Adaptive AI Scheduling:** Personalized study blocks dynamically generated based on subject difficulty, deadlines, and user learning patterns.
* **Type-Safe & Scalable Architecture:** Built with TypeScript for robust type-safety and maintainable code.
* **Atomic Design UI:** Modular components using Radix UI & Tailwind CSS, ensuring scalability and accessibility.
* **Data Validation & Integrity:** Zod schema validation with Drizzle ORM for efficient and reliable database operations.
* **Performance Optimization:** Leveraging React 18 + Vite for fast Hot Module Replacement (HMR) and TanStack Query for reactive frontend.
* **Linting & Code Quality:** ESLint rules integrated; supports TypeScript for type-aware linting and maintainable code.


## 🏗️ Technical Architecture

| Layer          | Technology Stack                                  |
| :------------- | :------------------------------------------------ |
| **Frontend**   | React 18, Vite, Framer Motion, TanStack Query     |
| **Backend**    | Node.js, Express.js                               |
| **Database**   | PostgreSQL (Relational)                           |
| **ORM**        | Drizzle ORM                                       |
| **Validation** | Zod (Schema Validation)                           |
| **Styling/UI** | Tailwind CSS, Shadcn/UI (Radix Primitives)        |
| **Linting**    | ESLint, TypeScript (type-aware rules recommended) |


## 📂 Project Structure

* **client/**: React + Vite frontend application

  * **src/components/** – Reusable modular UI components
  * **src/hooks/** – Custom React hooks for data fetching
  * **src/lib/** – Utility functions & API clients
  * **src/pages/** – Views and routing components
* **server/**: Express backend & AI logic

  * **routes.ts** – API endpoints
  * **index.ts** – Server entry point
* **db/**: Database layer

  * **schema.ts** – PostgreSQL schema definitions
* **package.json**: Project dependencies & scripts


## ⚙️ Development Workflow

1. **Environment Setup**
   Clone the repository and navigate to the project folder:
   `git clone https://github.com/yourusername/studyplan-genie.git`
   `cd studyplan-genie`

2. **Install Dependencies**
   `npm install`

3. **React + Vite Development**

   * Supports **Hot Module Replacement (HMR)** for fast frontend updates
   * ESLint integrated for maintaining code quality
   * TypeScript recommended for type-aware linting

4. **Database Configuration & Migration**
   Set your `DATABASE_URL` in `.env` file, then run:
   `npm run db:push`

5. **Run Locally**
   `npm run dev` – starts frontend and backend concurrently.


## 🚀 Future Roadmap

* **Calendar Integration:** Google Calendar & Outlook sync for study schedules.
* **Gamification:** Reward points, badges, and leaderboards for engagement.
* **Collaborative Learning:** Group study rooms and peer mentorship features.
* **Mobile-Friendly Version:** Responsive and cross-platform application support.


## 📄 License

Released under the **MIT License**.
Designed and Developed by **Preethi**.

## 🌐 Live Demo

🔗 **Deployed Link:**  
https://priya162005.github.io/studyplan-genie/

