import Link from "next/link";
import NavLink from "./navLink";
import ThemeToggle from "./toggleTheme";
import { FolderKanban, Github, Linkedin, Menu } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";

const Header = () => {
    return (
        <nav className="flex w-full justify-between border-b">
            <div className="flex basis-1/3 gap-2 border-l px-8 py-4 lg:py-8">
                <FolderKanban className="lg:h-[40px] lg:w-[40px] " />
            </div>
            <div className="hidden basis-2/3 lg:flex">
                <div className="flex basis-1/2 items-center justify-center gap-16 border-l p-8">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/projects">Projects</NavLink>
                </div>
                <div className="flex flex-grow items-center justify-center gap-8 border-l p-8">
                    <Link
                        href="#"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <Github />
                    </Link>
                    <Link
                        href="#"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <Linkedin />
                    </Link>
                    <ThemeToggle />
                </div>
                <div className="flex flex-grow items-center justify-center gap-2 border-l p-8">
                    <Link href="#" className="whitespace-nowrap font-bold uppercase">
                        Get in touch
                    </Link>
                </div>
            </div>
            <Sheet>
                <SheetTrigger asChild>
                    <button className="flex items-center justify-center gap-2 border-l px-8 py-4 lg:hidden">
                        <span className="">Menu</span>
                        <Menu />
                    </button>
                </SheetTrigger>
                <SheetContent side="top" className="p-0">
                    <SheetClose asChild>
                        <div className="flex justify-between border-b">
                            <div className="flex basis-1/3 gap-2 border-l px-8 py-4 lg:py-8">
                                <FolderKanban className="lg:h-[40px] lg:w-[40px] " />
                            </div>
                            <button className="flex items-center justify-center gap-2 border-l px-8 py-4 lg:hidden">
                                <span className="">Menu</span>
                                <Menu />
                            </button>
                        </div>
                    </SheetClose>
                    <div className="">
                        <div className="flex flex-col items-center gap-8 border-b p-8 text-6xl">
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/about">About</NavLink>
                            <NavLink href="/projects">Projects</NavLink>
                        </div>
                        <div className="flex flex-grow items-center justify-center gap-16 border-b p-8">
                            <Link
                                href="#"
                                className="text-muted-foreground transition-colors hover:text-foreground"
                            >
                                <Github className="h-16 w-16" />
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground transition-colors hover:text-foreground"
                            >
                                <Linkedin className="h-16 w-16" />
                            </Link>
                        </div>
                        <div className="flex flex-grow items-center justify-center gap-2 p-8 text-3xl">
                            <Link
                                href="#"
                                className="whitespace-nowrap font-bold uppercase"
                            >
                                Get in touch
                            </Link>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </nav>
    );
};
export default Header;
