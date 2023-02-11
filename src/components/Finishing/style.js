import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    padding: 50px 100px;
    height: 100%;
    width: 100%;

    @media (max-width: 414px) {
        padding: 50px;
        width: 90%;
        height: auto;
        background-color: white;
        border-radius: 25px;
        z-index: 9999;
        position: absolute;
        left: 50%;
        top: 100px;
        transform: translateX(-50%);
    }

    .button {
      display: flex;
      align-items: center;
      justify-content: end;
    }
`;

export const Finishing = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0px 20px;
  margin: 35px 0;
  background: #F8F9FE;
  border-radius: 8px;
`;

export const BlockPlan = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #afafaf;
  padding: 20px 0;

  .plan {
    display: flex;
    flex-direction: column;
    gap: 5px;

    .plan_title {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 18px;
      color: #032958;
    }

    a {
      color: #97989C;
    }
  }
`;

export const OtherService = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;

  .other_title {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #97989C;
  }
  .other_price {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #032958;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  margin: 35px 0;
  background: #FFFF;
`;
