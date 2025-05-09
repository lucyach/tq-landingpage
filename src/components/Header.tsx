import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled ? "bg-white shadow-md text-black" : "bg-transparent text-white"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
                {/* Logo */}
                <div className="text-xl font-bold">Talent Questor</div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-6 ml-4">
                    <a href="#" className="hover:text-[#d4b548]">
                        Why Talent Questor
                    </a>
                    <a href="#" className="hover:text-[#d4b548]">
                        Find Work
                    </a>
                    <a href="#" className="hover:text-[#d4b548]">
                        Find Talent
                    </a>
                </div>

                {/* Right-aligned Buttons */}
                <div className="hidden md:flex items-center space-x-4 ml-auto">
                    <button className="bg-yellow-400 font-bold py-3 px-8 rounded text-black hover:bg-yellow-500">
                        Sign In
                    </button>
                    <button className="bg-yellow-400 font-bold py-3 px-8 rounded text-black hover:bg-yellow-500">
                        Sign Up
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-md text-black">
                    <ul className="flex flex-col space-y-4 p-4">
                        <li>
                            <a href="#" className="hover:text-[#d4b548]">
                                Why Talent Questor
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-[#d4b548]">
                                Find Work
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-[#d4b548]">
                                Find Talent
                            </a>
                        </li>
                        <li>
                            <Button variant="default" size="sm">
                                Sign In
                            </Button>
                        </li>
                        <li>
                            <Button variant="default" size="sm">
                                Sign Up
                            </Button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Header;