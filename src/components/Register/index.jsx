import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "./../../assets/img/logo.png";
import loading from "./../../assets/img/loading.gif";
import { Container, Image, Form, Input, Button, LinkForward} from "./../../assets/styles/form";

export default function Register() {
    const [userData, setUserData] = useState({email: '', name: '', image: '', password: ''});
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();
    function submit(e) {
        e.preventDefault();
        const URL_SING_UP = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';
        const request = axios.post(URL_SING_UP, userData);
        setDisabled(true);
        request.then(r => {console.log(r.data);
                            navigate("/");
        });
        request.catch(e => {setDisabled(false);
                            console.log(e);
                            alert(`${e}! Preencha corretamente os campos!`);
        });
    }

    return (
        <Container>
            <Image src={logo}/>
            <Form onSubmit={submit}>
                <Input type="email" placeholder="email" value={userData.email} onChange={e => setUserData({...userData, email:e.target.value})} disabled={disabled}/>
                <Input type="password" placeholder="senha" value={userData.password} onChange={e => setUserData({...userData, password:e.target.value})} disabled={disabled}/>
                <Input type="text" placeholder="nome" value={userData.name} onChange={e => setUserData({...userData, name:e.target.value})} disabled={disabled}/>
                <Input type="url" placeholder="foto" value={userData.image} onChange={e => setUserData({...userData, image:e.target.value})} disabled={disabled}/>
                <Button type="submit" disabled={disabled}>{disabled ? <img src={loading} alt="loading"/> : "Cadastrar" }</Button>
            </Form>
            <LinkForward to="/">Já tem uma conta? Faça login!</LinkForward>
        </Container>
    );
}