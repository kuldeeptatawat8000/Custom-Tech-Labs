"use client"
import MainPage from "./components/MainPage"
import OurMission from "./components/OurMission"
import PeopleWork from "./components/PeopleWork"
import SetsUsApart from "./components/SetsUsApart"
import SmallNav from "./components/SmallNav"

export default function About() {
    return (
        <>
            <MainPage />
            <SmallNav/>
            <OurMission/>
            <SetsUsApart/>
            <PeopleWork/>
        </>
    )
}