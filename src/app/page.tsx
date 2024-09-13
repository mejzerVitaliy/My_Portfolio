"use client"
import Footer from "@/components/molecules/Footer/Footer";
import Header from "@/components/molecules/Header/Header";
import { ReduxProvider } from "@/store/providers";

export default function AboutPage() {
    return (
        <ReduxProvider>
            <main className="flex flex-col items-center justify-center">
                <Header title="About Portfolio" selectedPage="/"/>
                <Footer />
            </main>
        </ReduxProvider>
    );
}
