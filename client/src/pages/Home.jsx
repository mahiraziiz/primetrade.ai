import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-indigo-600">PrimeTrade</h1>
          <div className="space-x-4">
            <button
              onClick={() => navigate('/login')}
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Login
            </button>
            <button
              onClick={() => navigate('/register')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition"
            >
              Register
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Manage Your Tasks Efficiently
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          PrimeTrade is a modern task management system that helps you organize, prioritize, and complete your work with ease.
        </p>

        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => navigate('/login')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition text-lg"
          >
            Get Started
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Create Tasks</h3>
            <p className="text-gray-600">Easily create and organize your tasks with titles, descriptions, and priorities.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Track Progress</h3>
            <p className="text-gray-600">Monitor your tasks status and keep track of what's pending, in progress, or completed.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-4xl mb-4">🔔</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Stay Organized</h3>
            <p className="text-gray-600">Set due dates and priority levels to stay on top of your important work.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
