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
        "Full Stack Developer focused on software and blockchain solutions, with experience in fintech, banking integrations, blockchain solutions, enterprise web applications, and internal platforms. I bring a strong background in Node.js, NestJS, TypeScript, React, and Next.js, with a focus on scalable APIs and end-to-end digital products.",
        "I currently work at Global Cripto, building backend integrations that support financial operations, secure data exchange, and interoperability between banking and blockchain systems. Before that, I contributed to enterprise applications at RHI Magnesita with multilingual reach across 19 languages, supporting global teams and business operations.",
        "My experience also includes cloud deployment, application maintenance, and low-code development with OutSystems. I am especially interested in backend architecture, product development, automation, fintech infrastructure, blockchain, and scalable software systems."
    ]
};
