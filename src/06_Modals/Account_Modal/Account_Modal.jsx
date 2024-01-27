import {} from "react";
import { FiLogOut } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import "./AccountModal.scss";
const AccountModal = ({
  photoURL,
  displayName,
  customMail,
  email,
  handleLogout,
  handleAddAccount,
  modal_bg,
  modal_btn_class,
}) => {
  return (
    <>
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
    </>
  );
};

export default AccountModal;
