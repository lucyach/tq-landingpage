import React from "react";

const Footer: React.FC = () => (
    <footer className="bg-white text-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between mb-8">
                <div className="mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold">Talent Questor</h3>
                    <p className="text-gray-600">The world's greatest talent destination.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h4 className="text-lg font-semibold mb-4">For Workers</h4>
                        <ul>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900">How It Works</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900">Find Jobs</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900">Take a Personality Test</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">For Employers</h4>
                        <ul>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900">How It Works</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900">Post a Job</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Company Info</h4>
                        <ul>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900">The Talent Questor Advantage</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900">About Us</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="border-gray-300 my-8" />
            <div className="flex justify-between items-center">
                <p className="text-gray-600">Copyright 2025 © Talent Questor. All Rights Reserved.</p>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" 
                        alt="LinkedIn" 
                        className="w-6 h-6" 
                    />
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;