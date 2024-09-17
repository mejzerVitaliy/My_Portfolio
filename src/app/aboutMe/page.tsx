import AboutMe from "@/components/organisms/AboutMe";
import Footer from "@/components/templates/Footer/Footer";
import Header from "@/components/templates/Header/Header";
import Navbar from "@/components/templates/Navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio | About Me",
    description: "This is page about me",
};

export default function AboutMePage() {
    return (
        <main className=" w-full h-full relative flex flex-col items-center">
            <Header />
            <Navbar selectedPage="aboutMe" />
            
            <AboutMe />

            <Footer />
        </main>
    );
}
