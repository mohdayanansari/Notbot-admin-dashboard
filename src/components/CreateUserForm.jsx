import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useSelector } from "react-redux";
import axios from "axios";

const CreateUserForm = () => {
  const [input, setInput] = useState({
    id: "",
    userEmail: "",
    adminEmail: "",
    apiKey: "",
    namespace: "",
    activateBot: true,
    flowId: "",
  });

  const token = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setInput({
      ...input,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("USER INPUT::", input);
    const url = "https://api.notbot.in/super/setup";
    const config = {
      headers: {
        "secret-key": "whats123App",
        "secret-username": "aayush",
        Authorization: `Bearer ${token.loginToken.access_token}`,
      },
    };
    const data = {
      _id: input.id,
      users: [input.userEmail],
      admin: input.adminEmail,
      "360-api-key": input.apiKey,
      namespace: input.namespace,
      activate_bot: input.activateBot,
      flow_id: input.flowId,
    };
    try {
      await axios.post(url, data, config);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="flex flex-col lg:w-[65%] shadow-2xl rounded-lg border border-gray-200 p-5 gap-5 items-center glass-back"
      onSubmit={handleSubmit}
    >
      <TextField
        name="id"
        value={input.id}
        onChange={handleChange}
        id="outlined-basic"
        label="ID"
        type="text"
        required
        variant="outlined"
        className="w-[80vw] lg:w-[60vw]"
        autoComplete="off"
      />
      <TextField
        name="userEmail"
        value={input.userEmail}
        onChange={handleChange}
        id="outlined-basic"
        label="User Email"
        type="email"
        variant="outlined"
        className="w-[80vw] lg:w-[60vw]"
        autoComplete="off"
      />
      <TextField
        name="adminEmail"
        value={input.adminEmail}
        onChange={handleChange}
        id="outlined-basic"
        label="Admin Email"
        required
        type="email"
        variant="outlined"
        className="w-[80vw] lg:w-[60vw]"
        autoComplete="off"
      />
      <TextField
        name="apiKey"
        value={input.apiKey}
        onChange={handleChange}
        id="outlined-basic"
        label="360 API Key"
        type="text"
        required
        variant="outlined"
        className="w-[80vw] lg:w-[60vw]"
        autoComplete="off"
      />
      <TextField
        name="namespace"
        value={input.namespace}
        onChange={handleChange}
        id="outlined-basic"
        required
        label="Namespace"
        type="text"
        variant="outlined"
        className="w-[80vw] lg:w-[60vw]"
        autoComplete="off"
      />
      {/* activated bot field (boolean) */}
      <div className="flex justify-start w-[95%]">
        <FormControlLabel
          control={
            <Checkbox
              type="checkbox"
              name="activateBot"
              value={input.activateBot}
              onChange={handleChange}
            />
          }
          label="Activate Bot"
        />
      </div>
      <TextField
        name="flowId"
        value={input.flowId}
        onChange={handleChange}
        id="outlined-basic"
        label="Flow ID"
        type="text"
        variant="outlined"
        className="w-[80vw] lg:w-[60vw]"
        autoComplete="off"
      />
      <Button type="submit" variant="contained">
        Create User
      </Button>
    </form>
  );
};

export default CreateUserForm;
