import axios from "axios";

export const AllUsers = () => {
  // useUserAuth()

  const onClickHandel = () => {
    getAllUsers();
  };

  return (
    <>
      <button onClick={() => onClickHandel()}></button>
    </>
  );
};
