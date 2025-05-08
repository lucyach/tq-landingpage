import React from "react";
import { Card, CardContent } from "./ui/card";

const TalentCategories: React.FC = () => (
    <section className="py-15 text-center px-12">
        <h2 className="text-4xl font-bold mb-10 text-left">Find Talent By Category</h2>
        <h3 className="text-lg mb-10 text-left">
            Looking for an opportunity? <strong><a href="" style={{ color: "#014C69" }}>Browse jobs</a></strong>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {["Healthcare", "IT", "Education", "Retail", "Customer Service", "Sales"].map((category) => (
                <Card
                    key={category}
                    className="bg-gray-100 hover:bg-gray-300 hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 outline-none transform"
                >
                    <CardContent className="flex flex-col items-center">
                        <div className="text-[#014C69] text-4xl mb-4" style={{ color: "#014C69" }}>★</div>
                        <h3 className="text-3xl font-semibold mb-4">{category}</h3>
                        <p className="text-gray-600 text-lg">Top professionals in {category.toLowerCase()}.</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    </section>
);

export default TalentCategories;