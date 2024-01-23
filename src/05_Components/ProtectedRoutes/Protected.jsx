import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
const Protected = ({ Component }) => {
  const navigate = useNavigate();
  const cookie = new Cookies();
  useEffect(() => {
    const auth_token = cookie.get("auth-token");
    const email_signin = cookie.get("emailForSignIn");
    if (!auth_token && !email_signin) return navigate("/");
  }, []);
  return (
    <>
      <div className="">
        <Component />
      </div>
    </>
  );
};

export default Protected;
