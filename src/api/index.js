export const url = "https://teledirectory-api.herokuapp.com";

export const setHeaders = () => {
  const headers = {
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  };

  return headers;
};
