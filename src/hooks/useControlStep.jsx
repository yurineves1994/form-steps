import { useState } from 'react';

export const useControlStep = (steps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const changeStep = () => {
    currentStep < 5 && setCurrentStep(currentStep + 1);
    console.log(currentStep);
  };

  return {
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
  };
};
