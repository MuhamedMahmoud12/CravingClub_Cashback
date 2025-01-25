import { useState } from "react";
import primeClub from "../../styles/HomeStyles/primeClub.module.css";
// import { AuthContext } from "../../context/AuthContext";
import axiosInstance from "../../api/axios";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  // const { setAccessToken } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/login", {
        ...formData,
      });
      if (response.status === 200) {
        alert("Login successful!");
        navigate("/menu");
      }
      // setAccessToken(response.data.accessToken); // Set the access token
    } catch (error) {
      console.error(error);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <section className={primeClub["prime-club"]}>
      <div className={primeClub["overlay"]}>
        <div className="container">
          <div className={primeClub["prime-club-container"]}>
            <div className={primeClub["form"]}>
              <h2>
                Be a <span>Prime Member</span>
              </h2>
              <p>your chance to become prime member is now available</p>
              <form onSubmit={handleLogin}>
                <div></div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button type="submit">Sign In</button>
              </form>
            </div>
            <div className={primeClub["contact"]}>
              <div className={primeClub["contact-container"]}>
                <h2>Contact Us</h2>
                <div>
                  <h3>Book a table</h3>
                  <span>+966 54 798 4094</span>
                </div>
                <div>
                  <h3>Locations</h3>
                  <span>Abha - Khamis Mushait</span>
                  <span>Jazan - Corniche Road</span>
                </div>
                <div>
                  <h3>Lunch Time</h3>
                  <span>Sunday to Wednesday</span>
                  <span>11:00 AM - 6:00 PM</span>
                </div>
                <div>
                  <h3>Opening Hours</h3>
                  <span>Saturday to Wednesday</span>
                  <span>11:00 AM - 1:00 AM</span>
                  <span>Thursday & Friday</span>
                  <span>1:00 PM - 4:00 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
