import primeClub from "../../styles/HomeStyles/primeClub.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function PrimeClub() {
  // Toggle between Sign-Up and Sign-In
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://cash-back-seven.vercel.app/api/v1/auth/register",
        formData
      );
      console.log("User signed up:", response.data.user);
      navigate("/menu/appetizers");
    } catch (error) {
      console.log(
        "Signup failed",
        error.response?.data?.message || error.message
      );
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
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
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
                <input
                  type="password"
                  name="passwordConfirm"
                  placeholder="Confirm Password"
                  value={formData.passwordConfirm}
                  onChange={handleChange}
                />
                <div className={primeClub["submit-container"]}>
                  <button type="submit">Sign Up</button>
                  <a className={primeClub["signin-btn"]} href="sign-in">
                    Already have an account ? Sign in
                  </a>
                </div>
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
