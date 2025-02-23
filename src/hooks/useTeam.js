import { useState } from "react";

const useTeam = () => {
    const [members] = useState([
        {
            name: "Pallav Parikh",
            role: "Founder & CEO",
            image: "/team/Pallav.png",
            linkedin: "https://www.linkedin.com/in/pallav-parikh/",
           twitter: "https://twitter.com/PallavjParikh",
        },
        {
            name: "Ujjval Parikh",
            role: "CLO",
            image: "/team/m2.jpg",
            linkedin: "https://www.linkedin.com/in/ujjval-parikh/",
            twitter: "https://twitter.com/UjjvalParikh",
        },
        // {
        //     name: "Mateo Rivera",
        //     role: "Co-Founder & CTO",
        //     image: "/team/m3.jpg",
        // },
        // {
        //     name: "Ethan Thompson",
        //     role: "Lead Designer",
        //     image: "/team/m4.jpg",
        // },
        // {
        //     name: "Lisa Zhang",
        //     role: "Lead Developer",
        //     image: "/team/m5.jpg",
        // },
        // {
        //     name: "Mike Davis",
        //     role: "Engagement Lead",
        //     image: "/team/m6.jpg",
        // },
    ]);

    return members;
};

export default useTeam;