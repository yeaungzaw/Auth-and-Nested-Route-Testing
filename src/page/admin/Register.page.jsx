import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PostUserToServer } from "../../service/postUser.server";

const RegisterPage = () => {
  const nav = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    const result = await PostUserToServer("user", JSON.stringify(data));
    if (result) {
      nav("/");
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
          <img className="w-60" src="../../../register.svg" alt="Sign In" />

          <div className="flex flex-col gap-3">
            {/* Username */}
            <div className="flex">
              <input
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="border border-gray-400 focus-within:outline-gray-400 px-4 py-2 text-xs tracking-wide rounded-sm flex-grow"
                placeholder="Username"
                type="text"
                name="text"
                id="text"
                required
              />
            </div>
            {/* Email */}
            <div className="flex">
              <input
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
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
                  setFormData((prev) => ({ ...prev, password: e.target.value }))
                }
                className="border border-gray-400 focus-within:outline-gray-400 px-4 py-2 text-xs tracking-wide rounded-sm flex-grow"
                placeholder="Enter your password"
                type="password"
                name="password"
                id="password"
                required
              />
            </div>
            {/* Register Button */}
            <button
              type="submit"
              className="bg-[#6C63FF] text-white font-bold text-sm py-2 rounded-md mt-3"
            >
              Sign up
            </button>

            {/* Sign in */}
            <div className="mt-3 flex justify-center">
              <div className="flex gap-2">
                <p className="text-sm text-gray-500 underline pb-1">
                  Already do you have an account?
                </p>
                <Link to={"/"}>
                  <p className="text-sm text-blue-500 font-bold cursor-pointer">
                    Sign in
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

export default RegisterPage;
