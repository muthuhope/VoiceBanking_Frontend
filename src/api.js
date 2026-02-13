const API_BASE = "http://localhost:8080";

export const api = (url, options = {}) => {
  const token = localStorage.getItem("token");

  return fetch(API_BASE + url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: "Bearer " + token }),
      ...options.headers,
    },
  });
};
