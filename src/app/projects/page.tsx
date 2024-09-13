import Footer from "@/components/molecules/Footer/Footer";
import Header from "@/components/molecules/Header/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Portfolio | Projects',
    description: 'This is page about my projects',
};

export default function ProjectsPage() {
    return (
        <main className="flex flex-col items-center justify-center">
            <Header title="My Projects" selectedPage="projects"/>
            <Footer />
        </main>
    );
}