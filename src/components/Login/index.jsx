import logo from "./../../assets/img/logo.png";
import { ThreeDots } from "react-loader-spinner";
import { Container, Image, Form, Input, Button, LinkForward } from "./../../assets/styles/form";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../../contexts/UserContext";

export default function Login() {
    const [userData, setUserData] = useState({email: "", password: ""});
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();
    const {data, setData} = useContext(UserContext);
    
    function submit(e) {
        e.preventDefault();
        const URL_LOGIN = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
        const request = axios.post(URL_LOGIN, userData);
        setDisabled(true);
        request.then(r => {setData(r.data);
                           console.log(data);
                           navigate("/hoje");
        });
        request.catch(e => {setDisabled(false);
                            alert(`${e}! Preencha corretamente os campos!`);
        });
    }

    return (
        <Container>
            <Image src={logo}/>
            <Form onSubmit={submit}>
                <Input type="email" placeholder="email" value={userData.email} onChange={e => setUserData({...userData, email:e.target.value})} disabled={disabled} required/>
                <Input type="password" placeholder="senha" value={userData.password} onChange={e => setUserData({...userData, password:e.target.value})} disabled={disabled} required/>
                <Button type="submit" disabled={disabled}>{disabled ? <ThreeDots width="60" height="60" color="white" ariaLabel="loading"/> : "Entrar" }</Button>
            </Form>
            <LinkForward to="/cadastro"> Não tem uma conta? Cadastre-se!</LinkForward>
        </Container>
    );
}