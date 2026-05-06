import AutoMation from "./components/AutoMation";
import BetterBuying from "./components/BetterBuying";
import BuyingOnline from "./components/BuyingOnline";
import MainBanner from "./components/MainBanner";
import OurApproach from "./components/OurApproach";

export default function SolutionService() {
    return (
        <>
            <MainBanner />
            <BetterBuying />
            <AutoMation />
            <BuyingOnline/>
            <OurApproach/> 
        </>
    )
}