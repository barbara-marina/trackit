import Header from "./../Header/index"
import Footer from "./../Footer/index"
import { Container, Title, Progress } from "./style";

export default function Historic() {
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