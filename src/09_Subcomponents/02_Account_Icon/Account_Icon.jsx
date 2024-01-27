import { RiAccountPinCircleFill } from "react-icons/ri";

import "./AccountIcon.scss";

import {
  AccountModal,
  ChatContext,
  useBtn_Class,
  useData,
  useThemeClass,
} from "../../00_Export";

import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import Cookies from "universal-cookie";

import { signOut } from "firebase/auth";

import { authUser } from "../../02_Firebase/firebase.config";

const AccountIcon = () => {
  const navigate = useNavigate();

  const cookie = new Cookies();

  const { isDarkMode } = useContext(ChatContext);

  const modal_bg = useThemeClass(!isDarkMode);

  const modal_btn_class = useBtn_Class(!isDarkMode);

  const data = useData();

  const customMail = data.email_signin;

  if (data.user_details === null) return;

  const { email, displayName, photoURL } = data.user_details;

  const handleAddAccount = () => {
    return navigate("/login");
  };
  const handleLogout = async () => {
    await signOut(authUser);

    localStorage.removeItem("user_details");

    cookie.remove("emailForSignIn");

    cookie.remove("auth-token");

    return navigate("/login");
  };
  return (
    <>
      <div className="account_icon_main">
        <RiAccountPinCircleFill className="account_icon" />
        <AccountModal
          photoURL={photoURL}
          displayName={displayName}
          customMail={customMail}
          email={email}
          handleLogout={handleLogout}
          handleAddAccount={handleAddAccount}
          modal_bg={modal_bg}
          modal_btn_class={modal_btn_class}
        />
      </div>
    </>
  );
};

export default AccountIcon;
