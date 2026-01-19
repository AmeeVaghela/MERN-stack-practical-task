# React Redux E-Commerce Application

This project is a **React + Redux Toolkit based e-commerce application** developed as part of a **Full Stack Developer practical task**.  
The application demonstrates modern React best practices including authentication, global state management, API integration, and a clean scalable architecture.

---

## Features

- User Authentication (Login)
- JWT-based authentication using DummyJSON API
- Product listing from API
- Category-wise product filtering
- Pagination support
- Add to Cart functionality using Redux
- Live cart item count in Navbar
- Checkout page with total price calculation
- Global state management using Redux Toolkit
- Clean folder structure and reusable components

---

## Tech Stack

- **Frontend:** React (Vite)
- **State Management:** Redux Toolkit
- **Routing:** React Router DOM
- **API Requests:** Axios
- **Styling:** CSS
- **Authentication API:** DummyJSON

---

## Project Structure

src/
│── app/
│ └── store.js
│
│── features/
│ ├── auth/
│ │ └── authSlice.js
│ ├── products/
│ │ └── productSlice.js
│ └── cart/
│ └── cartSlice.js
│
│── components/
│ ├── Navbar.jsx
│ └── ProductCard.jsx
│
│── pages/
│ ├── Login.jsx
│ ├── Home.jsx
│ └── Checkout.jsx
│
│── styles/
│ └── main.css
│
│── App.jsx
│── main.jsx


---

## Authentication

Authentication is implemented using the **DummyJSON Authentication API**.

### Login Endpoint
POST https://dummyjson.com/auth/login

### Sample Login Credentials
Username: emilys
Password: emilyspass
