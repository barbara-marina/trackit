import { useState, useContext } from "react";
import { Container, Input, Week, Weekday, Button, Footer, Header, Title} from "./style";
import { BsTrash } from "react-icons/bs";
import axios from "axios";
import UserContext from "../../contexts/UserContext";
import { ThreeDots } from "react-loader-spinner";

export default function Habit({type, setPlus, plus, habitData, setHabitList}) {
    const {data, updateTodayHabits} = useContext(UserContext);
    const [habit, setHabit] = useState({name: "", days: []});
    const [disabled, setDisabled] = useState(false);
    const week = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];

    function selectWeekday(weekday) {
        if (habit.days.includes(weekday)){
            setHabit({...habit, days: habit.days.filter(day => !(weekday===day))});
            return;
        }
        setHabit({...habit, days: [...habit.days, weekday]});
    }

    function updateNewHabits() {
        const URL_HABIT_LIST = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
        const config = {headers: { Authorization: `Bearer ${data.token}`}};
        const request = axios.get(URL_HABIT_LIST, config);
        request.then(response => setHabitList(response.data));
        request.catch(error => console.log(error));
    }

    function saveHabit() {
        if(habit.days.length===0){
            alert("Selecione pelo menos um dia da semana.");
            return;
        }

        const config = {headers: { Authorization: `Bearer ${data.token}`}};
        const URL_SAVE = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
        const request = axios.post(URL_SAVE, habit, config);
        setDisabled(true);
        request.then(() => {setPlus(false);
                            setDisabled(false);
                            setHabit({name: "", days: []});
                            updateNewHabits();
                            updateTodayHabits();
        });
        request.catch(r => {setDisabled(false);
                            (habit.name.length===0) && alert("Preencha o nome do hábito!");
        });
    }

    function deleteHabit(id) {
        if (window.confirm("Realmente deseja deletar esse hábito?")===false) return;

        const config = {headers: { Authorization: `Bearer ${data.token}`}};
        const URL_DELETE = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
        const request = axios.delete(URL_DELETE, config);
        request.then(() => {updateNewHabits();
                            updateTodayHabits();
        });
        request.catch(error => console.log(error));
    }
    
    if(type==="new") {
        return (
                <Container plus={plus}>
                    <Input type="test" disabled={disabled} placeholder="nome do hábito" 
                    value={habit.name} onChange={e => setHabit({...habit, name: e.target.value})}
                    required/>
                    <Week>
                        {week.map((e, i) => 
                        <Weekday type="button" key={e} disabled={disabled} 
                        isSelected={habit.days.includes(i)} onClick={() => selectWeekday(i)}>
                            {e[0]}
                        </Weekday>)}
                    </Week>
                    <Footer>
                        <Button save={false} disabled={disabled} type="button" onClick={() => setPlus(false)}>
                            Cancelar
                        </Button>
                        <Button save={true} disabled={disabled} type="button" onClick={saveHabit}>
                            {disabled 
                            ? <ThreeDots  width="43" height="11" color="white" ariaLabel="loading"/> 
                            : 'Salvar'}
                        </Button>
                    </Footer>
                </Container>
        );
    }

    if (type==="saved") {
        return (
            <Container plus={true}>
                <Header>
                    <Title>{habitData.name}</Title>
                    <BsTrash size={20} onClick={() => deleteHabit(habitData.id)}/>  
                </Header>
                <Week>
                    {week.map((e,i) =>
                    <Weekday key={e} isSelected={habitData.days.includes(i)}>
                        {e[0]}
                    </Weekday>)}
                </Week>
            </Container>
        );
    }
}