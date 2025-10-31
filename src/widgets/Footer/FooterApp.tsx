import { Container } from "../../shared/ui/Container";
import SocialIcons from "../../shared/ui/Icons/SocialWrapper";

export default function FooterApp() {
    return (
        <footer className="mt-8 border-t border-t-[var(--color-gray-1)] py-8">
            <Container>
                <div className="flex justify-between items-center">
                    <span>CartnixDev.com</span>
                    <SocialIcons />
                </div>
            </Container>
        </footer>
    )
}