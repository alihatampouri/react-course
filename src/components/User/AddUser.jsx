import { VerifiedUserOutlined } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";

const AddUser = (props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
      <TextField id="outlined-basic" label="Firstname" variant="outlined" />
      <TextField id="outlined-basic" label="Lastname" variant="outlined" />
      <TextField id="outlined-basic" label="Job" variant="outlined" />
      <Button variant="outlined" endIcon={<VerifiedUserOutlined />}>
        Add User
      </Button>
    </div>
  );
};

export default AddUser;
