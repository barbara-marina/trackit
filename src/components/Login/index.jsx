import { Link } from "react-router-dom";
import logo from "./../../assets/img/logo.png";
import { Container, Image, Form, Input, Button, Forward } from "./../../assets/styles/form";

export default function Login() {
    return (
        <Container>
            <Image src={logo}/>
            <Form>
                <Input placeholder="email"/>
                <Input placeholder="senha"/>
                <Button>Entrar</Button>
            </Form>
            <Link to="/cadastro">
                    <Forward>Não tem uma conta? Cadastre-se!</Forward>
            </Link>
        </Container>
    );
}