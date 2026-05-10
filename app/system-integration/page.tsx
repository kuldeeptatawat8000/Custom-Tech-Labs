import { Metadata } from "next";
import BannerPage from "./components/BannerPage";
import BussinessRuns from "./components/BussinessRuns";
import YourCustomer from "./components/YourCustomer";
import OurApproach from "./components/OurApproach";
import CaseStudio from "./components/CaseStudio";
import SectorsWe from "./components/SectorsWe";

export const metadata: Metadata = {
    title: "System Integration Service Page",
    description: `Systems That Work Together-So Your Business Can Move Faster`,
};
export default function SystemIntegration() {

    return (
        <>
            <BannerPage />
            <BussinessRuns />
            <YourCustomer />
            <OurApproach />
            <CaseStudio />
            <SectorsWe />

        </>
    )
}