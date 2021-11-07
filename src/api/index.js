export const url = "https://teledirectory-api.herokuapp.com/api";

export const setHeaders = () => {
  const headers = {
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  };

  return headers;
};
