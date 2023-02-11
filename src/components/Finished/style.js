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

    .finished {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 25px;

      p {
        color: #97989C;
        text-align: center;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
      }
    }
`;
