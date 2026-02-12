# 🚀 PrimeTrade.ai - Task Management System

> **Backend Developer Internship Assignment**  
> Scalable REST API with Authentication, Role-Based Access & Frontend UI

---

## 📋 Assignment Overview

**Company:** PrimeTrade.ai  
**Position:** Backend Developer (Intern)  
**Expected Time:** 2 hours  
**Actual Completion:** Within 3 days  
**Primary Focus:** Backend API Development with Security & Scalability

---

## ✅ Assignment Requirements Completed

### Backend (Primary Focus) ✅
- ✅ User registration & login APIs with password hashing and JWT authentication
- ✅ Role-based access control (user vs admin)
- ✅ CRUD APIs for secondary entity (Tasks)
- ✅ API versioning (/api/v1)
- ✅ Comprehensive error handling & validation
- ✅ API documentation (Postman collection included)
- ✅ Database schema design (MongoDB with Mongoose)

### Basic Frontend (Supportive) ✅
- ✅ Built with React.js + Vite
- ✅ Simple UI to register & log in users
- ✅ Protected dashboard (JWT required)
- ✅ Perform CRUD actions on tasks
- ✅ Show error/success messages from API responses

### Security & Scalability ✅
- ✅ Secure JWT token handling (access + refresh tokens)
- ✅ Input sanitization & validation
- ✅ Scalable project structure for new modules
- ✅ Password hashing with bcrypt (10 salt rounds)
- ✅ CORS configuration & HTTP-only cookies

### Deliverables ✅
- ✅ Backend project hosted in GitHub with comprehensive README.md
- ✅ Working APIs for authentication & CRUD operations
- ✅ Basic frontend UI that connects to APIs
- ✅ API documentation (Postman collection: `PrimeTrade_API.postman_collection.json`)
- ✅ Scalability notes (microservices, caching, load balancing)

---

## 🎯 Evaluation Criteria Alignment

### ✅ API Design (REST Principles, Status Codes, Modularity)
- RESTful endpoint design following best practices
- Proper HTTP status codes (200, 201, 400, 401, 403, 404, 500)
- Modular architecture with separate controllers, routes, and middleware
- API versioning (/api/v1)
- Consistent request/response format

### ✅ Database Schema Design & Management
- Well-structured MongoDB schemas using Mongoose
- Proper relationships (User → Tasks via ObjectId references)
- Indexed fields for query optimization
- Data validation at schema level
- Timestamps for all entities

### ✅ Security Practices (JWT Handling, Hashing, Validation)
- bcrypt password hashing with salt rounds
- JWT access tokens (1 day expiry) and refresh tokens (10 days)
- HTTP-only cookies for token storage
- Input validation (email format, username constraints, password length)
- Authorization middleware for protected routes
- Role-based access control middleware

### ✅ Functional Frontend Integration
- React 18 application with modern hooks
- JWT token management and auto-refresh
- Protected routes with authentication checks
- Complete CRUD operations UI
- Real-time error and success notifications
- Responsive design with Tailwind CSS

### ✅ Scalability & Deployment Readiness
- Modular folder structure supporting horizontal scaling
- Environment-based configuration
- Database connection pooling ready
- Async/await for non-blocking operations
- Ready for Redis caching integration
- Docker-compatible structure

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

The application is built with scalability in mind:

**Current Architecture:** Monolithic REST API with MongoDB

**Immediate Improvements:**
- Horizontal scaling with load balancers
- Redis caching for sessions and frequently accessed data
- Database indexing and query optimization

**Future Enhancements:**
- Microservices architecture (Auth, Task, Admin services)
- Message queues (RabbitMQ/Kafka) for async operations
- Docker containerization and Kubernetes orchestration
- Database sharding for horizontal data distribution

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


## 🚀 Quick Deployment

**Backend:** Railway / Render / Fly.io / Heroku  
**Frontend:** Vercel / Netlify  
**Database:** MongoDB Atlas (pre-configured)

---

## 📄 License

Created for PrimeTrade.ai Backend Developer Internship evaluation.

---

**Built with ❤️ for PrimeTrade.ai Backend Developer Internship**
