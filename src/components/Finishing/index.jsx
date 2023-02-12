import React, { useContext } from 'react';
import { RegisterContext } from '../../context/RegisterContext';
import * as S from './style';

export const Finishing = () => {
  const { finishRegister } = useContext(RegisterContext);
  return (
    <div className="container">
      <h2>Finishing upx</h2>
      <h3>Double-check everything looks OK before confirming.</h3>
      <S.Finishing>
        <S.BlockPlan>
          <div className="plan">
            <span className="plan_title">Arcade (Monthly)</span>
            <a href="#">Change</a>
          </div>
          <span className="plan_price">$9/mo</span>
        </S.BlockPlan>

        <S.OtherService>
          <div className="other_title">Online service</div>
          <div className="other_price">+$1/mo</div>
        </S.OtherService>
        <S.OtherService>
          <div className="other_title">Online service</div>
          <div className="other_price">+$1/mo</div>
        </S.OtherService>
      </S.Finishing>
      <S.Total>
        <span className="total_title">Total (per month)</span>
        <span className="total_price">+$12/mo</span>
      </S.Total>
      <hr />
      <div className="button">
        <button onClick={finishRegister}>Confirm</button>
      </div>
    </div>
  );
};
