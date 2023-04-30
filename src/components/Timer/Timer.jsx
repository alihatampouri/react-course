import { RestartAltOutlined, VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";

const Timer = (props) => {
  const [status, setStatus] = useState(1);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("component did mount");
    const interval = setInterval(() => setCounter((count) => count + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
      <div className="flex justify-between col-start-2 border rounded-md py-2 px-4 items-center">
        <span>{status ? `${counter} second` : `Timer hidden`}</span>
        <div>
          <IconButton onClick={() => setStatus((current) => !current)}>
            {status ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
          </IconButton>
          <IconButton onClick={() => setCounter(0)}>
            <RestartAltOutlined />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Timer;
