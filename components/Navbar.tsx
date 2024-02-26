"use client";
import Link from "next/link";
import React, { useState, FC } from "react";

interface NavbarProps{
    pages: Record<string, `/${string}`>;
}

const Navbar: FC<NavbarProps> = ({ pages }) => {

    const[isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return(
        <nav className="flex items-center justify-center p-4">
            <ul className="flex gap-8">
                {Object.entries(pages).map(([name, path]) => (
                    <li key = {name}>
                        <Link href={path}>{name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;