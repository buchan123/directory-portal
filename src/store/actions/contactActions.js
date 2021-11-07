import axios from "axios";
import { url, setHeaders } from "../../api";
import { toast } from "react-toastify";

export const getContacts = () => {
  return (dispatch) => {
    axios
      .get(`${url}/fetch-contacts`, setHeaders())
      .then((res) => {
        dispatch({
          type: "GET_CONTACTS",
          res,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getContact = (id) => {
  return (dispatch) => {
    axios
      .get(`${url}/contact/${id}`, setHeaders())
      .then((res) => {
        dispatch({
          type: "GET_CONTACT",
          res,
        });
      })
      .catch((error) => {
        toast.error(error.response?.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const addContact = (newContact) => {
  return (dispatch) => {
    axios
      .post(`${url}/add-contact`, { ...newContact }, setHeaders())
      .then((res) => {
        dispatch({
          type: "ADD_CONTACT",
          res,
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

export const deleteContact = (id) => {
  return (dispatch) => {
    axios
      .delete(`${url}/delete-contact/${id}`, setHeaders())
      .then(() => {
        dispatch({
          type: "DELETE_CONTACT",
          id,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response?.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const updateContact = (updatedContact, id) => {
  return (dispatch) => {
    axios
      .post(`${url}/modify-contact/${id}`, updatedContact, setHeaders())
      .then((res) => {
        dispatch({
          type: "UPDATE_CONTACT",
          res,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response?.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const sortByDate = () => {
  return (dispatch) => {
    dispatch({ type: "SORT_BY_DATE" });
  };
};

export const sortByName = () => {
  return (dispatch) => {
    dispatch({ type: "SORT_BY_NAME" });
  };
};
