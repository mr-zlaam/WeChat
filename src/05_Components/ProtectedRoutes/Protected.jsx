import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
const Protected = ({ Component }) => {
  const navigate = useNavigate();
  const cookie = new Cookies();

  const auth_token = cookie.get("auth-token");
  const email_signin = cookie.get("emailForSignIn");
  const user_details = JSON.parse(localStorage.getItem("user_details"));
  useEffect(() => {
    if (!user_details) return navigate("/login");
    if (!auth_token && !email_signin) return navigate("/login");
  }, []);

  if (user_details?.email) {
    return (
      <>
        <div className="">
          <Component />
        </div>
      </>
    );
  }
};

export default Protected;
