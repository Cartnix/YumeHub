import YearButton from "../../../shared/ui/Buttons/YearButton";
import { Container } from "../../../shared/ui/Container";

export default function CatalogPage() {
    return (
        <main className="py-10 bg-[#1b1b1b] pt-[170px]">
            <Container>
                <h1 className="text-3xl font-bold mb-6">Catalog</h1>
                <YearButton year={2025}/>
            </Container>
        </main>
    )
}