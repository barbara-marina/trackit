import styled from "styled-components";

export const Container = styled.form`
    width: 90%;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 13px;
    display: ${props => props.plus ? "flex" : "none"};
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;
export const Data = styled.div`
    height: 70px;
`;
export const Title = styled.h1`
    width: 100%;
    font-size: 20px;
    color: #666666;
    margin-bottom: 10px;
`;
export const Text = styled.h2`
    font-size: 13px;
    color: #666666;
    display: flex;
    margin-bottom: 3px;
`;
export const Emphasis = styled.p`
    font-size: 13px;
    color:${props => (props.done || props.newRecord) ? '#8FC549' : '#666666'};
    padding-left: 3px;
`;