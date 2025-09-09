import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const NewsletterSection = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Opção 1: Mailto
    const subject = encodeURIComponent("Newsletter Vimer");
    const body = encodeURIComponent(`Nome: ${nome}\nE-mail: ${email}\n\nSolicito cadastro na newsletter da Vimer.`);
    const mailtoLink = `mailto:contato@vimertech.com.br?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    // Clear form after submission
    setNome("");
    setEmail("");
  };

  return (
    <section id="newsletter" className="py-20 bg-primary">
      <div className="container-vimer">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Fique por dentro das novidades
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Receba lançamentos, promoções e conteúdo exclusivo
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                type="text"
                placeholder="Seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                className="bg-white border-white text-foreground placeholder:text-muted-foreground"
              />
              <Input
                type="email"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white border-white text-foreground placeholder:text-muted-foreground"
              />
            </div>
            
            <Button 
              type="submit" 
              size="lg"
              className="w-full md:w-auto min-h-[44px] bg-white text-primary hover:bg-white/90"
            >
              <Mail className="mr-2 h-4 w-4" />
              Quero Receber
            </Button>
          </form>
          
          <p className="text-xs text-white/70 mt-4">
            Ao se inscrever, você concorda com nossa política de privacidade
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;