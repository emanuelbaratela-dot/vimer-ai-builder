import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-faucet.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[700px] flex items-center overflow-hidden bg-gradient-subtle">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, hsl(var(--primary)) 35px, hsl(var(--primary)) 70px)`,
        }} />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium">Testes hidrostáticos realizados</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Metais com testes hidrostáticos e{" "}
              <span className="text-primary">1 ano de garantia</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Estética, durabilidade e suporte de verdade. Descubra a linha completa de metais sanitários Vimer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/produtos">
                <Button variant="hero" size="lg" className="group">
                  Ver produtos
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/onde-comprar">
                <Button variant="outline" size="lg">
                  Onde comprar
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Estoque nacional",
                "Garantia 1 ano",
                "Suporte técnico",
                "Frete grátis*",
              ].map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <svg
                    className="h-4 w-4 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <img 
                  src={heroImage}
                  alt="Torneira Vimer Premium" 
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              
              {/* Play Button Overlay */}
              <button className="absolute inset-0 flex items-center justify-center group">
                <div className="bg-primary/90 backdrop-blur-sm rounded-full p-6 transform transition-all group-hover:scale-110 group-hover:bg-primary">
                  <Play className="h-8 w-8 text-primary-foreground fill-current" />
                </div>
              </button>

              {/* Product Badge */}
              <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Linha Premium</p>
                    <p className="text-xs text-muted-foreground">Acabamento cromado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 h-24 w-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;