import { Metadata } from "next";
import BannerPage from "./components/BannerPage";
import SameSystem from "./components/SameSystem";
import OperatingDoctrine from "./components/OperatingDoctrine";
import CaseStudio from "./components/CaseStudio";
import SectorsWeBuild from "./components/SectorsWeBuild";
import CustomApplicationsImpact from "./components/CustomApplicationsImpact";

export const metadata: Metadata = {
    title: "Custom App Development",
    description: `Custom Apps That Teams Adopt And Customers Love Using`,
};
export default function CustomApp() {

    return (
        <>
            <BannerPage />
            <SameSystem />
            < OperatingDoctrine />
            <CaseStudio />
            <SectorsWeBuild />
            <CustomApplicationsImpact />
        </>
    )
}