import React from "react";

const KeyBenefits: React.FC = () => (
    <section className="py-15 text-center mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold mb-8">Choose Your Plan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <style>
                {`
                    .shine {
                        position: relative;
                        overflow: hidden;
                    }
                    .shine::before {
                        content: '';
                        position: absolute;
                        top: -150%;
                        left: 0;
                        width: 100%;
                        height: 150%;
                        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.1) 100%);
                        transform: skewY(-20deg);
                        transition: opacity 0.3s;
                        opacity: 0;
                    }
                    .shine:hover::before {
                        animation: shine-animation 1s ease-in-out;
                        opacity: 0.8;
                    }
                    @keyframes shine-animation {
                        0% {
                            top: -150%;
                        }
                        100% {
                            top: 150%;
                        }
                    }
                `}
            </style>
            {[
                {
                    name: "Essential",
                    emoji: "✨",
                    monthlyPrice: "$299/month",
                    annualPrice: "$199/month",
                    annualBilling: "billed $2,388/year",
                    savings: "Save $1,200/year",
                    jobPosts: "2/month",
                    features: {
                        "AI Resume Parsing": true,
                        "Basic Personality Insights": true,
                        "BiasZero Mode": false,
                        "Full Personality Insight": false,
                        "AI Job Description Writer Beta": false,
                        "Early Access to Beta Features": false,
                    },
                },
                {
                    name: "Growth",
                    emoji: "💼",
                    monthlyPrice: "$799/month",
                    annualPrice: "$549/month",
                    annualBilling: "billed $6,588/year",
                    savings: "Save $3,000/year",
                    jobPosts: "5/month",
                    features: {
                        "AI Resume Parsing": true,
                        "Basic Personality Insights": true,
                        "BiasZero Mode": true,
                        "Full Personality Insight": true,
                        "AI Job Description Writer Beta": false,
                        "Early Access to Beta Features": false,
                    },
                },
                {
                    name: "Enterprise",
                    emoji: "💎",
                    monthlyPrice: "$1,299/month",
                    annualPrice: "$899/month",
                    annualBilling: "billed $10,788/year",
                    savings: "Save $4,800/year",
                    jobPosts: "10/month",
                    features: {
                        "AI Resume Parsing": true,
                        "Basic Personality Insights": true,
                        "BiasZero Mode": true,
                        "Full Personality Insight": true,
                        "AI Job Description Writer Beta": true,
                        "Early Access to Beta Features": true,
                    },
                },
            ].map((plan) => (
                <div
                    key={plan.name}
                    className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-between shine"
                >
                    {/* Emoji and Title Section */}
                    <div className="bg-gray-100 p-4 rounded-t-lg text-center">
                        <div className="text-4xl mb-2">{plan.emoji}</div>
                        <h3 className="text-2xl font-semibold">{plan.name}</h3>
                    </div>

                    {/* Billing Section */}
                    <div className="text-center my-4">
                        <p className="text-gray-800 text-2xl font-bold">
                            {plan.monthlyPrice}
                        </p>
                        <div className="bg-gray-100 p-3 rounded-lg mt-4 relative">
                            <span className="absolute top-0 left-0 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-tr-lg rounded-bl-lg">
                                BEST VALUE
                            </span>
                            <strong className="text-yellow-500">OR SAVE 30%</strong>
                            <br />
                            <strong>Annual Billing</strong>
                            <br />
                            <span className="text-2xl font-bold text-gray-800">{plan.annualPrice}</span>
                            <br />
                            <span className="text-sm text-gray-500">{plan.annualBilling}</span>
                            <br />
                            <div className="flex flex-col items-center text-green-500 mt-2">
                                <span className="flex items-center">
                                    <span className="mr-2">✔</span>
                                    <span>{plan.savings}</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="text-left text-gray-600">
                        <p className="mb-4">
                            <strong>Job Posts</strong>
                            <br />
                            {plan.jobPosts}
                        </p>
                        <ul className="mb-4">
                            {Object.entries(plan.features).map(([feature, isIncluded], index) => (
                                <li key={index} className="mb-2 flex items-center">
                                    <span
                                        className={`mr-2 ${
                                            isIncluded ? "text-green-500" : "text-gray-400"
                                        }`}
                                    >
                                        {isIncluded ? "✔" : "✘"}
                                    </span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Button Section */}
                    <div className="mt-auto flex flex-col gap-4">
                        <button className="bg-yellow-400 font-bold py-3 px-8 rounded hover:bg-yellow-500">
                            Choose {plan.name}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default KeyBenefits;