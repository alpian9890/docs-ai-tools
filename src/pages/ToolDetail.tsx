import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { aiToolsData } from '@/data/aiToolsData';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowLeft, ExternalLink, Sparkles } from 'lucide-react';
import { useEffect } from 'react';

export default function ToolDetail() {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const tool = aiToolsData.find((tool) => tool.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!tool) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-12 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="text-6xl mb-4">🤖</div>
            <h2 className="text-3xl font-bold">Tool not found</h2>
            <p className="text-muted-foreground">The AI tool you're looking for doesn't exist.</p>
            <Link to="/">
              <Button className="mt-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t('backToHome')}
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Back button */}
        <Link to="/" className="inline-block mb-8">
          <Button variant="outline" className="gap-2 hover:bg-muted">
            <ArrowLeft className="h-4 w-4" />
            {t('backToHome')}
          </Button>
        </Link>

        {/* Tool Detail Card */}
        <Card className="overflow-hidden bg-gradient-to-br from-card to-card/50 border-border/50 animate-fade-in">
          {/* Header Section */}
          <div className="relative p-8 md:p-12 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 border-b border-border/50">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 animate-glow" />
            
            <div className="relative space-y-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="space-y-4 flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/50 border border-primary/20 backdrop-blur-sm">
                    <Sparkles className="h-3 w-3 text-primary" />
                    <span className="text-xs font-medium text-primary">{t('fullDocumentation')}</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {tool.name}
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="secondary" className="bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/30 text-base px-4 py-1">
                      {tool.category}
                    </Badge>
                    <a
                      href={`https://${tool.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-background/50 border border-border hover:border-primary/50 transition-all group backdrop-blur-sm"
                    >
                      <span className="font-mono text-sm text-muted-foreground group-hover:text-primary transition-colors">
                        {tool.url}
                      </span>
                      <ExternalLink className="h-4 w-4 text-primary" />
                    </a>
                  </div>
                </div>

                <a
                  href={`https://${tool.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:shadow-primary/20">
                    <ExternalLink className="h-5 w-5" />
                    {t('officialWebsite')}
                  </Button>
                </a>
              </div>

              {/* Summary */}
              <Card className="p-6 bg-background/50 border-border/50 backdrop-blur-sm">
                <p className="text-lg text-foreground leading-relaxed">
                  {tool.summary[language]}
                </p>
              </Card>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 md:p-12">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full" />
                  <h2 className="text-2xl font-bold text-foreground m-0">
                    About {tool.name}
                  </h2>
                </div>
                
                <div className="text-muted-foreground leading-relaxed text-base md:text-lg space-y-4">
                  {tool.description[language].split('\n').map((paragraph, index) => {
                    if (paragraph.trim()) {
                      return (
                        <p key={index} className="text-foreground/90">
                          {paragraph}
                        </p>
                      );
                    }
                    return null;
                  })}
                </div>

                {/* Info boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-8 border-t border-border/50">
                  <Card className="p-6 bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
                    <h3 className="text-sm font-semibold text-primary mb-2">{t('category')}</h3>
                    <p className="text-lg font-medium text-foreground">{tool.category}</p>
                  </Card>
                  
                  <Card className="p-6 bg-gradient-to-br from-secondary/5 to-transparent border-secondary/20">
                    <h3 className="text-sm font-semibold text-secondary mb-2">{t('officialWebsite')}</h3>
                    <a
                      href={`https://${tool.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="font-mono">{tool.url}</span>
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Related Tools Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full" />
            More Tools in {tool.category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aiToolsData
              .filter((t) => t.category === tool.category && t.id !== tool.id)
              .slice(0, 3)
              .map((relatedTool) => (
                <Link key={relatedTool.id} to={`/tool/${relatedTool.id}`}>
                  <Card className="p-6 hover:bg-muted transition-all hover:shadow-lg hover:shadow-primary/10 group cursor-pointer h-full">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {relatedTool.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedTool.summary[language]}
                    </p>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
