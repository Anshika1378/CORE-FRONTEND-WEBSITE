# 👨‍💼 Employee Management Dashboard

A fully responsive Employee Management Dashboard built using **ReactJS**, **JavaScript**, **Tailwind CSS**, **React Icons**, and **Axios**.  
The project fetches employee data from a fake API and includes search functionality, pagination, and responsive UI design.

---

## 🚀 Tech Stack

- ⚛ ReactJS (Functional Components + Hooks)
- 🟡 JavaScript (ES6+)
- 🎨 Tailwind CSS (Responsive UI Styling)
- 🎯 React Icons
- 🌐 Axios (API Fetching)
- 📦 JSONPlaceholder Fake API
- 🖼 Pravatar (Profile Images)

---

## 📌 Features

- 🔍 Live Search (by Employee Name or ID)
- 📄 Client-side Pagination
- 📡 API Data Fetching using Axios
- 📱 Fully Responsive Design
- 🎨 Modern Dashboard Layout
- 🖼 Dynamic Profile Images
- ⬅ ➡ Page Navigation Controls
- 📦 Fake Expanded Data (100 employees)

---

## 📡 API Used

This project uses the free fake API:
https://jsonplaceholder.typicode.com/users


After fetching 10 users, the data is expanded to 100 employees for pagination demonstration.

---

## 🖥 Installation & Setup

Follow these steps to run this project locally:

### 1️⃣ Clone the repository
git clone https://github.com/Anshika1378/CORE-FRONTEND-WEBSITE.git


### 2️⃣ Navigate to project folder
npm install


### 4️⃣ Install required packages
npm install axios react-icons


### 5️⃣ Start development server
npm start
npm run dev


App will run on:http://localhost:3000 or http://localhost:5173/


---

## 📂 Project Structure
src/
├── components/
│ ├── EmployeeGrid.js
│
├── App.js
├── index.js
└── index.css


---

## 🔍 Search Functionality

Search is implemented using React state:

- Input field updates `search` state.
- Employees are filtered using:
  
```js
emp.name.toLowerCase().includes(search.toLowerCase())
Pagination is applied on filtered data.

📄 Pagination Logic

20 items per page

Dynamic total pages calculation

Previous / Next navigation

Page reset when search changes

🎨 Styling

All styling is done using Tailwind CSS utility classes.

Responsive breakpoints:

sm: Small screens

md: Medium screens

lg: Large screens

🖼 Fake Image Generator

Profile images are generated using:

https://i.pravatar.cc/150?img=1

🏗 Core Concepts Used

useState

useEffect

API Integration

Filtering Data

Client-side Pagination

Responsive Flex & Grid Layout

Component Reusability

👨‍💻 Author
Anshika Agarwal

