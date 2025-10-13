import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/context/LanguageContext';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  const { t } = useLanguage();

  return (
    <div className="relative group">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
      <Input
        type="text"
        placeholder={t('searchPlaceholder')}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-12 h-12 bg-card border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all text-base"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-focus-within:opacity-10 rounded-lg blur-xl transition-opacity -z-10" />
    </div>
  );
}
