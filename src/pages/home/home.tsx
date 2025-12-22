import { Container } from "../../shared/ui/Container";
import Loader from "../../shared/ui/Loader/Loader";

export default function HomeApp() {
    return (
        <main className="py-10 pt-[170px]">
            <Container>
                <Loader />
            </Container>
        </main>
    )
}