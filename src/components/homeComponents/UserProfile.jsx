/* eslint-disable no-constant-binary-expression */
import { useEffect } from "react";

import userProfile from "../../styles/HomeStyles/userProfile.module.css";

import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
// import axiosInstance from "../../api/axios";
import { useUserData } from "../../context/UserContext";
export default function UserProfile() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { userData, error, getUserData } = useUserData();
  useEffect(() => {
    getUserData();
  }, []);

  const handleLogout = () => {
    navigate("/sign-in");
    logout();
  };

  if (error) return <div>Error: {error}</div>;
  if (!userData) return <div>Loading...</div>;
  const getMonthInfo = () => {
    const date = new Date();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const currentMonthIndex = date.getMonth() + 1; // 0 for January, ..., 11 for December
    const currentMonthName = monthNames[currentMonthIndex];
    const currentYear = date.getFullYear();

    // Calculate the number of days in the current month
    const daysInMonth = new Date(
      currentYear,
      currentMonthIndex + 1,
      0
    ).getDate();

    return { name: currentMonthName, days: daysInMonth };
  };

  const monthInfo = getMonthInfo();
  return (
    <>
      <section className={userProfile["user-profile"]}>
        <div className={userProfile["terms-conditions"]}>
          What is Prime Club ?
        </div>
        <div className={userProfile["info-container"]}>
          <h2>
            <span>Congratulations</span> {userData.name}!
          </h2>
          <p>You are now prime member</p>
          <img src="../../assets/tiers/gold-tier.jpg" alt="gold-tier" />
          <p>
            {userData.numberOfVisits >= 0 && userData.numberOfVisits <= 2
              ? "Your Tier is: Bronze"
              : userData.numberOfVisits === 3
              ? "Your Tier is: Silver"
              : userData.numberOfVisits === 4
              ? "Your Tier is: Gold"
              : ""}
          </p>
          <div className={userProfile["grid"]}>
            <p className={userProfile["no-of-visits"]}>
              <span className={userProfile["remaning-visits"]}>
                {2 - userData.numberOfVisits}
              </span>
              Visits remaining to use your cashback
            </p>
            <p className={userProfile["balance-info"]}>
              Your Balance
              <span className={userProfile["balance"]}>100 SR</span>
              <span className={userProfile["validty"]}>
                valid till{" "}
                <span
                  className={userProfile["date"]}
                >{`${monthInfo.days}-${monthInfo.name}`}</span>
              </span>
            </p>
          </div>
          <button className={userProfile["logout"]} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </section>
    </>
  );
}
