import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroImage from "@/assets/hero-faucet.jpg";

const HeroSection = () => {
  const [stripedBackground, setStripedBackground] = useState(true);

  const carouselImages = [
    { src: heroImage, alt: "Torneira Vimer Premium" },
    { src: heroImage, alt: "Misturador Vimer Gourmet" },
    { src: heroImage, alt: "Ducha Vimer Elegance" },
  ];

  const finishBadges = [
    { name: "Acabamento Cromado", color: "bg-slate-200" },
    { name: "Acabamento Escovado", color: "bg-amber-100" },
    { name: "Acabamento Fosco", color: "bg-gray-800 text-white" },
  ];

  return (
    <section className="relative min-h-[700px] flex items-center overflow-hidden bg-gradient-subtle">
      {/* Background Pattern Toggle */}
      <button
        onClick={() => setStripedBackground(!stripedBackground)}
        className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium border hover:bg-background transition-colors"
      >
        {stripedBackground ? "Remover listras" : "Adicionar listras"}
      </button>

      {/* Background Pattern - Conditional */}
      {stripedBackground && (
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, hsl(var(--primary)) 35px, hsl(var(--primary)) 70px)`,
            }} 
          />
        </div>
      )}

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Elegância e sofisticação que cabe no seu{" "}
              <span className="text-primary">orçamento</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Estética, durabilidade e suporte de verdade. Descubra a linha completa Vimer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={() => {
                  const element = document.querySelector('#colecoes');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Conheça nossa linha
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://vimertech.com.br/onde-comprar/', '_blank')}
              >
                Onde comprar
              </Button>
            </div>
          </div>

          {/* Carousel with Badges */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Carousel
              plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5">
                        <img 
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-12 top-1/2" />
              <CarouselNext className="absolute -right-12 top-1/2" />
            </Carousel>

            {/* Finish Badges Overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex gap-2 flex-wrap">
              {finishBadges.map((badge, index) => (
                <div
                  key={badge.name}
                  className={`${badge.color} backdrop-blur-sm rounded-full px-4 py-2 shadow-lg animate-fade-in`}
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <span className="text-xs font-semibold">{badge.name}</span>
                </div>
              ))}
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