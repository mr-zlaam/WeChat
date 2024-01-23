export const useNotification = (toast) => {
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
