import { Metadata } from "next";

import MainPage from "./components/MainPage";
import OurMission from "./components/OurMission";
import OurPhilosophy from "./components/OurPhilosophy";
import PeopleWork from "./components/PeopleWork";
import SetsUsApart from "./components/SetsUsApart";
// import SmallNav from "./components/SmallNav";
import WhatDesign from "./components/WhatDesign";
import WhatWeDo from "./components/WhatWeDo";

export const metadata: Metadata = {
    title: "About Page | CTL web",
    description: `Strategic. Human-Centered. Tech That Works for People.`,
};
export default function About() {
    return (
        <>
            <MainPage />
            {/* <SmallNav /> */}
            <OurMission />
            <SetsUsApart />
            <PeopleWork />
            <WhatWeDo />
            <WhatDesign />
            <OurPhilosophy />
        </>
    );
}