import { Github, Linkedin } from "lucide-react";
import ThemeToggle from "./toggle-theme";
import Link from "next/link";
import NavLink from "./nav-link";
import Logo from "./logo";

const Header = () => {
    return (
        <header>
            <nav className="sticky left-0 top-0 z-10 flex w-full justify-between border-b bg-background">
                <div className="flex basis-1/3 gap-2 px-8 py-4 lg:py-8">
                    <Logo className="lg:h-[40px] lg:w-[40px]" />
                </div>
                <div className="hidden basis-2/3 lg:flex">
                    <div className="flex basis-1/2 items-center justify-center gap-16 border-l p-8">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/about">About</NavLink>
                        <NavLink href="/projects">Projects</NavLink>
                    </div>
                    <div className="flex flex-grow items-center justify-center gap-8 border-l p-8">
                        <Link
                            href="https://github.com/WhispBot"
                            className="text-muted-foreground transition-colors hover:text-foreground"
                            target="_blank"
                        >
                            <Github />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/emilstr/"
                            className="text-muted-foreground transition-colors hover:text-foreground"
                            target="_blank"
                        >
                            <Linkedin />
                        </Link>
                        <ThemeToggle />
                    </div>
                    <div className="flex flex-grow items-center justify-center gap-2 border-l p-8">
                        <NavLink href="/contact">Get in touch</NavLink>
                    </div>
                </div>
            </nav>
        </header>
    );
};
export default Header;
