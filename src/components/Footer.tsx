import { Heart } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            {t('createdBy')} • October 13, 2025
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-primary fill-primary" /> using AI & React
          </p>
        </div>
      </div>
    </footer>
  );
}
