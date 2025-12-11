import React, { forwardRef } from 'react';
import { ResumeData } from '../types';

interface ResumeProps {
  data: ResumeData;
}

const Resume = forwardRef<HTMLDivElement, ResumeProps>(({ data }, ref) => {
  return (
    <div 
      ref={ref}
      className="w-[210mm] min-h-[297mm] bg-white flex shadow-2xl mx-auto print:shadow-none print:w-full print:min-h-screen print:mx-0 text-sm leading-relaxed"
    >
      {/* Left Sidebar */}
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
              <a href={`mailto:${data.contact.email}`} className="hover:text-white transition-colors">{data.contact.email}</a>
            </div>
            <div>
              <p className="font-semibold text-white">LinkedIn</p>
              <a href={`https://${data.contact.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors break-words block">
                 linkedin.com/in/mm-oliv
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

        {/* Skills Section */}
        <section>
          <h2 className="text-white text-lg font-semibold mb-4 border-b border-gray-500 pb-1">
            Top Skills
          </h2>
          <ul className="flex flex-col gap-2">
            {data.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>

        {/* Languages Section */}
        <section>
          <h2 className="text-white text-lg font-semibold mb-4 border-b border-gray-500 pb-1">
            Languages
          </h2>
          <ul className="flex flex-col gap-2">
            {data.languages.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
        </section>

        {/* Certifications Section */}
        <section>
          <h2 className="text-white text-lg font-semibold mb-4 border-b border-gray-500 pb-1">
            Certifications
          </h2>
          <ul className="flex flex-col gap-2">
            {data.certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </section>

      </div>

      {/* Right Content */}
      <div className="w-[68%] p-10 flex flex-col text-gray-800">
        
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-[#1f2f3d] mb-2">{data.name}</h1>
          <p className="text-base text-gray-600 font-medium leading-snug">
            {data.title}
          </p>
          <p className="text-gray-400 text-sm mt-1">{data.contact.location}</p>
        </header>

        {/* Summary */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#1f2f3d] mb-3">Summary</h2>
          <p className="text-gray-700 text-justify">
            {data.summary}
          </p>
        </section>
        
        <hr className="w-16 border-gray-400 mb-8" />

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#1f2f3d] mb-5">Experience</h2>
          <div className="flex flex-col gap-6">
            {data.experience.map((exp, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold text-gray-800">{exp.company}</h3>
                {exp.durationTotal && (
                  <p className="text-sm text-gray-500 mb-1">{exp.durationTotal}</p>
                )}
                
                <h4 className="font-semibold text-gray-700">{exp.role}</h4>
                <p className="text-sm text-gray-500 italic mb-1">
                  {exp.duration}
                  {exp.location && ` | ${exp.location}`}
                </p>
                
                {exp.description && (
                  <p className="text-sm text-gray-700 mt-2 text-justify">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        <hr className="w-16 border-gray-400 mb-8" />

        {/* Education */}
        <section>
          <h2 className="text-xl font-bold text-[#1f2f3d] mb-5">Education</h2>
          <div className="flex flex-col gap-4">
            {data.education.map((edu, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold text-gray-800">{edu.institution}</h3>
                <p className="text-gray-700">
                  {edu.degree} <span className="text-gray-400">· ({edu.duration})</span>
                </p>
              </div>
            ))}
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

Resume.displayName = 'Resume';

export default Resume;