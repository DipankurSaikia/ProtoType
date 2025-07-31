import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ShowToast } from "../utils/ShowToast";

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

//    useEffect(() => {
//     const cookieUser = Cookies.get("user");
//     if (!cookieUser) {
//       navigate("/login");
//     } else {
//       setUser(JSON.parse(cookieUser));
//     }
//   }, [navigate]);

  const handleLogout = () => {
    logout();

     try {
      ShowToast("Logout successful", "success");
    } catch (error) {
      console.log(error)
    }

    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user?.name || user?.email}!</h1>
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
