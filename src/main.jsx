import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import "./styles/containers.css";
import "./styles/globalClasses.css";
import App from "./App";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { AuthProvider } from "./context/AuthContext";
import { UserDataProvider } from "./context/UserContext";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <UserDataProvider>
        <App />
      </UserDataProvider>
    </AuthProvider>
  </StrictMode>
);
