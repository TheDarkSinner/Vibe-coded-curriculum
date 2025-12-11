import React, { useRef, useState } from 'react';
import ReactToPrint from 'react-to-print';
import { Download, Printer, FileText, Mail } from 'lucide-react';
import Resume from './components/Resume';
import CoverLetter from './components/CoverLetter';
import { resumeData } from './data';
import { coverLetterData } from './coverLetterData';

type DocumentType = 'resume' | 'coverLetter';

const App: React.FC = () => {
  const resumeRef = useRef<HTMLDivElement>(null);
  const coverLetterRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<DocumentType>('resume');

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 font-sans">

      {/* Control Bar */}
      <div className="w-full max-w-[210mm] flex justify-between items-center mb-6 px-4 sm:px-0">
        <h1 className="text-2xl font-bold text-gray-800">
          {activeTab === 'resume' ? 'Resume Preview' : 'Cover Letter Preview'}
        </h1>

        {/* ReactToPrint for active document */}
        <ReactToPrint
          trigger={() => (
            <button
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg shadow-md transition-all font-medium cursor-pointer"
            >
              <Download size={18} />
              <span>Download PDF</span>
            </button>
          )}
          content={() => activeTab === 'resume' ? resumeRef.current : coverLetterRef.current}
          documentTitle={activeTab === 'resume' ? 'Matheus_Mendonca_Resume_English' : 'Matheus_Mendonca_Cover_Letter_English'}
          onAfterPrint={() => console.log('Print success')}
        />
      </div>

      {/* Tab Navigation */}
      <div className="w-full max-w-[210mm] flex mb-6 px-4 sm:px-0">
        <button
          onClick={() => setActiveTab('resume')}
          className={`flex items-center gap-2 px-6 py-3 rounded-l-lg font-medium transition-all ${activeTab === 'resume'
            ? 'bg-[#1f2f3d] text-white shadow-lg'
            : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
        >
          <FileText size={18} />
          Resume
        </button>
        <button
          onClick={() => setActiveTab('coverLetter')}
          className={`flex items-center gap-2 px-6 py-3 rounded-r-lg font-medium transition-all ${activeTab === 'coverLetter'
            ? 'bg-[#1f2f3d] text-white shadow-lg'
            : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 border-l-0'
            }`}
        >
          <Mail size={18} />
          Cover Letter
        </button>
      </div>

      <div className="mb-4 text-sm text-gray-500 flex items-center gap-2 bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm">
        <Printer size={16} />
        <span>Tip: In the print window, set <strong>Destination</strong> to "Save as PDF" and ensure <strong>"Background graphics"</strong> is checked.</span>
      </div>

      {/* The Printable Components */}
      <div className="shadow-2xl overflow-hidden rounded-sm print:shadow-none print:rounded-none">
        <div style={{ display: activeTab === 'resume' ? 'block' : 'none' }}>
          <Resume ref={resumeRef} data={resumeData} />
        </div>
        <div style={{ display: activeTab === 'coverLetter' ? 'block' : 'none' }}>
          <CoverLetter ref={coverLetterRef} data={coverLetterData} />
        </div>
      </div>


      <footer className="mt-12 text-gray-500 text-sm">
        <p>Translated & Digitized Resume Version</p>
      </footer>
    </div>
  );
};

export default App;