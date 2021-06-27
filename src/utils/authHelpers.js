// S5
export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("userInfo")) {
    console.log("usr info", JSON.parse(localStorage.getItem("userInfo")));
    return JSON.parse(localStorage.getItem("userInfo"));
  } else {
    return false;
  }
};
