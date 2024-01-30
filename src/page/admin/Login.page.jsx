import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Auth } from "../../service/user.server";

const LoginPage = () => {
  const nav = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await Auth("user", formData);

    if (data) {
      localStorage.setItem("auth", JSON.stringify(formData));
      nav("/dashboard");
    }
  };

  useEffect(() => {
    const finder = localStorage.getItem("auth");

    if (finder) {
      nav("/dashboard");
    }
  }, []);

  return (
    <div className="h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-10">
          <img className="w-60" src="../../../sign-in.svg" alt="Sign In" />

          <div className="flex flex-col gap-3">
            {/* Email */}
            <div className="flex">
              <input
                value={formData.email}
                onChange={(e) =>
                  setFormData((pre) => ({ ...pre, email: e.target.value }))
                }
                className="border border-gray-400 focus-within:outline-gray-400 px-4 py-2 text-xs tracking-wide rounded-sm flex-grow"
                placeholder="Enter your email"
                type="email"
                name="email"
                id="email"
                required
              />
            </div>
            {/* Password */}
            <div className="flex">
              <input
                value={formData.password}
                onChange={(e) =>
                  setFormData((pre) => ({ ...pre, password: e.target.value }))
                }
                className="border border-gray-400 focus-within:outline-gray-400 px-4 py-2 text-xs tracking-wide rounded-sm flex-grow"
                placeholder="Enter your password"
                type="password"
                name="password"
                id="password"
                required
              />
            </div>
            {/* Log In Button */}
            <button
              type="submit"
              className="bg-[#6C63FF] text-white font-bold text-sm py-2 rounded-md mt-3"
            >
              Log In
            </button>

            {/* Register */}
            <div className="mt-3 flex justify-center">
              <div className="flex gap-2">
                <p className="text-sm text-gray-500 underline pb-1">
                  Don't have an account?
                </p>
                <Link to={"/register"}>
                  <p className="text-sm text-blue-500 font-bold cursor-pointer">
                    Sign up
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
