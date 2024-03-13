"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, FC } from "react";
import Logo from "./Logo";
import { cn } from "../lib/utils";

interface NavbarProps{
    pages: Record<string, `/${string}`>;
}

const baseClass = 
    "uppercase whitespace-nowrap font-roboto-condensed text-base px-5 py-3 rounded-sm text-gray-800 hover:bg-gray-300";

const Navbar: FC<NavbarProps> = ({ pages }) => {
    const pathName = usePathname();

    const[isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return(
        <section className="container flex items-center justify-between mx-auto">
            <Logo />
            <nav className="flex items-center justify-center p-4">
                <ul className="flex gap-2">
                    {Object.entries(pages).map(([name, path]) => (
                        <li key = {name}>
                            <Link href={path}>
                                <span className={cn(baseClass, {
                                    "bg-gray-600 text-gray-100 pointer-events-none":
                                    path.split('?')[0] === pathName.split('?')[0],
                                })}
                                >
                                    {name}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <nav className="flex items-center justify-center p-4">
            </nav>
        </section>
    );
}

export default Navbar;