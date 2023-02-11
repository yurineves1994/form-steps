import styled from 'styled-components';

export const Container = styled.div`
    width: 940px;
    height: 601px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 0px 20px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    &::after {
        content: "";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 10px;
        background-image: url(src/assets/bg-sidebar.svg);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        border-radius: 10px;  
        height: 590px;
        width: 250px;
    }
`;
export const Content = styled.div`
    padding-left: 270px;
    height: 100%;
`;

export const SideBar = styled.div`
    height: 590px;
    width: 250px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    z-index: 9999;
`;
