import { Metadata } from "next";
import BannerPage from "./components/BannerPage";
import ForYourTeam from "./components/ForYourTeam";
import ForYourCustomers from "./components/ForYourCustomers";
import WebDevelopmentPhilosophy from "./components/WebDevelopmentPhilosophy";
import CaseStudio from "./components/CaseStudio";
import SectorsWeBuild from "./components/SectorsWeBuild";
import CustomApp from "../custom-app-developement/page";

export const metadata: Metadata = {
    title: "Custom Website Development",
    description: `Custom Website That Build Authority and Drive Action. `,
};
export default function CustomWebiste() {

    return (
        <>
            <BannerPage />
            <ForYourTeam />
            <ForYourCustomers />
            <WebDevelopmentPhilosophy />
            <CaseStudio />
            <SectorsWeBuild />
            <CustomApp />
        </>
    )
}