import { createContext, useContext, useState } from "react";

const StepContext = createContext();
const StepContextDispatcher = createContext();

const StepProvider = ({ children }) => {
  const [step, setStep] = useState(0);

  return (
    <StepContext.Provider value={step}>
      <StepContextDispatcher.Provider value={setStep}>
        {children}
      </StepContextDispatcher.Provider>
    </StepContext.Provider>
  );
};

export default StepProvider;

export const useStep = () => useContext(StepContext);
export const useStepActions = () => useContext(StepContextDispatcher);
