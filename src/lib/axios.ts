import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "/",
  },
});

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// Handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized, redirecting to login...");
      // Optionally, redirect user to login page
    }
    return Promise.reject(error);
  }
);

export default api;
