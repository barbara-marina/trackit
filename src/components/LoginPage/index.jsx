import { Container, Image, Form, Input, Button, LinkForward } from "../../assets/styles/form";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../../contexts/UserContext";
import logo from "./../../assets/img/logo.png";
import axios from "axios";

export default function LoginPage() {
    const navigate = useNavigate();
    const {setData} = useContext(UserContext);
    const [userData, setUserData] = useState({email: "", password: ""});
    const [disabled, setDisabled] = useState(false);
    
    function signIn(e) {
        e.preventDefault();
        const URL_LOGIN = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
        const request = axios.post(URL_LOGIN, userData);
        setDisabled(true);
        request.then(response => {setData(response.data);
                           navigate("/hoje");
        });
        request.catch(error => {setDisabled(false);
                                alert(`${error}! Preencha corretamente os campos!`);
        });
    }

    return (
        <Container>
            <Image src={logo}/>
            <Form onSubmit={signIn}>
                <Input type="email" placeholder="email" value={userData.email} 
                onChange={e => setUserData({...userData, email:e.target.value})} 
                disabled={disabled} required/>
                <Input type="password" placeholder="senha" value={userData.password} 
                onChange={e => setUserData({...userData, password:e.target.value})} 
                disabled={disabled} required/>
                <Button type="submit" disabled={disabled}>
                    {disabled ? <ThreeDots size={60} color="#FFF" ariaLabel="loading"/> : "Entrar" }
                </Button>
            </Form>
            <LinkForward to="/cadastro">Não tem uma conta? Cadastre-se!</LinkForward>
        </Container>
    );
}