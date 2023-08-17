import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ThemeProvider } from "~/components/theme-provider";
import Header from "~/components/header";

const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    return (
        <SessionProvider session={session}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                {/* <Header /> */}
                <Component {...pageProps} />
                {/* <footer className="h-24"></footer> */}
            </ThemeProvider>
        </SessionProvider>
    );
};

export default api.withTRPC(MyApp);
