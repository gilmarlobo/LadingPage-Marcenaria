import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Hammer, Ruler, Wrench, ShoppingBag, Home, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "Móveis Sob Medida",
      description: "Armários, cozinhas planejadas, closets e muito mais, projetados exclusivamente para seu espaço",
      features: ["Projeto 3D gratuito", "Instalação inclusa", "Garantia de 2 anos"]
    },
    {
      icon: Ruler,
      title: "Design de Interiores",
      description: "Planejamento completo de ambientes com móveis personalizados e acabamentos refinados",
      features: ["Consultoria gratuita", "Visualização 3D", "Acompanhamento completo"]
    },
    {
      icon: Wrench,
      title: "Restauração",
      description: "Devolva a vida aos seus móveis antigos com técnicas tradicionais e modernas",
      features: ["Avaliação técnica", "Orçamento sem compromisso", "Preservação histórica"]
    },
    {
      icon: Sparkles,
      title: "Acabamentos Especiais",
      description: "Vernizes, laqueamentos e patinas que realçam a beleza natural da madeira",
      features: ["Produtos premium", "Acabamento fosco ou brilhante", "Proteção duradoura"]
    },
    {
      icon: ShoppingBag,
      title: "Móveis Corporativos",
      description: "Soluções sob medida para escritórios, comércios e espaços profissionais",
      features: ["Projetos comerciais", "Prazo garantido", "Suporte pós-venda"]
    },
    {
      icon: Hammer,
      title: "Obras Especiais",
      description: "Escadas, decks, pergolados e estruturas em madeira para áreas externas",
      features: ["Madeiras tratadas", "Design exclusivo", "Resistência garantida"]
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-900">
            Soluções Completas em Marcenaria
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Do projeto à instalação, cuidamos de cada detalhe para entregar exatamente o que você sonhou
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-14 h-14 mb-6 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all">
                     <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white transition-all"
                  >
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}