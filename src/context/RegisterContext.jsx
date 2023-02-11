import { createContext, useState } from 'react';
import { useControlStep } from '../hooks/useControlStep';

import { stepsRegister } from '../pages/Home';

export const RegisterContext = createContext(null);

export const RegisterProvider = ({ children }) => {
  const [infos, setInfos] = useState('');
  const [plan, setPlan] = useState('');
  const [additions, setAdditions] = useState([]);

  const { currentStep, currentComponent, changeStep } =
    useControlStep(stepsRegister);

  const saveInfos = (infos) => {
    setInfos(infos);
    console.log(infos);
    changeStep();
  };

  const savePlan = (plan) => {
    setPlan(plan);
    console.log(plan);
    changeStep();
  };

  const saveAddittions = (additions) => {
    console.log(additions);
    setAdditions(additions);
    changeStep();
  };

  const finishRegister = () => {
    const user = {
      ...infos,
      ...plan,
      ...additions,
    };
    changeStep();
    console.log(user);
    return user;
  };

  return (
    <RegisterContext.Provider
      value={{
        currentComponent,
        saveInfos,
        savePlan,
        saveAddittions,
        finishRegister,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
