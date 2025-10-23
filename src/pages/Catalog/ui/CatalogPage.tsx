import { Container } from "../../../shared/ui/Container";
import { YearDropDown } from "../../../widgets/FilterSidebar/ui/YearDropDown";

export default function CatalogPage() {
    return (
        <main className="py-10 bg-[#1b1b1b] pt-[170px]">
            <Container>
                <h1 className="text-3xl font-bold mb-6">Catalog</h1>
                <YearDropDown title="Year"/>
            </Container>
        </main>
    )
}