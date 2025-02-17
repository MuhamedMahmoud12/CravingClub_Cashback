/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";
import axiosInstance from "../api/axios";
import { useAuth } from "./AuthContext";

const UserContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { logout } = useAuth();

  const getUserData = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("users/me");
      setUserData(response.data || null);
      setError(null);
    } catch (err) {
      console.error("Error fetching user data:", err);
      setError("Failed to fetch user data");
      if (err.response?.status === 401) {
        logout();
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ userData, getUserData, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserData = () => useContext(UserContext);
