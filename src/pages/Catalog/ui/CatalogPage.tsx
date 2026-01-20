import { Container } from "@/shared/ui/Container";
import { AnimeCardsWrapper } from "@/widgets/AnimeCards";
import { SortDropdown } from "@/widgets/AnimeCards/ui/AnimeOrder";
import { AnimeFilters } from "@/widgets/AnimeFilters/ui/AnimeFilters";

export const CatalogPage = () => {
    return (
        <main className="pt-[170px]">
            <Container>
                <div className="flex justify-between">
                    <h1 className="text-3xl font-bold mb-6">Catalog</h1>
                    <SortDropdown/>
                </div>
                <div className="grid grid-cols-[200px_1fr]">
                    <AnimeFilters />
                    <section className="ml-6">
                        <AnimeCardsWrapper />
                    </section>
                </div>
            </Container>
        </main>
    )
}

