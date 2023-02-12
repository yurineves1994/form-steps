import { createContext, useState } from 'react';
import { useControlStep } from '../hooks/useControlStep';

import { stepsRegister } from '../pages/Home';

export const RegisterContext = createContext(null);

export const RegisterProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [infos, setInfos] = useState('');
  const [plan, setPlan] = useState('');
  const [additions, setAdditions] = useState([]);

  const { currentComponent, changeStep } = useControlStep(stepsRegister);

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
    setAdditions(additions);
    let total = 0;
    if (additions.onlineService.contratado) {
      total += additions.onlineService.price;
    }
    if (additions.largeStorage.contratado) {
      total += additions.largeStorage.price;
    }
    if (additions.customizable.contratado) {
      total += additions.customizable.price;
    }

    total += plan.plan.price;

    setUser({
      ...infos,
      ...plan,
      ...additions,
      total,
    });

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
  };

  return (
    <RegisterContext.Provider
      value={{
        currentComponent,
        saveInfos,
        savePlan,
        saveAddittions,
        finishRegister,
        user,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
