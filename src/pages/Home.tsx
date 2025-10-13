import { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SearchBar } from '@/components/SearchBar';
import { CategoryFilter } from '@/components/CategoryFilter';
import { AIToolCard } from '@/components/AIToolCard';
import { Pagination } from '@/components/Pagination';
import { aiToolsData, categories } from '@/data/aiToolsData';
import { useLanguage } from '@/context/LanguageContext';
import { Sparkles } from 'lucide-react';

export default function Home() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  // Filter tools based on search and category
  const filteredTools = useMemo(() => {
    return aiToolsData.filter((tool) => {
      const matchesSearch =
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.url.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory =
        selectedCategory === 'all' || tool.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Pagination
  const totalPages = Math.ceil(filteredTools.length / itemsPerPage);
  const paginatedTools = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredTools.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredTools, currentPage, itemsPerPage]);

  // Reset to page 1 when filters change
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main id="catalog" className="flex-1 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16 space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {aiToolsData.length} AI Tools Documented
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-glow">
            {t('title')}
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </section>

        {/* Search and Filters */}
        <div className="space-y-6 mb-12">
          <SearchBar value={searchQuery} onChange={handleSearchChange} />
          <CategoryFilter
            categories={categories}
            selected={selectedCategory}
            onChange={handleCategoryChange}
          />
        </div>

        {/* Tools Grid */}
        {filteredTools.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {paginatedTools.map((tool, index) => (
                <div
                  key={tool.id}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  className="animate-scale-in"
                >
                  <AIToolCard tool={tool} />
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                itemsPerPage={itemsPerPage}
                totalItems={filteredTools.length}
                onPageChange={setCurrentPage}
                onItemsPerPageChange={handleItemsPerPageChange}
              />
            )}
          </>
        ) : (
          <div className="text-center py-20 space-y-4">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-foreground">{t('noToolsFound')}</h3>
            <p className="text-muted-foreground">{t('tryDifferent')}</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
