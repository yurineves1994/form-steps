import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    padding: 50px 100px;
    height: 100%;
    width: 100%;

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
