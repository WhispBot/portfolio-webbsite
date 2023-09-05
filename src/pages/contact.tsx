import React from "react";
import { Montserrat } from "@next/font/google";
import { cn } from "~/lib/utils";
import Head from "next/head";
import ContactForm from "~/components/contactForm";
import { Mail, MapPin, MoveUp, MoveUpRight, Phone } from "lucide-react";

const MontserRat = Montserrat({
    subsets: ["latin"],
});

const ContactPage = () => {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <main
                className={cn(
                    MontserRat.className,
                    "relative flex-grow xl:overflow-hidden"
                )}
            >
                <article className="grid h-full w-full grid-cols-1 grid-rows-[0.2fr_1fr_0.2fr] xl:grid-cols-[2fr_1fr] xl:grid-rows-[2fr_1fr]">
                    <div className="flex h-full items-center justify-center gap-8 overflow-hidden p-2 xl:p-8">
                        <ContactForm />
                    </div>
                    <div className="flex h-full items-center justify-center p-4 xl:border-l xl:p-8">
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-4">
                                <div className=" border  p-4">
                                    <Phone />
                                </div>
                                <span>+46736259326</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className=" border  p-4">
                                    <Mail />
                                </div>
                                <span>emilstrjobb@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className=" border  p-4">
                                    <MapPin />
                                </div>
                                <span>Malmö, Sweden</span>
                            </li>
                        </ul>
                    </div>
                    <div className="relative row-start-1 flex h-full items-center px-8 xl:row-start-auto xl:border-b xl:border-t">
                        <h1 className="text-xl font-extrabold uppercase xl:text-6xl">
                            Have
                            <br /> any
                            <br /> questions?
                        </h1>
                        <MoveUpRight
                            size={128}
                            className="absolute left-64 top-7 hidden xl:flex"
                            strokeWidth={1}
                        />
                    </div>
                    <div className="hidden h-full border-t xl:flex xl:border-l"></div>
                </article>
            </main>
        </>
    );
};
export default ContactPage;
