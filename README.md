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

Before running tests, ensure that the backend environment is properly set up:

### Running Tests
To run the tests for the backend, you can use the following command:
```bash
npm run test
```

## Note
1️⃣ Please run Backend first and then Frontend
