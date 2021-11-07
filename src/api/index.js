export const url = process.env.URL;

export const setHeaders = () => {
  const headers = {
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  };

  return headers;
};
