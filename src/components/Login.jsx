import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginAction } from "../redux/actions/auth.actions";

const Login = () => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(LoginAction(username, pass, navigate));
  };

  

  return (
    <div className="flex flex-col w-full items-center gap-[40px] pt-10 glass-back h-screen">
      <h1 className="text-xl lg:text-2xl text-neutral-800 font-medium">
        Please enter your credentials to login!
      </h1>
      <form onSubmit={handleLogin} className="flex  flex-col gap-[30px]">
        <TextField
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="outlined-basic"
          label="Username"
          type="text"
          variant="outlined"
          className="w-[80vw] lg:w-[60vw]"
          autoComplete="off"
        />
        <TextField
          name="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
          className="!flex"
          autoComplete="off"
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
