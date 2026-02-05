import { useEffect, useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shirt, Sparkles, Truck, Heart, Star, ArrowRight } from "lucide-react";

const FadeInSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
};

const ParallaxImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="w-full h-full object-cover scale-110"
      />
    </div>
  );
};

export function RoupasVersion() {
  const heroImages = [
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1000&fit=crop",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=1000&fit=crop",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1000&fit=crop",
  ];
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 1500);
    return () => clearInterval(id);
  }, [heroImages.length]);

  const collections = [
    {
      title: "Verão 2024",
      description: "Peças leves e coloridas para os dias mais quentes",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop",
    },
    {
      title: "Casual Chic",
      description: "Elegância para o dia a dia com conforto",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=500&fit=crop",
    },
    {
      title: "Sport Wear",
      description: "Performance e estilo para suas atividades",
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=500&fit=crop",
    },
  ];

  const benefits = [
    { icon: Sparkles, text: "Tecidos Premium" },
    { icon: Truck, text: "Frete Grátis Brasil" },
    { icon: Heart, text: "Troca Fácil" },
    { icon: Star, text: "5 Anos de Garantia" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shirt className="h-4 w-4" />
                Nova Coleção Disponível
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Vista-se com <span className="text-rose-500">Estilo</span> e Conforto
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                Descubra nossa coleção exclusiva de roupas que combinam qualidade, tendência e preços acessíveis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-rose-500 hover:bg-rose-600 text-white font-semibold">
                  Ver Coleção
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/70 border-rose-200 text-rose-600 hover:bg-rose-100 hover:border-rose-300 hover:text-rose-700 hover:shadow-[0_10px_32px_-12px_rgba(244,114,182,0.5)] transition-all duration-200 backdrop-blur-sm"
                >
                  Ofertas Especiais
                </Button>
              </div>
            </motion.div>

            {/* Hero Carousel - Fixed Responsiveness */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="order-1 lg:order-2 relative h-[280px] sm:h-[350px] md:h-[420px] lg:h-[500px]"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {heroImages.map((image, idx) => {
                  const relative = (idx - currentHero + heroImages.length) % heroImages.length;
                  const slot = relative === 0 ? 0 : relative === 1 ? 1 : -1;
                  const scale = slot === 0 ? 1 : 0.85;
                  const opacity = slot === 0 ? 1 : 0.7;
                  const zIndex = slot === 0 ? 30 : slot === 1 ? 20 : 10;
                  const translateX = slot === 0 ? 0 : slot === 1 ? 60 : -60;
                  
                  return (
                    <motion.img
                      key={image}
                      src={image}
                      alt="Fashion"
                      className="absolute rounded-2xl shadow-2xl object-cover"
                      animate={{
                        x: `${translateX}%`,
                        scale,
                        opacity,
                        rotate: slot * 3,
                      }}
                      transition={{
                        duration: 0.9,
                        ease: [0.22, 0.68, 0.18, 1]
                      }}
                      style={{
                        width: "clamp(140px, 45%, 240px)",
                        height: "clamp(200px, 70%, 340px)",
                        zIndex,
                        filter: slot === 0 ? "none" : "brightness(0.9)",
                      }}
                    />
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-rose-500 py-6"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-2 text-white"
              >
                <benefit.icon className="h-5 w-5" />
                <span className="font-medium text-sm md:text-base">{benefit.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Collections Section */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Nossas Coleções
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Explore nossas coleções cuidadosamente selecionadas para todos os estilos e ocasiões.
              </p>
            </div>
          </FadeInSection>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {collections.map((collection, index) => (
              <FadeInSection key={collection.title} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all cursor-pointer">
                    <div className="relative overflow-hidden h-64 sm:h-72 md:h-80">
                      <ParallaxImage
                        src={collection.image}
                        alt={collection.title}
                        className="absolute inset-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 p-6 text-white"
                        initial={{ y: 20, opacity: 0.8 }}
                        whileHover={{ y: 0, opacity: 1 }}
                      >
                        <h3 className="font-bold text-xl mb-1">{collection.title}</h3>
                        <p className="text-white/80 text-sm">{collection.description}</p>
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-rose-100 to-pink-100 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <FadeInSection>
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Receba Novidades em Primeira Mão
              </h2>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                Cadastre-se e ganhe 15% de desconto na primeira compra, além de acesso antecipado às promoções.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-4 py-3 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
                <Button className="bg-rose-500 hover:bg-rose-600 text-white">
                  Cadastrar
                </Button>
              </div>
            </motion.div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
