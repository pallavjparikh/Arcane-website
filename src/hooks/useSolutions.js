import { useState } from "react";

const useSolutions = () => {
    const [solutions] = useState([
        {
            img: "/solutions/s1.avif",
            title: "Operations",
            description: "Optimize your operations with AI-powered insights. Analyze data to identify bottlenecks, automate repetitive tasks, and improve resource allocation. Enhance efficiency and reduce operational costs."
        },
        {
            img: "/solutions/s2.avif",
            title: "Marketing",
            description: "Build custom AI models to personalize marketing campaigns, predict customer behavior, and maximize ROI. Identify high-potential leads and optimize your ad spend with data-driven insights."
        },
        {
            img: "/solutions/s3.avif",
            title: "Cybersecurity",
            description: "Protect your network from threats with AI-powered intrusion detection and real-time analysis. Identify anomalies, respond to attacks, and minimize the risk of data breaches."
        }
    ]);

    return solutions;
};

export default useSolutions;