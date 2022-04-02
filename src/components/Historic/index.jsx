import Header from "./../Header/index"
import Footer from "./../Footer/index"
import { Container, Title, Progress } from "./style";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

export default function Historic() {
    const {data} = useContext(UserContext);
    const navigate = useNavigate();
    console.log(data);

    useEffect(() => !data.token && navigate("/"), [data.token, navigate]);

    return (
        <>
        <Header/>
        <Container>
            <Title>Histórico</Title>
            <Progress>Em breve você poderá ver o histórico dos seus hábitos aqui!</Progress>
        </Container>
        <Footer/>
        </>
    );
}