import * as S from './style';
import IconAdvanced from '../../assets/icon-advanced.png';
import IconArcade from '../../assets/icon-arcade.png';
import IconPro from '../../assets/icon-pro.png';
import { RegisterContext } from '../../context/RegisterContext';
import { useContext, useReducer, useState } from 'react';

const targetPlan = (state, action) => {
  switch (action.type) {
    case 'ARCADE':
      return { ...state, type: 'arcade', price: 9.0 };
    case 'ADVANCED':
      return { ...state, type: 'advanced', price: 12.0 };
    case 'PRO':
      return { ...state, type: 'pro', price: 15.0 };
    case 'PERIOD':
      return { ...state, period: !state.period };
    default:
      return { state };
  }
};

export const Plan = () => {
  const { savePlan } = useContext(RegisterContext);
  //const [planActive, setplanActive] = useState(false);
  const [plan, planDispatch] = useReducer(targetPlan, {
    type: '',
    price: 0,
    period: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const planTarget = {
      plan,
      period: plan.period ? 'Yearly' : 'Monthly',
    };

    savePlan(planTarget);
  };
  return (
    <div className="container">
      <h2>Select your plan</h2>
      <h3>You have the option of monthy or yearly billing.</h3>
      <S.Form onSubmit={handleSubmit}>
        <div className="boxes">
          <input
            onClick={() => planDispatch({ type: 'ARCADE' })}
            type="checkbox"
            name="plan"
            id="arcade"
          />
          <S.Box htmlFor="arcade">
            <img src={IconArcade} />
            <div>
              <span className="title_box">Arcade</span>
              <span className="price_box">$9/mo</span>
            </div>
          </S.Box>
          <input
            onClick={() => planDispatch({ type: 'ADVANCED' })}
            type="checkbox"
            name="plan"
            id="advanced"
          />
          <S.Box htmlFor="advanced">
            <img src={IconAdvanced} />
            <div>
              <span className="title_box">Advanced</span>
              <span className="price_box">$12/mo</span>
            </div>
          </S.Box>
          <input
            onClick={() => planDispatch({ type: 'PRO' })}
            type="checkbox"
            name="plan"
            id="pro"
          />
          <S.Box htmlFor="pro">
            <img src={IconPro} />
            <div>
              <span className="title_box">Pro</span>
              <span className="price_box">$15/mo</span>
            </div>
          </S.Box>
        </div>
        <div className="box-toggle">
          <label htmlFor="">Monthly</label>
          <input
            onClick={() => planDispatch({ type: 'PERIOD' })}
            type="checkbox"
            name="toggle"
            id="toggle"
          />
          <label htmlFor="">Yearly</label>
        </div>
        <div className="button">
          <button type="submit">Next Step</button>
        </div>
      </S.Form>
    </div>
  );
};
