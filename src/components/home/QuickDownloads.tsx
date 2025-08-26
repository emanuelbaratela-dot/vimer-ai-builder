import { FileText, Download, BookOpen, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const QuickDownloads = () => {
  const downloads = [
    {
      icon: FileText,
      title: "Catálogo Geral",
      description: "Linha completa de produtos",
      size: "15 MB",
      format: "PDF",
    },
    {
      icon: BookOpen,
      title: "Manuais de Instalação",
      description: "Guias passo a passo",
      size: "8 MB",
      format: "PDF",
    },
    {
      icon: FileCheck,
      title: "Fichas Técnicas",
      description: "Especificações detalhadas",
      size: "12 MB",
      format: "ZIP",
    },
    {
      icon: FileText,
      title: "Tabela de Preços",
      description: "Valores atualizados",
      size: "2 MB",
      format: "PDF",
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container-vimer">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Downloads rápidos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Acesse catálogos, manuais e documentação técnica
          </p>
        </div>

        {/* Downloads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {downloads.map((item, index) => (
            <div
              key={item.title}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all animate-fade-in group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <span className="font-medium">{item.format}</span>
                  <span>•</span>
                  <span>{item.size}</span>
                </div>
              </div>

              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {item.description}
              </p>

              <Button variant="outline" size="sm" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Baixar
              </Button>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <Button variant="default" size="lg">
            Ver todos os downloads
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QuickDownloads;