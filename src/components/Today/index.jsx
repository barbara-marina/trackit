import Header from "./../Header/index"
import Footer from "./../Footer/index"
import Habit from "../Habit/index";
import { Container, Title, Progress } from "./style";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

export default function Today() {
    const {data} = useContext(UserContext);
    const navigate = useNavigate();
    console.log(data);

    useEffect(() => !data.token && navigate("/"), [data.token, navigate]);

    return (
        <>
        <Header/>
        <Container>
                <Title>Segunda, 17/05</Title>
                <Progress>Nenhum hábito concluído ainda</Progress>

                <Habit type="today"/>
                
            </Container>
        <Footer/>
        </>
    );
}