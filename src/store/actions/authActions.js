import axios from "axios";
import { url } from "../../api";
import { toast } from "react-toastify";

export const signUp = (user) => {
  return (dispatch) => {
    axios
      .post(`${url}/signup`, user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);

        dispatch({
          type: "SIGN_UP",
          token: res.data.token,
        });
      })
      .catch((error) => {
        console.log(error.response);

        toast.error(error.response?.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const signIn = (username, password) => {
  return (dispatch) => {
    axios
      .post(`${url}/login`, { username, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);

        dispatch({
          type: "SIGN_IN",
          token: res.data.token,
        });
      })
      .catch((error) => {
        console.log(error.response);

        toast.error(error.response?.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const signOut = () => {
  return (dispatch) => {
    dispatch({
      type: "CLEAR_CONTACTS",
    });

    dispatch({
      type: "SIGN_OUT",
    });
  };
};

export const loadUser = () => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    if (token) {
      dispatch({
        type: "USER_LOADED",
        token,
      });
    } else return null;
  };
};
