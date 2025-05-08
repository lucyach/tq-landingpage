import React from "react";

const Footer: React.FC = () => (
    <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-4">Talent Questor</h3>
            <p className="text-gray-400 mb-6">The world's greatest talent destination.</p>
            <ul className="flex justify-center space-x-6 mb-6">
                {["For Workers: How It Works", "For Employers: How It Works", "Company Info: The Talent Questor Advantage"].map((link) => (
                    <li key={link} className="text-gray-400 hover:text-white">{link}</li>
                ))}
            </ul>
            <p className="text-gray-500">© 2025 Talent Questor. All Rights Reserved.</p>
        </div>
    </footer>
);

export default Footer;