import React from "react";
import { useNavigate } from "react-router-dom";

const LandingScreen = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="p-4">
        <h2 className="mt-70 font-bold text-2xl">Welcome to PopX</h2>
        <p className="w-50 mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <div className="justify-center">
          <button
            onClick={() => navigate("/signup")}
            className="bg-[#7431FE] mb-5 w-full p-2 rounded-sm text-white font-semibold cursor-pointer"
          >
            Create Account
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-purple-500 mb-5 w-full p-2 rounded-sm font-semibold cursor-pointer"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </>
  );
};

export default LandingScreen;
