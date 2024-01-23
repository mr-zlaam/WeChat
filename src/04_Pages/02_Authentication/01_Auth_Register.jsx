import { Link, useNavigate } from "react-router-dom";
import "./Auth_Register.scss";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNotification } from "../../08_Hooks/useNotification";
import { authUser, googleProvider } from "../../02_Firebase/firebase.config";
import { sendSignInLinkToEmail, signInWithPopup } from "firebase/auth";

import {
  getAuth,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
import Cookies from "universal-cookie";
import { ChatContext } from "../../00_Export";

const Auth_Register = () => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const { setUserDetails } = useContext(ChatContext);
  const navigate = useNavigate();
  const cookie = new Cookies();
  const notification = useNotification(toast);
  const { successMessage, errorMessage } = notification;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { firstName, lastName, email } = input;
      if (!firstName) return errorMessage("FirstName is Required!");
      if (firstName.length < 3)
        return errorMessage(" Name must be greater then 3 characters!");
      if (!lastName) return errorMessage("LastName is Required!");
      if (lastName.length < 3)
        return errorMessage(" Name must be greater then 3 characters!");
      if (!email) return errorMessage("Email is Required");
      if (!email.includes("@")) return errorMessage("Email must be valid!");

      await sendSignInLinkToEmail(authUser, email, {
        url: "http://localhost:5173/", // URL to handle the email link
        handleCodeInApp: true,
      });

      cookie.set("emailForSignIn", email);
      setInput({ firstName: "", email: "", lastName: "" });
      successMessage(
        "Sign-in link sent to your email. Please check your inbox."
      );
    } catch (error) {
      console.error(error);
    }
  };

  // Check if the current page URL is a sign-in with email link
  const checkSignInWithEmailLink = () => {
    const auth = getAuth();
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = cookie.get("emailForSignIn");
      if (!email) {
        navigate("/");
      }
      if (email) return navigate("/Home");

      signInWithEmailLink(auth, email, window.location.href)
        .then((result) => {
          const user = result.user;
          successMessage("You are signed in Successfully");
        })
        .catch((error) => {
          console.error(error);
          errorMessage(
            "You exceeds the limit of login with link. now Try with Google."
          );
        });
    }
  };

  useEffect(() => {
    checkSignInWithEmailLink();
  }, []);

  const handleLoginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(authUser, googleProvider);
      cookie.set("auth-token", result.user.refreshToken);
      setUserDetails(result);
      setTimeout(() => {
        navigate("/home");
      }, 2500);

      successMessage("Signed in successfully");
    } catch (error) {
      errorMessage("unknown issue during the login");
    }
  };
  return (
    <>
      <div className="auth_container">
        <div className={`form_container`}>
          <form>
            <input
              value={input.firstName}
              onChange={handleOnChange}
              name="firstName"
              placeholder=" First Name"
              type="text"
              className="border_dark"
            />
            <input
              value={input.lastName}
              onChange={handleOnChange}
              name="lastName"
              placeholder=" Last Name"
              type="text"
              className="border_dark"
            />
            <input
              value={input.email}
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
          <button onClick={handleLoginWithGoogle} className="btn_dark google">
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
