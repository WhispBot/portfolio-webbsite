import Link from "next/link";
import NavLink from "./navLink";
import ThemeToggle from "./toggleTheme";
import { Github, Linkedin } from "lucide-react";

const Header = () => {
    return (
        <nav className="flex w-full border-b">
            <div className="flex basis-1/3 gap-2 border-l p-8 ">Logo</div>
            <div className="hidden basis-1/3 items-center justify-center gap-8 border-l p-8 lg:flex">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
            </div>
            <div className="hidden flex-grow items-center justify-center gap-8 border-l p-8 lg:flex">
                <Link href="#" className="transition-colors hover:text-primary">
                    <Github />
                </Link>
                <Link href="#" className="transition-colors hover:text-primary">
                    <Linkedin />
                </Link>
                <ThemeToggle />
            </div>
            <div className=" flex flex-grow items-center justify-center gap-2 border-l p-8">
                <Link href="#" className="font-bold uppercase">
                    Get in touch
                </Link>
            </div>
        </nav>
    );
};
export default Header;
