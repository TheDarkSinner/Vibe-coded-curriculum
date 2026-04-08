export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description?: string;
  durationTotal?: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  contact: ContactInfo;
  skills: string[];
  languages: string[];
  certifications: string[];
  experience: Experience[];
  education: Education[];
}
