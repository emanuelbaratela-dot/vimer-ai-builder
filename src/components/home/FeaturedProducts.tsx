import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Eye, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      id: 1,
      name: "Torneira Gourmet Premium",
      category: "Torneiras Cozinha",
      price: "R$ 389,90",
      image: "/api/placeholder/300/300",
      badge: "Lançamento",
      finish: "Cromado",
      stock: true,
    },
    {
      id: 2,
      name: "Misturador Monocomando Black",
      category: "Misturadores",
      price: "R$ 459,90",
      image: "/api/placeholder/300/300",
      badge: "Mais vendido",
      finish: "Preto Fosco",
      stock: true,
    },
    {
      id: 3,
      name: "Cuba Inox Escovada 50cm",
      category: "Cubas Inox",
      price: "R$ 299,90",
      image: "/api/placeholder/300/300",
      finish: "Escovado",
      stock: true,
    },
    {
      id: 4,
      name: "Ducha Higiênica Slim",
      category: "Ducha Higiênica",
      price: "R$ 189,90",
      image: "/api/placeholder/300/300",
      badge: "Promoção",
      finish: "Cromado",
      stock: true,
    },
    {
      id: 5,
      name: "Torneira Lavatório Cascata",
      category: "Torneiras Lavatório",
      price: "R$ 349,90",
      image: "/api/placeholder/300/300",
      finish: "Cromado",
      stock: true,
    },
    {
      id: 6,
      name: "Ralo Linear Black 90cm",
      category: "Ralos",
      price: "R$ 229,90",
      image: "/api/placeholder/300/300",
      badge: "Novo",
      finish: "Preto Fosco",
      stock: true,
    },
    {
      id: 7,
      name: "Chuveiro Quadrado Slim",
      category: "Chuveiros",
      price: "R$ 579,90",
      image: "/api/placeholder/300/300",
      finish: "Cromado",
      stock: false,
    },
    {
      id: 8,
      name: "Torneira Parede Industrial",
      category: "Torneiras Cozinha",
      price: "R$ 429,90",
      image: "/api/placeholder/300/300",
      badge: "Exclusivo",
      finish: "Preto Fosco",
      stock: true,
    },
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20">
      <div className="container-vimer">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Destaques da semana</h2>
            <p className="text-muted-foreground">
              Produtos selecionados com condições especiais
            </p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollLeft}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollRight}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Products Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto hide-scrollbar pb-4"
          >
            {products.map((product, index) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-[300px] animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="group relative bg-card rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden bg-gradient-subtle">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Badge */}
                    {product.badge && (
                      <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                        {product.badge}
                      </Badge>
                    )}

                    {/* Stock Status */}
                    {!product.stock && (
                      <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                        <span className="text-lg font-semibold">Esgotado</span>
                      </div>
                    )}

                    {/* Quick Actions */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex gap-2">
                        <Link to={`/produto/${product.id}`} className="flex-1">
                          <Button variant="secondary" size="sm" className="w-full">
                            <Eye className="h-4 w-4 mr-1" />
                            Ver detalhes
                          </Button>
                        </Link>
                        <Button
                          variant="default"
                          size="icon"
                          disabled={!product.stock}
                        >
                          <ShoppingCart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <p className="text-xs text-muted-foreground mb-1">
                      {product.category}
                    </p>
                    <h3 className="font-semibold mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    
                    {/* Product Meta */}
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">
                        {product.finish}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Garantia 1 ano
                      </Badge>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-primary">
                          {product.price}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          em até 12x sem juros
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-10">
          <Link to="/produtos">
            <Button variant="outline" size="lg">
              Ver todos os produtos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;