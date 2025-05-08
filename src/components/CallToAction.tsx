import React from "react";
import { Button } from "./ui/button";

const CallToAction: React.FC = () => (
    <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Hire Top Talent?</h2>
        <Button variant="default" className="px-8 py-3 text-lg rounded-full">Get Started</Button>
    </section>
);

export default CallToAction;