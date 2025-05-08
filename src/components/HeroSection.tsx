import React from "react";
import { Button } from "./ui/button";

const HeroSection: React.FC = () => (
    <section
        className="relative bg-cover bg-center text-white py-32"
        style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
    >
        {/* Overlay with custom blue shade */}
        <div className="absolute inset-0 bg-[rgba(1,76,105,0.9)]"
        style = {{ backgroundColor: "#014C69"}}></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Transform Your Hiring Experience</h1>
            <p className="text-lg mb-8">Let us help you find the perfect talent for your business needs.</p>
            <Button variant="default" className="px-8 py-3 text-lg rounded-full">Get Started</Button>
        </div>
    </section>
);

export default HeroSection;