# 🤖 RoboKalm - Examination Module

**RoboKalm** is a child-friendly, AI-powered learning platform designed to make examinations and learning engaging and fun for students.  

This project includes a modern, responsive dashboard, secure authentication, and a dynamic quiz-based examination system.

---

## 🧰 Tech Stack

### Frontend
- **React.js (Vite)** – Fast and modern UI framework  
- **Tailwind CSS** – Clean and responsive styling  
- **Axios** – API communication  
- **React Router** – Navigation between pages  

### Backend
- **Node.js & Express** – Server-side architecture  
- **MongoDB** – NoSQL database  
- **Mongoose** – MongoDB object modeling  
- **JWT (JSON Web Tokens)** – Secure authentication  

---

## ⚙️ Installation & Setup

### 🔹 Prerequisites
- Node.js (v16 or higher)
- MongoDB (running locally)

---

### 🔹 Backend Setup

```bash
cd backend
npm init -y
npm install express mongoose dotenv cors jsonwebtoken bcryptjs
```

### 🔹 Frontend Setup

``` bash
  npm create vite@latest frontend -- --template react
  cd frontend
  npm install axios react-router-dom
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
```

### .env file in backend

PORT=5000
MONGO_URI=mongodb://localhost:27017/robokalm
JWT_SECRET=your_secret_key


### .env in frontend

VITE_API_URL=https://examination-module.onrender.com   ```backend hosted on the render app ``` 


### 🔹API Endpoints

### Authentication

**/api/auth/register**  --  ```Register a new student (Name, Phone, Password)```
**/api/auth/login** -- ```Login using Phone Number```
**/api/exam/submit** -- ```Submit quiz answers and calculate score (JWT required)```
**/api/exam/results** -- ```Fetch all previous exam results (JWT required)```



**Live Link** : https://examination-module.vercel.app/
