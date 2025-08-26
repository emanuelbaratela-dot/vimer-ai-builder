import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Collections = () => {
  const collections = [
    {
      name: "Preto Fosco",
      description: "Elegância e modernidade em cada detalhe",
      image: "/api/placeholder/400/500",
      count: "24 produtos",
      href: "/colecoes/preto-fosco",
      gradient: "from-gray-900 to-gray-700",
    },
    {
      name: "Cromado",
      description: "Clássico atemporal com acabamento premium",
      image: "/api/placeholder/400/500",
      count: "32 produtos",
      href: "/colecoes/cromado",
      gradient: "from-slate-400 to-slate-600",
    },
    {
      name: "Escovado",
      description: "Sofisticação com toque industrial",
      image: "/api/placeholder/400/500",
      count: "18 produtos",
      href: "/colecoes/escovado",
      gradient: "from-amber-700 to-amber-900",
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container-vimer">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Coleções exclusivas</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubra nossas linhas de acabamento pensadas para harmonizar com qualquer ambiente
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Link
              key={collection.name}
              to={collection.href}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image */}
              <div className="aspect-[4/5] relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${collection.gradient} opacity-90`} />
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent flex flex-col justify-end p-8">
                  <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                    <p className="text-primary-foreground/80 text-sm font-medium mb-2">
                      {collection.count}
                    </p>
                    <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                      {collection.name}
                    </h3>
                    <p className="text-primary-foreground/90 text-sm mb-4">
                      {collection.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary-foreground font-medium">
                      <span>Explorar coleção</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;