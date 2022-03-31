import Header from "./../Header/index"
import Footer from "./../Footer/index"
import Habit from "../Habit/index";
import { Container, Title, Progress } from "./style";

export default function Today() {
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