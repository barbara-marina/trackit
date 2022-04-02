import styled from "styled-components";

export const Container = styled.main`
    width: 100vw;
    height: 100vh;
    background-color: #F2F2F2;
    margin: 70px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
`;
export const Title = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 28px 17px;
`;
export const MyHabits = styled.h1`
    font-size: 23px;
    color: #126BA5;
`;
export const Plus = styled.h1`
    width: 40px;
    height: 35px;
    left: 317px;
    background-color: #52B6FF;
    color: #FFFFFF;
    border-radius: 5px;
    font-size: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
export const Text = styled.h2`
    font-size: 18px;
    text-align: justify;
    color: #666666;
    padding: 0 20px;
`;