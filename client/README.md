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

```text
User → Clerk Auth → Webhooks → Inngest → Backend → Database (Prisma + PostgreSQL)
