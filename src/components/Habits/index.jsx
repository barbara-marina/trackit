import Footer from "../Footer/index";
import { Container, Title, MyHabits, Plus, Text } from "./style";
import Header from "../Header/index";
import Habit from "../Habit/index";

export default function Habits() {
    return (
        <>
            <Header/>
            <Container>
                <Title>
                    <MyHabits>Meu Hábitos</MyHabits>
                    <Plus>+</Plus>
                </Title>

                <Habit type="new"/>
                
                <Habit type="save"/>
                
               <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
            </Container>
            <Footer/>
        </>
    );
}