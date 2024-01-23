const Home = () => {
  const user_details = localStorage.getItem("user_details");
  const newUser_Details = JSON.parse(user_details);
  console.log(newUser_Details.displayName);
  const username = newUser_Details.displayName;
  console.log(username);
  return (
    <>
      <div className="">{username}</div>
      <div>{newUser_Details.photoURL}</div>
      <img src={newUser_Details.photoURL} alt="hello" />
    </>
  );
};

export default Home;
