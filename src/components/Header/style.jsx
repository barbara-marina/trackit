import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding: 0 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
`;
export const Logo = styled.h1`
    font-family: 'Playball';
    color: #FFFFFF;
    font-size: 40px;
    cursor: pointer;
`;
export const Profile = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 50%;
    object-fit: cover;
`;