import ProjectsList from "@/components/organisms/ProjectsList";
import Footer from "@/components/templates/Footer/Footer";
import Header from "@/components/templates/Header/Header";
import Navbar from "@/components/templates/Navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio | Projects",
    description: "This is page about my projects",
};

export default function ProjectsPage() {
    return (
        <main className="relative flex flex-col items-center justify-center">
            <Header />
            <Navbar selectedPage="projects" />
            
            <ProjectsList/>

            <Footer />
        </main>
    );
}
