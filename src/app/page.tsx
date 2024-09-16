import Footer from "@/components/templates/Footer/Footer";
import Navbar from "@/components/templates/Navbar/Navbar";
import Portfolio from "@/components/organisms/Portfolio";
import Header from "@/components/templates/Header/Header";

export default function PortfolioPage() {
    return (
        <main className="relative flex flex-col items-center justify-center">
            <Header />
            <Navbar selectedPage="/" />

            <Portfolio />
            
            <Footer />
        </main>
    );
}
