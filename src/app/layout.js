import { Header } from "@/components/Header";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdProvider } from "@/components/Antd";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "MOST Business Intelligece",
    description: "MOST Business Intelligece",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AntdProvider>
                    <Header />
                    {children}
                </AntdProvider>
            </body>
        </html>
    );
}
