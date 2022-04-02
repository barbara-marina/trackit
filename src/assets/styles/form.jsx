import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Image = styled.img`
    width: 180px;
    height: 178px;
    margin: 68px 0 35px 0;
`;
export const Form = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 6px;
`;
export const Input = styled.input`
    width: 100%;
    height: 45px;
    background-color: ${props => props.disabled ? '#F2F2F2' : '#FFFFFF'};
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    padding-left: 10px;
    font-family: 'Lexend Deca';
    font-size: 20px;
    color: #666666;

    &&::placeholder {
    font-family: 'Lexend Deca';
    font-size: 19.976px;
    color: ${props => props.disabled ? '#AFAFAF' : '#DBDBDB'};
    }
`;
export const Button = styled.button`
    width: 100%;
    height: 45px;
    border: none;
    border-radius: 4.63636px;
    font-family: 'Lexend Deca';
    font-size: 21px;
    color: #FFFFFF;
    background-color: #52B6FF;
    ${props => props.disabled && 'opacity: 0.7' };
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2px;
    cursor: pointer;
`;
export const LinkForward = styled(Link)`
    font-family: 'Lexend Deca';
    font-size: 14px;
    text-align: center;
    text-decoration: underline;
    color: #52B6FF;
    margin-top: 25px;
`;