# **Natural Remedies**

A full-stack web application that allows users to manage and view natural remedies, including their ingredients, recipes, and other details. Built using the MERN stack (MongoDB, Express, React, Node.js) with Zustand for state management and Vite for the frontend.

---

## **Table of Contents**

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

---

## **Features**

- Add, view, update, and delete natural remedies.
- Manage remedy details like ingredients, recipes, cautions, and expiry.
- Dynamically add and remove steps for recipes and cautions.
- Responsive UI with modals for displaying remedy details.
- RESTful API for backend with MongoDB for data storage.
- Production-ready build with Node.js serving static frontend files.

---

## **Tech Stack**

- **Frontend**: React, Zustand, Bootstrap, Vite
- **Backend**: Node.js, Express.js, MongoDB
- **Build Tools**: Vite, Nodemon, Concurrently
- **State Management**: Zustand
- **Environment Management**: dotenv

---

## **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/natural-remedies.git
   cd natural-remedies
   ```
2. Install dependencies for both frontend and backend:
   ```bash
   npm install
   npm install --prefix frontend
   ```
3. Create a .env file in the root directory with the following variables:
   ```bash
   DATABASE_URI=your_mongo_db_connection_string
   ```

## **Usage**
### **Development**
Start both the backend and frontend in development mode:
```bash
npm run dev
```

- Backend runs on http://localhost:5000
- Frontend runs on http://localhost:5173

### **Production**
1. Build the frontend
 ```bash
 npm run build
 ```
2. Start the production server:
 ```bash
 npm start
 ```
3. Access the app at http://localhost:5000 .

## **Scripts**
- npm run dev : Runs both backend and frontend in development mode.
- npm run build: Builds the frontend for production
- npm start: Runs the production server.

## **Contributing**
1. Fork the repository.
2. Create a feature branch:
 ```bash
 git checkout -b feature/your-feature-name
 ```
3. Commit your changes:
 ```bash
 git commit -m "Add your changes here"
 ```

4. Push the branch:
 ```bash
 git push origin feature/your-feature-name
 ```

5. Open a pull request.

## **License**

This project is licensed under the **MIT License**.
