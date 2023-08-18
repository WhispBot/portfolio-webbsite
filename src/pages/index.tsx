/* eslint-disable @typescript-eslint/no-misused-promises */
import {
    Github,
    Link as LinkIcon,
    MapPin,
    Linkedin,
    HomeIcon,
    User,
    Code,
    Mail,
} from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import { type MutableRefObject, useRef, type PropsWithChildren, useEffect } from "react";
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
                <div className="relative flex">
                    <div className="sticky top-0 h-screen p-4">
                        <div className="grid h-full w-20 grid-rows-[0.1fr_1fr_0.1fr] items-center rounded-md border bg-card">
                            <div className="grid place-content-center">
                                <Link href="/" className="text-2xl font-semibold">
                                    ES
                                </Link>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-8 font-semibold">
                                <Button
                                    variant={"nav"}
                                    size={"icon"}
                                    onClick={() => scrollTo(homeRef)}
                                >
                                    <HomeIcon className="h-16 w-16" />
                                </Button>
                                <Button
                                    variant={"nav"}
                                    size={"icon"}
                                    onClick={() => scrollTo(aboutRef)}
                                >
                                    <User className="h-16 w-16" />
                                </Button>
                                <Button
                                    variant={"nav"}
                                    size={"icon"}
                                    onClick={() => scrollTo(projRef)}
                                >
                                    <Code className="h-16 w-16" />
                                </Button>
                                <Button
                                    variant={"nav"}
                                    size={"icon"}
                                    onClick={() => scrollTo(contactRef)}
                                >
                                    <Mail className="h-16 w-16" />
                                </Button>
                            </div>
                            <div className="flex justify-center">
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div ref={homeRef} className="h-screen scroll-m-0 p-8">
                            <HomeContent>
                                <Button size={"lg"} onClick={() => scrollTo(contactRef)}>
                                    CONTACT ME
                                </Button>
                            </HomeContent>
                        </div>

                        <div ref={aboutRef} className="h-screen scroll-m-0 p-8">
                            <AboutContent />
                        </div>

                        <div ref={projRef} className="h-screen scroll-m-0 p-8">
                            <ProjectContent />
                        </div>

                        <div ref={contactRef} className="h-screen scroll-m-0 p-8">
                            <SectionTitle>CONTACT</SectionTitle>
                            <div className="flex items-center justify-center">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

const ProjectContent = () => {
    return (
        <>
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
                                <Link href={""} target="_blank" className="flex gap-1">
                                    <span className="font-semibold">Code</span>
                                    <Github />
                                </Link>
                                <Link href={""} target="_blank" className="flex gap-1">
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
        </>
    );
};

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
        <div className="space-y-24 px-14 pt-32">
            <div className="">
                <h2 className="text-7xl font-bold">
                    Hello,
                    <br />
                    I'm Emil,
                    <br />
                    <span className=" text-primary drop-shadow-lg">
                        full-stack developer
                    </span>
                </h2>
            </div>
            <div>
                <div className="flex items-center gap-4">
                    {children}
                    <Link href={""}>
                        <Github />
                    </Link>
                    <Link href={""}>
                        <Linkedin />
                    </Link>
                </div>
            </div>
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
