import { Container } from "../../shared/ui/Container";
import SocialIcons from "../../shared/ui/Icons/SocialWrapper";

export default function FooterApp() {
    return (
        <footer className="mt-8 border-t border-t-[var(--color-gray-1)] h-[120px] flex items-center">
            <Container>
                <div className="flex justify-center items-center">
                    <SocialIcons />
                </div>
            </Container>
        </footer>
    )
}