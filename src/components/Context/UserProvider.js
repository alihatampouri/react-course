import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      firstname: "ali",
      lastname: "hatampouri",
      job: "programmer",
    },
    {
      firstname: "sobhan",
      lastname: "dolatkhah",
      job: "designer",
    },
  ]);

  return <UserContext.Provider value={users}>{children}</UserContext.Provider>;
};

export default UserProvider;
