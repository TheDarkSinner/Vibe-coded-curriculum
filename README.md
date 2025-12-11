# Resume & Cover Letter Generator

A clean, professional resume and cover letter template built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Features a print-optimized A4 layout with PDF download functionality.

![Preview](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Vite](https://img.shields.io/badge/Vite-6-purple)

## ✨ Features

- 📄 **Resume & Cover Letter** — Toggle between documents with tab navigation
- 📥 **PDF Download** — One-click download with print-to-PDF
- 🎨 **Professional Design** — Two-column layout with dark sidebar
- 🖨️ **Print-Ready** — A4 dimensions (210mm × 297mm) with proper margins
- ⚡ **Fast** — Built with Vite for instant hot reload

## 🚀 Quick Start

### Clone & Customize

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/resume-template.git
cd resume-template

# Install dependencies
npm install

# Start development server
npm run dev
```

### Edit Your Content

1. **Resume** — Edit `data.ts` with your personal information
2. **Cover Letter** — Edit `coverLetterData.ts` with your letter content

### Download Your PDF

1. Open `http://localhost:3000` in your browser
2. Switch between **Resume** and **Cover Letter** tabs
3. Click **Download PDF**
4. In the print dialog:
   - Set **Destination** to "Save as PDF"
   - Enable **"Background graphics"** for the sidebar colors

## 📁 Project Structure

```
├── components/
│   ├── Resume.tsx        # Resume component
│   └── CoverLetter.tsx   # Cover letter component
├── data.ts               # Resume content (edit this!)
├── coverLetterData.ts    # Cover letter content (edit this!)
├── types.ts              # TypeScript interfaces
├── App.tsx               # Main app with tab navigation
└── index.tsx             # Entry point
```

## 🌐 Deploy

Deploy your customized resume to any static hosting:

### Vercel
```bash
npm run build
# Deploy the `dist` folder
```

### GitHub Pages
```bash
npm run build
# Push `dist` folder to gh-pages branch
```

### Netlify
Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

## 📝 License

MIT — Feel free to use this template for your own resume!

---

**Made with ❤️ by [Matheus Mendonça](https://github.com/TheDarkSinner)**
