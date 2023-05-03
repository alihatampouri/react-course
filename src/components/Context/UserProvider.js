import { createContext, useState } from "react";

export const UserContext = createContext();
export const UserContextDispatcher = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstname: "ali",
      lastname: "hatampouri",
      job: "programmer",
    },
    {
      id: 2,
      firstname: "sobhan",
      lastname: "dolatkhah",
      job: "designer",
    },
  ]);

  return (
    <UserContext.Provider value={users}>
      <UserContextDispatcher.Provider value={setUsers}>
        {children}
      </UserContextDispatcher.Provider>
    </UserContext.Provider>
  );
};

export default UserProvider;