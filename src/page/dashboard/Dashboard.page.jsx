import React, { useEffect } from "react";
import { useNavigate, Outlet, Link } from "react-router-dom";

const DashboardPage = () => {
  const nav = useNavigate();
  const data = localStorage.getItem("auth");

  useEffect(() => {
    if (!data) {
      nav("/");
    }
  }, []);

  return (
    <div className="grid grid-cols-12 h-screen pt-10 pl-20">
      <div className="col-span-3">
        <ul className="flex flex-col gap-2">
          <Link to={"/dashboard"}>
            <li>Dashboard</li>
          </Link>
          <Link to={"/dashboard/blog"}>
            <li>Blog</li>
          </Link>
          <Link to={"/dashboard/user"}>
            <li>User</li>
          </Link>
        </ul>
      </div>
      <div className="col-span-9">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardPage;
