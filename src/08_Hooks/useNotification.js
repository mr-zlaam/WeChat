import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const useNotification = () => {
  const errorMessage = (message) =>
    toast.error(message, {
      draggable: true,
      autoClose: 2000,
      hideProgressBar: true,
      position: "top-right",
      theme: "dark",
    });
  const successMessage = (message) =>
    toast.success(message, {
      draggable: true,
      autoClose: 2000,
      hideProgressBar: true,
      position: "top-center",
      theme: "dark",
    });

  return { errorMessage, successMessage };
};
