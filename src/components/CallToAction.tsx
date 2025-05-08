import React from "react";
import { Button } from "./ui/button";

const CallToAction: React.FC = () => (
    <section
        className="relative text-white py-20"
    >
        {/* Overlay with custom blue shade */}
        <div className="absolute inset-0 bg-[rgba(1,76,105,0.9)]" style={{ backgroundColor: "#014C69" }}></div>
        
        {/* Image overlay with 10% opacity */}
        <img
            src="https://www.talentquestor.com/_next/image?url=%2Fassets%2Fimages%2Flanding-page%2Flp_banner.png&w=3840&q=100"
            alt="Background Overlay"
            className="absolute inset-0 w-full h-full object-cover opacity-10"
        />

        <div className="relative z-10 text-left max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
                Ready To Adapt To <span className="text-yellow-500">The Seasons Of Business?</span>
            </h2>
            <h3 className="text-2xl mb-4">
                Apply for a job or post a job opening with us.
            </h3>
            <button className="bg-yellow-400 font-bold py-3 px-8 rounded text-black hover:bg-yellow-500">
                Create An Account
            </button>
        </div>
    </section>
);

export default CallToAction;