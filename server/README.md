# PrimeTrade Backend API

A scalable REST API built with Node.js, Express, and MongoDB featuring user authentication, role-based access control, and task management CRUD operations.

## 🎯 Features

✅ **User Authentication**
- User registration with validation
- Email and password-based login
- JWT-based authentication with refresh tokens
- Secure cookie handling

✅ **Role-Based Access Control (RBAC)**
- User and Admin roles
- Admin-only endpoints for user and task management
- Authorization middleware for protected routes

✅ **Task Management CRUD**
- Create, read, update, delete tasks
- User-specific task filtering
- Task status management (pending/completed)
- Comprehensive input validation

✅ **Security & Best Practices**
- Password hashing with bcrypt
- JWT token expiration
- Input validation and sanitization
- Error handling with consistent API responses
- CORS enabled
- HTTP-only cookies
- Environment-based configuration

✅ **API Design**
- RESTful API principles
- Consistent HTTP status codes
- Structured error and success responses
- API versioning (/api/v1)

## 🛠️ Tech Stack

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose ODM)
- JWT (JSON Web Tokens)
- bcryptjs (Password hashing)
- dotenv (Environment variables)

**Tools:**
- Nodemon (Development server)
- MongoDB Compass (Database visualization)
- Postman (API testing)

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)
- Git

## 🚀 Setup & Installation

### 1. Clone the repository
```bash
git clone <repository-url>
cd PrimeTrade.ai/server
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env` file in the server directory:
```env
PORT=8000
MONGODB_URL=mongodb://localhost:27017
DB_NAME=primetrade
CORS_ORIGIN=*
ACCESS_TOKEN_SECRET=your_access_token_secret_here
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=your_refresh_token_secret_here
REFRESH_TOKEN_EXPIRY=10d
NODE_ENV=development
```

### 4. Start MongoDB
```bash
# Local MongoDB
mongod

# OR use MongoDB Atlas connection string
```

### 5. Run the server
```bash
# Development (with auto-reload)
npm run dev

# Production
npm start
```

Server runs on `http://localhost:8000`

## 📚 API Documentation

### Base URL
```
http://localhost:8000/api/v1
```

### Authentication Endpoints

#### 1. User Registration
```http
POST /users/register
Content-Type: application/json

{
  "fullName": "John Doe",
  "email": "john@example.com",
  "username": "johndoe",
  "password": "password123"
}
```

**Response (201):**
```json
{
  "statusCode": 201,
  "data": {
    "_id": "user_id",
    "fullName": "John Doe",
    "email": "john@example.com",
    "username": "johndoe",
    "role": "user",
    "createdAt": "2024-02-12T10:00:00Z"
  },
  "message": "User registered successfully"
}
```

#### 2. User Login
```http
POST /users/login
Content-Type: application/json

{
  "username": "johndoe",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "statusCode": 200,
  "data": {
    "user": {
      "_id": "user_id",
      "fullName": "John Doe",
      "email": "john@example.com",
      "username": "johndoe",
      "role": "user"
    },
    "accessToken": "jwt_token",
    "refreshToken": "refresh_token"
  },
  "message": "User logged in successfully"
}
```

#### 3. Logout
```http
POST /users/logout
Authorization: Bearer <accessToken>
```

**Response (200):**
```json
{
  "statusCode": 200,
  "data": {},
  "message": "User logged out successfully"
}
```

#### 4. Get Current User
```http
GET /users/current-user
Authorization: Bearer <accessToken>
```

#### 5. Refresh Access Token
```http
POST /users/refresh-token
```

### Task Management Endpoints

#### 1. Create Task
```http
POST /tasks
Authorization: Bearer <accessToken>
Content-Type: application/json

{
  "title": "Complete project",
  "description": "Finish the backend API implementation"
}
```

**Response (201):**
```json
{
  "statusCode": 201,
  "data": {
    "_id": "task_id",
    "title": "Complete project",
    "description": "Finish the backend API implementation",
    "status": "pending",
    "owner": "user_id",
    "createdAt": "2024-02-12T10:00:00Z"
  },
  "message": "Task created successfully"
}
```

#### 2. Get User Tasks
```http
GET /tasks
Authorization: Bearer <accessToken>

# Optional query parameters
GET /tasks?status=pending
GET /tasks?status=completed
```

**Response (200):**
```json
{
  "statusCode": 200,
  "data": [
    {
      "_id": "task_id",
      "title": "Complete project",
      "description": "...",
      "status": "pending",
      "owner": "user_id",
      "createdAt": "2024-02-12T10:00:00Z"
    }
  ],
  "message": "Tasks fetched successfully"
}
```

#### 3. Get Task by ID
```http
GET /tasks/:taskId
Authorization: Bearer <accessToken>
```

#### 4. Update Task
```http
PATCH /tasks/:taskId
Authorization: Bearer <accessToken>
Content-Type: application/json

{
  "title": "Updated title",
  "description": "Updated description",
  "status": "completed"
}
```

#### 5. Delete Task
```http
DELETE /tasks/:taskId
Authorization: Bearer <accessToken>
```

### Admin Endpoints (Requires Admin Role)

#### 1. Get All Users
```http
GET /admin/users
Authorization: Bearer <adminAccessToken>
```

#### 2. Get User by ID
```http
GET /admin/users/:userId
Authorization: Bearer <adminAccessToken>
```

#### 3. Update User Role
```http
PATCH /admin/users/:userId/role
Authorization: Bearer <adminAccessToken>
Content-Type: application/json

{
  "role": "admin"
}
```

#### 4. Delete User
```http
DELETE /admin/users/:userId
Authorization: Bearer <adminAccessToken>
```

#### 5. Get All Tasks
```http
GET /admin/tasks
Authorization: Bearer <adminAccessToken>
```

#### 6. Delete Task as Admin
```http
DELETE /admin/tasks/:taskId
Authorization: Bearer <adminAccessToken>
```

## 🔐 Security Features

1. **Password Security**
   - Passwords hashed with bcryptjs (salt rounds: 10)
   - Never stored in plain text
   - Compared securely during login

2. **JWT Authentication**
   - Tokens signed with secrets
   - Configurable expiration times
   - Refresh token rotation

3. **Input Validation**
   - Email format validation
   - Username constraints (3-20 chars, alphanumeric)
   - Password minimum length (6 chars)
   - Title and description length validation

4. **Authorization**
   - Role-based middleware
   - User can only access their own tasks
   - Admin-only endpoints protected

5. **HTTP Security**
   - CORS enabled
   - HTTP-only cookies
   - Secure cookie flag in production

## 📊 Database Schema

### User Model
```javascript
{
  username: String (unique, lowercase),
  email: String (unique, lowercase),
  fullName: String,
  password: String (hashed),
  role: String (enum: ['user', 'admin']),
  refreshToken: String,
  timestamps: true
}
```

### Task Model
```javascript
{
  title: String,
  description: String,
  status: String (enum: ['pending', 'completed']),
  owner: ObjectId (ref: 'User'),
  timestamps: true
}
```

## 📈 Scalability Considerations

### Current Architecture
- **Monolithic Structure**: Simple, single server deployment
- **Stateless Design**: Horizontal scaling ready
- **JWT Authentication**: No session storage needed

### Future Enhancements

1. **Microservices Architecture**
   - Separate auth, task, and admin services
   - Independent databases per service
   - API Gateway for routing

2. **Caching Layer**
   - Redis for session management
   - Task caching for frequently accessed data
   - Reduce database queries

3. **Load Balancing**
   - Multiple server instances
   - Round-robin load distribution
   - Session affinity if needed

4. **Database Optimization**
   - Indexing on frequently queried fields
   - Query optimization and aggregations
   - Database sharding for large datasets

5. **Logging & Monitoring**
   - Structured logging (Winston/Morgan)
   - Error tracking (Sentry)
   - Performance monitoring (New Relic)

6. **Docker & Deployment**
   ```dockerfile
   FROM node:16
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   EXPOSE 8000
   CMD ["npm", "start"]
   ```

7. **API Rate Limiting**
   - Prevent abuse
   - Protect against DDoS
   - User quota management

8. **Message Queues**
   - Async task processing
   - Background jobs
   - Event-driven architecture

## 🧪 Testing

### Using Postman
1. Import the provided Postman collection
2. Set up environment variables
3. Run requests in sequence

### Manual Testing
```bash
# Test registration
curl -X POST http://localhost:8000/api/v1/users/register \
  -H "Content-Type: application/json" \
  -d '{"fullName":"Test User","email":"test@example.com","username":"testuser","password":"password123"}'

# Test login
curl -X POST http://localhost:8000/api/v1/users/login \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"password123"}'
```

## 📁 Project Structure

```
server/
├── src/
│   ├── controllers/
│   │   ├── user.controller.js
│   │   ├── task.controller.js
│   │   └── admin.controller.js
│   ├── models/
│   │   ├── user.model.js
│   │   └── task.model.js
│   ├── routes/
│   │   ├── user.routes.js
│   │   ├── task.routes.js
│   │   └── admin.routes.js
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   └── roleAuth.middleware.js
│   ├── utils/
│   │   ├── ApiError.js
│   │   ├── ApiResponse.js
│   │   ├── asyncHandler.js
│   │   └── cloudinary.js
│   ├── db/
│   │   └── index.js
│   ├── app.js
│   ├── index.js
│   └── constants.js
├── .env
├── .env.example
└── package.json
```

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 🙏 Support

For issues and questions, please open an issue on GitHub.

## 📄 License

This project is licensed under the MIT License.

---

**Time to Complete**: ~2 hours  
**Last Updated**: February 12, 2026  
**Status**: Production Ready
