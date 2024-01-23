export const useNotification = (toast) => {
  const firstNameError = () =>
    toast.error("First Name is  Required ", {
      draggable: true,
      autoClose: 2000,
      hideProgressBar: true,
      position: "bottom-right",
      theme: "dark",
    });
  const lastNameError = () =>
    toast.error("Last Name is also Required ", {
      draggable: true,
      autoClose: 2000,
      hideProgressBar: true,
      position: "bottom-right",
      theme: "dark",
    });
  const emailError = () =>
    toast.error("Email is also Required 😅", {
      draggable: true,
      autoClose: 2000,
      hideProgressBar: true,
      position: "bottom-right",
      theme: "dark",
    });
  return { firstNameError, lastNameError, emailError };
};
