import { Container, Option, Progress } from "./style";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <Container>
            <Link to="/habitos">
                <Option>Hábitos</Option>
            </Link>
            <Link to="/hoje">
                <Progress>Hoje</Progress>
            </Link>
            <Link to="/historico">
                <Option>Histórico</Option>
            </Link>
        </Container>
    );
}