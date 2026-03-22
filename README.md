# DevReliant

[![React](https://img.shields.io/badge/React-19.2.4-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0.0-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2.2-38B2AC.svg)](https://tailwindcss.com/)

A modern, responsive business website for DevReliant - a software solutions startup specializing in building resilient software for ambitious companies.

## 🚀 About DevReliant

DevReliant is a collective of senior engineers dedicated to building software that stands the test of time. Founded by four experienced developers from Bangladesh, we focus on architectural integrity and stability without sacrificing development velocity.

### Our Team
- **Mehrab** - Backend Developer (15+ years experience)
- **Asif** - Frontend Developer (12+ years experience)
- **Wasik** - Manual + Automation QA (3+ years experience)
- **Jobayed** - Manual + Automation QA (1.5+ years experience)

## 💼 Services

We provide comprehensive software engineering solutions:

### 🏗️ MVP Development
Fast-track your business idea to market with a working prototype. We build proof-of-concept applications in weeks, not months.

### 🔄 Legacy System Modernization
Rescue outdated, slow, and expensive software systems. We modernize legacy applications without business disruption.

### 🛡️ QA Automation
Catch 95% of bugs before customers find them. We implement comprehensive automated testing suites for quality assurance.

### 👔 Part-Time CTO Services
Access high-level technical leadership without full-time commitment. Strategic guidance for tech decisions, team building, and quality standards.

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Form Validation**: Zod
- **Styling**: Tailwind CSS with custom theme
- **Development**: ESLint, TypeScript

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── layout/          # Layout components (Navbar, Footer)
│   ├── ui/              # UI utility components
│   └── utils/           # Utility components
├── data/                # Static data and repository
├── domain/              # Domain models and types
├── pages/               # Page components
├── assets/              # Static assets
├── index.css            # Global styles and Tailwind config
└── main.tsx            # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sharif-jobayed/DevReliant.git
cd DevReliant
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8001`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Code Quality

```bash
npm run lint
```

## 🎨 Design System

The project uses a custom Tailwind CSS theme with DevReliant brand colors:

- **Primary**: `#008080` (Teal)
- **Light**: `#66b2b2`
- **Dark**: `#006666`
- **Lightest**: `#b2d8d8`

All styles are centralized in `src/index.css` using Tailwind utility classes for maintainability.

## 📱 Features

- **Responsive Design**: Optimized for all device sizes
- **Smooth Scrolling**: Enhanced navigation experience
- **Form Validation**: Client-side validation with error handling
- **Modern UI**: Clean, professional design with hover effects
- **Performance Optimized**: Fast loading with Vite bundler
- **Type Safe**: Full TypeScript implementation

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: hello@devreliant.tech
- **Website**: [devreliant.tech](https://devreliant.tech)
- **Location**: Bangladesh (Serving global clients)

---

*Built with ❤️ by the DevReliant team*
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
