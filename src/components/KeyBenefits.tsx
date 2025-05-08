import React from "react";

const KeyBenefits: React.FC = () => (
    <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-8">Choose Your Plan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
            {["Essential", "Growth", "Enterprise"].map((benefit) => (
                <div key={benefit} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-semibold mb-4">{benefit}</h3>
                    <p className="text-gray-600">Check out the {benefit.toLowerCase()} package.</p>
                </div>
            ))}
        </div>
    </section>
);

export default KeyBenefits;