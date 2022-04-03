import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.footer`
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    padding: 0 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
`;
export const Option = styled.h2`
    font-size: 18px;
    color: #52B6FF;
    cursor: pointer;
`;
export const LinkToday = styled(Link)`
    width: 91px;
    height: 91px;position: fixed;
    bottom: 10px;
    left: calc(50vw - 45.5px);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Progress = styled.h1`
    color: #FFFFFF;
    font-size: 18px;
    text-align: center;
    border-radius: 50%;
    position: fixed;
    z-index: 3;
    cursor: pointer;
`;