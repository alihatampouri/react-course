import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

const Welcome = (props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  useEffect(() => {
    console.log("Fisrtname", firstname);
  }, [firstname]);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8 rounded-xl border-solid border-2 border-gray-200 p-4">
      <TextField
        id="outlined-basic"
        label="Firstname"
        variant="outlined"
        onChange={(e) => setFirstname(e.target.value)}
        value={firstname}
      />
      <TextField
        id="outlined-basic"
        label="Lastname"
        variant="outlined"
        onChange={(e) => setLastname(e.target.value)}
        value={lastname}
      />
      <div className="border rounded-xl flex items-center justify-center">
        <span>
          Welcome {firstname&&lastname ? `${firstname} ${lastname}` : 'dear user'}
        </span>
      </div>
    </div>
  );
};

export default Welcome;
