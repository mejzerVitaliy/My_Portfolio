import { Metadata } from "next";
import '../styles/globals.css'

export const metadata: Metadata = {
    title: 'Portfolio | About',
    description: 'This is page about my portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
