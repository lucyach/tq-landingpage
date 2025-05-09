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
        <img
            src="https://www.talentquestor.com/_next/image?url=%2Fassets%2Fimages%2Flanding-page%2Flp_hero.png&w=3840&q=100"
            alt="Hero Overlay"
            className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="relative z-10 text-left max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
                Transform the <span className="text-yellow-500">Season</span> of Business
            </h1>
            <p className="text-lg mb-8">Let us meet your needs by filling in the gap.</p>
            <button className="bg-yellow-400 font-bold py-3 px-8 rounded text-black hover:bg-yellow-500">
                Start Now
            </button>
        </div>
        {/* Wavy border adjusted to cover the entire bottom of the hero section */}
        <div className="absolute bottom-[-20px] left-0 w-screen overflow-hidden leading-none">
            <svg
                className="relative block w-full h-48"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2880 320"
            >
                <path
                    fill="#ffffff"
                    fillOpacity="1"
                    d="M0,224L96,213.3C192,203,384,181,576,165.3C768,149,960,139,1152,154.7C1344,171,1536,213,1728,213.3C1920,213,2112,171,2304,149.3C2496,128,2688,128,2784,128L2880,128L2880,320L2784,320C2688,320,2496,320,2304,320C2112,320,1920,320,1728,320C1536,320,1344,320,1152,320C960,320,768,320,576,320C384,320,192,320,96,320L0,320Z"
                ></path>
            </svg>
        </div>
    </section>
);

export default HeroSection;