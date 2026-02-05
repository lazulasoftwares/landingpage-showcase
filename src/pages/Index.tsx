import { useState, useEffect } from "react";
import { VersionSwitch } from "@/components/VersionSwitch";
import { IndustrialVersion } from "@/components/landing/IndustrialVersion";
import { RoupasVersion } from "@/components/landing/RoupasVersion";
import { AutomotiveVersion } from "@/components/landing/AutomotiveVersion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type Version = "roupas" | "industrial" | "automotivo";

const Index = () => {
  const [currentVersion, setCurrentVersion] = useState<Version>("roupas");
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    if (!showTooltip) return;

    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [showTooltip]);

  const renderVersion = () => {
    switch (currentVersion) {
      case "roupas":
        return <RoupasVersion />;
      case "industrial":
        return <IndustrialVersion />;      
      case "automotivo":
        return <AutomotiveVersion />;
      default:
        return <IndustrialVersion />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header with Version Switch */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-center">
          <TooltipProvider>
            <Tooltip open={showTooltip} onOpenChange={setShowTooltip}>
              <TooltipTrigger asChild>
                <div>
                  <VersionSwitch
                    currentVersion={currentVersion}
                    onVersionChange={(v) => {
                      setCurrentVersion(v);
                      setShowTooltip(false);
                    }}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent 
                side="bottom" 
                className="bg-primary text-primary-foreground font-medium px-4 py-2"
              >
                👆 Altere o tema aqui
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {renderVersion()}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Sobre Nós</h3>
              <p className="text-sm">
                Empresa líder no mercado, oferecendo soluções de qualidade para diversos segmentos.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Links Úteis</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Início</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Produtos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Serviços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Contato</h3>
              <ul className="space-y-2 text-sm">
                <li>contato@empresa.com.br</li>
                <li>(11) 9999-9999</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">Facebook</a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
            <p>© 2026 Empresa. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
