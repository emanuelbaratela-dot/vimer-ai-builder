import { Shield, Package, Headphones, Award } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "Testes hidrostáticos realizados",
      description: "Todos os produtos passam por rigorosos testes de qualidade",
    },
    {
      icon: Package,
      title: "Estoque nacional",
      description: "Pronta entrega para todo o Brasil",
    },
    {
      icon: Award,
      title: "Garantia 1 ano",
      description: "Cobertura total contra defeitos de fabricação",
    },
    {
      icon: Headphones,
      title: "Suporte técnico",
      description: "Assistência especializada em todo território nacional",
    },
  ];

  return (
    <section className="py-16 bg-primary/5">
      <div className="container-vimer">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <badge.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">{badge.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;