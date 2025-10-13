# AI Tools Documentation

A modern, responsive AI tools documentation website featuring a comprehensive catalog of various AI platforms and tools with bilingual support (English and Indonesian). Built with modern web technologies for optimal performance and user experience.

## Features

- **Bilingual Support**: Full internationalization with English and Indonesian translations
- **Advanced Search**: Real-time search functionality to quickly find AI tools
- **Category Filtering**: Filter tools by categories for easier navigation
- **Pagination**: Optimized content loading with pagination support
- **Detailed Tool Pages**: Individual pages for each AI tool with comprehensive documentation
- **Responsive Design**: Mobile-first design that works seamlessly across all devices
- **Modern UI**: Clean and intuitive interface built with shadcn-ui components

## Tech Stack

- **Frontend Framework**: React 18.3
- **Build Tool**: Vite 5.4
- **Language**: TypeScript 5.8
- **Styling**: Tailwind CSS 3.4
- **UI Components**: shadcn-ui (Radix UI primitives)
- **State Management**: TanStack React Query 5.8
- **Routing**: React Router DOM 6.30
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Animations**: Tailwind CSS Animate

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/alpian9890/docs-ai-tools.git
cd docs-ai-tools
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server (runs on port 8080)
- `npm run build` - Create production build
- `npm run build:dev` - Create development mode build
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview production build locally

## Project Structure

```
src/
├── components/           # Reusable React components
│   ├── ui/              # shadcn-ui components
│   ├── Header.tsx       # Site header with navigation
│   ├── Footer.tsx       # Site footer
│   ├── SearchBar.tsx    # Search functionality
│   ├── CategoryFilter.tsx # Category filtering
│   ├── AIToolCard.tsx   # Tool card component
│   └── Pagination.tsx   # Pagination controls
├── pages/               # Page components
│   ├── Home.tsx         # Main listing page
│   ├── ToolDetail.tsx   # Individual tool page
│   └── NotFound.tsx     # 404 page
├── context/             # React Context providers
│   └── LanguageContext.tsx # i18n context
├── data/                # Static data
│   └── aiToolsData.ts   # AI tools catalog
├── lib/                 # Utility functions
│   └── utils.ts         # Helper functions
├── hooks/               # Custom React hooks
├── App.tsx              # Root component
└── main.tsx             # Application entry point
```

## Key Features Explained

### Internationalization

The application uses a custom `LanguageContext` for internationalization. Users can switch between English and Indonesian languages seamlessly. All AI tool data contains translations for both languages.

```typescript
const { language, setLanguage, t } = useLanguage();
```

### Data Management

All AI tool data is stored in `src/data/aiToolsData.ts`. Each tool follows a structured interface:

```typescript
interface AITool {
  id: string;           // Unique identifier
  name: string;         // Display name
  url: string;          // Official website
  category: string;     // Tool category
  summary: {            // Short description
    en: string;
    id: string;
  };
  description: {        // Full documentation
    en: string;
    id: string;
  };
}
```

### Adding New AI Tools

To add a new AI tool to the catalog:

1. Open `src/data/aiToolsData.ts`
2. Add a new object to the `aiToolsData` array with all required fields
3. Provide both English (`en`) and Indonesian (`id`) translations
4. Use a unique `id` in kebab-case format (e.g., `"my-new-tool"`)

### Styling

The project uses Tailwind CSS with a custom configuration. The `cn()` utility function (from `src/lib/utils.ts`) is used throughout for conditional class merging:

```typescript
import { cn } from "@/lib/utils";

className={cn("base-class", isActive && "active-class")}
```

## Development Guidelines

- **Import Paths**: Use the `@` alias for src imports (`@/components/Header`)
- **Component Structure**: Follow the established pattern of separating page components from reusable components
- **Styling**: Use Tailwind utility classes; leverage shadcn-ui components for consistency
- **Type Safety**: Ensure all components and functions are properly typed with TypeScript
- **Code Quality**: Run `npm run lint` before committing changes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

---

**Created by**: [alpian9890](https://github.com/alpian9890)
