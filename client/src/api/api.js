const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1";

console.log("API Base URL:", API_BASE_URL);

const getAuthHeader = () => {
  const token = localStorage.getItem("accessToken");
  return {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

// Auth APIs
export const authAPI = {
  register: async (userData) => {
    try {
      console.log("Fetching:", `${API_BASE_URL}/users/register`);
      const response = await fetch(`${API_BASE_URL}/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);

      const contentType = response.headers.get("content-type");
      console.log("Content-Type:", contentType);

      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        console.error("Non-JSON response received:", text.substring(0, 500));
        throw new Error(
          `Server returned ${response.status}: ${text.substring(0, 100)}`,
        );
      }

      const data = await response.json();
      console.log("Response data:", data);
      return data;
    } catch (error) {
      console.error("Register fetch error:", error);
      throw error;
    }
  },

  login: async (credentials) => {
    try {
      const response = await fetch(`${API_BASE_URL}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        console.error("Non-JSON login response:", text.substring(0, 500));
        throw new Error(
          `Server returned ${response.status}: ${text.substring(0, 100)}`,
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Login fetch error:", error);
      throw error;
    }
  },

  logout: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/users/logout`, {
        method: "POST",
        headers: getAuthHeader(),
      });

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        throw new Error(
          `Server returned ${response.status}: ${text.substring(0, 100)}`,
        );
      }

      return response.json();
    } catch (error) {
      console.error("Logout fetch error:", error);
      throw error;
    }
  },

  getCurrentUser: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/users/current-user`, {
        method: "GET",
        headers: getAuthHeader(),
      });

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        throw new Error(
          `Server returned ${response.status}: ${text.substring(0, 100)}`,
        );
      }

      return response.json();
    } catch (error) {
      console.error("Get current user fetch error:", error);
      throw error;
    }
  },

  refreshToken: async () => {
    const response = await fetch(`${API_BASE_URL}/users/refresh-token`, {
      method: "POST",
      headers: getAuthHeader(),
    });
    return response.json();
  },
};

// Task APIs
export const taskAPI = {
  createTask: async (taskData) => {
    const response = await fetch(`${API_BASE_URL}/tasks`, {
      method: "POST",
      headers: getAuthHeader(),
      body: JSON.stringify(taskData),
    });
    return response.json();
  },

  getTasks: async (page = 1, limit = 10) => {
    const response = await fetch(
      `${API_BASE_URL}/tasks?page=${page}&limit=${limit}`,
      {
        method: "GET",
        headers: getAuthHeader(),
      },
    );
    return response.json();
  },

  getTaskById: async (taskId) => {
    const response = await fetch(`${API_BASE_URL}/tasks/${taskId}`, {
      method: "GET",
      headers: getAuthHeader(),
    });
    return response.json();
  },

  updateTask: async (taskId, taskData) => {
    const response = await fetch(`${API_BASE_URL}/tasks/${taskId}`, {
      method: "PATCH",
      headers: getAuthHeader(),
      body: JSON.stringify(taskData),
    });
    return response.json();
  },

  deleteTask: async (taskId) => {
    const response = await fetch(`${API_BASE_URL}/tasks/${taskId}`, {
      method: "DELETE",
      headers: getAuthHeader(),
    });
    return response.json();
  },
};
