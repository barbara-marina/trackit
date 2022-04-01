import { useState, useContext } from "react";
import { Container, Input, Week, Weekday, Button, Footer, Header, Title, Image } from "./style";
import trash from "./../../assets/img/trash.png";
import axios from "axios";
import TokenContext from "../../contexts/UserContext";

export default function Habit({type}) {
    const {token} = useContext(TokenContext);
    const [habit, setHabit] = useState({name: "", days: []});
    const week = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];

    function selectWeekday(w) {
        if (habit.days.includes(w)){
            setHabit({...habit, days: habit.days.filter((e) => w===e ? false : true)});
            return;
        }
        setHabit({...habit, days: [...habit.days, w]});
    }

    function saveHabit() {
        const config = {headers: { Authorization: `Bearer ${token}`}};
        const URL_SAVE = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
        const request = axios.post(URL_SAVE, habit, config);
        request.then(r => console.log(r));
        request.catch(r => console.log(r));
    }
    
    if(type==="new") {
        return (
                <Container>
                    <Input type="test" placeholder="nome do hábito" value={habit.name} onChange={e => setHabit({...habit, name: e.target.value})}/>
                    <Week>
                        {week.map((e, i) => <Weekday key={e} isSelected={habit.days.includes(i)} onClick={() => selectWeekday(i)}>{e[0]}</Weekday>)}
                    </Week>
                    <Footer>
                        <Button save={false}>Cancelar</Button>
                        <Button save={true} onClick={saveHabit}>Salvar</Button>
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
                    {week.map((e,i) => <Weekday key={e} isSelected={habit.days.includes(i)}>{e[0]}</Weekday>)}
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