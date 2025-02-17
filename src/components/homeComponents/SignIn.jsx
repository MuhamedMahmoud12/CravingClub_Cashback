/* eslint-disable no-unused-vars */
import { useState } from "react";
import primeClub from "../../styles/HomeStyles/signIn.module.css";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../../firebase";

export default function SignIn() {
  const [phone, setPhone] = useState("");

  const [confirmationResult, setConfirmationResult] = useState(null);
  const setupRecaptcha = () => {
    console.log("Auth object:", auth); // دي عشان تتأكد إن `auth` متعرف

    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth, // لازم يتم تمرير `auth` بشكل صحيح
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            console.log("Recaptcha solved:", response);
          },
        }
      );
    }
  };
  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  const sendOTP = async () => {
    try {
      setupRecaptcha(); // ضروري جدًا قبل أي طلب لـ OTP
      const appVerifier = window.recaptchaVerifier; // تأكد إنه متعرف
      console.log("appVerifier:", appVerifier); // للتأكد من إن الـ Recaptcha شغال

      if (!appVerifier) {
        throw new Error("RecaptchaVerifier is not initialized.");
      }

      console.log("Sending OTP to:", phone);
      const confirmation = await signInWithPhoneNumber(
        auth,
        phone,
        appVerifier
      );

      setConfirmationResult(confirmation);
      alert("OTP تم إرساله!");
    } catch (error) {
      console.error("خطأ في إرسال OTP:", error);
      alert("فشل إرسال OTP! السبب: " + error.message);
    }
  };
  // const verifyOTP = async () => {
  //   try {
  //     const result = await confirmationResult.confirm(otp);
  //     alert(`تم تسجيل الدخول بنجاح! المستخدم: ${result.user.phoneNumber}`);
  //   } catch (error) {
  //     console.error("خطأ في التحقق من OTP:", error);
  //     alert("OTP غير صحيح!");
  //   }
  // };
  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axiosInstance.post("auth/login", { ...formData });
  //     if (response.data.token) {
  //       login(response.data.token);
  //       navigate("/profile");
  //     }
  //   } catch (error) {
  //     alert(error.response?.data?.message || "Login failed");
  //   }
  // };

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
              <form>
                <label htmlFor="email">Enter Your Phone Number</label>
                <div className={primeClub["inputs-container"]}>
                  <input
                    id="text"
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
                <div className={primeClub["submit-container"]}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      sendOTP();
                    }}
                  >
                    Send Verification Code
                  </button>
                </div>
                <div id="recaptcha-container"></div>
                <div className={primeClub["steps"]}>
                  <h3>Registeration steps:</h3>
                  <ol>
                    <li>
                      select your{" "}
                      <span className={primeClub.mark}>country code</span>{" "}
                      followed by your{" "}
                      <span className={primeClub.mark}>phone number</span>
                    </li>
                    <li>
                      Click{" "}
                      <span className={primeClub.mark}>
                        &quot;Send Verification Code&quot;
                      </span>
                    </li>
                    <li>
                      You will receive a code via{" "}
                      <span className={primeClub.mark}>SMS</span>.
                    </li>
                    <li>
                      enter the received code in the{" "}
                      <span className={primeClub.mark}>designated field</span>
                    </li>
                    <li>
                      Click{" "}
                      <span className={primeClub.mark}>&quot;Login&quot;</span>{" "}
                      Button
                    </li>
                  </ol>
                </div>
              </form>
            </div>
            <div className={primeClub["contact"]}>
              <div className={primeClub["contact-container"]}>
                <h2>Contact Us</h2>
                <div className={primeClub["booking-details-grid"]}>
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
      </div>
    </section>
  );
}
