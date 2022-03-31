import { Container, Logo, Profile } from "./style";
import profile from "./../../assets/img/profile.png";
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <Container>
            <Link to="/">
                <Logo>TrackIt</Logo>
            </Link>
            <Profile src={profile}/>
        </Container>
    );
}