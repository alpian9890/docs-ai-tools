import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 p-1 rounded-lg bg-card border border-border">
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="gap-2"
      >
        <span className="text-base">🇬🇧</span>
        <span className="hidden sm:inline">EN</span>
      </Button>
      <Button
        variant={language === 'id' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('id')}
        className="gap-2"
      >
        <span className="text-base">🇮🇩</span>
        <span className="hidden sm:inline">ID</span>
      </Button>
    </div>
  );
}
