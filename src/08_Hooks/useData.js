import Cookies from "universal-cookie";

export const useData = () => {
  const cookie = new Cookies();
  const userDetails_Obj = {
    auth_token: cookie.get("auth-token"),
    email_signin: cookie.get("emailForSignIn"),
    user_details: JSON.parse(localStorage.getItem("user_details")),
  };
  return userDetails_Obj;
};
