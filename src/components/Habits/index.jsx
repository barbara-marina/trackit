import Footer from "../Footer/index";
import { Container, Title, MyHabits, Plus, Text } from "./style";
import Header from "../Header/index";
import Habit from "../Habit/index";
import { useContext } from "react";
import TokenContext from "../../contexts/UserContext";

export default function Habits() {
    const {token} = useContext(TokenContext);
    console.log(token);
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