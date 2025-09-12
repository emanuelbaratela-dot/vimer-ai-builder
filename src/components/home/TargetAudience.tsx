import { Home, Store, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TargetAudience = () => {
  const audiences = [
    {
      icon: Home,
      title: "Consumidor Final",
      description: "Encontre o produto ideal para sua casa com garantia e qualidade certificada",
      benefits: ["Compra segura", "Garantia 1 ano", "Suporte técnico"],
      cta: "Ver produtos",
      href: "/produtos",
      color: "primary",
    },
    {
      icon: Store,
      title: "Lojistas e Revendas",
      description: "Seja um parceiro Vimer e ofereça produtos de qualidade aos seus clientes",
      benefits: ["Condições especiais", "Material de apoio", "Treinamento"],
      cta: "Seja parceiro",
      href: "/b2b",
      color: "accent",
    },
    {
      icon: Palette,
      title: "Arquitetos e Construtoras",
      description: "Soluções completas para seus projetos com suporte técnico especializado",
      benefits: ["Catálogo técnico", "Amostras grátis", "Projetos especiais"],
      cta: "Saiba mais",
      href: "/profissionais",
      color: "muted",
    },
  ];

  return (
    <section className="py-20">
      <div className="container-vimer">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Soluções para todos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Atendemos diferentes necessidades com produtos e serviços especializados
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="group relative bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in border hover:border-primary/20 flex flex-col items-center text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`h-14 w-14 rounded-xl bg-${audience.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <audience.icon className={`h-7 w-7 text-${audience.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3">{audience.title}</h3>
              <p className="text-muted-foreground mb-6">
                {audience.description}
              </p>

              {/* CTA */}
              <Link to={audience.href}>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  {audience.cta}
                </Button>
              </Link>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;