import Footer from "@/components/molecules/Footer/Footer";
import Header from "@/components/molecules/Header/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Portfolio | About Me',
    description: 'This is page about me',
};

export default function AboutMePage() {
    return (
        <main className="flex flex-col items-center justify-center">
            <Header title="About me" selectedPage="aboutMe"/>
            <Footer />
        </main>
    );
}