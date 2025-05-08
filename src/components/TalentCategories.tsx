import React from "react";
import { Card, CardContent } from "./ui/card";

const TalentCategories: React.FC = () => (
    <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-8">Find Talent By Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
            {["Healthcare", "IT", "Education", "Retail", "Customer Service", "Sales"].map((category) => (
                <Card key={category} className="hover:shadow-lg transition-shadow">
                    <CardContent>
                        <h3 className="text-2xl font-semibold mb-4">{category}</h3>
                        <p className="text-gray-600">Top professionals in {category.toLowerCase()}.</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    </section>
);

export default TalentCategories;