// useFaqToggle.js
import { useState } from "react";

function useFaqToggle() {
    const questions = [
        {
            question: "What is Arcane AI, and how does it work?",
            answer: "Arcane AI is a platform that empowers you to build custom AI solutions *and* protect your network from cyber threats – all without needing to write any code. We provide the tools and support to leverage your own data and create AI models tailored to your specific business needs, and to monitor network traffic for any security risks."
        },
        {
            question: "Is my data secure with Arcane AI?",
            answer: "Absolutely. Data security is our top priority. Arcane AI allows for on-premise deployments, meaning your data never has to leave your own infrastructure. We also incorporate advanced security features like data anonymization and encryption to protect your sensitive information."
        },
        {
            question: "Can I integrate Arcane AI with other tools I use?",
            answer: "Yes! Arcane AI is designed to integrate with a variety of data sources and business systems, including databases, CRM, and cloud storage. We're constantly expanding our integration capabilities."
        },
        {
            question: "Do you offer a free trial or demo?",
            answer: "Yes, we offer personalized demos to showcase the platform's capabilities and discuss your specific needs. Contact us to schedule a demo and see how Arcane AI can benefit your business."
        },
        {
            question: "What kind of support does Arcane AI provide?",
            answer: "We provide comprehensive support, including documentation, tutorials, and access to our team of AI and cybersecurity experts. We're committed to helping you succeed with Arcane AI."
        },
        {
            question: "How does Arcane AI protect my network from threats?",
            answer: "Arcane AI uses advanced AI algorithms to analyze your network traffic in real-time, identifying anomalies and potential threats like intrusions, malware, and unusual behavior.  It automatically alerts you to suspicious activity and can be configured to take automated response actions."
        },
        {
            question: "What kind of businesses can benefit from Arcane AI?",
            answer: "Arcane AI is designed for small to medium-sized businesses across various industries, including marketing, finance, healthcare, e-commerce, and any organization that wants to leverage their data and improve their cybersecurity posture, but lacks a large IT or security team."
        },
        {
          question: "Do I need coding experience to use Arcane AI?",
          answer: "No, Arcane AI is designed to be user friendly, with a focus on accessibility. The platform does not require coding experience, allowing users to customize models through an intuitive and easy to use interface."
        },
        {
          question: "What kind of data can I use with Arcane AI?",
          answer: "Arcane AI is designed to use a variety of data. Our platform allows you to connect to databases, spreadsheets, CRM systems, and other sources, to use custom data for analysis and security monitoring."
        },
         {
          question: "How does Arcane AI ensure data privacy?",
          answer: "Arcane AI prioritizes data privacy through multiple approaches. We offer on-premise deployments, keeping all of your data within your own systems. We also use advanced techniques such as anonymization and data encryption."
        }
    
    ];

    const [openFaqs, setOpenFaqs] = useState({});

    const toggleFaq = (index) => {
        setOpenFaqs((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return { questions, openFaqs, toggleFaq };
}

export default useFaqToggle;