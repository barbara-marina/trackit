import logo from "./../../assets/img/logo.png";
// import loading from "./../../assets/img/loading.gif";
import { Container, Image, Form, Input, Button, LinkForward } from "./../../assets/styles/form";

export default function Login() {
    return (
        <Container>
            <Image src={logo}/>
            <Form>
                <Input type="email" placeholder="email"/>
                <Input type="password" placeholder="senha"/>
                <Button>Entrar</Button>
                {/* <Loading>
                    <img src={loading} alt="loading"/>
                </Loading> */}
            </Form>
            <LinkForward to="/cadastro"> Não tem uma conta? Cadastre-se!</LinkForward>
        </Container>
    );
}