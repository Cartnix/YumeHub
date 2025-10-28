import { Container } from "../../../shared/ui/Container";
import AnimeCardWrapper from "../../../widgets/AnimeCardsWrapper/ui/AnimeCardsWrapper";
import { GenreDropDown } from "../../../widgets/FilterSidebar/ui/GenreDropDown";
import { SeasonDropDown } from "../../../widgets/FilterSidebar/ui/SeasonDropDown";
import { YearDropDown } from "../../../widgets/FilterSidebar/ui/YearDropDown";

export default function CatalogPage() {
    return (
        <main className="py-10 pt-[170px]">
            <Container>
                <h1 className="text-3xl font-bold mb-6">Catalog</h1>
                <div className="flex gap-8">
                    <aside className="w-64 flex-shrink-0">
                        <div className="flex flex-col gap-6">
                            <YearDropDown title="Year" />
                            <SeasonDropDown title="Season" />
                            <GenreDropDown title="Genre" />
                        </div>
                    </aside>
                    <section className="flex-grow min-w-0">
                        <AnimeCardWrapper />
                    </section>
                </div>
            </Container>
        </main>
    )
}