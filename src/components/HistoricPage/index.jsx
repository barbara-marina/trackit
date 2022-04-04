import { Container, Title, Subtitle } from "./style";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import Header from "./../Header/index"
import Footer from "./../Footer/index"

export default function HistoricPage() {
    const {data} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => !data.token && navigate("/"), [data.token, navigate]);

    return (
        <>
        <Header/>
        <Container>
            <Title>Histórico</Title>
            <Subtitle>Em breve você poderá ver o histórico dos seus hábitos aqui!</Subtitle>
        </Container>
        <Footer/>
        </>
    );
}