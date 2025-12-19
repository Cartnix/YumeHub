import { Container } from "../../shared/ui/Container";
import Loader from "../../shared/ui/Loader/Loader";
import AuthModal from "../../widgets/Auth/ui/AuthModal";

export default function HomeApp() {
    return (
        <main className="py-10 pt-[170px]">
            <Container>
                <Loader />
                <AuthModal />
            </Container>
        </main>
    )
}