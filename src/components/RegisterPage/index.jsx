import { Container, Image, Form, Input, Button, LinkForward} from "../../assets/styles/form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import logo from "./../../assets/img/logo.png";
import axios from "axios";

export default function RegisterPage() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({email: "", name: "", image: "", password: ""});
    const [disabled, setDisabled] = useState(false);
    
    function signUp(e) {
        e.preventDefault();
        const URL_SINGUP = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';
        const request = axios.post(URL_SINGUP, userData);
        setDisabled(true);
        request.then(() => navigate("/"));
        request.catch(error => {setDisabled(false);
                            alert(`${error}! Preencha corretamente os campos!`);
        });
    }

    return (
        <Container>
            <Image src={logo}/>
            <Form onSubmit={signUp}>
                <Input type="email" placeholder="email" value={userData.email} 
                onChange={e => setUserData({...userData, email:e.target.value})} 
                disabled={disabled} required/>
                <Input type="password" placeholder="senha" value={userData.password} 
                onChange={e => setUserData({...userData, password:e.target.value})} 
                disabled={disabled} required/>
                <Input type="text" placeholder="nome" value={userData.name} 
                onChange={e => setUserData({...userData, name:e.target.value})} 
                disabled={disabled} required/>
                <Input type="url" placeholder="foto" value={userData.image} 
                onChange={e => setUserData({...userData, image:e.target.value})} 
                disabled={disabled} required/>
                <Button type="submit" disabled={disabled}>
                    {disabled ? <ThreeDots width="60" height="60" color="white" ariaLabel="loading"/> 
                    : "Cadastrar" }
                </Button>
            </Form>
            <LinkForward to="/">Já tem uma conta? Faça login!</LinkForward>
        </Container>
    );
}