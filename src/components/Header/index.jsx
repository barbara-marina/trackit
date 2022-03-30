import { Container, Logo, Profile } from "./style";
import profile from "./../../assets/img/profile.png";
export default function Header() {
    return (
        <Container>
            <Logo>TrackIt</Logo>
            <Profile src={profile}/>
        </Container>
    );
}