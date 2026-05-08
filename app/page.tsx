"use clinet"
import Banner from "./components/Banner";

import SmallNavBar from "./components/SmallNavBar";
import UserExperience from "./components/UserExperience";
import BigTechs from './components/BigTech';
import SilderProfile from "./components/SilderProfile";
import ReadyTechnology from "./components/ReadyTechnology";



export default function Home() {
  return (
    <>
      <Banner />
     <SmallNavBar />
       <UserExperience />
      <BigTechs />
      <SilderProfile />
      <ReadyTechnology /> 

    </>
  );
}
