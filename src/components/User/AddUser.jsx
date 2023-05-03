import { VerifiedUserOutlined } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { UserContextDispatcher } from "../Context/UserProvider";
import { useContext, useRef } from "react";

const AddUser = (props) => {
  const setUser = useContext(UserContextDispatcher);

  const firstnameInput = useRef();
  const lastnameInput = useRef();
  const jobInput = useRef();

  const addUserHandler = () => {
    if (
      firstnameInput.current.value &&
      lastnameInput.current.value &&
      jobInput.current.value
    ) {
      setUser((users) => [
        ...users,
        {
          id: users.length + 1,
          firstname: firstnameInput.current.value,
          lastname: lastnameInput.current.value,
          job: jobInput.current.value,
        },
      ]);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
      <input
        type="text"
        className="rounded-md border px-4 py-2"
        placeholder="Firstname"
        ref={firstnameInput}
      />
      <input
        type="text"
        className="rounded-md border px-4 py-2"
        placeholder="Lastname"
        ref={lastnameInput}
      />
      <input
        type="text"
        className="rounded-md border px-4 py-2"
        placeholder="Job"
        ref={jobInput}
      />
      <Button
        variant="outlined"
        endIcon={<VerifiedUserOutlined />}
        onClick={addUserHandler}
      >
        Add User
      </Button>
    </div>
  );
};

export default AddUser;
