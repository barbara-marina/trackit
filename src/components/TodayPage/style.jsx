import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    background-color: #F2F2F2;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 28px 17px;
`;
export const Title = styled.section`
    width: 100%;
    font-size: 23px;
    color: #126BA5;
`;
export const Subtitle = styled.h1`
    width: 100%;
    font-size: 18px;
    color: ${props => props.done ? "#8FC549" : "#BABABA"};
    margin: 5px 0 28px 0;
`;