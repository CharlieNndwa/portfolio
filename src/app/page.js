import Image from "next/image";
import HeroSections from "./components/HeroSections";
import Navbar from "./components/Navbar";
import AboutSide from "./components/AboutSide";
import ProjectsSide from "./components/ProjectsSide";

import Footer from "./components/Footer";
import EmailSection from "./components/EmailSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#2b2538] ">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSections />
      
        <AboutSide />
        <ProjectsSide/>
        <EmailSection/>
      </div>
      <Footer />
    </main>
  );
}
