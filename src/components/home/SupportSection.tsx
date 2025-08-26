import { Shield, Wrench, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SupportSection = () => {
  return (
    <section className="py-20">
      <div className="container-vimer">
        <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-primary-foreground shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Suporte técnico e garantia de 1 ano
              </h2>
              <p className="text-primary-foreground/90 text-lg mb-8">
                Conte com nossa equipe especializada para instalação, manutenção e acionamento de garantia. 
                Estamos presentes em todo o Brasil.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">Garantia total de 1 ano</span>
                </div>
                <div className="flex items-center gap-3">
                  <Wrench className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">Assistência técnica</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">Suporte via WhatsApp</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">Resposta em 24h</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/suporte">
                  <Button variant="secondary" size="lg">
                    Acionar garantia
                  </Button>
                </Link>
                <Link to="/suporte#faq">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
                  >
                    Central de ajuda
                  </Button>
                </Link>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="space-y-6">
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-4xl font-bold mb-2">98%</p>
                      <p className="text-sm text-primary-foreground/80">
                        Satisfação no atendimento
                      </p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold mb-2">24h</p>
                      <p className="text-sm text-primary-foreground/80">
                        Tempo médio de resposta
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-t border-primary-foreground/20 pt-6">
                    <div>
                      <p className="text-4xl font-bold mb-2">+500</p>
                      <p className="text-sm text-primary-foreground/80">
                        Assistências autorizadas
                      </p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="border-t border-primary-foreground/20 pt-6">
                    <p className="text-sm italic mb-3">
                      "Acionei a garantia e fui atendido rapidamente. Produto substituído sem burocracia."
                    </p>
                    <p className="text-xs text-primary-foreground/70">
                      João Silva - São Paulo/SP
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 h-24 w-24 bg-primary-foreground/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 h-32 w-32 bg-primary-foreground/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;