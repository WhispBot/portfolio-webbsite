import "~/styles/globals.css";

import { Montserrat } from "next/font/google";
import { headers } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "./_components/theme-provider";
import Header from "./_components/header";
import { cn } from "~/lib/utils";

const MontserRat = Montserrat({
    subsets: ["latin"],
});

export const metadata = {
    title: "ES",
    description: "emils porfolio website",
    icons: [{ rel: "icon", url: "/logoNos.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={cn("flex h-screen flex-col", MontserRat.className)}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <TRPCReactProvider headers={headers()}>
                        <Header />
                        {children}
                    </TRPCReactProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
