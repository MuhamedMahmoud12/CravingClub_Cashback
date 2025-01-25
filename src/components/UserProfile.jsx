import { useContext, useState } from "react";
import axiosInstance from "../api/axios";
import { AuthContext } from "../context/AuthContext";

const ProtectedPage = () => {
  const { accessToken } = useContext(AuthContext);
  const [data, setData] = useState(null);

  const fetchProtectedData = async () => {
    try {
      const response = await axiosInstance.get("/protected", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setData(response.data);
    } catch (error) {
      console.error("Error fetching protected data:", error);
      alert("You are not authorized to access this resource.");
    }
  };

  return (
    <div>
      <h1>Protected Page</h1>
      <button onClick={fetchProtectedData}>Fetch Protected Data</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default ProtectedPage;
