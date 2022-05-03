import axios from "axios";
import actionTypes from "../constants/actionTypes";

export const LoginAction = (username, password, navigate) => async (dispatch) => {
  var bodyFormData = new FormData();
  bodyFormData.append("username", username);
  bodyFormData.append("password", password);
  try {
    console.log("action...");
    const url = "https://test.notbot.in/super/login";
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "secret-key": "whats123App",
      },
    };
    // const response = await axios.post(url, { email, password });
    const response = await axios.post(url, bodyFormData, config);

    console.log("response", response);
    dispatch({
      type: actionTypes.LOGIN,
      payload: response.data,
    });
    navigate("/dashboard");
  } catch (error) {
    console.log(error);
  }
};
