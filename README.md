# Bludora Website

A modern, responsive website for Bludora Software Development Studio built with React, TypeScript, and cutting-edge web technologies.

## 🚀 Features

- **Modern Design**: Clean, professional design with glassmorphism effects
- **Responsive**: Fully responsive across all device sizes
- **Animations**: Smooth animations powered by Motion and GSAP
- **3D Elements**: Interactive 3D components using Three.js
- **Performance**: Optimized for speed and SEO
- **TypeScript**: Full type safety throughout the codebase

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Custom CSS
- **Animations**: Motion (Framer Motion), GSAP with ScrollTrigger
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/bludora/website.git
   cd bludora-website
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🏗️ Building for Production

\`\`\`bash
npm run build
\`\`\`

This creates an optimized production build in the \`dist\` folder.

## 🚀 Deployment to Vercel

This project is optimized for Vercel deployment:

### Automatic Deployment (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the project settings and deploy

### Manual Deployment

1. Install Vercel CLI:
   \`\`\`bash
   npm i -g vercel
   \`\`\`

2. Deploy:
   \`\`\`bash
   vercel
   \`\`\`

### Environment Variables

No environment variables are required for the basic setup.

## 📁 Project Structure

\`\`\`
src/
├── components/ # Reusable UI components
│ ├── Navigation.tsx # Main navigation with mobile menu
│ ├── Hero.tsx # Landing page hero section
│ ├── About.tsx # About section with DecryptedText
│ ├── FeaturedWork.tsx # Project showcase
│ ├── DecryptedText.tsx # Animated text component
│ ├── PageLoader.tsx # Loading animation
│ └── ...
├── pages/ # Page components
│ ├── HomePage.tsx # Landing page
│ ├── AboutPage.tsx # About us page
│ ├── ServicesPage.tsx # Services page
│ ├── SelectedWorkPage.tsx # Portfolio page
│ └── ContactPage.tsx # Contact page with 3D model
├── animations/ # Animation utilities
│ └── gsapAnimations.ts
├── styles/ # Global styles
│ └── globals.css
└── App.tsx # Main app component with routing
\`\`\`

## 🎨 Key Components

- **DecryptedText**: Animated text that reveals characters with encryption effect
- **PageLoader**: Smooth loading transitions between pages
- **ModelViewer**: Interactive 3D model viewer for contact page
- **CircularText**: Spinning circular text animation
- **CurvedLoop**: Interactive curved marquee text

## 📱 Responsive Design

The website is fully responsive with breakpoints for:

- Mobile: 768px and below
- Tablet: 768px - 1024px
- Desktop: 1024px and above

## ⚡ Performance

- Lighthouse score: 90+
- Bundle size optimization with code splitting
- Image optimization and lazy loading
- GPU-accelerated animations for 60fps
- Efficient chunk loading

## 🔧 Development

### Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run preview\` - Preview production build
- \`npm run lint\` - Run ESLint

### Code Quality

- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Consistent component patterns

## 📞 Contact

- Email: bludorasoftware@outlook.com
- WhatsApp: +905541869905
- Instagram: @bludorasoftware

## 📄 License

This project is proprietary and confidential. All rights reserved.

---

Built with ❤️ by Ahmed Mekled
