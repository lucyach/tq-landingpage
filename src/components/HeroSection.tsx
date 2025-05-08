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
        <div className="absolute bottom-0 left-0 w-screen overflow-hidden leading-none">
            <svg
                className="relative block w-full h-16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#ffffff"
                    fillOpacity="1"
                    d="M0,128L80,122.7C160,117,320,107,480,128C640,149,800,203,960,208C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                ></path>
            </svg>
        </div>
    </section>
);

export default HeroSection;