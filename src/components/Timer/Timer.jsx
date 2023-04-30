import { useEffect, useState } from "react";

const Timer = (props) => {
  const [status, setStatus] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("component did mount");
    const interval = setInterval(() => setCounter((count) => count + 1), 1000);
    return () => clearInterval(interval)
  }, []);

  return (
    <div>
      <span>{counter} second</span>
      <button>show</button>
      <button>reset</button>
    </div>
  );
};

export default Timer;
