import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { headers } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "./_components/theme-provider";
import Header from "./_components/header";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: "ES",
    description: "emils porfolio website",
    icons: [{ rel: "icon", url: "/logoNos.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`font-sans ${inter.variable}`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <TRPCReactProvider headers={headers()}>
                        <Header />
                        <div>{children}</div>
                    </TRPCReactProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
