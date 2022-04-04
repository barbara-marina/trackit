import { Container, Logo, Profile } from "./style";
import { useContext } from "react";
import UserContext from "./../../contexts/UserContext";

export default function Header() {

    const {data} = useContext(UserContext);

    return (
        <Container>
            <Logo>TrackIt</Logo>
            <Profile src={data.image}/>
        </Container>
    );
}