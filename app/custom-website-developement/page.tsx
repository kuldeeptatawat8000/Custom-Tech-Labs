import { Metadata } from "next";
import BannerPage from "./components/BannerPage";

export const metadata: Metadata = {
    title: "Custom Website Development",
    description: `Custom Website That Build Authority and Drive Action. `,
};
export default function CustomWebiste() {

    return (
        <>
            <BannerPage />
        </>
    )
}