import { useState } from 'react';

export const stepsList = [
  {
    name: 'your info',
    status: 'pendent',
  },
  {
    name: 'select plan',
    status: 'pendent',
  },
  {
    name: 'add-ons',
    status: 'pendent',
  },
  {
    name: 'summary',
    status: 'pendent',
  },
];

export const useControlStep = (steps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const changeStep = () => {
    if (currentStep < 5) {
      stepsList[currentStep].status = 'sucess';
      setCurrentStep(currentStep + 1);
    }
  };

  return {
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
    stepsList,
  };
};
