import { Container } from "@/shared/ui/Container";
import { DetailsMenu } from "@/shared/ui/DetailMenu/ui/DetailsMenu";
import { UserInfo } from "./UserInfo";
import { profilePageTabs } from "../model/profilePageTabs";

export const ProfilePage = () => {
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
                    <DetailsMenu tabs={profilePageTabs}>
                        {(activeTab) => {
                            switch (activeTab) {
                                case "watching":
                                    return <h1>Watching</h1>
                                case "to_watch":
                                    return <h1>To watch</h1>
                                case "watched":
                                    return <h1>Watched</h1>
                                case "collections":
                                    return <h1>Collections</h1>
                                default:
                                    return <h1>Watching</h1>
                            }
                        }}
                    </DetailsMenu>
                </div>
            </Container>
        </main>
    );
}