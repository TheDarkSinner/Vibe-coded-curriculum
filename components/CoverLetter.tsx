import React, { forwardRef } from 'react';
import { CoverLetterData } from '../coverLetterData';

interface CoverLetterProps {
    data: CoverLetterData;
}

const CoverLetter = forwardRef<HTMLDivElement, CoverLetterProps>(({ data }, ref) => {
    return (
        <div
            ref={ref}
            className="w-[210mm] min-h-[297mm] bg-white flex shadow-2xl mx-auto print:shadow-none print:w-full print:min-h-screen print:mx-0 text-sm leading-relaxed"
        >
            {/* Left Sidebar - matching Resume style */}
            <div className="w-[32%] bg-[#1f2f3d] text-gray-300 p-8 flex flex-col gap-8 print:bg-[#1f2f3d] print-color-adjust-exact">

                {/* Contact Section */}
                <section>
                    <h2 className="text-white text-lg font-semibold mb-4 border-b border-gray-500 pb-1">
                        Contact
                    </h2>
                    <div className="flex flex-col gap-3 text-sm">
                        <div>
                            <p className="font-semibold text-white">Phone</p>
                            <p>{data.contact.phone}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-white">Email</p>
                            <a href={`mailto:${data.contact.email}`} className="hover:text-white transition-colors break-words block">
                                {data.contact.email}
                            </a>
                        </div>
                        <div>
                            <p className="font-semibold text-white">LinkedIn</p>
                            <a href={`https://${data.contact.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors break-words block">
                                {data.contact.linkedin}
                            </a>
                        </div>
                        <div>
                            <p className="font-semibold text-white">GitHub</p>
                            <a href={`https://${data.contact.github}`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors break-words block">
                                {data.contact.github}
                            </a>
                        </div>
                        <div>
                            <p className="font-semibold text-white">Location</p>
                            <p>{data.contact.location}</p>
                        </div>
                    </div>
                </section>

                {/* Key Highlights Section */}
                <section>
                    <h2 className="text-white text-lg font-semibold mb-4 border-b border-gray-500 pb-1">
                        Key Highlights
                    </h2>
                    <ul className="flex flex-col gap-2 text-sm">
                        <li>• Full Stack Development</li>
                        <li>• AI Integration</li>
                        <li>• Blockchain / Web3</li>
                        <li>• Smart Contracts (Solidity)</li>
                        <li>• Global Applications (15+ languages)</li>
                        <li>• Low-Code Platforms</li>
                    </ul>
                </section>

                {/* Personal Project Section */}
                {data.personalProject && (
                    <section>
                        <h2 className="text-white text-lg font-semibold mb-4 border-b border-gray-500 pb-1">
                            Personal Project
                        </h2>
                        <div className="text-sm">
                            <p className="font-semibold text-white">{data.personalProject.name}</p>
                            <a
                                href={data.personalProject.url}
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-white transition-colors break-words block text-xs mt-1"
                            >
                                {data.personalProject.url}
                            </a>
                            <p className="mt-2 text-xs leading-relaxed">
                                AI-powered Web3 platform for distributed systems and crypto-native development.
                            </p>
                        </div>
                    </section>
                )}

            </div>

            {/* Right Content */}
            <div className="w-[68%] p-10 flex flex-col text-gray-800">

                {/* Header */}
                <header className="mb-6">
                    <h1 className="text-4xl font-bold text-[#1f2f3d] mb-2">{data.name}</h1>
                    <p className="text-base text-gray-600 font-medium leading-snug">
                        {data.title}
                    </p>
                    <p className="text-gray-400 text-sm mt-1">{data.contact.location}</p>
                </header>

                <hr className="w-16 border-gray-400 mb-6" />

                {/* Date & Greeting */}
                <div className="mb-6">
                    <p className="text-gray-500 text-sm mb-4">{data.date}</p>
                    <p className="text-base font-medium text-[#1f2f3d]">
                        Dear Hiring Manager,
                    </p>
                </div>

                {/* Letter Content */}
                <section className="flex-1">
                    <div className="flex flex-col gap-4 text-justify">
                        {data.paragraphs.map((paragraph, index) => (
                            <p key={index} className="text-gray-700 leading-relaxed">
                                {paragraph}
                            </p>
                        ))}

                        {/* Personal Project mention */}
                        {data.personalProject && (
                            <p className="text-gray-700 leading-relaxed">
                                {data.personalProject.description}
                            </p>
                        )}
                    </div>

                    {/* Closing */}
                    <div className="mt-8">
                        <p className="text-gray-700 mb-4">
                            I am excited about the opportunity to bring my skills and passion to your team. I would welcome the chance to discuss how I can contribute to your organization's goals.
                        </p>
                        <p className="text-gray-700">
                            Thank you for considering my application.
                        </p>
                    </div>

                    {/* Signature */}
                    <div className="mt-8">
                        <p className="text-gray-600 mb-2">Best regards,</p>
                        <p className="text-xl font-bold text-[#1f2f3d]">{data.name}</p>
                    </div>
                </section>

                {/* Footer for Print Page Number simulation */}
                <div className="mt-auto pt-10 text-center text-xs text-gray-400 print:block hidden">
                    Page 1 of 1
                </div>
            </div>
        </div>
    );
});

CoverLetter.displayName = 'CoverLetter';

export default CoverLetter;
