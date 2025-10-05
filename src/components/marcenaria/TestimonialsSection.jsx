import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Santos",
      role: "Cliente Residencial",
      content: "A cozinha planejada ficou simplesmente perfeita! O Sr. Raimundo entendeu exatamente o que eu queria e entregou um trabalho impecável. Super recomendo!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
    },
    {
      name: "Carlos Mendes",
      role: "Empresário",
      content: "Contratei a marcenaria para fazer os móveis do meu escritório. Qualidade excepcional, prazo cumprido e atendimento nota 10. Já indiquei para vários amigos.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
    },
    {
      name: "Ana Paula Costa",
      role: "Arquiteta",
      content: "Trabalho com o Sr. Raimundo há anos e sempre me surpreendo com a qualidade e o capricho. É um verdadeiro artesão que ama o que faz!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-900">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação de nossos clientes é nosso maior orgulho
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-amber-400 mb-4 opacity-50" />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                    ))}
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}