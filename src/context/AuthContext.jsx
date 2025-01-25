// /* eslint-disable react/prop-types */
// import { createContext, useState, useEffect } from "react";
// import axiosInstance from "../api/axios";

// export const AuthContext = createContext();
// const AuthProvider = ({ children }) => {
//   const [accessToken, setAccessToken] = useState("");

//   // Function to refresh the access token
//   const refreshAccessToken = async () => {
//     try {
//       const response = await axiosInstance.post("/refresh-token");
//       setAccessToken(response.data.accessToken);
//     } catch (error) {
//       console.error("Failed to refresh access token:", error);
//       setAccessToken(""); // Log the user out on failure
//     }
//   };

//   useEffect(() => {
//     if (!accessToken) return;

//     const refreshInterval = setInterval(() => {
//       refreshAccessToken();
//     }, 14 * 60 * 1000); // Refresh every 14 minutes (just before the 15-minute expiry)

//     return () => clearInterval(refreshInterval); // Cleanup on unmount
//   }, [accessToken]);

//   return (
//     <AuthContext.Provider
//       value={{ accessToken, setAccessToken, refreshAccessToken }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;
