# PrimeTrade Frontend Setup

## Installation

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
VITE_API_URL=http://localhost:5000/api/v1
```

## Running the Application

### Development Mode
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

### Production Build
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

## Features

- **Authentication**: User registration and login with JWT tokens
- **Dashboard**: Main interface for managing tasks
- **Task Management**: Create, read, update, and delete tasks
- **Task Organization**: Filter tasks by status (Pending, In Progress, Completed)
- **Priority Levels**: Set task priority (Low, Medium, High)
- **Due Dates**: Set and track task due dates with overdue indicators
- **Responsive Design**: Works on desktop and mobile devices

## Project Structure

```
src/
├── api/               # API service layer
├── components/        # Reusable React components
│   ├── Navbar.jsx
│   ├── ProtectedRoute.jsx
│   ├── TaskCard.jsx
│   ├── TaskForm.jsx
│   └── TaskList.jsx
├── context/          # React Context for state management
│   └── AuthContext.jsx
├── pages/            # Page components
│   ├── Dashboard.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   └── Register.jsx
├── App.jsx           # Main App component
├── App.css           # Global styles
├── index.css         # Tailwind CSS directives
└── main.jsx          # Entry point
```

## Technologies Used

- **React 19**: UI framework
- **Vite**: Build tool and dev server
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript**: Programming language

## Environment Variables

- `VITE_API_URL`: Backend API base URL (default: http://localhost:5000/api/v1)

## Notes

- Make sure the backend server is running on `http://localhost:5000` before starting the frontend
- JWT tokens are stored in localStorage
- The app uses a context provider for authentication state management
- Protected routes require authentication to access the dashboard
