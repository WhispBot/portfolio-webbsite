import React from "react";
import { Montserrat } from "@next/font/google";
import { cn } from "~/lib/utils";
import Head from "next/head";
import ContactForm from "~/components/contactForm";
import { Mail, MapPin, Phone } from "lucide-react";

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
                className={cn(MontserRat.className, "relative flex-grow overflow-hidden")}
            >
                <article className="absolute left-0 top-0 grid h-full w-full grid-cols-1 grid-rows-1  xl:grid-cols-[2fr_1fr] xl:grid-rows-[2fr_1fr]">
                    <div className="flex h-full items-center justify-center gap-8 p-8">
                        <div className="basis-1/2">
                            <ContactForm />
                        </div>
                    </div>
                    <div className="flex h-full items-center justify-center border-l">
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
                    <div className="flex h-full items-center border-t px-8">
                        <h1 className="text-6xl font-extrabold uppercase">
                            Get <br /> in <br /> touch
                        </h1>
                    </div>
                    <div className="flex h-full border-l border-t"></div>
                </article>
            </main>
        </>
    );
};
export default ContactPage;
