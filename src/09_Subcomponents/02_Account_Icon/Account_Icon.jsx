import { RiAccountPinCircleFill } from "react-icons/ri";
import "./AccountIcon.scss";
import {
  ChatContext,
  useBtn_Class,
  useData,
  useThemeClass,
} from "../../00_Export";
import { useContext } from "react";
import { MdAccountCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { signOut } from "firebase/auth";
import { authUser } from "../../02_Firebase/firebase.config";
import { IoMdAdd } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";

const AccountIcon = () => {
  const navigate = useNavigate();
  const cookie = new Cookies();
  const { isDarkMode } = useContext(ChatContext);
  const modal_bg = useThemeClass(!isDarkMode);
  const modal_btn_class = useBtn_Class(!isDarkMode);
  const data = useData();
  const customMail = data.email_signin;
  if (data.user_details === null) return navigate("/login");
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
        <div
          className={`account_tooltip_modal account_modal_container ${modal_bg}`}
        >
          <div className="img_logo_account">
            {photoURL ? (
              <img src={photoURL} alt={`${displayName} img`} />
            ) : (
              <MdAccountCircle />
            )}
          </div>
          <div className="greet_title">
            <h1>Hello {displayName ? displayName : <span>User</span>}!</h1>
            <p>{customMail ? customMail : email}</p>
          </div>
          <div className="account_mdal_btns">
            <button
              className={`${modal_btn_class} account_modal_btn`}
              onClick={handleLogout}
            >
              <span>Logout </span>
              <FiLogOut />
            </button>
            <button
              className={`${modal_btn_class} account_modal_btn`}
              onClick={handleAddAccount}
            >
              <span>Add Account</span>
              <IoMdAdd />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountIcon;
