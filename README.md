# **Nature's Apothecary**

Nature's Apothecary is a modern full-stack web application built with React, Vite, and serverless backend APIs on Vercel. It allows users to manage their home remedies, poisons, and boosters with a clean, responsive interface and persistent storage via MongoDB Atlas.

---
## **Table of Contents**

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Deployment](#deployment)
- [License](#license)
---

## **Features**
- Create, update, delete, and view remedies, poisons, and boosters.
- Serverless API routes running on Vercel.
- Modern React frontend with state management using Zustand.
- Responsive design powered by Tailwind CSS.
- Environment-based configuration for development and production.

---

## **Technologies Used**

- **Frontend:** React 18, Vite, Zustand, Tailwind CSS, React Router DOM, React Toastify
- **Backend:** Node.js serverless API routes on Vercel, MongoDB with Mongoose ODM
- **Deployment:** Vercel for frontend and backend hosting
- **Others:** ESLint, PostCSS, Autoprefixer, CORS middleware

---

## **Installation & Setup**

### Prerequisites

- Node.js v20.x or later
- npm v9.x or later
- MongoDB Atlas cluster URI
- Vercel CLI (optional for local serverless API emulation and deployments)

---

### Backend Setup

1. Navigate to the backend folder:
```bash
cd backend
```
2. Install dependencies:
```bash
npm install
```
3. Create a `.env` file in the **root directory** (one level above backend):
```bash
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
```
4. Start local backend serverless environment with:
```bash
vercel dev
```
This runs your APIs locally at [http://localhost:3000].
---

### Frontend Setup

1. Navigate to the frontend folder:
```bash
cd frontend
```
2. Install dependencies:
```bash
npm install
```
3. Create `.env.development` & `.env.production` with backend API URL:
```bash
VITE_API_URL=http://localhost:3000
```
```bash
VITE_API_URL=your-backend-deployed-url
```
4. Start the frontend development server:
```bash
npm run dev
```
5. Access the app at [http://localhost:5173].

---

## Environment Variables

| Variable       | Description                            |
|----------------|------------------------------------|
| `MONGO_URI`    | MongoDB Atlas connection string for backend DB |
| `PORT`         | Port in case of malfunction                    |
| `VITE_API_URL` | Base URL for backend API (used in frontend)     |

Set these variables in your `.env` files locally and securely in Vercel project dashboard for production.

---

## Key npm Packages

| Package              | Role                                         |
|----------------------|----------------------------------------------|
| react, react-dom     | Core UI Library                              |
| vite                 | Build tool & dev server                       |
| zustand              | React state management                        |
| tailwindcss          | Utility-first CSS styling                      |
| react-router-dom     | Client-side routing                           |
| react-toastify       | Toast notifications UI                        |
| mongoose             | MongoDB object modeling                       |
| dotenv               | Environment variable loader                    |
| cors                 | Enables CORS in backend API                   |
| eslint               | Code linting & formatting                     |

---

## **Deployment**

- Use Vercel CLI for local development and deployment with:

```
vercel dev
vercel deploy
```
- Backend APIs run as serverless functions under `/api` in backend.
- Frontend is deployed as a static site optimized by Vite.
- Set environment variables securely in Vercel dashboard.

---

## **License**

This project is licensed under the **MIT License**.

---

Thank you for checking out Nature's Apothecary!  
Feel free to contribute or raise issues.

---