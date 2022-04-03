import { Container, Option, LinkToday, Progress} from "./style";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Footer() {
    const {percentage} = useContext(UserContext);


    return (
        <Container>
            <Link to="/habitos">
                <Option>Hábitos</Option>
            </Link>
            <LinkToday to="/hoje">
                <Progress>Hoje</Progress>
                <CircularProgressbar
                    value={percentage}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                    backgroundColor: "#52B6FF",
                    pathColor: "#ffffff",
                    trailColor: "transparent"})}
                />
            </LinkToday>
            <Link to="/historico">
                <Option>Histórico</Option>
            </Link>
        </Container>
    );
}