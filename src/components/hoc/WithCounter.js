import { useState } from "react";

const WithCounter = (WrappedComponent) => {
  const UpdatedComponent = () => {
    const [count, setCount] = useState(0);

    const incrementHandler = () => {
      setCount(count + 1);
    };

    return <WrappedComponent count={count} onIncrement={incrementHandler} />;
  };

  return UpdatedComponent;
};

export default WithCounter;
