import { Button } from "@mui/material";
import { useReducer } from "react";

const MultiCounter = (props) => {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "increment":
        return state + action.value;
      case "decrement":
        return state - action.value;
      default:
        return action.value;
    }
  }, 0);

  return (
    <div className="flex justify-between border rounded-md py-2 px-4 my-8 items-center">
      <span>number is {count}</span>
      <div>
        <Button
          variant="text"
          onClick={() => dispatch({ type: "increment", value: 1 })}
        >
          +1
        </Button>
        <Button
          variant="text"
          onClick={() => dispatch({ type: "increment", value: 5 })}
        >
          +5
        </Button>
        <Button
          variant="text"
          onClick={() => dispatch({ type: "increment", value: 10 })}
        >
          +10
        </Button>
        <Button
          variant="text"
          onClick={() => dispatch({ type: "decrement", value: 1 })}
        >
          -1
        </Button>
        <Button
          variant="text"
          onClick={() => dispatch({ type: "decrement", value: 5 })}
        >
          -5
        </Button>
        <Button
          variant="text"
          onClick={() => dispatch({ type: "decrement", value: 10 })}
        >
          -10
        </Button>
      </div>
    </div>
  );
};

export default MultiCounter;
