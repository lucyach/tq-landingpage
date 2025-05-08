import React, { useState } from "react";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-blue-600">Talent Questor</div>

                {/* Navigation Links */}
                <nav className="hidden md:flex flex-1 items-center">
                    {/* Left-aligned Links */}
                    <ul className="flex space-x-6">
                        <li><a href="#" className="text-gray-700 hover:text-blue-600">Why Talent Questor</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-blue-600">Find Work</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-blue-600">Find Talent</a></li>
                    </ul>

                    {/* Right-aligned Links */}
                    <ul className="flex space-x-6 ml-auto">
                        <li><a href="#" className="text-gray-700 hover:text-blue-600">Sign In</a></li>
                        <li><a href="#" className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Sign Up</a></li>
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <nav className="md:hidden bg-white shadow-md">
                    <ul className="flex flex-col space-y-4 p-4">
                        <li><a href="#" className="text-gray-700 hover:text-blue-600">Why Talent Questor</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-blue-600">Find Work</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-blue-600">Find Talent</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-blue-600">Sign In</a></li>
                        <li><a href="#" className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Sign Up</a></li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;