import { Container, Logo, Profile } from "./style";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./../../contexts/UserContext";

export default function Header() {

    const {data} = useContext(UserContext);

    return (
        <Container>
            <Link to="/">
                <Logo>TrackIt</Logo>
            </Link>
            <Profile src={data.image}/>
        </Container>
    );
}