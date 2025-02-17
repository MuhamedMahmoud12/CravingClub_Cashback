// import primeClub from "../../styles/HomeStyles/primeClub.module.css";
// import axiosInstance from "../../api/axios";
// import { useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import { useState } from "react";
// import { useAuth } from "../../context/AuthContext";

// export default function SignUp() {
//   const navigate = useNavigate();
//   const { login } = useAuth();
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     password: "",
//     passwordConfirm: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axiosInstance.post("auth/register", {
//         ...formData,
//       });
//       if (response.data.token) {
//         login(response.data.token);
//       }
//       navigate("/sign-in");
//     } catch (error) {
//       alert(error.response?.data?.message || "Registration failed");
//     }
//   };
//   return (
//     <section className={primeClub["prime-club"]}>
//       <div className={primeClub["overlay"]}>
//         <div className="container">
//           <div className={primeClub["prime-club-container"]}>
//             <div className={primeClub["form"]}>
//               <h2>
//                 Be a <span>Prime Member</span>
//               </h2>
//               <p>your chance to become prime member is now available</p>
//               <form onSubmit={handleSubmit}>
//                 <div>
//                   <label htmlFor="name">Name</label>
//                   <span className={primeClub["required"]}>*</span>
//                   <input
//                     id="name"
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <label htmlFor="email">Email</label>
//                 <span className={primeClub["required"]}>*</span>
//                 <input
//                   id="email"
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//                 <label htmlFor="password">Password</label>
//                 <span className={primeClub["required"]}>*</span>
//                 <input
//                   id="password"
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                 />
//                 <label htmlFor="confirm-password">Confirm Password</label>
//                 <span className={primeClub["required"]}>*</span>
//                 <input
//                   id="confirm-password"
//                   type="password"
//                   name="passwordConfirm"
//                   value={formData.passwordConfirm}
//                   onChange={handleChange}
//                   required
//                 />
//                 <div className={primeClub["submit-container"]}>
//                   <button type="submit">Sign Up</button>
//                   <NavLink className={primeClub["signin-btn"]} to="/sign-in">
//                     Already have an account ? Sign in
//                   </NavLink>
//                 </div>
//               </form>
//             </div>
//             <div className={primeClub["contact"]}>
//               <div className={primeClub["contact-container"]}>
//                 <h2>Contact Us</h2>
//                 <div>
//                   <h3>Book a table</h3>
//                   <span>+966 54 798 4094</span>
//                 </div>
//                 <div>
//                   <h3>Locations</h3>
//                   <span>Abha - Khamis Mushait</span>
//                   <span>Jazan - Corniche Road</span>
//                 </div>
//                 <div>
//                   <h3>Lunch Time</h3>
//                   <span>Sunday to Wednesday</span>
//                   <span>11:00 AM - 6:00 PM</span>
//                 </div>
//                 <div>
//                   <h3>Opening Hours</h3>
//                   <span>Saturday to Wednesday</span>
//                   <span>11:00 AM - 1:00 AM</span>
//                   <span>Thursday & Friday</span>
//                   <span>1:00 PM - 4:00 AM</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
