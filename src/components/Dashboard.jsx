import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CreateUserForm from "./CreateUserForm";

const Dashboard = () => {
  const tokenData = useSelector((state) => state.auth);

  //!   Checks if user is authorized or not ____START
  const navigate = useNavigate();
  useEffect(() => {
    if (tokenData.loginToken === null) {
      navigate("/");
    }
  }, [tokenData, navigate]);
  //!   Checks if user is authorized or not ____END-->

  return (
    <div className="w-full">
      <div className="py-[30px] flex justify-center items-center text-2xl font-bold">
        <h1>Super Admin</h1>
      </div>
      <div className="flex justify-center items-center">
        <CreateUserForm />
      </div>
    </div>
  );
};

export default Dashboard;
