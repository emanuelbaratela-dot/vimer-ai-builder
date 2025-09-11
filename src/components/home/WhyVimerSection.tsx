import { CheckCircle } from "lucide-react";

const WhyVimerSection = () => {
  const benefits = [
    {
      title: "Estoque nacional",
      description: "Produtos disponíveis para entrega imediata",
      icon: "🚚",
    },
    {
      title: "Garantia 5 anos",
      description: "Proteção completa contra defeitos de fabricação",
      icon: "🛡️",
    },
    {
      title: "Suporte técnico",
      description: "Equipe especializada para tirar suas dúvidas",
      icon: "💬",
    },
    {
      title: "Testes hidrostáticos",
      description: "Todos os produtos testados e aprovados",
      icon: "✅",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que escolher <span className="text-primary">Vimer</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais que metais sanitários, oferecemos confiança e tranquilidade para seu projeto
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in flex flex-col items-center text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                {benefit.title}
                <CheckCircle className="h-4 w-4 text-primary" />
              </h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVimerSection;