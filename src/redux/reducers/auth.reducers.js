import actionTypes from "../constants/actionTypes";

const initialState = {
  loginToken: null,
};

export const authReducer = (state = initialState, action) => {
//   console.log("Reducer:::", action);
  if (action.type === actionTypes.LOGIN) {
    return  {loginToken: action.payload} ;
  } else if (action.type === actionTypes.LOGIN_FAILED) {
    return { ...state, loginToken: null };
  } else return { ...state };
};
