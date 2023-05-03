import User from "./User";
import WithContainer from "../hoc/WithContainer";
import { UserContext } from "../Context/UserProvider";
import { useContext } from "react";

const UserList = (props) => {
  const users = useContext(UserContext);

  return (
    <>
      {users.map((user) => (
        <User
          firstname={user.firstname}
          lastname={user.lastname}
          job={user.job}
        />
      ))}
    </>
  );
};

export default WithContainer(UserList);
