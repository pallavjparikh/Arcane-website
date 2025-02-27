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
            image: "/team/ujjval.jpg",
            linkedin: "https://www.linkedin.com/in/ujjval-parikh/",
            twitter: "https://twitter.com/UjjvalParikh",
        },
       
    ]);

    return members;
};

export default useTeam;