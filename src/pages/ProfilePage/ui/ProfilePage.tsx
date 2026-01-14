import { Container } from "../../../shared/ui/Container";
import UserInfo from "./UserInfo";

export default function ProfilePage(){
    return (
        <main className="pt-[170px] min-h-dvh">
            <Container>
                <UserInfo/>
            </Container>
        </main>
    )
}