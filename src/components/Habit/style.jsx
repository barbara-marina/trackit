import styled from "styled-components";

export const Container = styled.form`
    width: 90%;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 18px;
    display: ${props => props.plus ? "flex" : "none"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`;
export const Input = styled.input`
    width: 100%;
    height: 45px;
    background-color: ${props => props.disabled ? '#F2F2F2' : '#FFFFFF'};
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 0 11px;
    margin-bottom: 10px;
    font-family: 'Lexend Deca';
    font-size: 20px;
    color: #666666;
    &::placeholder {
        font-size: 19.976px;
        color: ${props => props.disabled ? '#AFAFAF' : '#DBDBDB'};
    }
`;
export const Week = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;
export const Weekday = styled.div`
    width: 30px;
    height: 30px;
    background-color: ${props => props.isSelected ? "#CFCFCF" : "#FFFFFF"};
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 19.976px;
    color: ${props => props.isSelected ? "#FFFFFF" : "#DBDBDB"};
    cursor: pointer;
`;
export const Button = styled.button`
    width: 84px;
    height: 35px;
    background-color: ${props => props.save ? "#52B6FF" : "#FFFFFF"};
    color: ${props => props.save ? "#FFFFFF" : "#52B6FF"};
    ${props => props.disabled && 'opacity: 0.7' };
    border: none;
    border-radius: 4.63636px;
    font-family: 'Lexend Deca';
    font-size: 16px;
    margin-top: 29px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
export const Footer = styled.footer`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
`;
export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    
    myreact-icons {
        color: red;
    }
`;
export const Title = styled.h1`
    font-size: 20px;
    color: #666666;
`;
export const Image = styled.img`
    width: 13px;
    height: 15px;
    cursor: pointer;
`;