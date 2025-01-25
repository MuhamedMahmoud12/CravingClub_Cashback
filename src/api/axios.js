import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://cash-back-seven.vercel.app/api/v1/auth/", // Replace with your backend API URL
  withCredentials: true, // Send cookies with every request,
  headers: {
    "x-vercel-protection-bypass": "uljGqMgQYaS2wbN96WeRPvTSoC1mMMZX",
    "Content-Type": "application/json",
  },
});
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If the error is 401 (unauthorized) and we haven't tried refreshing yet
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Call your refresh token endpoint
        await axiosInstance.post("/refresh-token");
        // Retry the original request
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // If refresh fails, redirect to login
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
