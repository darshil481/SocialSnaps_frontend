import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8282", // Replace with your API base URL
});

// Request interceptor
instance.interceptors.request.use(
  (config) => {
    // Get the token from wherever you store it (e.g., local storage, Redux state)
    const token = localStorage.getItem("token");

    // Add the token to the request headers
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle request errors here
    return Promise.reject(error);
  }
);

// Response interceptor
instance.interceptors.response.use(
  (response) => {
    // You can modify the response data here before it reaches your components
    return response;
  },
  (error) => {
    // Handle response errors here (e.g., unauthorized, server errors, etc.)
    return Promise.reject(error);
  }
);

export default instance;
