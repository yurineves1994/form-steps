import * as S from './style';
import IconAdvanced from '../../assets/icon-advanced.png';
import IconArcade from '../../assets/icon-arcade.png';
import IconPro from '../../assets/icon-pro.png';
import { RegisterContext } from '../../context/RegisterContext';
import { useContext, useState } from 'react';

export const Plan = () => {
  const { savePlan } = useContext(RegisterContext);
  const [planActive, setplanActive] = useState(false);
  const [plan, setPlan] = useState('');
  const [toggle, setToggle] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const planTarget = {
      plan,
      period: toggle ? 'Yearly' : 'Monthly',
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
            onClick={(e) => setPlan(e.target.value)}
            type="checkbox"
            name="plan"
            id="arcade"
            value={'arcade'}
          />
          <S.Box htmlFor="arcade">
            <img src={IconArcade} />
            <div>
              <span className="title_box">Arcade</span>
              <span className="price_box">$9/mo</span>
            </div>
          </S.Box>
          <input
            onClick={(e) => setPlan(e.target.value)}
            type="checkbox"
            name="plan"
            id="advanced"
            value={'advanced'}
          />
          <S.Box htmlFor="advanced">
            <img src={IconAdvanced} />
            <div>
              <span className="title_box">Advanced</span>
              <span className="price_box">$12/mo</span>
            </div>
          </S.Box>
          <input
            onClick={(e) => setPlan(e.target.value)}
            type="checkbox"
            name="plan"
            id="pro"
            value={'pro'}
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
            onClick={() => setToggle(!toggle)}
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
