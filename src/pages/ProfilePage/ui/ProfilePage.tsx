import { Container } from "../../../shared/ui/Container";
import UserInfo from "./UserInfo";

export default function ProfilePage() {
    return (
        <main className="text-white">
            <div className="relative h-[300px]">
                <img
                    src="test_ban.png"
                    className="w-full h-full object-cover object-center"
                    alt="Banner"
                />
                <div className="absolute inset-0 bg-black/70" />
            </div>

            <Container>
                <div className="relative -mt-40 z-10">
                    <UserInfo />
                </div>

                <div className="mt-10">
                    test
                </div>
            </Container>
        </main>
    );
}