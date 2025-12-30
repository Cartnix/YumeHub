import { Container } from "../../../shared/ui/Container";
import AnimeCardWrapper from "../../../widgets/AnimeCardsWrapper/ui/AnimeCardsWrapper";
import { GenreDropDown } from "../../../widgets/FilterSidebar/ui/GenreDropDown";
import { SeasonDropDown } from "../../../widgets/FilterSidebar/ui/SeasonDropDown";
import { StudioDropDown } from "../../../widgets/FilterSidebar/ui/StudioDropDown";
import { YearDropDown } from "../../../widgets/FilterSidebar/ui/YearDropDown";

export default function CatalogPage() {
    return (
        <main className="pt-[170px]">
            <Container>
                <h1 className="text-3xl font-bold mb-6">Catalog</h1>
                <div className="grid grid-cols-[200px_1fr]">
                    <aside>
                        <div className="flex flex-col gap-6">
                            <YearDropDown title="Year" />
                            <SeasonDropDown title="Season" />
                            <GenreDropDown title="Genre" />
                            <StudioDropDown title="Studio"/>
                        </div>
                    </aside>
                    <section className="ml-6">
                        <AnimeCardWrapper />
                    </section>
                </div>
            </Container>
        </main>
    )
}