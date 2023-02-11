import { createContext, useState } from 'react';
import { useControlStep } from '../hooks/useControlStep';
import { Plan } from '../components/Plan';
import { Additions } from '../components/Additions';
import { Finishing } from '../components/Finishing';
import { Finished } from '../components/Finished';
import { Form } from '../components/Form';

export const RegisterContext = createContext(null);

export const RegisterProvider = ({ children }) => {
  const [infos, setInfos] = useState('');
  const [plan, setPlan] = useState('');
  const [additions, setAdditions] = useState([]);

  const stepsRegister = [
    <Form />,
    <Plan />,
    <Additions />,
    <Finishing />,
    <Finished />,
  ];

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
