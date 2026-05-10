import { Metadata } from "next";
import BannerPage from "./components/BannerPage";

export const metadata: Metadata = {
    title: "Custom App Development",
    description: `Custom Apps That Teams Adopt And Customers Love Using`,
};
export default function CustomApp() {

    return (
        <>
            <BannerPage />
        </>
    )
}