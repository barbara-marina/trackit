import { Link } from "react-router-dom";
import logo from "./../../assets/img/logo.png";
import { Container, Image, Form, Input, Button, Forward } from "./../../assets/styles/form";

export default function Register() {
    return (
        <Container>
            <Image src={logo}/>
            <Form>
                <Input placeholder="email"/>
                <Input placeholder="senha"/>
                <Input placeholder="nome"/>
                <Input placeholder="foto"/>
                <Button>Cadastrar</Button>
            </Form>
            <Link to="/">
                    <Forward>Já tem uma conta? Faça login!</Forward>
            </Link>
        </Container>
    );
}