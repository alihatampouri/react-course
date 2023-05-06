import { IconButton } from "@mui/material";
import { useStep, useStepActions } from "../Context/StepProvider";
import { AddOutlined, RemoveOutlined } from "@mui/icons-material";

const StepCounter = (props) => {
  const step = useStep();
  const {increment, decrement} = useStepActions();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
      <div className="flex justify-between col-start-2 border rounded-md py-2 px-4 items-center">
        <span>{step ? `${step} steps` : `No step has been taken yet`}</span>
        <div>
          <IconButton onClick={decrement}>
            <RemoveOutlined />
          </IconButton>
          <IconButton onClick={increment}>
            <AddOutlined />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default StepCounter;
