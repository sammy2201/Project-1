# Superhero App

A full-stack application to manage superheroes, built with **Next.js (Frontend)** and **Express.js, Node.js (Backend)**.

---

## Features

✅ Add superheroes with **name, superpower, and humility score**  
✅ Retrieve and display superheroes sorted by humility score  
✅ Backend API with validation and error handling  
✅ Styled with **Tailwind CSS** for a modern UI

---

## Project Structure

/superhero-app  
│── /Frontend  
│── /Backend  
│── README.md

## 1️⃣ Backend (Express.js + TypeScript)

### Prerequisites

Install Node.js (v18+ recommended)
Install TypeScript globally:

```bash
npm install -g typescript
```

### Installation

1️⃣ Navigate to the backend directory:
npm install -g typescript

```bash
cd Backend
```

2️⃣ Install dependencies:

```bash
npm install
```

3️⃣ Start the backend server:

```bash
npm run start
```

4️⃣ Server runs at: http://localhost:3000

## API Endpoints

     POST	/super-heroes/add-super-hero	-->Add a new superhero
     GET	/super-heroes/get-super-heroes   -->Get superheroes sorted by humility score

## 2️⃣ Frontend (Next.js + Tailwind CSS)

### Installation

1️⃣ Navigate to the frontend directory:

```bash
cd Frontend
```

2️⃣ Install dependencies:

```bash
npm install
```

3️⃣ Start the development server:

```bash
npm run dev
```

4️⃣ Open the app in the browser: http://localhost:3001

## 3️⃣ Tests

### Setup

Before running tests, ensure that the backend environment is properly set up and that you are in the Backend folder.

### Running Tests

To run the tests for the backend, you can use the following command:

```bash
npm run test
```

## Team Player Attitude:

I believe in working together and sharing ideas to improve the final product. If I were working with a teammate on this task, I would make sure we communicate clearly and divide the work based on our strengths. For example, one person could focus on building the API, while the other could focus on the frontend. We would both review each other’s code to make sure everything works smoothly and keep improving the project together.

## Eagerness to Learn:

If I had more time, I would like to explore using a real database (like MongoDB or PostgreSQL) instead of just an in-memory array. I would also improve error handling and validation to make the API even more reliable. I would want to learn more about authentication and how to secure the API, which would be useful if this project were to grow in the future.

## Note

1️⃣ Please run Backend first and then Frontend
