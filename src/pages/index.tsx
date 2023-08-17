/* eslint-disable @typescript-eslint/no-misused-promises */
import { Github, Link as LinkIcon, MapPin, Linkedin } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import { type MutableRefObject, useRef, type PropsWithChildren } from "react";
import ThemeToggle from "~/components/toggleTheme";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "~/components/ui/card";
import { Inter } from "@next/font/google";
import { cn } from "~/lib/utils";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "~/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

const inter = Inter({
    subsets: ["latin"],
});

export default function Home() {
    const aboutRef = useRef<HTMLDivElement>(null);
    const homeRef = useRef<HTMLDivElement>(null);
    const projRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const scrollTo = (elementRef: MutableRefObject<HTMLDivElement | null>) => {
        elementRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <Head>
                <title>ES</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={cn(inter.className)}>
                <div className="sticky top-0 ">
                    <div className="flex items-center justify-between px-8 py-2">
                        <Link href="/" className="text-2xl font-semibold">
                            ES
                        </Link>
                        <div className="rounded-md border bg-background/90">
                            <div className="flex gap-2 font-semibold">
                                <Button
                                    variant={"ghost"}
                                    onClick={() => scrollTo(homeRef)}
                                >
                                    Home
                                </Button>
                                <Button
                                    variant={"ghost"}
                                    onClick={() => scrollTo(aboutRef)}
                                >
                                    About me
                                </Button>

                                <Button
                                    variant={"ghost"}
                                    onClick={() => scrollTo(projRef)}
                                >
                                    Projects
                                </Button>
                                <Button
                                    variant={"ghost"}
                                    onClick={() => scrollTo(contactRef)}
                                >
                                    Contact
                                </Button>
                            </div>
                        </div>
                        <ThemeToggle />
                    </div>
                </div>

                <div ref={homeRef} className="flex h-screen scroll-m-16">
                    <HomeContent>
                        <Button size={"lg"} onClick={() => scrollTo(contactRef)}>
                            CONTACT ME
                        </Button>
                    </HomeContent>
                </div>

                <div className="flex h-screen items-center justify-center">
                    <div ref={aboutRef} className="w-full scroll-m-14 bg-muted py-16">
                        <AboutContent />
                    </div>
                </div>

                <div ref={projRef} className="container h-screen scroll-m-14">
                    <SectionTitle>PROJECTS</SectionTitle>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Web store</CardTitle>
                                <CardDescription>Description</CardDescription>
                            </CardHeader>
                            <CardContent className="grid grid-cols-[0.2fr_1fr]">
                                <div className="flex flex-col items-center justify-between gap-4">
                                    <div className="flex flex-col items-center gap-2">
                                        <span className="text-sm text-muted-foreground">
                                            Tech used
                                        </span>
                                        <Badge>React</Badge>
                                        <Badge>Tailwindcss</Badge>
                                        <Badge>Prisma</Badge>
                                        <Badge>Next</Badge>
                                    </div>
                                    <div className="flex gap-2">
                                        <Link
                                            href={""}
                                            target="_blank"
                                            className="flex gap-1"
                                        >
                                            <span className="font-semibold">Code</span>
                                            <Github />
                                        </Link>
                                        <Link
                                            href={""}
                                            target="_blank"
                                            className="flex gap-1"
                                        >
                                            <span className="font-semibold">Demo</span>
                                            <LinkIcon />
                                        </Link>
                                    </div>
                                </div>
                                <img
                                    className="aspect-video h-64 justify-self-center rounded-sm"
                                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                                />
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div
                    ref={contactRef}
                    className="container h-[calc(100vh-3rem)] scroll-m-14"
                >
                    <SectionTitle>CONTACT</SectionTitle>
                    <div className="flex items-center justify-center">
                        <ContactForm />
                    </div>
                </div>
            </main>
        </>
    );
}

const formSchema = z.object({
    email: z.string().email({ message: "valid email example 'name@example.com'" }),
    name: z.string().optional(),
    message: z.string(),
});

const ContactForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            name: "",
            message: "",
        },
    });

    const handleSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="w-96 lg:w-1/2">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Full name" {...field} />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Type your message here..."
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
};

const AboutContent = () => {
    return (
        <div className="container grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="hidden items-center justify-center lg:flex">
                <img
                    className="rounded-md shadow-lg shadow-primary/70"
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
                />
            </div>
            <div className="flex flex-col justify-between">
                <div>
                    <SectionTitle>ABOUT ME</SectionTitle>
                    <span className="text-2xl font-bold">
                        A passionate Full-stack Developer Based in
                        <div className="flex items-center text-primary">
                            <span>malmo, Sweden</span>
                            <MapPin />
                        </div>
                    </span>
                </div>

                <p className="tracking-wide">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quod
                    optio alias error fuga enim nam obcaecati voluptatum id quibusdam.
                    Porro aliquid ducimus repudiandae, perferendis repellendus doloremque
                    tenetur fugiat. Enim rem voluptatem vitae necessitatibus accusantium
                    maxime rerum quidem voluptatibus reprehenderit culpa, eveniet fuga
                    recusandae repudiandae aliquam delectus? Deserunt atque temporibus ab
                    magnam maiores itaque doloribus voluptatum, veniam earum asperiores
                    blanditiis aspernatur placeat ducimus beatae, accusamus repellat!
                    Fugiat dicta laborum debitis consequuntur quos? Aspernatur ullam
                    tempora rem animi quae aut blanditiis nostrum sint vitae accusantium
                    quo exercitationem natus iste deleniti modi, vero, perferendis
                    veritatis quibusdam dignissimos porro quasi numquam! Vel,
                    consequuntur?
                </p>
            </div>
        </div>
    );
};

const HomeContent: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="space-y-24 px-24 pt-32">
            <div className="flex gap-4">
                <Link href={""}>
                    <Github />
                </Link>
                <Link href={""}>
                    <Linkedin />
                </Link>
            </div>
            <div className="">
                <h2 className="text-7xl font-bold">
                    Hello,
                    <br />
                    I'm Emil, <br />
                    <span className="text-primary">full-stack developer</span>
                </h2>
            </div>
            <div>{children}</div>
        </div>
    );
};

const SectionTitle: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="mb-4 space-y-2">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary">
                {children}
            </h3>
            <div className="flex h-2 w-full gap-2 rounded-full bg-primary/10">
                <div className="h-2 w-24 rounded-full bg-primary" />
                <div className="h-2 w-4 rounded-full bg-primary" />
                <div className="h-2 w-2 rounded-full bg-primary" />
            </div>
        </div>
    );
};
