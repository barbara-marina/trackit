import { useState } from "react";
import { Container, Input, Week, Weekday, Button, Footer, Header, Title, Image } from "./style";
import trash from "./../../assets/img/trash.png";

export default function Habit({type}) {
    const [habit, setHabit] = useState("");
    const [isSelected, setIsSelected] = useState([]);
    const week = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];

    function selectWeekday(w) {
        if (isSelected.includes(w)){
            setIsSelected(isSelected.filter((e) => w===e ? false : true));
            return;
        }
        setIsSelected([...isSelected, w]);
    }
    
    if(type==="new") {
        return (
                <Container>
                    <Input type="test" placeholder="nome do hábito" value={habit} onChange={e => setHabit(e.target.value)}/>
                    <Week>
                        {week.map((e) => <Weekday key={e} isSelected={isSelected.includes(e)} onClick={() => selectWeekday(e)}>{e[0]}</Weekday>)}
                    </Week>
                    <Footer>
                        <Button save={false}>Cancelar</Button>
                        <Button save={true}>Salvar</Button>
                    </Footer>
                </Container>
        );
    }

    if (type==="save") {
        return (
            <Container>
                <Header>
                    <Title>Ler um capítulo de livro</Title>
                    <Image src={trash} />  
                </Header>
                
                <Week>
                    {week.map((e) => <Weekday key={e} isSelected={isSelected.includes(e)}>{e[0]}</Weekday>)}
                </Week>
            </Container>
        );
    }

    if (type==="today") {
        return (
            <Container>
                <Title>Ler um capítulo de livro</Title>
            </Container>
        );
    }
}