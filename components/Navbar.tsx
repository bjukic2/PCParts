"use client";
import React, { useState } from "react";

export default function Navbar(){

    const[isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return(
        <nav className="">
            
        </nav>
    );
}