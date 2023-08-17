import Link from "next/link";
import NavLink from "./navLink";
import ThemeToggle from "./toggleTheme";
import { Button } from "./ui/button";

const Header = () => {
    return (
        <div className="sticky top-0 border-b bg-background">
            <div className="flex items-center justify-between px-8 py-2">
                <Link href="/" className="text-2xl font-semibold">
                    ES
                </Link>
                <div>
                    <div className="flex gap-2 font-semibold">
                        <NavLink href={"#"}>Home</NavLink>
                        <Button onClick={scrollTo}></Button>
                        <NavLink href={"#about"}>About me</NavLink>
                        <NavLink href={"#projects"}>Projects</NavLink>
                        <NavLink href={"#contact"}>Contact</NavLink>
                    </div>
                </div>
                <ThemeToggle />
            </div>
        </div>
    );
};
export default Header;
