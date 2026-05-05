<div align="center">

# 🚀 Project Management System

A full-stack, scalable project management platform built using modern web technologies.  
Designed to manage workspaces, projects, tasks, and team collaboration efficiently.

</div>

---

## 📖 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#-tech-stack)
- [⚙️ Architecture](#️-architecture)
- [🚀 Getting Started](#-getting-started)
- [🌐 Deployment](#-deployment)
- [📌 Highlights](#-highlights)
- [📜 License](#-license)

---

## ✨ Features

- 🔹 **Workspace Management**
  - Create multiple workspaces
  - Role-based access (Admin / Member)
  - Manage team members

- 🔹 **Authentication & User Sync**
  - Secure authentication using Clerk
  - Automatic user sync with database
  - Handles user create/update/delete events

- 🔹 **Project & Task Management**
  - Create and manage projects
  - Assign tasks to users
  - Track project progress

- 🔹 **Event-Driven Backend**
  - Background processing using Inngest
  - Clerk webhook integration
  - Reliable async workflows

- 🔹 **Database Management**
  - Prisma ORM for efficient queries
  - PostgreSQL (Neon DB)

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Redux Toolkit
- Tailwind CSS

### Backend
- Node.js
- Express.js
- Prisma ORM

### Database
- PostgreSQL (Neon)

### Authentication
- Clerk

### Background Jobs
- Inngest

### Deployment
- Railway (Backend)
- Vercel (Frontend)

---

## ⚙️ Architecture

The system follows an **event-driven architecture** powered by Clerk, Inngest, and Prisma.

**Flow:**

* User interacts with the frontend
* Clerk handles authentication
* Clerk triggers webhooks
* Inngest processes background jobs
* Backend updates the database (PostgreSQL via Prisma)
* Frontend reflects real-time updates

```text
User → Clerk Auth → Webhooks → Inngest → Backend → Database
```

---

## 🚀 Getting Started

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/project-management.git
cd project-management
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Setup Environment Variables

Create a `.env` file in the root:

```env
DATABASE_URL=your_database_url
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
INNGEST_EVENT_KEY=your_inngest_event_key
```

---

### 4️⃣ Run Backend Server

```bash
npm run server
```

---

### 5️⃣ Run Frontend

```bash
cd client
npm run dev
```

---

### 6️⃣ Open in Browser

```
http://localhost:5173
```

---

## 🌐 Deployment

* **Backend:** Railway
* **Frontend:** Vercel
* **Inngest Endpoint:** `/api/inngest`

---

## 📌 Highlights

* ⚡ Event-driven architecture using Inngest
* 🔐 Secure authentication with Clerk
* 📦 Scalable backend with Prisma ORM
* 🚀 Full-stack production-ready deployment
* 🔄 Real-time data synchronization

---

## 🤝 Contributing

Contributions are welcome!

* Fork the repository
* Create a new branch
* Submit a pull request

---

⭐ If you found this project helpful, consider giving it a star!
