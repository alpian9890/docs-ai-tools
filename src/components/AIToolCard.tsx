import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AITool } from '@/data/aiToolsData';
import { useLanguage } from '@/context/LanguageContext';

interface AIToolCardProps {
  tool: AITool;
}

export function AIToolCard({ tool }: AIToolCardProps) {
  const { language, t } = useLanguage();

  return (
    <Card className="group relative overflow-hidden bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,217,255,0.15)] animate-fade-in">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-2 flex-1">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {tool.name}
            </h3>
            <a
              href={`https://${tool.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-primary/80 hover:text-primary transition-colors font-mono"
            >
              {tool.url}
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          <Badge variant="secondary" className="shrink-0 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            {tool.category}
          </Badge>
        </div>

        {/* Summary */}
        <p className="text-muted-foreground leading-relaxed line-clamp-3">
          {tool.summary[language]}
        </p>

        {/* Action button */}
        <Link to={`/tool/${tool.id}`}>
          <Button
            className="w-full group/btn bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all"
          >
            <span>{t('readMore')}</span>
            <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>

      {/* Hover glow effect */}
      <div className="absolute -inset-px bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />
    </Card>
  );
}
