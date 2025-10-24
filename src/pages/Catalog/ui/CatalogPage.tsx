import { Container } from "../../../shared/ui/Container";
import { GenreDropDown } from "../../../widgets/FilterSidebar/ui/GenreDropDown";
import { SeasonDropDown } from "../../../widgets/FilterSidebar/ui/SeasonDropDown";
import { YearDropDown } from "../../../widgets/FilterSidebar/ui/YearDropDown";

export default function CatalogPage() {
    return (
    <main className="py-10 bg-[var(--color-dark-1)] pt-[170px]">
            <Container>
                <h1 className="text-3xl font-bold mb-6">Catalog</h1>
                <div className="flex flex-col gap-5">
                    <YearDropDown title="Year" />
                    <SeasonDropDown title="Season" />
                    <GenreDropDown title="Genre"/>
                </div>
            </Container>
        </main>
    )
}