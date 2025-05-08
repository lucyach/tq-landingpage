import React, { useState } from "react";

const WhyDifferent: React.FC = () => {
    const [expanded, setExpanded] = useState<string | null>(null);

    const toggleExpand = (header: string) => {
        setExpanded(expanded === header ? null : header);
    };

    const getAnimationSrc = () => {
        if (expanded === "collaborate") {
            return "https://www.talentquestor.com/_next/image?url=%2Fassets%2Fimages%2Flanding-page%2Fpeople.gif&w=2048&q=75";
        }
        if (expanded === "proactive") {
            return "https://www.talentquestor.com/_next/image?url=%2Fassets%2Fimages%2Flanding-page%2Fsettings.gif&w=2048&q=75";
        }
        return "https://www.talentquestor.com/_next/image?url=%2Fassets%2Fimages%2Flanding-page%2Fcoin.gif&w=2048&q=75";
    };

    return (
        <div>
            <section className="py-5 flex flex-col justify-center px-12" style={{ backgroundColor: "white" }}>
                <div id="why different">
                    <div
                        className="bg-white rounded-lg p-16 max-w-9xl text-left"
                        style={{
                            backgroundColor: "#014C69",
                            marginBottom: "5rem",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <div style={{ width: "60%" }}>
                            <div
                                className="bg-white text-black font-bold text-xl rounded-lg px-4 py-2 shadow-lg mb-8 inline-block"
                            >
                                WHY WE ARE DIFFERENT
                            </div>
                            <h2 className="text-5xl font-bold mb-8 text-yellow-400">
                                Empowering <span className="text-white">Growth</span> Through Strategic Connections
                            </h2>
                            <p className="text-lg mb-8 text-white">
                                We combine AI-powered insights with a human touch to remove bias and make hiring smarter, faster, and more effective. Our revolutionary approach, including BiasZero and personalized assessments, gives you the edge in recruitment.
                            </p>
                            <button
                                className="bg-yellow-400 font-bold py-3 px-8 rounded transition-transform transform hover:bg-yellow-500"
                            >
                                Learn More
                            </button>
                        </div>
                        <div style={{ width: "40%", height: "100%" }}>
                            <img
                                src="https://www.talentquestor.com/_next/image?url=%2Fassets%2Fimages%2Flanding-page%2Flp_mission.jpg&w=3840&q=100"
                                alt="Mission"
                                className="rounded-lg object-cover w-full h-full"
                                style={{ objectPosition: "top right" }}
                            />
                        </div>
                    </div>
                </div>
                <div id="animation" className="mt-12">
                    <div
                        className="flex flex-col md:flex-row justify-between items-start w-full max-w-9xl"
                        style={{ alignItems: "stretch" }}
                    >
                        <div
                            className="rounded-lg p-8 text-center text-white font-bold text-xl w-full md:w-1/2"
                            style={{
                                height: "100%",
                                backgroundColor: "rgba(255, 209, 102, 0.5)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                marginBottom: "2rem", // Add more space below the yellow box
                                marginRight: "1rem", // Add white margin to the right of the yellow box
                            }}
                        >
                            <img
                                src={getAnimationSrc()}
                                alt="Dynamic Animation"
                                className="w-full h-80 object-contain"
                            />
                        </div>
                        <div className="flex flex-col justify-start items-start w-full md:w-1/2 mt-8 md:mt-0">
                            <div className="w-full mb-6 hover:bg-gray-200 transition-colors rounded-lg">
                                <h3
                                    className="text-2xl cursor-pointer flex items-center justify-between p-4"
                                    onClick={() => toggleExpand("noCost")}
                                >
                                    <span>No cost to join</span>
                                    <span className="ml-auto">
                                        {expanded === "noCost" ? "▲" : "▼"}
                                    </span>
                                </h3>
                                {expanded === "noCost" && (
                                    <p className="text-lg p-4">
                                        text here
                                    </p>
                                )}
                            </div>
                            <div className="w-full mb-6 hover:bg-gray-200 transition-colors rounded-lg">
                                <h3
                                    className="text-2xl cursor-pointer flex items-center justify-between p-4"
                                    onClick={() => toggleExpand("collaborate")}
                                >
                                    <span>Collaborate with the finest without emptying your wallet</span>
                                    <span className="ml-auto">
                                        {expanded === "collaborate" ? "▲" : "▼"}
                                    </span>
                                </h3>
                                {expanded === "collaborate" && (
                                    <p className="text-lg p-4">
                                        text here
                                    </p>
                                )}
                            </div>
                            <div className="w-full hover:bg-gray-200 transition-colors rounded-lg">
                                <h3
                                    className="text-2xl cursor-pointer flex items-center justify-between p-4"
                                    onClick={() => toggleExpand("proactive")}
                                >
                                    <span>Be more proactive and flexible</span>
                                    <span className="ml-auto">
                                        {expanded === "proactive" ? "▲" : "▼"}
                                    </span>
                                </h3>
                                {expanded === "proactive" && (
                                    <p className="text-lg p-4">
                                        text here
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyDifferent;