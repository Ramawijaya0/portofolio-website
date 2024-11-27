import React from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Admin Panel</h1>
      <button
        onClick={handleLogout}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
      <div className="mt-6">
        {/* Tambahkan fitur admin di sini */}
        <p>Konten admin dapat ditambahkan di sini.</p>
      </div>
    </div>
  );
};

export default Dashboard;
