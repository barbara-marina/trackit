import logo from "./../../assets/img/logo.png";
import { Container, Image, Form, Input, Button, Register } from "./style";

export default function Login() {
    return (
        <Container>
            <Image src={logo}/>
            <Form>
                <Input placeholder="email"/>
                <Input placeholder="senha"/>
                <Button>Entrar</Button>
            </Form>
            <Register>Não tem uma conta? Cadastre-se!</Register>
        </Container>
    );
}