# AI Lawyers CC 🏛️⚖️

A modern, responsive single-page application showcasing specialized AI legal agents built with Next.js 15. The website features a comprehensive showcase of AI lawyers across various legal domains, providing an elegant interface for users to explore legal AI services.

## 🌟 Features

- **9 Specialized AI Lawyers** across different legal domains
- **Responsive Design** optimized for all devices
- **Modern UI/UX** with gold and black theme
- **Interactive FAQ Section** with comprehensive legal guidance information
- **Fast Performance** with Next.js 15 and optimized builds
- **Accessible Components** using Radix UI primitives
- **Type-Safe** development with TypeScript

## 🤖 AI Lawyer Specialties

Our platform features specialized AI agents for:

1. **Corporate Counsel AI** - Corporate Law, business formation, M&A, governance
2. **Estate Planning AI** - Wills, trusts, estate administration, succession planning
3. **Family Law AI** - Divorce, custody, adoption, domestic relations
4. **Contract AI** - Contract drafting, review, negotiation, dispute resolution
5. **IP Protection AI** - Patents, trademarks, copyrights, trade secrets
6. **Employment Law AI** - Workplace rights, discrimination, labor relations
7. **Criminal Defense AI** - Criminal law, defense strategies, legal procedures
8. **Personal Injury AI** - Accident claims, liability, compensation cases
9. **Healthcare Law AI** - Medical law, compliance, healthcare regulations
10. **Constitutional Law AI** - Constitutional rights, civil liberties, government law

## 🛠️ Technology Stack

- **Framework:** Next.js 15.5.3
- **Language:** TypeScript 5.9.2
- **Styling:** Tailwind CSS 3.4.17
- **UI Components:** Radix UI (@radix-ui/react-accordion, @radix-ui/react-collapsible)
- **Icons:** Lucide React
- **Utilities:** Class Variance Authority, clsx, tailwind-merge
- **Build Tools:** PostCSS, Autoprefixer

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/realharry/ailawyerscc.git
   cd ailawyerscc
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000) to see the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page component
├── components/             # React components
│   ├── ui/                # Reusable UI components
│   │   ├── accordion.tsx  # Accordion component
│   │   ├── button.tsx     # Button component
│   │   └── card.tsx       # Card component
│   ├── faq-section.tsx    # FAQ section with legal Q&A
│   ├── hero-section.tsx   # Hero section with main CTA
│   └── showcase-section.tsx # AI lawyers showcase grid
├── lib/                   # Utility functions
├── styles/                # Global styles and Tailwind config
└── types/                 # TypeScript type definitions
```

## 🎨 Design System

The application uses a custom gold and black theme with:

- **Primary Colors:** Gold variants (50-900) for highlights and CTAs
- **Background:** Dark gradients from gray-900 to black
- **Typography:** Clean, modern font stack with proper hierarchy
- **Components:** Glassmorphism effects with backdrop blur
- **Animations:** Smooth transitions and hover effects

## 📱 Responsive Design

- **Mobile-first** approach with Tailwind CSS
- **Breakpoints:** sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1400px)
- **Grid layouts** adapt from single column on mobile to multi-column on desktop
- **Touch-friendly** interactive elements

## 🔧 Development

### Code Quality

- **ESLint** for code linting
- **TypeScript** for type safety
- **Next.js** built-in optimizations
- **Automatic code formatting** recommendations

### Build Optimization

- Static generation for optimal performance
- Image optimization with Next.js Image component
- CSS optimization with Tailwind CSS purging
- Bundle optimization with Next.js compiler

## 🚀 Deployment

The application is optimized for deployment on:

- **Vercel** (recommended for Next.js apps)
- **Netlify**
- **AWS Amplify**
- **Any Node.js hosting platform**

### Build for Production

```bash
npm run build
npm start
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

## 📞 Support

For questions about the AI Lawyers platform or technical support, please open an issue in this repository.

---

**Note:** This showcase website demonstrates AI legal agents for informational purposes. For actual legal representation and complex legal matters, please consult with licensed human attorneys.
