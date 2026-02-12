# 🚀 PrimeTrade.ai - Task Management System

> **Backend Developer Internship Assignment**  
> Scalable REST API with Authentication, Role-Based Access & Frontend UI

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Quick Start](#quick-start)
- [API Documentation](#api-documentation)
- [Testing Credentials](#testing-credentials)
- [Security Implementation](#security-implementation)
- [Scalability](#scalability)
- [Screenshots](#screenshots)

---

## 🎯 About the Project

This is a full-stack **Task Management System** built as part of PrimeTrade.ai's Backend Developer Internship assignment. The application demonstrates:

- **Secure REST API** with JWT authentication
- **Role-based access control** (User & Admin)
- **CRUD operations** for task management
- **Modern React frontend** with responsive UI
- **Scalable architecture** ready for production deployment

**Completion Time:** 3 days  
**Primary Focus:** Backend API + Security + Scalability

---

## 🛠️ Tech Stack

### Backend
- **Runtime:** Node.js v18+
- **Framework:** Express.js v5.2.1
- **Database:** MongoDB v9.2.1 (with Mongoose ODM)
- **Authentication:** JSON Web Tokens (JWT)
- **Password Hashing:** bcrypt v5.1.1
- **File Storage:** Cloudinary v1.40.0
- **File Upload:** Multer v1.4.5
- **Environment Config:** dotenv v17.2.4
- **Dev Tools:** Nodemon v3.1.11

### Frontend
- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v3
- **HTTP Client:** Axios
- **Routing:** React Router DOM v6
- **State Management:** Context API

### Additional Tools
- **API Testing:** Postman
- **Version Control:** Git & GitHub
- **Code Quality:** ESLint

---

## ✨ Features

### 🔐 Authentication & Authorization
✅ User registration with email/username validation  
✅ Secure login with JWT (access + refresh tokens)  
✅ Password hashing using bcrypt (10 salt rounds)  
✅ Token refresh mechanism  
✅ Protected routes with middleware  
✅ Role-based access control (User vs Admin)  
✅ HTTP-only cookies for secure token storage  

### 📝 Task Management (CRUD)
✅ Create tasks with title & description validation  
✅ View all user tasks (filtered by status)  
✅ Update task details & status  
✅ Delete tasks  
✅ Task ownership verification  
✅ Auto-generated timestamps  

### 👑 Admin Features
✅ View all users in the system  
✅ View specific user details  
✅ Update user roles (user ↔ admin)  
✅ Delete users (with cascade task deletion)  
✅ View all tasks from all users  
✅ Delete any task in the system  

### 🎨 Frontend UI
✅ Responsive design (mobile-first)  
✅ Registration & login forms with validation  
✅ Protected dashboard with JWT verification  
✅ Task cards with status indicators  
✅ Create/Edit task modal  
✅ Task status filtering (Pending/Completed)  
✅ Error & success notifications  
✅ Logout functionality  

### 🔒 Security Features
✅ Input validation & sanitization  
✅ SQL/NoSQL injection protection  
✅ XSS protection  
✅ CORS configuration  
✅ Rate limiting ready  
✅ Environment-based secrets  
✅ Error messages without sensitive data leakage  

---

## 📁 Project Structure

```
PrimeTrade.ai/
│
├── client/                          # Frontend React App
│   ├── src/
│   │   ├── api/                     # API integration
│   │   │   └── api.js
│   │   ├── components/              # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskList.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── context/                 # Context API
│   │   │   └── AuthContext.jsx
│   │   ├── hooks/                   # Custom hooks
│   │   │   ├── useAuth.js
│   │   │   └── useAppAuth.js
│   │   ├── pages/                   # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── server/                          # Backend API
│   ├── src/
│   │   ├── controllers/             # Business logic
│   │   │   ├── user.controller.js
│   │   │   ├── task.controller.js
│   │   │   └── admin.controller.js
│   │   ├── models/                  # Database schemas
│   │   │   ├── user.model.js
│   │   │   └── task.model.js
│   │   ├── routes/                  # API routes
│   │   │   ├── user.routes.js
│   │   │   ├── task.routes.js
│   │   │   └── admin.routes.js
│   │   ├── middlewares/             # Custom middleware
│   │   │   ├── auth.middleware.js
│   │   │   └── roleAuth.middleware.js
│   │   ├── utils/                   # Helper functions
│   │   │   ├── ApiError.js
│   │   │   ├── ApiResponse.js
│   │   │   └── asyncHandler.js
│   │   ├── db/                      # Database connection
│   │   │   └── index.js
│   │   ├── app.js                   # Express app setup
│   │   └── index.js                 # Server entry point
│   ├── .env                         # Environment variables
│   └── package.json
│
├── PrimeTrade_API.postman_collection.json  # API documentation
├── PROJECT_GUIDE.md                 # Detailed project documentation
├── SCALABILITY.md                   # Scalability roadmap
├── MONGODB_SETUP.md                 # Database setup guide
└── README.md                        # This file

```

---

## 🚀 Quick Start

### Prerequisites
```bash
Node.js v18+ installed
MongoDB Atlas account OR local MongoDB
Git installed
```

### Installation

#### 1. Clone the repository
```bash
git clone <your-repo-url>
cd PrimeTrade.ai
```

#### 2. Backend Setup
```bash
cd server
npm install

# Create .env file
cp .env.example .env
# Edit .env with your MongoDB URL and secrets

# Start backend server
npm run dev
```

Backend will run on: `http://localhost:5000`

#### 3. Frontend Setup
```bash
cd client
npm install

# Start frontend dev server
npm run dev
```

Frontend will run on: `http://localhost:5173`

### Environment Variables

**Server `.env`:**
```env
PORT=5000
MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/
DB_NAME=primetrade
CORS_ORIGIN=*
ACCESS_TOKEN_SECRET=your_secure_random_string_here
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=another_secure_random_string
REFRESH_TOKEN_EXPIRY=10d
NODE_ENV=development
```

> 💡 **Generate secure secrets:** `node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"`

---

## 📡 API Documentation

### Base URL
```
http://localhost:5000/api/v1
```

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/users/register` | Register new user | ❌ |
| POST | `/users/login` | Login user | ❌ |
| POST | `/users/logout` | Logout user | ✅ |
| GET | `/users/current-user` | Get current user | ✅ |
| POST | `/users/refresh-token` | Refresh access token | ❌ |

### Task Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/tasks` | Create new task | ✅ |
| GET | `/tasks` | Get user's tasks | ✅ |
| GET | `/tasks/:taskId` | Get specific task | ✅ |
| PATCH | `/tasks/:taskId` | Update task | ✅ |
| DELETE | `/tasks/:taskId` | Delete task | ✅ |

### Admin Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/admin/users` | Get all users | ✅ Admin |
| GET | `/admin/users/:userId` | Get user by ID | ✅ Admin |
| PATCH | `/admin/users/:userId/role` | Update user role | ✅ Admin |
| DELETE | `/admin/users/:userId` | Delete user | ✅ Admin |
| GET | `/admin/tasks` | Get all tasks | ✅ Admin |
| DELETE | `/admin/tasks/:taskId` | Delete any task | ✅ Admin |

### Sample API Requests

**Register User:**
```bash
POST /api/v1/users/register
Content-Type: application/json

{
  "fullName": "John Doe",
  "email": "john@example.com",
  "username": "johndoe",
  "password": "password123"
}
```

**Create Task:**
```bash
POST /api/v1/tasks
Authorization: Bearer <access_token>
Content-Type: application/json

{
  "title": "Complete Backend Assignment",
  "description": "Build REST API with authentication",
  "status": "pending"
}
```

**More examples available in:** `PrimeTrade_API.postman_collection.json`

---

## 🔑 Testing Credentials

### Regular User
```
Email: test@example.com
Username: testuser
Password: password123
```

### Admin User
```
Email: admin@primetrade.com
Username: admin
Password: admin123
```

> 💡 **Note:** Admin user has elevated privileges to manage all users and tasks

---

## 🔒 Security Implementation

### Password Security
- **Hashing Algorithm:** bcrypt with 10 salt rounds
- **Validation:** Minimum 6 characters
- **Storage:** Only hashed passwords stored in database

### JWT Token Security
- **Access Token:** 1 day expiration (short-lived)
- **Refresh Token:** 10 days expiration
- **Storage:** HTTP-only cookies (XSS protection)
- **Secrets:** Stored in environment variables
- **Verification:** Middleware validates on each protected request

### Input Validation
- **Email:** Regex validation for proper format
- **Username:** 3-20 characters, alphanumeric + underscore
- **Password:** Minimum length enforced
- **Task Title:** Minimum 3 characters
- **Task Description:** Minimum 5 characters

### Database Security
- **Mongoose ODM:** Prevents NoSQL injection
- **Schema Validation:** Type checking and required fields
- **Indexes:** Optimized queries with proper indexing

### API Security
- **CORS:** Configured origin restrictions
- **Body Parser Limits:** Protection against large payload attacks
- **Error Handling:** Custom errors without sensitive data exposure
- **Authorization Middleware:** Route-level protection

---

## 📈 Scalability

### Current Architecture
- **Type:** Monolithic REST API
- **Database:** MongoDB (horizontally scalable)
- **Deployment:** Single Node.js instance

### Scalability Roadmap

#### Phase 1: Immediate (0-3 months)
✅ **Horizontal Scaling**
- Load balancer (Nginx/HAProxy)
- Multiple server instances
- Session management with Redis

✅ **Caching Layer**
- Redis for user sessions & frequently accessed data
- JWT token blacklist for logout
- Database query result caching

✅ **Database Optimization**
- Indexes on frequently queried fields
- Query optimization with aggregation
- Connection pooling

#### Phase 2: Advanced (3-6 months)
🔄 **Microservices Architecture**
- Auth Service (user management)
- Task Service (task CRUD)
- Admin Service (admin operations)
- API Gateway for routing

🔄 **Message Queues**
- RabbitMQ/Kafka for async operations
- Email notifications
- Background task processing

🔄 **Search & Analytics**
- Elasticsearch for full-text search
- Analytics dashboard
- Log aggregation

#### Phase 3: Enterprise (6+ months)
🚀 **Container Orchestration**
- Docker containers
- Kubernetes cluster
- Auto-scaling based on load

🚀 **Database Sharding**
- User-based sharding
- Geographic distribution
- Read replicas

🚀 **CDN & Edge Computing**
- Static asset delivery
- Edge caching
- Global distribution

**Detailed scalability plan:** See `SCALABILITY.md`

---

## 📸 Screenshots

### API Endpoints (Postman)
![API Testing](https://via.placeholder.com/800x400?text=Postman+API+Testing)

### Database Schema (MongoDB Compass)
![Database Schema](https://via.placeholder.com/800x400?text=MongoDB+Collections)

### Frontend Dashboard
![Dashboard](https://via.placeholder.com/800x400?text=Task+Dashboard)

---

## 📝 Assignment Checklist

### ✅ Backend Requirements
- [x] User registration & login APIs
- [x] JWT authentication with refresh tokens
- [x] Password hashing (bcrypt)
- [x] Role-based access control
- [x] CRUD operations for tasks
- [x] API versioning (/api/v1)
- [x] Error handling & validation
- [x] API documentation (Postman)
- [x] Database schema design (MongoDB)
- [x] Scalable project structure

### ✅ Frontend Requirements
- [x] React.js with Vite
- [x] User registration form
- [x] Login form
- [x] Protected dashboard
- [x] CRUD task operations UI
- [x] Error/success message handling
- [x] JWT token management

### ✅ Security & Best Practices
- [x] Secure JWT handling
- [x] Input validation & sanitization
- [x] CORS configuration
- [x] Environment variables
- [x] Consistent error responses
- [x] Code organization & modularity

### ✅ Documentation
- [x] README.md with setup instructions
- [x] API documentation (Postman collection)
- [x] Scalability roadmap
- [x] Database setup guide
- [x] Code comments & structure

---

## 🎓 Key Learnings

1. **Architecture Design:** Implemented scalable folder structure for easy maintenance
2. **Security:** Applied industry-standard security practices (JWT, bcrypt, validation)
3. **Database Design:** Created normalized schema with proper relationships
4. **Error Handling:** Built consistent API responses with proper status codes
5. **Authentication Flow:** Implemented complete auth cycle with refresh tokens
6. **Role-Based Access:** Created flexible RBAC system for authorization
7. **Frontend Integration:** Connected React frontend with backend APIs
8. **API Testing:** Comprehensive testing with Postman

---

## 🚀 Deployment

### Backend Deployment (Recommended: Railway/Render/Fly.io)
```bash
# Build command
npm install

# Start command
npm start

# Environment variables: Add all .env variables in dashboard
```

### Frontend Deployment (Recommended: Vercel/Netlify)
```bash
# Build command
npm run build

# Output directory
dist
```

### Database (MongoDB Atlas)
- Already configured and ready
- Connection string in environment variables

---

## 📞 Contact

**Developer:** [Your Name]  
**Email:** [your.email@example.com]  
**LinkedIn:** [Your LinkedIn]  
**GitHub:** [Your GitHub]

**Submitted to:**  
- joydip@primetrade.ai
- hello@primetrade.ai
- chetan@primetrade.ai
- sonika@primetrade.ai

**Subject:** [Your Name] Backend Developer Task

---

## 📄 License

This project is created for PrimeTrade.ai internship evaluation purposes.

---

## 🙏 Acknowledgments

- PrimeTrade.ai for the opportunity
- MongoDB Atlas for database hosting
- React & Vite communities for excellent documentation
- Express.js team for the robust framework

---

**⭐ If you like this project, please give it a star!**

**Built  for PrimeTrade.ai Backend Developer Internship**
