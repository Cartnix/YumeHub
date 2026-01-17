import { Container } from "@/shared/ui/Container";
import { Loader } from "@/shared/ui/Loader/ui/Loader";

export const HomePage = () => {
    return (
        <main className="py-10 pt-[170px]">
            <Container>
                <Loader />
            </Container>
        </main>
    )
}