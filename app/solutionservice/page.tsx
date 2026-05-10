import { Metadata } from "next";
import AutoMation from "./components/AutoMation";
import BetterBuying from "./components/BetterBuying";
import BuyingOnline from "./components/BuyingOnline";
import CaseStudies from "./components/CaseStudies";
import MainBanner from "./components/MainBanner";
import MakeTheBiggest from "./components/MakeTheBiggest";
import OurApproach from "./components/OurApproach";
import SectorsSupport from "./components/SectorsSupport";

export const metadata: Metadata = {
    title: "Ecommerce Solution Service Page",
    description: `E-comerce That Works The Way Your Business Actually Runs`,
};

export default function SolutionService() {
    return (
        <>
            <MainBanner />
            <BetterBuying />
            <AutoMation />
            <BuyingOnline />
            <OurApproach />
            <CaseStudies />
            <SectorsSupport />
            <MakeTheBiggest />
        </>
    )
}