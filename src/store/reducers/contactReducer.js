import { toast } from "react-toastify";

const contactReducer = (contacts = [], action) => {
  switch (action.type) {
    case "GET_CONTACTS":
      return action.res.data;
    case "GET_CONTACT":
      return contacts.map((contact) =>
        contact._id === action.res.data._id ? action.res.data : contact
      );
    case "ADD_CONTACT":
      toast.success("A contact was added...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return [action.res.data, ...contacts];
    case "UPDATE_CONTACT":
      toast.success("A contact was updated...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return contacts.map((contact) =>
        contact._id === action.res.data._id ? action.res.data : contact
      );
    case "DELETE_CONTACT":
      toast.success("A contact was deleted...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return contacts.filter((contact) => contact._id !== action.id);
    case "SORT_BY_NAME":
      toast.success("Sorted By Name");
      return [...contacts].sort((a, b) =>
        a.firstName.localeCompare(b.firstName)
      );
    case "SORT_BY_DATE":
      toast.success("Sorted By Date Added");
      return [...contacts].sort(
        (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)
      );
    case "CLEAR_CONTACTS":
      return [];
    default:
      return contacts;
  }
};

export default contactReducer;
