import { Container, Input, Week, Weekday, Button, Footer } from "./style";

export default function Habit() {
    const week = ['S','T','Q','Q','S','S','D'];
    return (
        <Container>
            <Input placeholder="nome do hábito"/>
            <Week>
                {week.map((e) => <Weekday>{e}</Weekday>)}
            </Week>
            <Footer>
                <Button save={false}>Cancelar</Button>
                <Button save={true}>Salvar</Button>
            </Footer>
        </Container>
    );
}