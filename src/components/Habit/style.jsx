import styled from "styled-components";

export const Container = styled.article`
    width: 90%;
    height: 180px;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`;
export const Input = styled.input`
    width: 100%;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 0 11px;
    margin-bottom: 10px;
    &::placeholder {
        font-size: 19.976px;
        color: #DBDBDB;
    }
`;
export const Week = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
export const Weekday = styled.div`
    width: 30px;
    height: 30px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 19.976px;
    color: #DBDBDB;
    cursor: pointer;
`;
export const Button = styled.button`
    width: 84px;
    height: 35px;
    background-color: ${props => props.save ? "#52B6FF" : "#FFFFFF"};
    color: ${props => props.save ? "#FFFFFF" : "#52B6FF"};
    border: none;
    border-radius: 4.63636px;
    font-family: 'Lexend Deca';
    font-size: 16px;
    margin-top: 29px;
    cursor: pointer;
`;
export const Footer = styled.footer`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
`;