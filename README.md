# ALTIN ORAN Construction - React + Vite + Tailwind CSS

This is a React application converted from the original HTML/CSS website, maintaining the exact same design using Tailwind CSS.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Copy assets from the original project:
   - Copy the `image/` folder to `public/image/`
   - Copy the `client img/` folder to `public/client-img/`
   - Copy `about-vid.mp4` to `public/about-vid.mp4`

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 📁 Project Structure

```
altin-oran-react/
├── public/
│   ├── image/          # Project images
│   ├── client-img/      # Client logos and banners
│   └── about-vid.mp4    # About video
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ServicesPreview.jsx
│   │   ├── TeamSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── ContactSection.jsx
│   │   └── Footer.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   └── TermsOfService.jsx
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Tailwind imports and custom styles
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Features

- ✅ React 18 with Vite for fast development
- ✅ Tailwind CSS for styling (maintaining original design)
- ✅ React Router for navigation
- ✅ Responsive design (mobile-first)
- ✅ Smooth animations and transitions
- ✅ Component-based architecture

## 📝 Notes

- All original design elements and styling have been preserved
- Images and assets need to be copied manually to the `public/` folder
- The design is fully responsive and matches the original website
