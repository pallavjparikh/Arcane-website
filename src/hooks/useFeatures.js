// useFeatures.js
import { useState } from 'react';

const useFeatures = () => {
    const [features] = useState([
        {
            title: "Custimized AI Development",
            description: "Build custom AI models tailored to your business needs. Arcane AI's intuitive interface and pre-built templates make AI development accessible to everyone.",
            image: "src/assets/hero/5.1.jpg"
        },
        {
            title: "Automated Threat Response",
            description: "Arcane AI doesn't just detect threats – it helps you respond. Configure automated actions, like isolating compromised devices or triggering alerts, to minimize damage and downtime.",
            image: "/hero/2.1.jpg"
        },
        {
            title: "Custom AI Workflows",
            description: "Build AI-powered workflows tailored to your data and business processes. Automate tasks, generate insights, and make data-driven decisions – all without coding",
            image: "/hero/3.1.jpg"
        },
        {
            title: "Seamless Data Integration",
            description: "Connect Arcane AI to your existing data sources (databases, CRM, cloud storage) to leverage your data for both custom AI development and network security analysis. [Mention specific integrations if you have them, e.g., Works with AWS, Azure, Google Cloud, Zoho CRM, and more.]",
            image: "/hero/4.1.jpg"
        }
    ]);

    return features;
};

export default useFeatures;