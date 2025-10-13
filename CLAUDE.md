# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an AI tools documentation website built with Vite, React, TypeScript, shadcn-ui, and Tailwind CSS. The site catalogs various AI platforms and tools with bilingual support (English and Indonesian), featuring search, filtering, pagination, and detailed tool pages.

## Common Commands

```bash
# Install dependencies
npm install

# Start development server (runs on port 8080)
npm run dev

# Production build
npm run build

# Development mode build
npm run build:dev

# Run ESLint
npm run lint

# Preview production build
npm run preview
```

## Architecture

### Application Structure

- **Entry Point**: `src/main.tsx` renders the root `App` component
- **App Component**: `src/App.tsx` sets up the provider hierarchy and routing:
  - `QueryClientProvider` (TanStack React Query)
  - `TooltipProvider` (shadcn-ui)
  - `LanguageProvider` (custom context for i18n)
  - `BrowserRouter` with routes
- **Routes**:
  - `/` → `Home` page (main listing with search/filter)
  - `/tool/:id` → `ToolDetail` page (individual tool documentation)
  - `*` → `NotFound` page

### Data Layer

- **Static Data**: All AI tool data is stored in `src/data/aiToolsData.ts`
- **Data Structure**: Each tool follows the `AITool` interface:
  ```typescript
  interface AITool {
    id: string;           // Unique identifier, used in routes
    name: string;         // Display name
    url: string;          // Official website URL
    category: string;     // Category for filtering
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
- **Categories**: Auto-generated from unique tool categories in the data array

### Internationalization

- **Implementation**: Custom `LanguageContext` in `src/context/LanguageContext.tsx`
- **Supported Languages**: English (`en`) and Indonesian (`id`)
- **Usage**: Components use `useLanguage()` hook to access:
  - `language`: Current language code
  - `setLanguage`: Function to switch languages
  - `t`: Translation function for UI strings
- **Content Translation**: AI tool data contains separate `en` and `id` fields; component accesses based on current language

### Component Architecture

- **Page Components**: Located in `src/pages/`
  - Complex components with state management, filtering, pagination logic
- **Reusable Components**: Located in `src/components/`
  - Custom components: `Header`, `Footer`, `SearchBar`, `CategoryFilter`, `AIToolCard`, `Pagination`
- **UI Components**: Located in `src/components/ui/`
  - shadcn-ui components (Radix UI primitives with Tailwind styling)
  - Pre-configured, styled components like buttons, cards, dialogs, etc.

### Key Patterns

1. **Path Alias**: `@` is aliased to `src/` directory (configured in `vite.config.ts` and `tsconfig.json`)
   ```typescript
   import { Header } from '@/components/Header';
   ```

2. **Class Name Utility**: The `cn()` function in `src/lib/utils.ts` merges Tailwind classes using `clsx` and `tailwind-merge`
   ```typescript
   className={cn("base-class", conditional && "conditional-class")}
   ```

3. **Bilingual Content Access**: Components access language-specific content:
   ```typescript
   const { language } = useLanguage();
   const description = tool.description[language];
   ```

4. **Filtering & Search**: `Home` page uses `useMemo` for optimized filtering based on search query and category

## Development Notes

### Adding New AI Tools

1. Add new tool object to `aiToolsData` array in `src/data/aiToolsData.ts`
2. Ensure both `en` and `id` translations are provided for `summary` and `description`
3. Use a unique `id` (kebab-case recommended)
4. Categories are auto-generated, so use existing categories or add new ones

### Styling

- Uses Tailwind CSS with custom configuration in `tailwind.config.ts`
- shadcn-ui components use CSS variables for theming
- Custom animations defined in Tailwind config: `fade-in`, `scale-in`, `glow`

### Development Mode

- Lovable-tagger plugin runs in development mode for component tagging
- Vite dev server configured with host "::" and port 8080

### Import Resolution

Always use the `@` alias for src imports rather than relative paths for consistency and maintainability.
