import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, SearchX, Sparkles } from "lucide-react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background via-background/90 to-background text-foreground">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-4 py-24">
          <div className="relative w-full overflow-hidden rounded-3xl border border-border/40 bg-card/70 p-12 text-center shadow-xl backdrop-blur">
            <div className="absolute -top-32 left-20 h-64 w-64 rounded-full bg-primary/25 blur-3xl" aria-hidden />
            <div className="absolute -bottom-40 right-16 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" aria-hidden />

            <div className="relative flex flex-col items-center space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-gradient-to-r from-primary/10 to-secondary/10 px-5 py-2 text-sm font-medium text-primary">
                <SearchX className="h-4 w-4" />
                <span>{t("notFoundHeading")}</span>
              </div>

              <h1 className="text-4xl font-bold md:text-5xl">
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  {t("notFoundTitle")}
                </span>
              </h1>

              <p className="max-w-xl text-base text-muted-foreground md:text-lg">
                {t("notFoundDescription")}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Button asChild size="lg">
                  <Link to="/">
                    <ArrowLeft className="h-4 w-4" />
                    {t("backToHome")}
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/#catalog">
                    <Sparkles className="h-4 w-4" />
                    {t("notFoundExplore")}
                  </Link>
                </Button>
              </div>

              <p className="text-xs text-muted-foreground/80">
                {t("notFoundSupport")}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
