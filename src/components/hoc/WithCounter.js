import { useState } from "react";

const WithCounter = (WrappedComponent, incrementValue = 1) => {
  const UpdatedComponent = (props) => {
    const [count, setCount] = useState(0);

    const incrementHandler = () => {
      setCount(count + incrementValue);
    };

    return <WrappedComponent count={count} onIncrement={incrementHandler} {...props} />;
  };

  return UpdatedComponent;
};

export default WithCounter;
