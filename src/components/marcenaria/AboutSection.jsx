import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Heart, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const values = [
    {
      icon: Award,
      title: "Qualidade Premium",
      description: "Utilizamos apenas madeiras selecionadas e acabamentos de primeira linha"
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Cada projeto é único, criado especialmente para você"
    },
    {
      icon: Heart,
      title: "Paixão pelo Ofício",
      description: "Mais de três décadas dedicadas à arte da marcenaria"
    },
    {
      icon: TrendingUp,
      title: "Inovação Constante",
      description: "Tradição aliada às técnicas mais modernas do mercado"
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider">
            Nossa História
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-900">
            Tradição e Excelência desde 1990
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            O Sr. Raimundo iniciou sua jornada na marcenaria ainda jovem, aprendendo o ofício com os mestres da região. 
            Hoje, com mais de 30 anos de experiência, continuamos a criar peças que contam histórias e transformam ambientes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-amber-50 to-white group hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}