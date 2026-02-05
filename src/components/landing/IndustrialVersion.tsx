import { useEffect, useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Factory, Cog, Shield, TrendingUp, ArrowRight } from "lucide-react";

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

const CountUp = ({ value, suffix = "" }: { value: string; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      {value}{suffix}
    </motion.span>
  );
};

export function IndustrialVersion() {
  const heroImages = [
    "https://images.unsplash.com/photo-1503389152951-9f343605f61e?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1505730841770-8c5ae89bfeaf?w=1920&h=1080&fit=crop",
  ];
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 5200);
    return () => clearInterval(id);
  }, [heroImages.length]);

  const features = [
    {
      icon: Factory,
      title: "Automação Industrial",
      description: "Soluções completas para automação de processos industriais com tecnologia de ponta.",
    },
    {
      icon: Cog,
      title: "Manutenção Preditiva",
      description: "Monitore seus equipamentos em tempo real e previna falhas antes que aconteçam.",
    },
    {
      icon: Shield,
      title: "Segurança Operacional",
      description: "Sistemas certificados que garantem a segurança de toda sua operação.",
    },
    {
      icon: TrendingUp,
      title: "Eficiência Energética",
      description: "Reduza custos com nossas soluções de otimização energética industrial.",
    },
  ];

  const stats = [
    { value: "500+", label: "Fábricas Atendidas" },
    { value: "98%", label: "Satisfação" },
    { value: "30%", label: "Redução de Custos" },
    { value: "24/7", label: "Suporte Técnico" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-24">
        <div className="absolute inset-0">
          {heroImages.map((image, idx) => (
            <motion.img
              key={image}
              src={image}
              alt="Industrial background"
              initial={{ scale: 1.1 }}
              animate={{ 
                opacity: idx === currentHero ? 0.25 : 0,
                scale: idx === currentHero ? 1 : 1.1 
              }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transforme sua <span className="text-amber-400">Indústria</span> com Tecnologia
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Soluções inovadoras para otimizar processos, reduzir custos e aumentar a produtividade da sua operação industrial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/5 border-amber-300/70 text-white hover:bg-amber-300/15 hover:border-amber-200 hover:text-white hover:shadow-[0_12px_40px_-16px_rgba(251,191,36,0.6)] transition-all duration-200 backdrop-blur-sm"
              >
                Conhecer Soluções
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-400 mb-2">
                  <CountUp value={stat.value} />
                </div>
                <div className="text-slate-400 text-xs sm:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Nossas Soluções
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Oferecemos um portfólio completo de soluções para atender todas as necessidades da sua indústria.
              </p>
            </div>
          </FadeInSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FadeInSection key={feature.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white h-full">
                    <CardContent className="p-6">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4"
                      >
                        <feature.icon className="h-6 w-6 text-amber-600" />
                      </motion.div>
                      <h3 className="font-semibold text-lg text-slate-900 mb-2">{feature.title}</h3>
                      <p className="text-slate-600 text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-amber-500 to-amber-600 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <FadeInSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Pronto para Modernizar sua Indústria?
            </h2>
            <p className="text-slate-800 mb-8 max-w-2xl mx-auto">
              Entre em contato com nossos especialistas e descubra como podemos ajudar sua empresa a alcançar novos patamares de eficiência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white">
                Falar com Especialista
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-amber-500/10 border-slate-900/80 text-slate-900 hover:bg-slate-900 hover:text-amber-200 hover:border-slate-900 hover:shadow-[0_14px_40px_-18px_rgba(15,23,42,0.45)] transition-all duration-200"
              >
                Ver Cases de Sucesso
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
