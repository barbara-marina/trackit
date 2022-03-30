import { Link } from "react-router-dom";
import logo from "./../../assets/img/logo.png";
// import loading from "./../../assets/img/loading.gif";
import { Container, Image, Form, Input, Button, Forward } from "./../../assets/styles/form";

export default function Register() {
    return (
        <Container>
            <Image src={logo}/>
            <Form>
                <Input type="email" placeholder="email"/>
                <Input type="password" placeholder="senha"/>
                <Input type="text" placeholder="nome"/>
                <Input type="url" placeholder="foto"/>
                <Button>Cadastrar</Button>
                {/* <Loading>
                    <img src={loading} alt="loading"/>
                </Loading> */}
            </Form>
            <Link to="/">
                    <Forward>Já tem uma conta? Faça login!</Forward>
            </Link>
        </Container>
    );
}