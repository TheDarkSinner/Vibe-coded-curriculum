export interface CoverLetterData {
    name: string;
    title: string;
    contact: {
        email: string;
        phone?: string;
        linkedin: string;
        github: string;
        location: string;
    };
    date: string;
    paragraphs: string[];
    personalProject?: {
        name: string;
        url: string;
        description: string;
    };
}

export const coverLetterData: CoverLetterData = {
    name: "Matheus Mendonça",
    title: "Full Stack Developer",
    contact: {
        email: "gs.math.mm@gmail.com",
        linkedin: "linkedin.com/in/mm-oliv",
        github: "github.com/TheDarkSinner",
        location: "Belo Horizonte, Brazil"
    },
    date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }),
    paragraphs: [
        "Full Stack developer with a strong focus on building high-impact, scalable web applications and integrating AI to accelerate digital transformation. I am proficient in React, TypeScript, Node.js, and Express, consistently prioritizing clean architecture, maintainability, and efficient development practices.",
        "I have contributed to the end-to-end development of global applications delivered in more than 15 languages, collaborating across multidisciplinary teams to ensure high technical and product quality. My experience also includes designing and implementing robust and secure smart contracts in Solidity for EVM-compatible blockchains, with a strong emphasis on safety, optimization, and real-world utility.",
        "I actively leverage AI tools to enhance both development workflows and user-facing features, driving faster iteration cycles and measurable product improvements. I am also an enthusiast of Blockchain technologies and Low-Code platforms such as OutSystems, always exploring innovative ways to deliver smarter, faster, and more resilient solutions."
    ],
    personalProject: {
        name: "DealerNode",
        url: "https://dealernode.app",
        description: "In addition to my professional experience, I maintain a personal project where I lead the architecture and development of an AI-powered Web3 platform, further expanding my expertise in distributed systems, automation, and crypto-native development."
    }
};
