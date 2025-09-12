import { FileText, Download, BookOpen, FileCheck, Archive } from "lucide-react";
import { Button } from "@/components/ui/button";

const QuickDownloads = () => {
  const downloads = [
    {
      icon: FileText,
      title: "Catálogo",
      description: "Linha completa de produtos",
      size: "15 MB",
      format: "PDF",
      url: "/downloads/catalogo-vimer-2024.pdf",
    },
    {
      icon: BookOpen,
      title: "Manuais de instalação",
      description: "Guias passo a passo",
      size: "8 MB",
      format: "PDF",
      url: "/downloads/manuais-instalacao.pdf",
    },
    {
      icon: FileCheck,
      title: "Desenho técnico",
      description: "Especificações detalhadas",
      size: "12 MB",
      format: "PDF",
      url: "/downloads/desenho-tecnico.pdf",
    },
  ];

  const handleDownload = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
  };

  const handleDownloadAll = () => {
    const link = document.createElement('a');
    link.href = '/downloads/vimer-arquivos.zip';
    link.download = 'vimer-arquivos.zip';
    link.click();
  };

  return (
    <section id="downloads" className="py-20 bg-gradient-subtle">
      <div className="container-vimer">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Downloads rápidos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Acesse catálogos, manuais e documentação técnica
          </p>
        </div>

        {/* Downloads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {downloads.map((item, index) => (
            <div
              key={item.title}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all animate-fade-in group flex flex-col items-center text-center"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                <item.icon className="h-6 w-6" />
              </div>
              
              <h3 className="font-semibold mb-2">{item.title}</h3>
              
              <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                <span className="font-medium">{item.format}</span>
                <span>•</span>
                <span>{item.size}</span>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">
                {item.description}
              </p>

              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => handleDownload(item.url, item.title.toLowerCase().replace(/\s+/g, '-') + '.pdf')}
              >
                <Download className="h-4 w-4 mr-2" />
                Baixar
              </Button>
            </div>
          ))}
        </div>

        {/* Download All Button */}
        <div className="text-center">
          <Button 
            variant="default" 
            size="lg"
            onClick={handleDownloadAll}
            className="group"
          >
            <Archive className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
            Baixar todos os arquivos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QuickDownloads;