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
`;

export const Form = styled.form`
    margin: 0 auto;
    padding: 50px 0px;
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 25px;

    label {
      width: 100%;
      height: 73px;

      border: 1px solid #564F98;
      border-radius: 8px;

      background: #F8F9FE;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      padding: 5px 25px;

      @media (max-width: 414px)  {
        padding: 5px 10px;
        font-size: 12px;
      }

      input {
        width: 20px;
        height: 20px;
        border-radius: 4px;
      }
      .infos_add {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .block_title {
        display: flex;
        flex-direction: column;
      }

      .title_add {
        font-weight: 700;
        font-size: 16px;
        line-height: 18px;
        color: #032958;
      }
      .subtitle_add {     
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #97989C;
      }

      .price_add {
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        text-align: right;
        color: #9A94FF;
      }      
    }

    
`;
