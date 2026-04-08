export interface CoverLetterData {
    name: string;
    title: string;
    contact: {
        email: string;
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
    title: "Full Stack Developer | Building Software & Blockchain Solutions",
    contact: {
        email: "gs.math.mm@gmail.com",
        linkedin: "www.linkedin.com/in/mm-oliv",
        github: "github.com/TheDarkSinner",
        location: "Belo Horizonte, Minas Gerais, Brazil"
    },
    date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }),
    paragraphs: [
        "Full Stack Software Engineer with experience in fintech, banking integrations, blockchain solutions, and enterprise web applications. I bring a strong background in Node.js, NestJS, TypeScript, React, and Next.js, with a focus on scalable APIs, internal platforms, and end-to-end digital products.",
        "I currently work as a Mid-Level Backend Software Engineer in a startup environment, building integrations that support financial operations, secure data exchange, and interoperability between banking and blockchain systems. Before that, I contributed to enterprise applications with multilingual reach across 19 languages, supporting global teams and business operations.",
        "My experience also includes cloud deployment, application maintenance, and low-code development with OutSystems. I am especially interested in backend architecture, product development, automation, fintech infrastructure, blockchain, and scalable software systems."
    ],
    personalProject: {
        name: "DealerNode",
        url: "https://dealernode.app",
        description: "In parallel with my professional work, I maintain a personal product where I deepen my experience with distributed systems, automation, and crypto-native software development."
    }
};
