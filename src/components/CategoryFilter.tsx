import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

interface CategoryFilterProps {
  categories: string[];
  selected: string;
  onChange: (category: string) => void;
}

export function CategoryFilter({ categories, selected, onChange }: CategoryFilterProps) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={selected === 'all' ? 'default' : 'outline'}
        onClick={() => onChange('all')}
        className="transition-all hover:scale-105"
      >
        {t('allCategories')}
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selected === category ? 'default' : 'outline'}
          onClick={() => onChange(category)}
          className="transition-all hover:scale-105"
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
