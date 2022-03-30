import { Link } from "react-router-dom";
import logo from "./../../assets/img/logo.png";
// import loading from "./../../assets/img/loading.gif";
import { Container, Image, Form, Input, Button, Forward } from "./../../assets/styles/form";

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
            <Link to="/cadastro">
                    <Forward>Não tem uma conta? Cadastre-se!</Forward>
            </Link>
        </Container>
    );
}