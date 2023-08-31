import Head from "next/head";
import { cn } from "~/lib/utils";
import { Montserrat } from "@next/font/google";

const MontserRat = Montserrat({
    subsets: ["latin"],
});

const AboutPage = () => {
    return (
        <>
            <Head>
                <title>About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main
                className={cn(
                    MontserRat.className,
                    "grid flex-grow grid-cols-1  lg:grid-cols-[2fr_1fr] lg:grid-rows-[2fr_1fr]"
                )}
            >
                <article className="flex h-full flex-col items-center justify-center gap-16"></article>
                <article className="flex h-full items-center border-l px-16"></article>
                <article className="flex h-full items-center justify-evenly border-t px-16">
                    <div className="flex flex-col items-center gap-4 rounded-md bg-card p-8">
                        <span className="text-xl font-semibold text-primary">
                            Front-end
                        </span>
                        <ul className="space-y-1 text-center">
                            <li>React</li>
                            <li>vite</li>
                            <li>Tailwindcss</li>
                            <li>CSS</li>
                            <li>HTML</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center gap-4 rounded-md bg-card p-8">
                        <span className="text-xl font-semibold text-primary">
                            Back-end
                        </span>
                        <ul className="space-y-1 text-center">
                            <li>Nodejs</li>
                            <li>Express</li>
                            <li>MySql</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center gap-4 rounded-md bg-card p-8">
                        <span className="text-xl font-semibold text-primary">Tools</span>
                        <ul className="space-y-1 text-center">
                            <li>VS code</li>
                            <li>git / github</li>
                            <li>Bash</li>
                            <li>Figma</li>
                        </ul>
                    </div>
                </article>
                <article className="h-full border-l border-t"></article>
            </main>
        </>
    );
};
export default AboutPage;
