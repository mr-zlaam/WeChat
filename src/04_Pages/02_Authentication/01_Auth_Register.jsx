import { Link } from "react-router-dom";
import "./Auth_Login.scss";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNotification } from "../../08_Hooks/useNotification";
// import { firstNameError, lastNameError, emailError } from "../../00_Export";

const Auth_Register = () => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const notification = useNotification(toast);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email } = input;
    if (!firstName) return notification.firstNameError();
    if (!lastName) return notification.lastNameError();
    if (!email) return notification.emailError();
    // Register Funtionality
  };
  const handleLoginWithGoogle = async () => {};
  return (
    <>
      <div className="auth_container">
        <div className={`form_container`}>
          <form>
            <input
              onChange={handleOnChange}
              name="firstName"
              placeholder=" First Name"
              type="text"
              className="border_dark"
            />
            <input
              onChange={handleOnChange}
              name="lastName"
              placeholder=" Last Name"
              type="text"
              className="border_dark"
            />
            <input
              onChange={handleOnChange}
              placeholder=" Email "
              name="email"
              type="email"
              className="border_dark"
            />
            <button onClick={handleRegister} className={"btn_dark"}>
              login
            </button>
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
          <span>
            Already have an account? &nbsp; <Link>Login</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Auth_Register;
