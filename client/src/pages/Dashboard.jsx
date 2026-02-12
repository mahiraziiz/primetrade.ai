import React, { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { taskAPI } from "../api/api";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  // Fetch tasks on mount
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const response = await taskAPI.getTasks();
        if (response.statusCode < 400) {
          setTasks(response.data || []);
        } else {
          setError(response.message || "Failed to fetch tasks");
        }
      } catch (err) {
        setError(err.message || "Failed to fetch tasks");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const handleCreateTask = async (taskData) => {
    try {
      setError("");
      const response = await taskAPI.createTask(taskData);
      if (response.statusCode < 400) {
        setTasks([response.data, ...tasks]);
        setSuccess("Task created successfully!");
        setShowForm(false);
        setTimeout(() => setSuccess(""), 3000);
      } else {
        setError(response.message || "Failed to create task");
      }
    } catch (err) {
      setError(err.message || "Failed to create task");
    }
  };

  const handleUpdateTask = async (taskId, taskData) => {
    try {
      setError("");
      const response = await taskAPI.updateTask(taskId, taskData);
      if (response.statusCode < 400) {
        setTasks(tasks.map((t) => (t._id === taskId ? response.data : t)));
        setSuccess("Task updated successfully!");
        setEditingTask(null);
        setTimeout(() => setSuccess(""), 3000);
      } else {
        setError(response.message || "Failed to update task");
      }
    } catch (err) {
      setError(err.message || "Failed to update task");
    }
  };

  const handleDeleteTask = async (taskId) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;

    try {
      setError("");
      const response = await taskAPI.deleteTask(taskId);
      if (response.statusCode < 400) {
        setTasks(tasks.filter((t) => t._id !== taskId));
        setSuccess("Task deleted successfully!");
        setTimeout(() => setSuccess(""), 3000);
      } else {
        setError(response.message || "Failed to delete task");
      }
    } catch (err) {
      setError(err.message || "Failed to delete task");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Welcome back, {user?.fullName || user?.username}!
          </h1>
          <p className="text-gray-600 mt-2">Manage your tasks efficiently</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
            {success}
          </div>
        )}

        {showForm || editingTask ? (
          <TaskForm
            task={editingTask}
            onSubmit={
              editingTask
                ? (data) => handleUpdateTask(editingTask._id, data)
                : handleCreateTask
            }
            onCancel={() => {
              setShowForm(false);
              setEditingTask(null);
            }}
          />
        ) : (
          <button
            onClick={() => setShowForm(true)}
            className="mb-8 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition"
          >
            + Create New Task
          </button>
        )}

        {loading ? (
          <div className="text-center py-12">
            <div className="spinner"></div>
            <p className="text-gray-600 mt-4">Loading tasks...</p>
          </div>
        ) : tasks.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-gray-500 text-lg">
              No tasks yet. Create one to get started!
            </p>
          </div>
        ) : (
          <TaskList
            tasks={tasks}
            onEdit={setEditingTask}
            onDelete={handleDeleteTask}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
