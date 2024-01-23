import "./Auth_Login.scss";
import { FaGoogle, FaFacebook } from "react-icons/fa";
const Auth = () => {
  return (
    <>
      <div className="auth_container">
        <div className={`form_container`}>
          <form>
            <input
              placeholder="Enter the email..."
              type="email"
              className="border_dark"
            />
            <button className={"btn_dark"}>Login</button>
          </form>
          <h4>OR</h4>
          <button className="btn_dark google">
            <FaGoogle size={25} color="white" className="google_icon" />
            Continue With Google
          </button>
          <button className="btn_disable google">
            <FaFacebook size={25} color="#dedede" className="google_icon" />
            Continue With Facebook
          </button>
        </div>
      </div>
    </>
  );
};

export default Auth;
