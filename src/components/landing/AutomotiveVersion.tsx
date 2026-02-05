import { useEffect, useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Wrench, Shield, Clock, Phone, MapPin, ArrowRight, CheckCircle } from "lucide-react";

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

const ParallaxSection = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

export function AutomotiveVersion() {
  const heroImages = [
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1515923162085-2c8743c3b1ec?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1920&h=1080&fit=crop",
  ];
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 5500);
    return () => clearInterval(id);
  }, [heroImages.length]);

  const services = [
    {
      icon: Wrench,
      title: "Manutenção Completa",
      description: "Revisões preventivas e corretivas com peças originais e garantia.",
    },
    {
      icon: Car,
      title: "Funilaria e Pintura",
      description: "Restauração completa da carroceria com acabamento perfeito.",
    },
    {
      icon: Shield,
      title: "Diagnóstico Digital",
      description: "Equipamentos de última geração para identificar qualquer problema.",
    },
    {
      icon: Clock,
      title: "Serviço Expresso",
      description: "Serviços rápidos sem agendamento para sua conveniência.",
    },
  ];

  const advantages = [
    "Mecânicos certificados",
    "Peças originais garantidas",
    "Orçamento sem compromisso",
    "Garantia de 12 meses",
    "Carro reserva disponível",
    "Atendimento personalizado",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 py-16 md:py-24">
        <div className="absolute inset-0">
          {heroImages.map((image, idx) => (
            <motion.img
              key={image}
              src={image}
              alt="Car"
              initial={{ scale: 1.1 }}
              animate={{ 
                opacity: idx === currentHero ? 0.3 : 0,
                scale: idx === currentHero ? 1 : 1.1 
              }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ))}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Seu Carro Merece o <span className="text-blue-400">Melhor</span> Cuidado
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Serviços automotivos de excelência com profissionais qualificados, tecnologia de ponta e preços justos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold">
                Agendar Serviço
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/5 border-blue-300/80 text-white hover:bg-blue-100/15 hover:border-blue-100 hover:text-white hover:shadow-[0_10px_35px_-12px_rgba(59,130,246,0.65)] transition-all duration-200 backdrop-blur-sm"
              >
                <Phone className="mr-2 h-5 w-5" />
                (11) 9999-9999
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-blue-600 py-4"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-white text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Seg-Sex: 8h às 18h | Sáb: 8h às 13h</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Av. Principal, 1234 - Centro</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Nossos Serviços
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Oferecemos uma gama completa de serviços para manter seu veículo sempre em perfeitas condições.
              </p>
            </div>
          </FadeInSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <FadeInSection key={service.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all bg-white h-full">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4"
                      >
                        <service.icon className="h-8 w-8 text-blue-600" />
                      </motion.div>
                      <h3 className="font-semibold text-lg text-slate-900 mb-2">{service.title}</h3>
                      <p className="text-slate-600 text-sm">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <FadeInSection>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Por Que Escolher Nossa Oficina?
                </h2>
                <p className="text-slate-600 mb-8">
                  Há mais de 20 anos no mercado, somos referência em serviços automotivos de qualidade. Nossa equipe é formada por profissionais experientes e constantemente atualizados.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {advantages.map((advantage, index) => (
                    <motion.div
                      key={advantage}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                      <span className="text-slate-700 text-sm sm:text-base">{advantage}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="relative">
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=600&h=500&fit=crop"
                  alt="Oficina"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-blue-600 text-white p-4 sm:p-6 rounded-xl shadow-xl"
                >
                  <div className="text-2xl sm:text-4xl font-bold">20+</div>
                  <div className="text-blue-100 text-sm sm:text-base">Anos de Experiência</div>
                </motion.div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <FadeInSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Agende Sua Revisão Agora
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Não espere seu carro apresentar problemas. Faça uma revisão preventiva e viaje com tranquilidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
                Agendar Online
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/70 text-white hover:bg-white/20 hover:border-white hover:text-white hover:shadow-[0_12px_40px_-18px_rgba(255,255,255,0.55)] transition-all duration-200 backdrop-blur-sm"
              >
                WhatsApp
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
