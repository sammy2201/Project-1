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
          npm install -g typescript

### Installation

     1️⃣ Navigate to the backend directory:
          `cd Backend`
     2️⃣ Install dependencies:
          `npm install`
     3️⃣ Start the backend server:
          `npm run start`
     4️⃣ Server runs at: http://localhost:3000

## API Endpoints

     POST	/super-heroes/add-super-hero	-->Add a new superhero
     GET	/super-heroes/get-super-heroes   -->Get superheroes sorted by humility score

## 2️⃣ Frontend (Next.js + Tailwind CSS)

### Installation

     1️⃣ Navigate to the frontend directory:
          `cd Frontend`
     2️⃣ Install dependencies:
          `npm install`
     3️⃣ Start the development server:
          `npm run dev`
     4️⃣ Open the app in the browser: http://localhost:3001
